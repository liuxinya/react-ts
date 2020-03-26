const { override, fixBabelImports, addLessLoader } = require('customize-cra');

const addCustomize = () => config => {
    config.output.publicPath = process.env.NODE_ENV === 'production' ? '' : '/';
    // let tem = config.module.rules
    // config.module.rules = [
    //     ...tem,

    // ]
    return config
}

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