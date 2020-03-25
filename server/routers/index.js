import  Router from 'koa-router';
const router = new Router();

// 模块化
router.use('/test', require('./test.js'))

export { router }