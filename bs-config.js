const browserSync = require('browser-sync');

module.exports = {
    ui: false,
    files: [{
      match: ['dist/**/*.js'],
      fn: (event, file) => {
        console.log(event, file);
        browserSync.reload();
      }
    }],
    single: false,
    watchOptions: {
        ignoreInitial: false
    },
    server: false,
    proxy: 'http://localhost:8000',
    port: 3000,
    ghostMode: false,
    logLevel: 'info',
    logPrefix: 'Browsersync',
    logConnections: false,
    logFileChanges: false,
    rewriteRules: [],
    open: false,
    hostnameSuffix: false,
    reloadOnRestart: true,
    notify: false,
    reloadDelay: 0,
    reloadDebounce: 500,
    reloadThrottle: 0,
    injectChanges: false,
    startPath: null, // Open the first browser window at URL + "/info.php"
    minify: false,
    host: null,
    localOnly: false,
    codeSync: true,
    timestamps: false,
    socket: {
        socketIoOptions: {
            log: false
        },
        socketIoClientConfig: {
            reconnectionAttempts: 50
        },
        path: '/browser-sync/socket.io',
        clientPath: '/browser-sync',
        namespace: '/browser-sync',
        clients: {
            heartbeatTimeout: 5000
        }
    },
};
