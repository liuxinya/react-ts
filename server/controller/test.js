export async function testA(ctx, next) {
    try {
        let params = ctx.query
        console.log(params)
        ctx.success({
            a: 1
        })
    } catch (e) {

    }
}
export async function testB(ctx, next) {
    try {
        let params = ctx.request.body
        console.log(params)
        ctx.success({
            a: 1
        })
    } catch (e) {

    }
}
export async function testC(ctx, next) {
    try {
        let params = ctx.query
        console.log(params)
        ctx.success({
            a: 1
        })
    } catch (e) {

    }
}
export async function testD(ctx, next) {
    try {
        let params = ctx.request.body
        console.log(params)
        ctx.success({
            a: 1
        })
    } catch (e) {

    }
}