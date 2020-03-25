const returnData = async function(ctx, next) {
    ctx.success = (data, msg) => {
        console.log('success')
        ctx.body = {
            success: true,
            result: 200,
            message: msg || '操作成功',
            data: data || true,
        }
    }
    ctx.fail = (data, msg) => {
        console.log('fail')
        ctx.body = {
            success: false,
            result: 400,
            message: msg || '操作失败',
            data: data || false,
        }
    }
    await next();
}

export { returnData }