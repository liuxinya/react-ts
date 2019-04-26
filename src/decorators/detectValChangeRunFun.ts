
// function Watch(onChange?: any) {
//     if (onChange == null) return;
//     return (target: any, propertyKey: string) => {
//         var key = "_" + propertyKey;
//         var get = function () { 
//                 return this[key]; 
//         };
//         var set = function (value: any) {
//             if (this[key] === value) return;
//             var oldValue = this[key];
//             this[key] = value;
//             var type = typeof onChange;
//             if (type === "function") {
//                 onChange(propertyKey, oldValue, this[key]);
//             } else if (type === "string" && this[onChange] != null) {
//                 this[onChange](propertyKey, oldValue, (this as any)[key]);
//             } else {
//                 console.log("watch:类" + target.constructor.name + "不存在方法：" + onChange);
//             }
//         }
//         Object.defineProperty(target, propertyKey, {
//             get,
//             set,
//             enumerable: true,
//             configurable: true
//         });
//     }
// }
// export { Watch };