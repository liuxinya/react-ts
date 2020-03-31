const { override, fixBabelImports, addLessLoader } = require('customize-cra');

const addCustomize = () => config => {
    config.output.publicPath = process.env.NODE_ENV === 'production' ? '' : '/';
    return config
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
    }),
    addCustomize()
);