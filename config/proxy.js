const proxy = {
    proxy: [
        {
            context: [
                '*(/index/**)',
                '/index'
            ],
            target: 'http://localhost:3000/',
            changeOrigin: true,
            withCredentials: true,
            secure: false   //https
        },
    ],
    setup: function(app, server) {
        console.log(app)
    }
}
module.exports = proxy;