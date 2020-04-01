import 'reflect-metadata';
export type IConstructor<T> = new (...args: any[]) => T;

const FUNCTIONS = Symbol('functions');
const INSTANCES = Symbol('instances');

export function Injectable<T>() {
  return (target: IConstructor<T>) => {
    const paramsTypes = Reflect.getMetadata('design:paramtypes', target);
    Reflect.defineMetadata(FUNCTIONS, paramsTypes, target);
  };
}

// 获取某个依赖
export function Ioc<T>(target: IConstructor<T>): T {
  const instance = Reflect.getMetadata(INSTANCES, target);
  if (instance) {
    return instance;
  }
  // 获取这个target的依赖
  const paramsTypes: any[] = Reflect.getMetadata(FUNCTIONS, target) || [];
  // 接下来就需要获取所有的依赖
  const params = paramsTypes.map((rely: any) => {
    return Ioc(rely);
  });
  const tempInstance: T = new (target as any)(...params);
  Reflect.defineMetadata(INSTANCES, tempInstance, target);
  return tempInstance;
}

export function Iocable() {
  return (target: any, key: string) => {
    const type = Reflect.getMetadata('design:type', target, key);
    target[key] = Ioc(type);
  };
}
