
# Vue3.0正式发布，本次发布所有总结

## 3.性能方面的优化

    路由懒加载
    keep-alive缓存页面
    使用v-show复用DOM
    v-for 遍历避免同时使用 v-if
    长列表性能优化
    事件的销毁
    图片懒加载
    第三方插件按需引入
    无状态的组件标记为函数式组件
    子组件分割
    变量本地化
    SSR


## 4.更好的TypeScript集成

    改进的TypeScript支持，编辑器能提供强有力的类型检查和错误及警告
    更好的调试支持

## 5.用于处理大规模用例的新API

```
    reactive
    ref
    computed
    readonly
    watchEffect
    watch
    unref
    toRef
    toRefs
    isRef
    isProxy
    isReactive
    isReadonly
    customRef
    markRaw
    shallowReactive
    shallowReadonly
    shallowRef
    toRaw

```


## 7.composition-api设计目的

    旨在解决大型应用程序中Vue使用的难点。Composition API建立在反应性API之上，与2.x基于对象的API相比，可实现类似于React挂钩的逻辑组成和重用，更灵活的代码组织模式以及更可靠的类型推断。



## 新文档链接:

    新官网 https://v3.vuejs.org/
    迁移指南 https://v3.vuejs.org/guide/migration/introduction.html
    Composition API https://v3.vuejs.org/guide/composition-api-introduction.html