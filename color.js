const path = require('path');
const { generateTheme } = require('antd-theme-generator');

const options = {
    stylesDir: path.join(__dirname, './src/common/styles'),
    antDir: path.join(__dirname, './node_modules/antd'),
    varFile: path.join(__dirname, './src/common/styles/variables.less'),
    mainLessFile: path.join(__dirname, './src/index.less'),
    // 需要动态切换的主题变量
    themeVariables: [
        '@primary-color',
    ],
    indexFileName: 'index.html',
    outputFilePath: path.join(__dirname, './public/color.less'), // 页面引入的主题变量文件
}

generateTheme(options)
    .then(less => {
        console.log('Theme generated successfully');
    })
    .catch(error => {
        console.log('Error', error);
    });