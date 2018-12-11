import {keyValue} from './storage';
import {
  KEY_API_BASE_URL,
  KEY_FAKE_PUSH_TOKEN,
  KEY_FCM_SUBSCRIPTION,
  KEY_INTERNAL_EVENTS,
  DEFAULT_NOTIFICATION_DURATION,
  MAX_NOTIFICATION_DURATION
} from './constants';
import platformChecker from './modules/PlatformChecker';

type TPushSubscription = PushSubscription | null;

export function getGlobal() {
  return Function('return this')();
}

export function getVersion() {
  return __VERSION__;
}

export function urlB64ToUint8Array(base64String: string) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

export function createUUID(pushToken: string) {
  const hexDigits = '0123456789abcdef';
  let s = '';
  for (let i = 0; i < 32; i++) {
    const l = pushToken.length - i - 1;
    let charCode = 0;
    if (l >= 0) {
      charCode = pushToken.charCodeAt(l);
    }

    s += hexDigits.substr(charCode % hexDigits.length, 1);
  }
  return s;
}

export function generateHwid(applicationCode: string, pushToken: string) {
  pushToken = getFakePushToken() || pushToken || generateFakePushToken();
  return `${applicationCode}_${createUUID(pushToken)}`;
}

export function getFakePushToken() {
  return localStorage.getItem(KEY_FAKE_PUSH_TOKEN);
}

export function generateFakePushToken() {
  const token = generateToken();
  localStorage.setItem(KEY_FAKE_PUSH_TOKEN, token);
  return token;
}

function generateToken(len?: number) {
  len = len || 32;
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

export function getPushToken(pushSubscription: TPushSubscription) {
  if (!pushSubscription) {
    return '';
  }

  if (pushSubscription.subscriptionId) {
    return pushSubscription.subscriptionId;
  }

  if (<TPlatformFirefox>platformChecker.platform === 12) {
    return pushSubscription.endpoint;
  }

  return pushSubscription.endpoint.split('/').pop() || '';
}

export function getFcmKey(pushSubscription: TPushSubscription, key: string): Promise<string> {
  if (!pushSubscription) {
    return Promise.resolve('');
  }

  return new Promise((resolve => {
    keyValue.get(KEY_FCM_SUBSCRIPTION)
      .then((fcmSubscription: any) => {
        resolve(fcmSubscription && fcmSubscription[key] || '')
      })
      .catch(() => {
        resolve('');
      });
  }))
}

function getSubsKey(pushSubscription: TPushSubscription, key: PushEncryptionKeyName): string {
  const rawKey = pushSubscription && pushSubscription.getKey && pushSubscription.getKey(key);
  return rawKey ? btoa(String.fromCharCode.apply(String, new Uint8Array(rawKey))) : '';
}

export function getAuthToken(pushSubscription: TPushSubscription) {
  return getSubsKey(pushSubscription, 'auth');
}

export function getPublicKey(pushSubscription: TPushSubscription) {
  return getSubsKey(pushSubscription, 'p256dh');
}

export function getPushwooshUrl(applicationCode: string, pushwooshApiUrl?: string) {
  let subDomain = 'cp';
  if (!platformChecker.isSafari && applicationCode && !~applicationCode.indexOf('.')) {
    subDomain = `${applicationCode}.api`;
  }
  const url = `https://${pushwooshApiUrl || __API_URL__ || subDomain + '.pushwoosh.com'}/json/1.3/`;

  return new Promise<any>(resolve => {
    keyValue.get(KEY_API_BASE_URL)
      .then((base_url = null) => {
        resolve(base_url || url);
      })
      .catch(() => {
        resolve(url);
      });
  });
}

export function patchConsole() {
  let method;
  const noop = function() {};
  const methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeStamp', 'trace', 'warn'
  ];
  let len = methods.length;
  const global = getGlobal();
  const console = (global.console = global.console || {});

  while (len--) {
    method = methods[len];
    if (!console[method]) {
      console[method] = noop;
    }
  }
}

export function patchPromise() {
  if (!platformChecker.isAvailablePromise && platformChecker.isAvailableNotifications) {
    (window as any).Promise = () => ({
      then: () => {},
      catch: () => {}
    });
  }
}

export function clearLocationHash() {
  const global = getGlobal();
  if ('history' in global && history.pushState) {
    history.pushState(null, '', '#');
  }
  else {
    location.hash = '#';
  }
}

export function prepareDuration(duration: any) {
  if (isNaN(duration)) {
    return DEFAULT_NOTIFICATION_DURATION;
  }
  duration = Math.round(duration);
  return Math.min(MAX_NOTIFICATION_DURATION, duration < 0 ? DEFAULT_NOTIFICATION_DURATION : duration);
}

export function validateParams(params: any) {
  const {...result} = params;
  if (result.userId && (result.userId === 'user_id' || !!result.userId)) {
    delete result.userId;
  }
  return result;
}

export function sendInternalPostEvent(params: any) {
  keyValue.get(KEY_INTERNAL_EVENTS)
    .then((events: {[key: string]: number} = {}) => {
      if (Object.keys(events).length === 0) {
        keyValue.set(KEY_INTERNAL_EVENTS, {});
      }

      const currentDate = new Date().setHours(0, 0, 0, 0);
      const dateFromStore = events[params.event];

      if (!dateFromStore || currentDate > dateFromStore) {
        keyValue.extend(KEY_INTERNAL_EVENTS, {
          [params.event]: currentDate
        });

        const xhr = new XMLHttpRequest();
        const url = 'https://cp.pushwoosh.com/json/1.3/postEvent';
        const request = {
          application: 'DD275-06947',
          ...params
        };

        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8');
        xhr.send(JSON.stringify({request}));
      }
    });
}
