const { override, fixBabelImports, addLessLoader } = require('customize-cra');
const rewireReactHotLoader = require('react-app-rewire-hot-loader');

const addCustomize = () => (config, env) => {
    config.output.publicPath = process.env.NODE_ENV === 'production' ? '' : '/';
    config = rewireReactHotLoader(config, env);
    return config;

}

require('./color.js')

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#1DA57A' },
    }),
    addCustomize()
);