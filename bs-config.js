module.exports = {
    ui: false,
    files: ['dist/**/*.js'],
    single: false,
    // watchOptions: {
    //     ignoreInitial: false
    // },
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
    injectChanges: false,
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
