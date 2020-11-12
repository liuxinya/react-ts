const CracoLessPlugin = require('craco-less');
// const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    webpack: {
        configure: (webpackConfig, {env, paths}) => {
            webpackConfig.output.publicPath = env === 'production' ? '' : '/';
            return webpackConfig;
        }
    },
    babel: {
        plugins: [
            'add-react-displayname',
            'babel-plugin-transform-typescript-metadata',
            ['@babel/plugin-proposal-decorators', {'legacy': true}],
            ['@babel/plugin-proposal-class-properties', {'loose': true}]
        ],
        presets: [
            '@babel/preset-typescript'
        ]
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {'@primary-color': '#1DA57A'},
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};