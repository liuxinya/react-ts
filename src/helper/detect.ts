const Detect: DetectObj =  {
    detectDataChange(param: DetectDataParamObj) {
        Object.defineProperty(param.obj, param.key, {
            // get: function() {},
            set: (val: any) => {
                param.oper(val)
            }
        })
    }
}
export { Detect }

interface DetectDataParamObj {
    obj: any;
    key: string;
    oper: (val: any) => any
}
interface DetectObj {
    detectDataChange: (param: DetectDataParamObj) => any
}