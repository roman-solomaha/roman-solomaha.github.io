module.exports = {
  manifest: {
    name: 'Pushwoosh Notifications',
    short_name: 'Pushwoosh Notifications',
    gcm_sender_id: '60756016005',
    display: 'standalone',
    gcm_user_visible_only: true
  },

  initParams: {
    logLevel: 'error',
    applicationCode: '8E6E1-CC438',
    safariWebsitePushID: 'web.com.example.test',
    defaultNotificationTitle: 'Pushwoosh Web SDK',
    defaultNotificationImage: 'https://cp.pushwoosh.com/img/logo-medium.png',
    autoSubscribe: false,
    userId: 'user_id123',
    serviceWorkerUrl: '/pushwoosh-service-worker.js',
    tags: {
      Name: 'John Doe'
    },
    subscribeWidget: {
      enable: true
    }
  }
};