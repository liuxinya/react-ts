import Koa from 'koa'
import cors from 'koa-cors';
import { router } from './routers';
import { returnData } from './helper/returnData';
import bodyParser from 'koa-bodyparser'

const app = new Koa()

// 中间件捕捉不到的错误 这里可以拦截
process.on('uncaughtException', err => {
    console.error('app uncaughtException', err.stack);
});

process.on('unhandledRejection', (reason, p) => {
    console.error('app Unhandled Rejection at:', p, 'reason:', reason);
});

// 跨域
app.use(cors());

// 解析请求主题 对于 put和post请求 ctx.request.body 可以拿到请求参数
app.use(bodyParser({
    jsonLimit: '10mb'    // 增大数据的大小限制（图片的存储） 默认1M 超过限制报413错误
}))

// 自定义中间件 用于便捷返回响应数据
app.use(returnData);

// 路由
app
    .use(router.routes())
    .use(router.allowedMethods());

const PORT = 8000

app.listen(PORT)
console.log(`http://localhost:${PORT}`)