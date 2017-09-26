/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	};
	var __generator = (this && this.__generator) || function (thisArg, body) {
	    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
	    return { next: verb(0), "throw": verb(1), "return": verb(2) };
	    function verb(n) { return function (v) { return step([n, v]); }; }
	    function step(op) {
	        if (f) throw new TypeError("Generator is already executing.");
	        while (_) try {
	            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
	            if (y = 0, t) op = [0, t.value];
	            switch (op[0]) {
	                case 0: case 1: t = op; break;
	                case 4: _.label++; return { value: op[1], done: false };
	                case 5: _.label++; y = op[1]; op = [0]; continue;
	                case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                default:
	                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                    if (t[2]) _.ops.pop();
	                    _.trys.pop(); continue;
	            }
	            op = body.call(thisArg, _);
	        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	    }
	};
	var storage_1 = __webpack_require__(3);
	var constants_1 = __webpack_require__(2);
	var functions_1 = __webpack_require__(1);
	var logger_1 = __webpack_require__(5);
	var global_1 = __webpack_require__(12);
	var notification_1 = __webpack_require__(13);
	var Pushwoosh_1 = __webpack_require__(4);
	var Pushwoosh = self.Pushwoosh = new global_1.default();
	function broadcastClients(msg) {
	    return __awaiter(this, void 0, void 0, function () {
	        var clients;
	        return __generator(this, function (_a) {
	            switch (_a.label) {
	                case 0: return [4 /*yield*/, self.clients.matchAll()];
	                case 1:
	                    clients = _a.sent();
	                    clients.forEach(function (client) { return client.postMessage(msg); });
	                    return [2 /*return*/];
	            }
	        });
	    });
	}
	function parseCustomData(customData) {
	    return __awaiter(this, void 0, void 0, function () {
	        var e_1;
	        return __generator(this, function (_a) {
	            switch (_a.label) {
	                case 0:
	                    if (!customData) return [3 /*break*/, 4];
	                    _a.label = 1;
	                case 1:
	                    _a.trys.push([1, 2, , 4]);
	                    return [2 /*return*/, JSON.parse(customData)];
	                case 2:
	                    e_1 = _a.sent();
	                    return [4 /*yield*/, logger_1.default.write('error', e_1, 'Error occurred during parsing custom data')];
	                case 3:
	                    _a.sent();
	                    return [3 /*break*/, 4];
	                case 4: return [2 /*return*/, customData];
	            }
	        });
	    });
	}
	function getNotificationData(event) {
	    return __awaiter(this, void 0, void 0, function () {
	        var initParams, payload, messageHash, buttons, image, duration, customData;
	        return __generator(this, function (_a) {
	            switch (_a.label) {
	                case 0: return [4 /*yield*/, storage_1.keyValue.get(constants_1.keyInitParams)];
	                case 1:
	                    initParams = _a.sent();
	                    logger_1.default.setLevel(initParams.logLevel);
	                    return [4 /*yield*/, event.data.json()];
	                case 2:
	                    payload = _a.sent();
	                    return [4 /*yield*/, logger_1.default.write('info', payload, 'onPush')];
	                case 3:
	                    _a.sent();
	                    messageHash = payload.p || '';
	                    buttons = payload.buttons || [];
	                    image = payload.image || '';
	                    duration = functions_1.prepareDuration(payload.duration);
	                    return [4 /*yield*/, parseCustomData(payload.u)];
	                case 4:
	                    customData = _a.sent();
	                    return [2 /*return*/, {
	                            messageHash: messageHash,
	                            payload: payload,
	                            notificationPayload: {
	                                title: payload.header || initParams.defaultNotificationTitle || constants_1.defaultNotificationTitle,
	                                body: payload.body,
	                                icon: payload.i || initParams.defaultNotificationImage || constants_1.defaultNotificationImage,
	                                openUrl: payload.l || constants_1.defaultNotificationUrl,
	                                messageHash: messageHash,
	                                customData: customData,
	                                duration: duration,
	                                buttons: buttons,
	                                image: image
	                            }
	                        }];
	            }
	        });
	    });
	}
	function onPush(event) {
	    return __awaiter(this, void 0, void 0, function () {
	        var _a, messageHash_1, payload, notificationPayload, notification_2, callbacks, e_2;
	        return __generator(this, function (_b) {
	            switch (_b.label) {
	                case 0:
	                    _b.trys.push([0, 4, , 6]);
	                    return [4 /*yield*/, getNotificationData(event)];
	                case 1:
	                    _a = _b.sent(), messageHash_1 = _a.messageHash, payload = _a.payload, notificationPayload = _a.notificationPayload;
	                    notification_2 = new notification_1.default(notificationPayload);
	                    callbacks = Pushwoosh.getListeners('onPush');
	                    return [4 /*yield*/, callbacks.reduce(function (pr, fun) { return pr.then(function () { return fun(notification_2); }); }, Promise.resolve())];
	                case 2:
	                    _b.sent();
	                    return [4 /*yield*/, Promise.all([
	                            notification_2.show(),
	                            messageHash_1 && Pushwoosh.initApi().then(function () { return Pushwoosh.api.messageDeliveryEvent(messageHash_1); }),
	                            storage_1.message.add(__assign({}, notification_2._forLog(), { payload: payload })),
	                            broadcastClients({ type: Pushwoosh_1.eventOnPushDelivery, payload: notificationPayload })
	                        ])];
	                case 3:
	                    _b.sent();
	                    return [3 /*break*/, 6];
	                case 4:
	                    e_2 = _b.sent();
	                    return [4 /*yield*/, storage_1.message.add({
	                            error: "" + e_2,
	                            stack: e_2.stack,
	                            payload: event.data.text()
	                        })];
	                case 5:
	                    _b.sent();
	                    return [3 /*break*/, 6];
	                case 6: return [2 /*return*/];
	            }
	        });
	    });
	}
	var clickedNotifications = [];
	function onClick(event) {
	    return __awaiter(this, void 0, void 0, function () {
	        var data, tag, url, button;
	        return __generator(this, function (_a) {
	            switch (_a.label) {
	                case 0:
	                    data = event.notification.data;
	                    tag = JSON.parse(event.notification.tag);
	                    clickedNotifications.push(data.code);
	                    event.notification.close();
	                    url = '';
	                    if (event.action && Array.isArray(data.buttons)) {
	                        button = data.buttons.find(function (button) { return button.action === event.action; }) || {};
	                        url = button.url;
	                    }
	                    else {
	                        url = tag.url;
	                    }
	                    if (!url) return [3 /*break*/, 2];
	                    return [4 /*yield*/, self.clients.openWindow(url)];
	                case 1:
	                    _a.sent();
	                    _a.label = 2;
	                case 2: return [4 /*yield*/, Promise.all([
	                        Pushwoosh.initApi().then(function () { return Pushwoosh.api.pushStat(tag.messageHash); }),
	                        storage_1.keyValue.set(constants_1.keyLastOpenMessage, {
	                            url: url,
	                            messageHash: tag.messageHash,
	                            expiry: Date.now() + constants_1.periodGoalEvent
	                        }),
	                        broadcastClients({ type: Pushwoosh_1.eventOnNotificationClick, payload: __assign({}, tag, { url: url }) })
	                    ])];
	                case 3:
	                    _a.sent();
	                    return [2 /*return*/];
	            }
	        });
	    });
	}
	self.addEventListener('install', function (event) {
	    event.waitUntil(Promise.all([
	        storage_1.keyValue.set(constants_1.keyWorkerVersion, functions_1.getVersion()),
	        logger_1.default.write('info', 'install')
	    ]).then(function () { return self.skipWaiting(); }));
	});
	self.addEventListener('activate', function (event) {
	    console.info('activate', event);
	    event.waitUntil(Promise.all([
	        logger_1.default.write('info', 'activate')
	    ]).then(function () { return self.clients.claim(); }));
	});
	self.addEventListener('push', function (event) {
	    event.waitUntil(onPush(event).catch(function (e) { return console.log(e); }));
	});
	self.addEventListener('notificationclick', function (event) {
	    event.waitUntil(onClick(event).catch(function (e) { return console.log(e); }));
	});
	self.addEventListener('notificationclose', function (event) {
	    var code = event.notification.data && event.notification.data.code;
	    var tag = JSON.parse(event.notification.tag);
	    event.notification.close();
	    var index = clickedNotifications.indexOf(code);
	    if (index >= 0) {
	        clickedNotifications.splice(index, 1);
	    }
	    else {
	        broadcastClients({ type: Pushwoosh_1.eventOnNotificationClose, payload: tag }).catch(function (e) { return console.log(e); });
	    }
	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var storage_1 = __webpack_require__(3);
	var constants_1 = __webpack_require__(2);
	function getGlobal() {
	    return Function('return this')();
	}
	exports.getGlobal = getGlobal;
	function getVersion() {
	    return ("3.0.8");
	}
	exports.getVersion = getVersion;
	function isSafariBrowser() {
	    var global = getGlobal();
	    return !!global.safari && navigator.userAgent.indexOf('Safari') > -1;
	}
	exports.isSafariBrowser = isSafariBrowser;
	function canUseServiceWorkers() {
	    return navigator.serviceWorker && ('PushManager' in window);
	}
	exports.canUseServiceWorkers = canUseServiceWorkers;
	function getBrowserType() {
	    if (isSafariBrowser()) {
	        return 10;
	    }
	    return ~navigator.userAgent.toLowerCase().indexOf('firefox') ? 12 : 11;
	}
	exports.getBrowserType = getBrowserType;
	function getBrowserVersion() {
	    var userAgent = navigator.userAgent;
	    var match = userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
	    var version = null;
	    if (/trident/i.test(match[1])) {
	        version = /\brv[ :]+(\d+)/g.exec(userAgent) || [];
	        return "IE " + (version[1] || '');
	    }
	    if (match[1] === 'Chrome') {
	        version = userAgent.match(/\bOPR\/(\d+)/);
	        if (version !== null) {
	            return "Opera " + version[1];
	        }
	    }
	    match = match[2] ? [match[1], match[2]] : [navigator.appName, navigator.appVersion, '-?'];
	    version = userAgent.match(/version\/([.\d]+)/i);
	    if (version !== null) {
	        match.splice(1, 1, version[1]);
	    }
	    return match.join(' ');
	}
	exports.getBrowserVersion = getBrowserVersion;
	function urlB64ToUint8Array(base64String) {
	    var padding = '='.repeat((4 - base64String.length % 4) % 4);
	    var base64 = (base64String + padding)
	        .replace(/-/g, '+')
	        .replace(/_/g, '/');
	    var rawData = window.atob(base64);
	    var outputArray = new Uint8Array(rawData.length);
	    for (var i = 0; i < rawData.length; ++i) {
	        outputArray[i] = rawData.charCodeAt(i);
	    }
	    return outputArray;
	}
	exports.urlB64ToUint8Array = urlB64ToUint8Array;
	function getDeviceName() {
	    var userAgent = navigator.userAgent;
	    if (userAgent.match(/Android/i)
	        || userAgent.match(/webOS/i)
	        || userAgent.match(/iPhone/i)
	        || userAgent.match(/iPad/i)
	        || userAgent.match(/iPod/i)
	        || userAgent.match(/BlackBerry/i)
	        || userAgent.match(/Windows Phone/i)) {
	        return 'Phone';
	    }
	    return 'PC';
	}
	exports.getDeviceName = getDeviceName;
	function createUUID(pushToken) {
	    var hexDigits = '0123456789abcdef';
	    var s = '';
	    for (var i = 0; i < 32; i++) {
	        var l = pushToken.length - i - 1;
	        var charCode = 0;
	        if (l >= 0) {
	            charCode = pushToken.charCodeAt(l);
	        }
	        s += hexDigits.substr(charCode % hexDigits.length, 1);
	    }
	    return s;
	}
	exports.createUUID = createUUID;
	function generateHwid(applicationCode, pushToken) {
	    pushToken = getFakePushToken() || pushToken || generateFakePushToken();
	    return applicationCode + "_" + createUUID(pushToken);
	}
	exports.generateHwid = generateHwid;
	function getFakePushToken() {
	    return localStorage.getItem(constants_1.keyFakePushToken);
	}
	exports.getFakePushToken = getFakePushToken;
	function generateFakePushToken() {
	    var token = generateToken();
	    localStorage.setItem(constants_1.keyFakePushToken, token);
	    return token;
	}
	exports.generateFakePushToken = generateFakePushToken;
	function generateToken(len) {
	    len = len || 32;
	    var text = '';
	    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	    for (var i = 0; i < len; i++) {
	        text += possible.charAt(Math.floor(Math.random() * possible.length));
	    }
	    return text;
	}
	function getPushToken(pushSubscription) {
	    if (!pushSubscription) {
	        return '';
	    }
	    if (pushSubscription.subscriptionId) {
	        return pushSubscription.subscriptionId;
	    }
	    if (getBrowserType() === 12) {
	        return pushSubscription.endpoint;
	    }
	    return pushSubscription.endpoint.split('/').pop();
	}
	exports.getPushToken = getPushToken;
	function getSubsKey(pushSubscription, key) {
	    var rawKey = pushSubscription && pushSubscription.getKey && pushSubscription.getKey(key);
	    return rawKey ? btoa(String.fromCharCode.apply(String, new Uint8Array(rawKey))) : '';
	}
	function getAuthToken(pushSubscription) {
	    return getSubsKey(pushSubscription, 'auth');
	}
	exports.getAuthToken = getAuthToken;
	function getPublicKey(pushSubscription) {
	    return getSubsKey(pushSubscription, 'p256dh');
	}
	exports.getPublicKey = getPublicKey;
	function getPushwooshUrl(applicationCode, ignoreBaseUrl, pushwooshApiUrl) {
	    var subDomain = 'cp';
	    if (!isSafariBrowser() && applicationCode && !~applicationCode.indexOf('.')) {
	        subDomain = applicationCode + ".api";
	    }
	    var url = "https://" + (pushwooshApiUrl || ("") || subDomain + '.pushwoosh.com') + "/json/1.3/";
	    return new Promise(function (resolve) {
	        if (ignoreBaseUrl) {
	            resolve(url);
	        }
	        storage_1.keyValue.get(constants_1.keyApiBaseUrl)
	            .then(function (base_url) {
	            if (base_url === void 0) { base_url = null; }
	            resolve(base_url || url);
	        })
	            .catch(function () {
	            resolve(url);
	        });
	    });
	}
	exports.getPushwooshUrl = getPushwooshUrl;
	function patchConsole() {
	    var method;
	    var noop = function () { };
	    var methods = [
	        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
	        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
	        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
	        'timeStamp', 'trace', 'warn'
	    ];
	    var len = methods.length;
	    var global = getGlobal();
	    var console = (global.console = global.console || {});
	    while (len--) {
	        method = methods[len];
	        if (!console[method]) {
	            console[method] = noop;
	        }
	    }
	}
	exports.patchConsole = patchConsole;
	function patchPromise() {
	    var global = getGlobal();
	    if (!('Promise' in global)) {
	        global.Promise = function () { return ({
	            then: function () { },
	            catch: function () { }
	        }); };
	    }
	}
	exports.patchPromise = patchPromise;
	function clearLocationHash() {
	    var global = getGlobal();
	    if ('history' in global && history.pushState) {
	        history.pushState(null, '', '#');
	    }
	    else {
	        location.hash = '#';
	    }
	}
	exports.clearLocationHash = clearLocationHash;
	function prepareDuration(duration) {
	    if (isNaN(duration)) {
	        return 20;
	    }
	    duration = Math.round(duration);
	    return Math.min(60, duration < 0 ? 20 : duration);
	}
	exports.prepareDuration = prepareDuration;


/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	exports.defaultServiceWorkerUrl = 'pushwoosh-service-worker.js';
	exports.periodSendAppOpen = 3600000;
	exports.periodGoalEvent = 86400000;
	exports.defaultNotificationTitle = 'Pushwoosh notification';
	exports.defaultNotificationImage = 'https://cp.pushwoosh.com/img/logo-medium.png';
	exports.defaultNotificationUrl = '/';
	exports.keyApiParams = 'API_PARAMS';
	exports.keyInitParams = 'INIT_PARAMS';
	exports.keySDKVersion = 'SDK_VERSION';
	exports.keyWorkerVersion = 'WORKER_VERSION';
	exports.keyLastSentAppOpen = 'LAST_SENT_APP_OPEN';
	exports.keyLastOpenMessage = 'LAST_OPEN_MESSAGE';
	exports.keyApiBaseUrl = 'API_BASE_URL';
	exports.keyFakePushToken = 'fakePushToken';
	exports.keyDeviceRegistrationStatus = 'deviceRegistrationStatus';
	exports.keySafariPreviousPermission = 'safariPreviousPermission';


/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var objectStoreKeyValueName = 'keyValue';
	var objectStoreLogName = 'logs';
	var objectStoreMessagesName = 'messages';
	function onversionchange(event) {
	    console.info('onversionchange', event);
	}
	var databasePromise;
	function getInstance() {
	    if (!databasePromise) {
	        databasePromise = new Promise(function (resolve, reject) {
	            var request = indexedDB.open('PUSHWOOSH_SDK_STORE', 6);
	            request.onsuccess = function (event) {
	                var database = event.target.result;
	                database.onversionchange = onversionchange;
	                resolve(database);
	            };
	            request.onerror = function () { return reject(request.error); };
	            request.onupgradeneeded = function (event) {
	                var database = event.target.result;
	                database.onversionchange = onversionchange;
	                if (!database.objectStoreNames.contains(objectStoreKeyValueName)) {
	                    database.createObjectStore(objectStoreKeyValueName, { keyPath: 'key' });
	                }
	                var autoIncrementId = { keyPath: 'id', autoIncrement: true };
	                var uniqueFalse = { unique: false };
	                if (!database.objectStoreNames.contains(objectStoreLogName)) {
	                    var logStore = database.createObjectStore(objectStoreLogName, autoIncrementId);
	                    logStore.createIndex('environment', 'environment', uniqueFalse);
	                    logStore.createIndex('date', 'date', uniqueFalse);
	                    logStore.createIndex('type', 'type', uniqueFalse);
	                }
	                if (!database.objectStoreNames.contains(objectStoreMessagesName)) {
	                    var messagesStore = database.createObjectStore(objectStoreMessagesName, autoIncrementId);
	                    messagesStore.createIndex('date', 'date', uniqueFalse);
	                }
	            };
	        });
	    }
	    return databasePromise;
	}
	function getInstanceWithPromise(executor) {
	    return getInstance().then(function (database) { return (new Promise(function (resolve, reject) { return executor(database, resolve, reject); })); });
	}
	function createKeyValue(name) {
	    return {
	        get: function (key) {
	            return getInstanceWithPromise(function (database, resolve, reject) {
	                var request = database.transaction(name).objectStore(name).get(key);
	                request.onsuccess = function () {
	                    var result = request.result;
	                    resolve(result && result.value);
	                };
	                request.onerror = function () {
	                    reject(request.error);
	                };
	            });
	        },
	        getAll: function () {
	            return getInstanceWithPromise(function (database, resolve, reject) {
	                var result = {};
	                var cursor = database.transaction(name).objectStore(name).openCursor();
	                cursor.onsuccess = function (event) {
	                    var cursorResult = event.target.result;
	                    if (cursorResult) {
	                        result[cursorResult.key] = cursorResult.value.value;
	                        cursorResult.continue();
	                    }
	                    else {
	                        resolve(result);
	                    }
	                };
	                cursor.onerror = function () {
	                    reject(cursor.error);
	                };
	            });
	        },
	        set: function (key, value) {
	            return getInstanceWithPromise(function (database, resolve, reject) {
	                var request = database.transaction([name], 'readwrite').objectStore(name).put({ key: key, value: value });
	                request.onsuccess = function () {
	                    resolve(key);
	                };
	                request.onerror = function () {
	                    reject(request.error);
	                };
	            });
	        }
	    };
	}
	var LogBase = (function () {
	    function LogBase() {
	    }
	    LogBase.prototype._add = function (obj) {
	        var _this = this;
	        return getInstanceWithPromise(function (database, resolve, reject) {
	            var request = database.transaction([_this.name], 'readwrite').objectStore(_this.name).add(obj);
	            request.onsuccess = function () {
	                resolve(obj);
	            };
	            request.onerror = function () {
	                reject(request.error);
	            };
	        }).then(function (obj) {
	            return _this.getAll().then(function (items) {
	                if (Array.isArray(items)) {
	                    var ids = items.map(function (i) { return i.id; }).sort(function (a, b) {
	                        if (a == b)
	                            return 0;
	                        return a < b ? 1 : -1;
	                    });
	                    if (ids.length > _this.maxItems) {
	                        return Promise.all(ids.slice(_this.maxItems).map(function (id) { return _this.delete(id); })).then(function () { return obj; });
	                    }
	                }
	                return obj;
	            });
	        });
	    };
	    LogBase.prototype.delete = function (key) {
	        var _this = this;
	        return getInstanceWithPromise(function (database, resolve, reject) {
	            var request = database.transaction([_this.name], 'readwrite').objectStore(_this.name).delete(key);
	            request.onsuccess = function () {
	                resolve(request.result);
	            };
	            request.onerror = function () {
	                reject(request.error);
	            };
	        });
	    };
	    LogBase.prototype.getAll = function () {
	        var _this = this;
	        return getInstanceWithPromise(function (database, resolve, reject) {
	            var result = [];
	            var cursor = database.transaction(_this.name).objectStore(_this.name).openCursor();
	            cursor.onsuccess = function (ev) {
	                var cursorResult = ev.target.result;
	                if (cursorResult) {
	                    result.push(cursorResult.value);
	                    cursorResult.continue();
	                }
	                else {
	                    resolve(result);
	                }
	            };
	            cursor.onerror = function () {
	                reject(cursor.error);
	            };
	        });
	    };
	    return LogBase;
	}());
	exports.LogBase = LogBase;
	var LogLog = (function (_super) {
	    __extends(LogLog, _super);
	    function LogLog() {
	        var _this = _super !== null && _super.apply(this, arguments) || this;
	        _this.name = objectStoreLogName;
	        _this.maxItems = 100;
	        _this.environment = (typeof self !== 'undefined' && self.registration) ? 'worker' : 'browser';
	        return _this;
	    }
	    LogLog.prototype.add = function (type, message, additional) {
	        var obj = {
	            type: type,
	            environment: this.environment,
	            message: "" + message,
	            date: new Date
	        };
	        if (message instanceof Error) {
	            obj.stack = message.stack;
	        }
	        if (additional) {
	            obj.additional = additional;
	        }
	        return this._add(obj);
	    };
	    return LogLog;
	}(LogBase));
	exports.LogLog = LogLog;
	var LogMessage = (function (_super) {
	    __extends(LogMessage, _super);
	    function LogMessage() {
	        var _this = _super !== null && _super.apply(this, arguments) || this;
	        _this.name = objectStoreMessagesName;
	        _this.maxItems = 25;
	        return _this;
	    }
	    LogMessage.prototype.add = function (log) {
	        return this._add(__assign({}, log, { date: new Date }));
	    };
	    return LogMessage;
	}(LogBase));
	exports.LogMessage = LogMessage;
	exports.keyValue = createKeyValue(objectStoreKeyValueName);
	exports.log = new LogLog();
	exports.message = new LogMessage();


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	};
	var __generator = (this && this.__generator) || function (thisArg, body) {
	    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
	    return { next: verb(0), "throw": verb(1), "return": verb(2) };
	    function verb(n) { return function (v) { return step([n, v]); }; }
	    function step(op) {
	        if (f) throw new TypeError("Generator is already executing.");
	        while (_) try {
	            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
	            if (y = 0, t) op = [0, t.value];
	            switch (op[0]) {
	                case 0: case 1: t = op; break;
	                case 4: _.label++; return { value: op[1], done: false };
	                case 5: _.label++; y = op[1]; op = [0]; continue;
	                case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                default:
	                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                    if (t[2]) _.ops.pop();
	                    _.trys.pop(); continue;
	            }
	            op = body.call(thisArg, _);
	        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	    }
	};
	var EventEmitter_1 = __webpack_require__(7);
	var API_1 = __webpack_require__(6);
	var functions_1 = __webpack_require__(1);
	var constants_1 = __webpack_require__(2);
	var logger_1 = __webpack_require__(5);
	var worker_1 = __webpack_require__(10);
	var safari_1 = __webpack_require__(9);
	var createDoApiXHR_1 = __webpack_require__(8);
	var storage_1 = __webpack_require__(3);
	exports.eventOnReady = 'onReady';
	exports.eventOnSubscribe = 'onSubscribe';
	exports.eventOnUnsubscribe = 'onUnsubscribe';
	exports.eventOnRegister = 'onRegister';
	exports.eventOnPermissionPrompt = 'onPermissionPrompt';
	exports.eventOnPermissionDenied = 'onPermissionDenied';
	exports.eventOnPermissionGranted = 'onPermissionGranted';
	exports.eventOnSWInitError = 'onSWInitError';
	exports.eventOnPushDelivery = 'onPushDelivery';
	exports.eventOnNotificationClick = 'onNotificationClick';
	exports.eventOnNotificationClose = 'onNotificationClose';
	functions_1.patchPromise();
	var Pushwoosh = (function () {
	    function Pushwoosh() {
	        var _this = this;
	        this._ee = new EventEmitter_1.default();
	        this.isSafari = functions_1.isSafariBrowser();
	        this.ready = false;
	        this.debug = {
	            showLog: function () {
	                return __awaiter(this, void 0, void 0, function () {
	                    var items;
	                    return __generator(this, function (_a) {
	                        switch (_a.label) {
	                            case 0: return [4 /*yield*/, storage_1.log.getAll()];
	                            case 1:
	                                items = _a.sent();
	                                console.log(items);
	                                return [2 /*return*/];
	                        }
	                    });
	                });
	            },
	            showKeyValues: function () {
	                return __awaiter(this, void 0, void 0, function () {
	                    var items;
	                    return __generator(this, function (_a) {
	                        switch (_a.label) {
	                            case 0: return [4 /*yield*/, storage_1.keyValue.getAll()];
	                            case 1:
	                                items = _a.sent();
	                                console.log(items);
	                                return [2 /*return*/];
	                        }
	                    });
	                });
	            },
	            showMessages: function () {
	                return __awaiter(this, void 0, void 0, function () {
	                    var items;
	                    return __generator(this, function (_a) {
	                        switch (_a.label) {
	                            case 0: return [4 /*yield*/, storage_1.message.getAll()];
	                            case 1:
	                                items = _a.sent();
	                                items.forEach(function (i) { return console.log(i); });
	                                return [2 /*return*/];
	                        }
	                    });
	                });
	            }
	        };
	        this._onPromises = (_a = {},
	            _a[exports.eventOnPermissionDenied] = new Promise(function (resolve) { return _this._ee.once(exports.eventOnPermissionDenied, resolve); }),
	            _a[exports.eventOnPermissionPrompt] = new Promise(function (resolve) { return _this._ee.once(exports.eventOnPermissionPrompt, resolve); }),
	            _a[exports.eventOnPermissionGranted] = new Promise(function (resolve) { return _this._ee.once(exports.eventOnPermissionGranted, resolve); }),
	            _a);
	        var _a;
	    }
	    Pushwoosh.prototype.onReadyHandler = function (cmd) {
	        var _this = this;
	        if (this.ready) {
	            cmd(this.api);
	        }
	        else {
	            this._ee.on(exports.eventOnReady, function (params) { return cmd(_this.api, params); });
	        }
	    };
	    Pushwoosh.prototype.push = function (cmd) {
	        var _this = this;
	        if (typeof cmd === 'function') {
	            this.onReadyHandler(cmd);
	        }
	        else if (Array.isArray(cmd)) {
	            var cmdName = cmd[0], cmdFunc_1 = cmd[1];
	            switch (cmdName) {
	                case 'init':
	                    if (this.shouldInit()) {
	                        this.init(cmdFunc_1)
	                            .catch(function (e) { return logger_1.default.info('Pushwoosh init failed', e); });
	                    }
	                    break;
	                case exports.eventOnReady:
	                    this.onReadyHandler(cmdFunc_1);
	                    break;
	                case exports.eventOnRegister:
	                case exports.eventOnSubscribe:
	                case exports.eventOnUnsubscribe:
	                case exports.eventOnSWInitError:
	                case exports.eventOnPushDelivery:
	                case exports.eventOnNotificationClick:
	                case exports.eventOnNotificationClose:
	                    this._ee.on(cmdName, function (params) { return cmdFunc_1(_this.api, params); });
	                    break;
	                case exports.eventOnPermissionDenied:
	                case exports.eventOnPermissionPrompt:
	                case exports.eventOnPermissionGranted:
	                    this._onPromises[cmdName].then(function () { return cmdFunc_1(_this.api); });
	                    break;
	                default:
	                    throw new Error('unknown command');
	            }
	        }
	        else {
	            throw new Error('invalid command');
	        }
	    };
	    Pushwoosh.prototype.shouldInit = function () {
	        if (!((this.isSafari && functions_1.getDeviceName() === 'PC') || functions_1.canUseServiceWorkers())) {
	            logger_1.default.info('This browser does not support pushes');
	            return false;
	        }
	        return true;
	    };
	    Pushwoosh.prototype.init = function (initParams) {
	        return __awaiter(this, void 0, void 0, function () {
	            var _this = this;
	            var scope, applicationCode, _a, logLevel, pushwooshApiUrl, pushwooshUrl, params, worker, error_1, err_1;
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0:
	                        this._initParams = initParams;
	                        scope = initParams.scope, applicationCode = initParams.applicationCode, _a = initParams.logLevel, logLevel = _a === void 0 ? 'error' : _a, pushwooshApiUrl = initParams.pushwooshApiUrl;
	                        if (!applicationCode) {
	                            throw new Error('no application code');
	                        }
	                        return [4 /*yield*/, functions_1.getPushwooshUrl(applicationCode, false, pushwooshApiUrl)];
	                    case 1:
	                        pushwooshUrl = _b.sent();
	                        params = this.params = __assign({ autoSubscribe: true, pushwooshUrl: pushwooshUrl }, initParams, { deviceType: functions_1.getBrowserType(), tags: __assign({ Language: navigator.language || 'en' }, initParams.tags, { 'Device Model': functions_1.getBrowserVersion() }), driversSettings: {
	                                worker: __assign({ serviceWorkerUrl: constants_1.defaultServiceWorkerUrl }, (initParams.driversSettings && initParams.driversSettings.worker))
	                            } });
	                        logger_1.default.setLevel(logLevel);
	                        if (!functions_1.canUseServiceWorkers()) return [3 /*break*/, 7];
	                        worker = params.driversSettings.worker;
	                        this.driver = new worker_1.default({
	                            eventEmitter: this._ee,
	                            scope: scope,
	                            applicationCode: applicationCode,
	                            serviceWorkerUrl: worker.serviceWorkerUrl,
	                            applicationServerPublicKey: worker.applicationServerPublicKey,
	                        });
	                        _b.label = 2;
	                    case 2:
	                        _b.trys.push([2, 5, , 6]);
	                        if (!(this.driver && this.driver.initWorker)) return [3 /*break*/, 4];
	                        return [4 /*yield*/, this.driver.initWorker()];
	                    case 3:
	                        _b.sent();
	                        _b.label = 4;
	                    case 4: return [3 /*break*/, 6];
	                    case 5:
	                        error_1 = _b.sent();
	                        logger_1.default.write('error', error_1, 'driver initialization failed');
	                        return [3 /*break*/, 6];
	                    case 6: return [3 /*break*/, 8];
	                    case 7:
	                        if (this.isSafari && params.safariWebsitePushID) {
	                            this.driver = new safari_1.default({
	                                eventEmitter: this._ee,
	                                applicationCode: applicationCode,
	                                pushwooshUrl: params.pushwooshUrl,
	                                pushwooshApiUrl: params.pushwooshApiUrl,
	                                webSitePushID: params.safariWebsitePushID,
	                            });
	                            this._ee.on(exports.eventOnReady, function () {
	                                var hashReg = /#P(.*)/;
	                                var hash = decodeURIComponent(document.location.hash);
	                                if (hashReg.test(hash)) {
	                                    _this.api
	                                        .pushStat(hashReg.exec(hash)[1])
	                                        .then(functions_1.clearLocationHash);
	                                }
	                            });
	                        }
	                        else {
	                            throw new Error('can\'t initialize safari');
	                        }
	                        _b.label = 8;
	                    case 8:
	                        _b.trys.push([8, 10, , 11]);
	                        return [4 /*yield*/, this.defaultProcess()];
	                    case 9:
	                        _b.sent();
	                        if ('serviceWorker' in navigator) {
	                            navigator.serviceWorker.onmessage = this.onServiceWorkerMessage.bind(this);
	                        }
	                        return [3 /*break*/, 11];
	                    case 10:
	                        err_1 = _b.sent();
	                        logger_1.default.write('error', err_1, 'defaultProcess fail');
	                        return [3 /*break*/, 11];
	                    case 11: return [2 /*return*/];
	                }
	            });
	        });
	    };
	    Pushwoosh.prototype.onServiceWorkerMessage = function (e) {
	        var _a = (e || {}).data, data = _a === void 0 ? {} : _a;
	        var _b = data || {}, _c = _b.type, type = _c === void 0 ? '' : _c, _d = _b.payload, payload = _d === void 0 ? {} : _d;
	        this._ee.emit(type, payload);
	    };
	    Pushwoosh.prototype.initApi = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            var driverApiParams, lastOpenMessage, params, apiParams, func;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4 /*yield*/, this.driver.getAPIParams()];
	                    case 1:
	                        driverApiParams = _a.sent();
	                        return [4 /*yield*/, storage_1.keyValue.get(constants_1.keyLastOpenMessage)];
	                    case 2:
	                        lastOpenMessage = (_a.sent()) || {};
	                        params = this.params;
	                        apiParams = __assign({}, driverApiParams, { deviceType: params.deviceType, deviceModel: params.tags['Device Model'], applicationCode: params.applicationCode, language: params.tags.Language, pushwooshApiUrl: params.pushwooshApiUrl });
	                        if (params.userId) {
	                            apiParams.userId = params.userId;
	                        }
	                        func = createDoApiXHR_1.default(params.applicationCode, params.pushwooshApiUrl);
	                        this.api = new API_1.default(func, apiParams, lastOpenMessage);
	                        return [2 /*return*/];
	                }
	            });
	        });
	    };
	    Pushwoosh.prototype.subscribe = function (params) {
	        return __awaiter(this, void 0, void 0, function () {
	            var _a, registerLess, subscribed, error_2;
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0:
	                        _a = (params || {}).registerLess, registerLess = _a === void 0 ? false : _a;
	                        _b.label = 1;
	                    case 1:
	                        _b.trys.push([1, 8, , 9]);
	                        return [4 /*yield*/, this.driver.isSubscribed()];
	                    case 2:
	                        subscribed = _b.sent();
	                        return [4 /*yield*/, this.driver.askSubscribe(registerLess)];
	                    case 3:
	                        _b.sent();
	                        if (!!registerLess) return [3 /*break*/, 5];
	                        return [4 /*yield*/, this.registerDuringSubscribe()];
	                    case 4:
	                        _b.sent();
	                        _b.label = 5;
	                    case 5:
	                        if (!!subscribed) return [3 /*break*/, 7];
	                        return [4 /*yield*/, this.onSubscribeEmitter()];
	                    case 6:
	                        _b.sent();
	                        _b.label = 7;
	                    case 7: return [3 /*break*/, 9];
	                    case 8:
	                        error_2 = _b.sent();
	                        logger_1.default.write('error', error_2, 'subscribe fail');
	                        return [3 /*break*/, 9];
	                    case 9: return [2 /*return*/];
	                }
	            });
	        });
	    };
	    Pushwoosh.prototype.registerDuringSubscribe = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            var subscribed;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4 /*yield*/, this.driver.isSubscribed()];
	                    case 1:
	                        subscribed = _a.sent();
	                        return [4 /*yield*/, this.initApi()];
	                    case 2:
	                        _a.sent();
	                        if (!this.isSafari) return [3 /*break*/, 4];
	                        return [4 /*yield*/, this.open()];
	                    case 3:
	                        _a.sent();
	                        _a.label = 4;
	                    case 4: return [4 /*yield*/, this.register(subscribed)];
	                    case 5:
	                        _a.sent();
	                        return [2 /*return*/];
	                }
	            });
	        });
	    };
	    Pushwoosh.prototype.onSubscribeEmitter = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            var subscribed;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4 /*yield*/, this.driver.isSubscribed()];
	                    case 1:
	                        subscribed = _a.sent();
	                        if (subscribed) {
	                            this._ee.emit(exports.eventOnSubscribe);
	                        }
	                        return [2 /*return*/];
	                }
	            });
	        });
	    };
	    Pushwoosh.prototype.unsubscribe = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            var e_1;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        _a.trys.push([0, 3, , 4]);
	                        return [4 /*yield*/, this.driver.unsubscribe()];
	                    case 1:
	                        _a.sent();
	                        return [4 /*yield*/, this.api.unregisterDevice()];
	                    case 2:
	                        _a.sent();
	                        this._ee.emit(exports.eventOnUnsubscribe);
	                        return [3 /*break*/, 4];
	                    case 3:
	                        e_1 = _a.sent();
	                        logger_1.default.write('error', e_1, 'Error occurred during the unsubscribe');
	                        return [3 /*break*/, 4];
	                    case 4: return [2 /*return*/];
	                }
	            });
	        });
	    };
	    Pushwoosh.prototype.isDeviceRegistered = function () {
	        return localStorage.getItem(constants_1.keyDeviceRegistrationStatus) === 'registered';
	    };
	    Pushwoosh.prototype.isSubscribed = function () {
	        var deviceRegistration = this.isSafari || this.isDeviceRegistered();
	        return deviceRegistration && this.driver.isSubscribed() || Promise.resolve(false);
	    };
	    Pushwoosh.prototype.register = function (forceRequests) {
	        return __awaiter(this, void 0, void 0, function () {
	            var _a, _b, savedSDKVersion, _c, savedApiParams, _d, savedInitParams, apiParams, params, shouldRegister;
	            return __generator(this, function (_e) {
	                switch (_e.label) {
	                    case 0:
	                        if (!this.api) {
	                            throw new Error('API is not inited');
	                        }
	                        return [4 /*yield*/, storage_1.keyValue.getAll()];
	                    case 1:
	                        _a = _e.sent(), _b = constants_1.keySDKVersion, savedSDKVersion = _a[_b], _c = constants_1.keyApiParams, savedApiParams = _a[_c], _d = constants_1.keyInitParams, savedInitParams = _a[_d];
	                        return [4 /*yield*/, this.driver.getAPIParams()];
	                    case 2:
	                        apiParams = _e.sent();
	                        params = this.params;
	                        shouldRegister = !(functions_1.getVersion() === savedSDKVersion &&
	                            JSON.stringify(savedApiParams) === JSON.stringify(apiParams) &&
	                            JSON.stringify(savedInitParams) === JSON.stringify(params));
	                        if (!(shouldRegister || forceRequests)) return [3 /*break*/, 4];
	                        return [4 /*yield*/, Promise.all([
	                                storage_1.keyValue.set(constants_1.keyApiParams, apiParams),
	                                storage_1.keyValue.set(constants_1.keyInitParams, params),
	                                storage_1.keyValue.set(constants_1.keySDKVersion, functions_1.getVersion()),
	                                this.api.registerDevice(),
	                                this.api.setTags(__assign({}, params.tags)),
	                                this.api.registerUser()
	                            ])];
	                    case 3:
	                        _e.sent();
	                        this._ee.emit(exports.eventOnRegister);
	                        _e.label = 4;
	                    case 4: return [2 /*return*/];
	                }
	            });
	        });
	    };
	    Pushwoosh.prototype.open = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            var apiParams, curTime, val, lastSentTime, force;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4 /*yield*/, this.driver.getAPIParams()];
	                    case 1:
	                        apiParams = _a.sent();
	                        curTime = Date.now();
	                        return [4 /*yield*/, storage_1.keyValue.get(constants_1.keyLastSentAppOpen)];
	                    case 2:
	                        val = _a.sent();
	                        lastSentTime = isNaN(val) ? 0 : Number(val);
	                        return [4 /*yield*/, this.needForcedOpen()];
	                    case 3:
	                        force = _a.sent();
	                        if (this.isSafari && !apiParams.hwid) {
	                            return [2 /*return*/, Promise.resolve()];
	                        }
	                        if (!(force || (curTime - lastSentTime) > constants_1.periodSendAppOpen)) return [3 /*break*/, 5];
	                        return [4 /*yield*/, Promise.all([
	                                storage_1.keyValue.set(constants_1.keyLastSentAppOpen, curTime || Date.now()),
	                                this.api.applicationOpen()
	                            ])];
	                    case 4:
	                        _a.sent();
	                        _a.label = 5;
	                    case 5: return [2 /*return*/];
	                }
	            });
	        });
	    };
	    Pushwoosh.prototype.needForcedOpen = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            var previousPermission, currentPermission, compare, result;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        if (!this.isSafari) {
	                            return [2 /*return*/, Promise.resolve(false)];
	                        }
	                        return [4 /*yield*/, storage_1.keyValue.get(constants_1.keySafariPreviousPermission)];
	                    case 1:
	                        previousPermission = _a.sent();
	                        return [4 /*yield*/, this.driver.getPermission()];
	                    case 2:
	                        currentPermission = _a.sent();
	                        compare = function (prev, curr) { return prev !== 'granted' && curr === 'granted'; };
	                        return [4 /*yield*/, storage_1.keyValue.set(constants_1.keySafariPreviousPermission, currentPermission)];
	                    case 3:
	                        _a.sent();
	                        result = compare(this.permissionOnInit, currentPermission) || compare(previousPermission, currentPermission);
	                        return [2 /*return*/, Promise.resolve(result)];
	                }
	            });
	        });
	    };
	    Pushwoosh.prototype.defaultProcess = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            var _a, autoSubscribe, _b, _c;
	            return __generator(this, function (_d) {
	                switch (_d.label) {
	                    case 0:
	                        _a = (this.params || {}).autoSubscribe, autoSubscribe = _a === void 0 ? true : _a;
	                        _b = this;
	                        return [4 /*yield*/, this.driver.getPermission()];
	                    case 1:
	                        _b.permissionOnInit = _d.sent();
	                        return [4 /*yield*/, this.initApi()];
	                    case 2:
	                        _d.sent();
	                        _c = this.permissionOnInit;
	                        switch (_c) {
	                            case 'denied': return [3 /*break*/, 3];
	                            case 'prompt': return [3 /*break*/, 6];
	                            case 'granted': return [3 /*break*/, 12];
	                        }
	                        return [3 /*break*/, 15];
	                    case 3:
	                        this._ee.emit(exports.eventOnPermissionDenied);
	                        if (!(!this.isSafari && this.isDeviceRegistered())) return [3 /*break*/, 5];
	                        return [4 /*yield*/, this.unsubscribe()];
	                    case 4:
	                        _d.sent();
	                        _d.label = 5;
	                    case 5: return [3 /*break*/, 16];
	                    case 6:
	                        if (!(!this.isSafari && this.isDeviceRegistered())) return [3 /*break*/, 8];
	                        return [4 /*yield*/, this.unsubscribe()];
	                    case 7:
	                        _d.sent();
	                        _d.label = 8;
	                    case 8:
	                        if (!autoSubscribe) return [3 /*break*/, 10];
	                        return [4 /*yield*/, this.subscribe({ registerLess: true })];
	                    case 9:
	                        _d.sent();
	                        return [3 /*break*/, 11];
	                    case 10:
	                        this._ee.emit(exports.eventOnPermissionPrompt);
	                        _d.label = 11;
	                    case 11: return [3 /*break*/, 16];
	                    case 12:
	                        this._ee.emit(exports.eventOnPermissionGranted);
	                        if (!(!this.isSafari && !this.isDeviceRegistered())) return [3 /*break*/, 14];
	                        return [4 /*yield*/, this.subscribe({ registerLess: true })];
	                    case 13:
	                        _d.sent();
	                        _d.label = 14;
	                    case 14: return [3 /*break*/, 16];
	                    case 15:
	                        logger_1.default.write('error', this.permissionOnInit, 'unknown permission value');
	                        _d.label = 16;
	                    case 16: return [4 /*yield*/, this.initApi()];
	                    case 17:
	                        _d.sent();
	                        return [4 /*yield*/, this.open()];
	                    case 18:
	                        _d.sent();
	                        return [4 /*yield*/, this.register()];
	                    case 19:
	                        _d.sent();
	                        this._ee.emit(exports.eventOnReady);
	                        this.ready = true;
	                        return [2 /*return*/];
	                }
	            });
	        });
	    };
	    Pushwoosh.prototype.getHWID = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            var hwid;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4 /*yield*/, this.driver.getAPIParams()];
	                    case 1:
	                        hwid = (_a.sent()).hwid;
	                        return [2 /*return*/, Promise.resolve(hwid)];
	                }
	            });
	        });
	    };
	    Pushwoosh.prototype.getPushToken = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            var pushToken;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4 /*yield*/, this.driver.getAPIParams()];
	                    case 1:
	                        pushToken = (_a.sent()).pushToken;
	                        return [2 /*return*/, Promise.resolve(pushToken)];
	                }
	            });
	        });
	    };
	    Pushwoosh.prototype.getUserId = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            var params;
	            return __generator(this, function (_a) {
	                params = this.params || {};
	                return [2 /*return*/, Promise.resolve(params.userId)];
	            });
	        });
	    };
	    Pushwoosh.prototype.getParams = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            var _a, params;
	            return __generator(this, function (_b) {
	                _a = (this.api || {}).params, params = _a === void 0 ? {} : _a;
	                return [2 /*return*/, Promise.resolve(params)];
	            });
	        });
	    };
	    return Pushwoosh;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Pushwoosh;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var storage_1 = __webpack_require__(3);
	var functions_1 = __webpack_require__(1);
	var levels = {
	    error: 1,
	    info: 2,
	    debug: 3
	};
	var numLevel = 3;
	functions_1.patchConsole();
	var Logger = {
	    setLevel: function (level) {
	        if (!levels[level]) {
	            level = 'error';
	        }
	        numLevel = levels[level];
	    },
	    write: function (type, message, additional) {
	        if (type === 'error') {
	            this.error(message);
	        }
	        else {
	            this.info(message);
	        }
	        return storage_1.log.add(type, message, additional);
	    }
	};
	Object.keys(levels).forEach(function (k) {
	    var n = levels[k];
	    Logger[k] = function () {
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i] = arguments[_i];
	        }
	        if (n <= numLevel) {
	            console.info.apply(console, [k].concat(args));
	            console.trace('trace');
	        }
	    };
	});
	function logAndThrowError(error) {
	    var logText = new Error(error);
	    Logger.write('error', logText, 'logAndThrowError');
	    throw logText;
	}
	exports.logAndThrowError = logAndThrowError;
	function logAndRejectError(error, reject) {
	    var logText = new Error(error);
	    Logger.write('error', logText, 'logAndRejectError');
	    reject(logText);
	}
	exports.logAndRejectError = logAndRejectError;
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Logger;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var constants_1 = __webpack_require__(2);
	var functions_1 = __webpack_require__(1);
	var PushwooshAPI = (function () {
	    function PushwooshAPI(doPushwooshApiMethod, params, lastOpenMessage) {
	        this.doPushwooshApiMethod = doPushwooshApiMethod;
	        this.params = params;
	        this.lastOpenMessage = lastOpenMessage;
	        this.timezone = -(new Date).getTimezoneOffset() * 60;
	    }
	    Object.defineProperty(PushwooshAPI.prototype, "isSafari", {
	        get: function () {
	            return functions_1.isSafariBrowser();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    PushwooshAPI.prototype.callAPI = function (methodName, methodParams) {
	        var _a = this.params || {}, _b = _a.hwid, hwid = _b === void 0 ? '' : _b, _c = _a.applicationCode, applicationCode = _c === void 0 ? '' : _c, _d = _a.userId, userId = _d === void 0 ? '' : _d;
	        if (this.isSafari && !hwid) {
	            return Promise.resolve();
	        }
	        var customUserId = methodParams && methodParams.userId;
	        var mustBeParams = {
	            application: applicationCode,
	            hwid: hwid,
	            userId: customUserId || userId || hwid
	        };
	        return this.doPushwooshApiMethod(methodName, __assign({}, methodParams, mustBeParams));
	    };
	    PushwooshAPI.prototype.registerDevice = function () {
	        var _this = this;
	        var params = this.params;
	        if (!params.pushToken || this.isSafari) {
	            return Promise.resolve();
	        }
	        return new Promise(function (resolve, reject) {
	            _this.callAPI('registerDevice', {
	                push_token: params.pushToken,
	                public_key: params.publicKey,
	                auth_token: params.authToken,
	                language: params.language,
	                timezone: _this.timezone,
	                device_model: params.deviceModel,
	                device_type: params.deviceType,
	            })
	                .then(function () {
	                localStorage.setItem(constants_1.keyDeviceRegistrationStatus, 'registered');
	                resolve();
	            })
	                .catch(reject);
	        });
	    };
	    PushwooshAPI.prototype.unregisterDevice = function () {
	        var _this = this;
	        if (this.isSafari) {
	            return Promise.resolve();
	        }
	        return new Promise(function (resolve, reject) {
	            _this.callAPI('unregisterDevice')
	                .then(function () {
	                localStorage.setItem(constants_1.keyDeviceRegistrationStatus, '');
	                resolve();
	            })
	                .catch(reject);
	        });
	    };
	    PushwooshAPI.prototype.registerUser = function (userId) {
	        var params = {
	            timezone: this.timezone,
	            device_type: this.params.deviceType,
	            userId: this.params.userId,
	        };
	        if (userId) {
	            params.userId = userId;
	        }
	        if (!params.userId) {
	            return Promise.resolve();
	        }
	        return this.callAPI('registerUser', params);
	    };
	    PushwooshAPI.prototype.applicationOpen = function () {
	        return this.callAPI('applicationOpen', {
	            push_token: this.params.pushToken,
	            device_type: this.params.deviceType,
	            timezone: this.timezone,
	        });
	    };
	    PushwooshAPI.prototype.setTags = function (tags) {
	        return this.callAPI('setTags', { tags: tags });
	    };
	    PushwooshAPI.prototype.getTags = function () {
	        return this.callAPI('getTags');
	    };
	    PushwooshAPI.prototype.pushStat = function (hash) {
	        return this.callAPI('pushStat', { hash: hash });
	    };
	    PushwooshAPI.prototype.messageDeliveryEvent = function (hash) {
	        return this.callAPI('messageDeliveryEvent', { hash: hash });
	    };
	    PushwooshAPI.prototype.postEvent = function (event, attributes) {
	        var lastOpenMessage = this.lastOpenMessage;
	        var date = new Date();
	        var time = date.getTime();
	        var timestampUTC = Math.floor(time / 1000);
	        var timestampCurrent = timestampUTC - (date.getTimezoneOffset() / 60 * 3600);
	        if (lastOpenMessage.expiry > Date.now()) {
	            if (attributes['msgHash']) {
	                return Promise.reject('attribute msgHash already defined');
	            }
	            attributes = __assign({}, attributes, { msgHash: lastOpenMessage.messageHash });
	        }
	        return this.callAPI('postEvent', {
	            device_type: this.params.deviceType,
	            event: event,
	            attributes: attributes,
	            timestampUTC: timestampUTC,
	            timestampCurrent: timestampCurrent
	        });
	    };
	    return PushwooshAPI;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = PushwooshAPI;


/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	var EventEmitter = (function () {
	    function EventEmitter() {
	        this._events = {};
	    }
	    EventEmitter.prototype.emit = function (evt, param) {
	        var events = this._events[evt] && this._events[evt].slice();
	        if (events && events.length) {
	            for (var i = 0; i < events.length; i++) {
	                events[i](param);
	            }
	        }
	    };
	    EventEmitter.prototype.on = function (evt, fn) {
	        if (!this._events[evt]) {
	            this._events[evt] = [];
	        }
	        this._events[evt].push(fn);
	        return this;
	    };
	    EventEmitter.prototype.once = function (evt, fn) {
	        var _this = this;
	        var used = false;
	        var oncefun = function (param) {
	            if (!used) {
	                used = true;
	                _this.removeListener(evt, oncefun);
	                return fn(param);
	            }
	        };
	        return this.on(evt, oncefun);
	    };
	    EventEmitter.prototype.removeListener = function (evt, listener) {
	        var events = this._events[evt];
	        if (events) {
	            var idx = events.indexOf(listener);
	            if (idx > -1) {
	                events.splice(idx, 1);
	            }
	            if (events.length < 1) {
	                delete this._events[evt];
	            }
	        }
	    };
	    return EventEmitter;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = EventEmitter;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var logger_1 = __webpack_require__(5);
	var storage_1 = __webpack_require__(3);
	var constants_1 = __webpack_require__(2);
	var functions_1 = __webpack_require__(1);
	function createDoApiXHR(applicationCode, pushwooshApiUrl) {
	    return function doApiXHR(methodName, request) {
	        return new Promise(function (resolve, reject) {
	            functions_1.getPushwooshUrl(applicationCode, false, pushwooshApiUrl).then(function (pushwooshUrl) {
	                try {
	                    var url = "" + pushwooshUrl + methodName;
	                    var params = { request: request };
	                    var xhr_1 = new XMLHttpRequest();
	                    xhr_1.open('POST', url, true);
	                    xhr_1.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8');
	                    xhr_1.onload = function xhrOnLoad() {
	                        if (xhr_1.status == 200) {
	                            try {
	                                var response = JSON.parse(xhr_1.responseText);
	                                var _a = (response || {}).base_url, base_url = _a === void 0 ? null : _a;
	                                if (base_url) {
	                                    storage_1.keyValue.set(constants_1.keyApiBaseUrl, base_url);
	                                }
	                                if (response.status_code == 200) {
	                                    logger_1.default.write('apirequest', methodName + " call with arguments: " + JSON.stringify(request) + " to Pushwoosh has been successful. Result: " + JSON.stringify(response.response), 'createDoApiXHR');
	                                    resolve(response.response);
	                                }
	                                else {
	                                    storage_1.keyValue.set(constants_1.keyApiBaseUrl, null);
	                                    logger_1.logAndRejectError("Error occurred during the " + methodName + " call to Pushwoosh: " + response.status_message, reject);
	                                }
	                            }
	                            catch (e) {
	                                storage_1.keyValue.set(constants_1.keyApiBaseUrl, null);
	                                logger_1.logAndRejectError("Error parse responce: " + e, reject);
	                            }
	                        }
	                        else {
	                            storage_1.keyValue.set(constants_1.keyApiBaseUrl, null);
	                            logger_1.logAndRejectError("Error occurred, status code: " + xhr_1.status, reject);
	                        }
	                    };
	                    xhr_1.onerror = function xhrOnError(e) {
	                        logger_1.logAndRejectError("Pushwoosh response to " + methodName + " call in not ok: " + e, reject);
	                    };
	                    xhr_1.send(JSON.stringify(params));
	                }
	                catch (e) {
	                    logger_1.logAndRejectError("Exception while " + methodName + " the device: " + e, reject);
	                }
	            });
	        });
	    };
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = createDoApiXHR;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	};
	var __generator = (this && this.__generator) || function (thisArg, body) {
	    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
	    return { next: verb(0), "throw": verb(1), "return": verb(2) };
	    function verb(n) { return function (v) { return step([n, v]); }; }
	    function step(op) {
	        if (f) throw new TypeError("Generator is already executing.");
	        while (_) try {
	            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
	            if (y = 0, t) op = [0, t.value];
	            switch (op[0]) {
	                case 0: case 1: t = op; break;
	                case 4: _.label++; return { value: op[1], done: false };
	                case 5: _.label++; y = op[1]; op = [0]; continue;
	                case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                default:
	                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                    if (t[2]) _.ops.pop();
	                    _.trys.pop(); continue;
	            }
	            op = body.call(thisArg, _);
	        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	    }
	};
	var Pushwoosh_1 = __webpack_require__(4);
	var functions_1 = __webpack_require__(1);
	var SafariDriver = (function () {
	    function SafariDriver(params) {
	        this.params = params;
	    }
	    SafariDriver.prototype.getPermissionObject = function () {
	        return safari.pushNotification.permission(this.params.webSitePushID);
	    };
	    SafariDriver.prototype.getPermission = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            var permission;
	            return __generator(this, function (_a) {
	                permission = this.getPermissionObject().permission;
	                return [2 /*return*/, permission === 'default' ? 'prompt' : permission];
	            });
	        });
	    };
	    SafariDriver.prototype.isSubscribed = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            var perm;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4 /*yield*/, this.getPermission()];
	                    case 1:
	                        perm = _a.sent();
	                        return [2 /*return*/, perm === 'granted'];
	                }
	            });
	        });
	    };
	    SafariDriver.prototype.askSubscribe = function () {
	        var _a = this.params || {}, _b = _a.eventEmitter, eventEmitter = _b === void 0 ? { emit: function (e) { return e; } } : _b, _c = _a.applicationCode, applicationCode = _c === void 0 ? '' : _c, _d = _a.webSitePushID, webSitePushID = _d === void 0 ? '' : _d, _e = _a.pushwooshApiUrl, pushwooshApiUrl = _e === void 0 ? '' : _e;
	        return new Promise(function (resolve, reject) {
	            // @TODO: remove second parameter when base_url bug will be fixed by backend
	            functions_1.getPushwooshUrl(applicationCode, true, pushwooshApiUrl).then(function (pushwooshUrl) {
	                safari.pushNotification.requestPermission(pushwooshUrl + "safari", webSitePushID, { application: applicationCode }, function (permission) {
	                    if (permission.permission === 'granted') {
	                        eventEmitter.emit(Pushwoosh_1.eventOnPermissionGranted);
	                        resolve(true);
	                    }
	                    else {
	                        eventEmitter.emit(Pushwoosh_1.eventOnPermissionDenied);
	                        reject(false);
	                    }
	                });
	            });
	        });
	    };
	    SafariDriver.prototype.unsubscribe = function () {
	        return new Promise(function (resolve) { return resolve(true); });
	    };
	    SafariDriver.prototype.getAPIParams = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            var _a, deviceToken, hwid, pushToken;
	            return __generator(this, function (_b) {
	                _a = (this.getPermissionObject() || {}).deviceToken, deviceToken = _a === void 0 ? '' : _a;
	                hwid = deviceToken && deviceToken.toLowerCase() || '';
	                pushToken = deviceToken && deviceToken.toUpperCase() || '';
	                return [2 /*return*/, { hwid: hwid, pushToken: pushToken }];
	            });
	        });
	    };
	    return SafariDriver;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = SafariDriver;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	};
	var __generator = (this && this.__generator) || function (thisArg, body) {
	    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
	    return { next: verb(0), "throw": verb(1), "return": verb(2) };
	    function verb(n) { return function (v) { return step([n, v]); }; }
	    function step(op) {
	        if (f) throw new TypeError("Generator is already executing.");
	        while (_) try {
	            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
	            if (y = 0, t) op = [0, t.value];
	            switch (op[0]) {
	                case 0: case 1: t = op; break;
	                case 4: _.label++; return { value: op[1], done: false };
	                case 5: _.label++; y = op[1]; op = [0]; continue;
	                case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                default:
	                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                    if (t[2]) _.ops.pop();
	                    _.trys.pop(); continue;
	            }
	            op = body.call(thisArg, _);
	        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	    }
	};
	var functions_1 = __webpack_require__(1);
	var Pushwoosh_1 = __webpack_require__(4);
	var constants_1 = __webpack_require__(2);
	var storage_1 = __webpack_require__(3);
	var WorkerDriver = (function () {
	    function WorkerDriver(params) {
	        this.params = params;
	    }
	    Object.defineProperty(WorkerDriver.prototype, "scope", {
	        get: function () {
	            var _a = (this.params || {}).scope, scope = _a === void 0 ? '/' : _a;
	            if (typeof scope !== 'string') {
	                throw new Error('invalid scope value');
	            }
	            if (scope.length > 1) {
	                if (scope.substr(0, 1) !== '/')
	                    scope = "/" + scope;
	                if (scope.substr(scope.length - 1) !== '/')
	                    scope = scope + "/";
	            }
	            return scope;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    WorkerDriver.prototype.initWorker = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            var scope, serviceWorkerRegistration;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        scope = this.scope;
	                        return [4 /*yield*/, navigator.serviceWorker.getRegistration()];
	                    case 1:
	                        serviceWorkerRegistration = _a.sent();
	                        if (!(!serviceWorkerRegistration || serviceWorkerRegistration.installing == null)) return [3 /*break*/, 3];
	                        return [4 /*yield*/, navigator.serviceWorker.register("" + scope + this.params.serviceWorkerUrl + "?version=" + functions_1.getVersion(), { scope: scope })];
	                    case 2:
	                        _a.sent();
	                        _a.label = 3;
	                    case 3: return [2 /*return*/];
	                }
	            });
	        });
	    };
	    WorkerDriver.prototype.getPermission = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                return [2 /*return*/, Notification.permission === 'default' ? 'prompt' : Notification.permission];
	            });
	        });
	    };
	    WorkerDriver.prototype.isSubscribed = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            var serviceWorkerRegistration, subscription;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4 /*yield*/, navigator.serviceWorker.getRegistration()];
	                    case 1:
	                        serviceWorkerRegistration = _a.sent();
	                        if (!serviceWorkerRegistration) {
	                            return [2 /*return*/, false];
	                        }
	                        return [4 /*yield*/, serviceWorkerRegistration.pushManager.getSubscription()];
	                    case 2:
	                        subscription = _a.sent();
	                        return [2 /*return*/, !!subscription];
	                }
	            });
	        });
	    };
	    WorkerDriver.prototype.emit = function (event) {
	        var _a = (this.params || {}).eventEmitter, eventEmitter = _a === void 0 ? { emit: function (e) { return e; } } : _a;
	        eventEmitter.emit(event);
	    };
	    WorkerDriver.prototype.askSubscribe = function (registerLess) {
	        return __awaiter(this, void 0, void 0, function () {
	            var serviceWorkerRegistration, subscription, options, e_1, e_2;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4 /*yield*/, navigator.serviceWorker.ready];
	                    case 1:
	                        serviceWorkerRegistration = _a.sent();
	                        return [4 /*yield*/, serviceWorkerRegistration.pushManager.getSubscription()];
	                    case 2:
	                        subscription = _a.sent();
	                        options = { userVisibleOnly: true };
	                        if (functions_1.getBrowserType() == 11 && this.params.applicationServerPublicKey) {
	                            options.applicationServerKey = functions_1.urlB64ToUint8Array(this.params.applicationServerPublicKey);
	                        }
	                        if (!!subscription) return [3 /*break*/, 7];
	                        _a.label = 3;
	                    case 3:
	                        _a.trys.push([3, 5, , 6]);
	                        return [4 /*yield*/, serviceWorkerRegistration.pushManager.subscribe(options)];
	                    case 4:
	                        subscription = _a.sent();
	                        this.emit(Pushwoosh_1.eventOnPermissionGranted);
	                        return [3 /*break*/, 6];
	                    case 5:
	                        e_1 = _a.sent();
	                        this.emit(Pushwoosh_1.eventOnPermissionDenied);
	                        return [3 /*break*/, 6];
	                    case 6: return [3 /*break*/, 14];
	                    case 7:
	                        if (!(registerLess && subscription.unsubscribe)) return [3 /*break*/, 13];
	                        return [4 /*yield*/, subscription.unsubscribe()];
	                    case 8:
	                        _a.sent();
	                        _a.label = 9;
	                    case 9:
	                        _a.trys.push([9, 11, , 12]);
	                        return [4 /*yield*/, serviceWorkerRegistration.pushManager.subscribe(options)];
	                    case 10:
	                        subscription = _a.sent();
	                        this.emit(Pushwoosh_1.eventOnPermissionGranted);
	                        return [3 /*break*/, 12];
	                    case 11:
	                        e_2 = _a.sent();
	                        this.emit(Pushwoosh_1.eventOnPermissionDenied);
	                        return [3 /*break*/, 12];
	                    case 12: return [3 /*break*/, 14];
	                    case 13:
	                        this.emit(Pushwoosh_1.eventOnPermissionGranted);
	                        _a.label = 14;
	                    case 14: return [2 /*return*/, subscription];
	                }
	            });
	        });
	    };
	    WorkerDriver.prototype.unsubscribe = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            var serviceWorkerRegistration, subscription;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4 /*yield*/, navigator.serviceWorker.getRegistration()];
	                    case 1:
	                        serviceWorkerRegistration = _a.sent();
	                        if (!serviceWorkerRegistration) {
	                            return [2 /*return*/, Promise.resolve()];
	                        }
	                        return [4 /*yield*/, serviceWorkerRegistration.pushManager.getSubscription()];
	                    case 2:
	                        subscription = _a.sent();
	                        if (subscription && subscription.unsubscribe) {
	                            return [2 /*return*/, subscription.unsubscribe()];
	                        }
	                        else {
	                            return [2 /*return*/, Promise.resolve(false)];
	                        }
	                        return [2 /*return*/];
	                }
	            });
	        });
	    };
	    WorkerDriver.prototype.getAPIParams = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            var serviceWorkerRegistration, _a, savedApiParams, subscription, pushToken;
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4 /*yield*/, navigator.serviceWorker.getRegistration()];
	                    case 1:
	                        serviceWorkerRegistration = _b.sent();
	                        if (!!serviceWorkerRegistration) return [3 /*break*/, 3];
	                        _a = constants_1.keyApiParams;
	                        return [4 /*yield*/, storage_1.keyValue.getAll()];
	                    case 2:
	                        savedApiParams = (_b.sent())[_a];
	                        if (savedApiParams && this.scope !== '/') {
	                            return [2 /*return*/, savedApiParams];
	                        }
	                        else {
	                            this.emit(Pushwoosh_1.eventOnSWInitError);
	                            throw new Error('No service worker registration');
	                        }
	                        _b.label = 3;
	                    case 3: return [4 /*yield*/, navigator.serviceWorker.ready];
	                    case 4:
	                        serviceWorkerRegistration = _b.sent();
	                        return [4 /*yield*/, serviceWorkerRegistration.pushManager.getSubscription()];
	                    case 5:
	                        subscription = _b.sent();
	                        pushToken = functions_1.getPushToken(subscription);
	                        return [2 /*return*/, {
	                                hwid: functions_1.generateHwid(this.params.applicationCode, pushToken),
	                                pushToken: pushToken,
	                                publicKey: functions_1.getPublicKey(subscription),
	                                authToken: functions_1.getAuthToken(subscription),
	                            }];
	                }
	            });
	        });
	    };
	    return WorkerDriver;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = WorkerDriver;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var logger_1 = __webpack_require__(5);
	var functions_1 = __webpack_require__(1);
	function createDoApiFetch(applicationCode, pushwooshApiUrl) {
	    return function doApiFetch(methodName, request) {
	        return new Promise(function (resolve, reject) {
	            functions_1.getPushwooshUrl(applicationCode, false, pushwooshApiUrl).then(function (pushwooshUrl) {
	                try {
	                    var url = "" + pushwooshUrl + methodName;
	                    var params = { request: request };
	                    fetch(url, {
	                        method: 'post',
	                        headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
	                        body: JSON.stringify(params)
	                    }).then(function (response) {
	                        if (!response.ok) {
	                            logger_1.logAndRejectError(response.statusText || 'response not ok', reject);
	                        }
	                        else {
	                            response.json().then(function (json) {
	                                if (json.status_code != 200) {
	                                    logger_1.logAndRejectError("Error occurred during the " + methodName + " call to Pushwoosh: " + json.status_message, reject);
	                                }
	                                else {
	                                    logger_1.default.write('apirequest', methodName + " call with arguments: " + JSON.stringify(request) + " to Pushwoosh has been successful. Result: " + JSON.stringify(json.response), 'createDoApiFetch');
	                                    resolve(json.response);
	                                }
	                            });
	                        }
	                    });
	                }
	                catch (e) {
	                    logger_1.logAndRejectError("Exception while " + methodName + " the device: " + e, reject);
	                }
	            });
	        });
	    };
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = createDoApiFetch;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	};
	var __generator = (this && this.__generator) || function (thisArg, body) {
	    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
	    return { next: verb(0), "throw": verb(1), "return": verb(2) };
	    function verb(n) { return function (v) { return step([n, v]); }; }
	    function step(op) {
	        if (f) throw new TypeError("Generator is already executing.");
	        while (_) try {
	            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
	            if (y = 0, t) op = [0, t.value];
	            switch (op[0]) {
	                case 0: case 1: t = op; break;
	                case 4: _.label++; return { value: op[1], done: false };
	                case 5: _.label++; y = op[1]; op = [0]; continue;
	                case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                default:
	                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                    if (t[2]) _.ops.pop();
	                    _.trys.pop(); continue;
	            }
	            op = body.call(thisArg, _);
	        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	    }
	};
	var storage_1 = __webpack_require__(3);
	var constants_1 = __webpack_require__(2);
	var API_1 = __webpack_require__(6);
	var createDoApiFetch_1 = __webpack_require__(11);
	var WorkerPushwooshGlobal = (function () {
	    function WorkerPushwooshGlobal() {
	        this._listeners = {};
	    }
	    WorkerPushwooshGlobal.prototype.push = function (f) {
	        if (Array.isArray(f) && f[0] === 'onPush' && typeof f[1] === 'function') {
	            if (!this._listeners[f[0]]) {
	                this._listeners[f[0]] = [];
	            }
	            this._listeners[f[0]].push(f[1]);
	        }
	    };
	    WorkerPushwooshGlobal.prototype.getListeners = function (eventName) {
	        return this._listeners[eventName] || [];
	    };
	    WorkerPushwooshGlobal.prototype.initApi = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            var values, initParams, driverApiParams, lastOpenMessage, apiParams, func;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4 /*yield*/, storage_1.keyValue.getAll()];
	                    case 1:
	                        values = _a.sent();
	                        initParams = values[constants_1.keyInitParams];
	                        driverApiParams = values[constants_1.keyApiParams];
	                        lastOpenMessage = values[constants_1.keyLastOpenMessage] || {};
	                        apiParams = __assign({}, driverApiParams, { deviceType: initParams.deviceType, deviceModel: initParams.tags['Device Model'], applicationCode: initParams.applicationCode, language: initParams.tags.Language, pushwooshApiUrl: initParams.pushwooshApiUrl });
	                        if (initParams.userId) {
	                            apiParams.userId = initParams.userId;
	                        }
	                        func = createDoApiFetch_1.default(initParams.applicationCode, initParams.pushwooshApiUrl);
	                        this.api = new API_1.default(func, apiParams, lastOpenMessage);
	                        return [2 /*return*/];
	                }
	            });
	        });
	    };
	    return WorkerPushwooshGlobal;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = WorkerPushwooshGlobal;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	};
	var __generator = (this && this.__generator) || function (thisArg, body) {
	    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
	    return { next: verb(0), "throw": verb(1), "return": verb(2) };
	    function verb(n) { return function (v) { return step([n, v]); }; }
	    function step(op) {
	        if (f) throw new TypeError("Generator is already executing.");
	        while (_) try {
	            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
	            if (y = 0, t) op = [0, t.value];
	            switch (op[0]) {
	                case 0: case 1: t = op; break;
	                case 4: _.label++; return { value: op[1], done: false };
	                case 5: _.label++; y = op[1]; op = [0]; continue;
	                case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                default:
	                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                    if (t[2]) _.ops.pop();
	                    _.trys.pop(); continue;
	            }
	            op = body.call(thisArg, _);
	        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	    }
	};
	var functions_1 = __webpack_require__(1);
	var PushwooshNotification = (function () {
	    function PushwooshNotification(info) {
	        this._canceled = false;
	        this._origMess = info;
	        this._changedMess = __assign({}, info);
	    }
	    Object.defineProperty(PushwooshNotification.prototype, "title", {
	        get: function () {
	            return this._changedMess.title;
	        },
	        set: function (title) {
	            this._changedMess.title = title;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(PushwooshNotification.prototype, "body", {
	        get: function () {
	            return this._changedMess.body;
	        },
	        set: function (body) {
	            this._changedMess.body = body;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(PushwooshNotification.prototype, "icon", {
	        get: function () {
	            return this._changedMess.icon;
	        },
	        set: function (icon) {
	            this._changedMess.icon = icon;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(PushwooshNotification.prototype, "openUrl", {
	        get: function () {
	            return this._changedMess.openUrl;
	        },
	        set: function (openUrl) {
	            this._changedMess.openUrl = openUrl;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(PushwooshNotification.prototype, "duration", {
	        get: function () {
	            return functions_1.prepareDuration(this._changedMess.duration);
	        },
	        set: function (duration) {
	            this._changedMess.duration = duration;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(PushwooshNotification.prototype, "messageHash", {
	        get: function () {
	            return this._changedMess.messageHash;
	        },
	        set: function (messageHash) {
	            this._changedMess.messageHash = messageHash;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    PushwooshNotification.prototype.show = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            var _this = this;
	            var code_1, _a, buttons, image, notifications;
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0:
	                        if (!!this._canceled) return [3 /*break*/, 3];
	                        code_1 = "notificationCode-" + Date.now();
	                        _a = this._changedMess, buttons = _a.buttons, image = _a.image;
	                        buttons.forEach(function (button, key) {
	                            button.action = "action-" + key;
	                        });
	                        return [4 /*yield*/, self.registration.showNotification(this.title, {
	                                body: this.body,
	                                icon: this.icon,
	                                requireInteraction: this.duration === 0 || this.duration > 20,
	                                tag: JSON.stringify({
	                                    url: this.openUrl,
	                                    messageHash: this.messageHash
	                                }),
	                                data: {
	                                    code: code_1,
	                                    buttons: buttons
	                                },
	                                actions: buttons,
	                                image: image
	                            })];
	                    case 1:
	                        _b.sent();
	                        return [4 /*yield*/, self.registration.getNotifications()];
	                    case 2:
	                        notifications = _b.sent();
	                        notifications.forEach(function (notification) {
	                            if (notification.data && notification.data.code === code_1 && _this.duration) {
	                                setTimeout(function () { return notification.close(); }, 1000 * _this.duration);
	                            }
	                        });
	                        _b.label = 3;
	                    case 3: return [2 /*return*/];
	                }
	            });
	        });
	    };
	    PushwooshNotification.prototype.cancel = function () {
	        this._canceled = true;
	    };
	    PushwooshNotification.prototype._forLog = function () {
	        return {
	            orig: this._origMess,
	            changed: this._changedMess,
	            canceled: this._canceled,
	        };
	    };
	    return PushwooshNotification;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = PushwooshNotification;


/***/ }
/******/ ]);
//# sourceMappingURL=pushwoosh-service-worker.uncompress.js.map
