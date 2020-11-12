# Ioc Injectable 介绍

* Injectable 会把当前类，实例化， 并放到实例池里面，

* Ioc 就是 从实例池里面 拿出来


```ts
// 自动实例化 存起来
@Injectable()
export class UDynamicService {}
```

```ts
// 拿出来
const dy: UDynamicService = Ioc(UDynamicService)
```

* 它就是在帮你自动实例化

* 优势在于可以轻松解决多个类有依赖的情况

```ts
@Injectable()
export class A {
    testA() {}
}

@Injectable()
export class B {
    testB() {}
}

// 比如C 依赖 A B
@Injectable()
export class C {
    constructor(
        private a: A,
        private b: B
    ) {
        this.testC()
    }
    testC() {
        this.A.testA()
        this.B.testB()
    }
}
```


# UEventEmitter 介绍

* 提供了一种全局事件处理的方式
* 随时用，随意引

### 场景

 > A： 点击了按钮，想让 B和C知道

 ```ts
 // B

 const event: UEventEmitter = Ioc(UEventEmitter);
 event.on('clickFromA', (info) => {
     console.log('bbbbb', info)
 })
 ```

  ```ts
 // C

 const event: UEventEmitter = Ioc(UEventEmitter);
 event.on('clickFromA', (info) => {
     console.log('ccccc', info)
 })
 ```

  ```ts
 // A

 const event: UEventEmitter = Ioc(UEventEmitter);
 event.emit('clickFromA', '兄弟们我点击了')

 // B和C 事件 'clickFromA' 对应的回调都会执行. 并接收信息 '兄弟们我点击了'
 ```