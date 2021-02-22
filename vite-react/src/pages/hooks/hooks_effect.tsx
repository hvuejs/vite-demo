import React, { useEffect, useState } from "react";

function StateFn() {
  const [num, setNum] = useState(0);
  const [str, setStr] = useState("测试")

  /**
   *  如果不接受第二个参数，那么在第一次渲染完成之后和每次更新渲染页面的时候，都会调用useEffect的回调函数，所以你要考虑好使用场景。
   */
  useEffect(() => {
    console.log("函数组件结束渲染")
  }, [num])   // 改变useEffect第二个参数

  /**
   * 在这，我们可以对第二个参数传入一个数组，这个数组表示的是更新执行所依赖的列表，只有依赖列表改变时（当数组中的任意一项变化的时候，useEffect会被重新执行 ），才会触发回调函数

      1、传入的为空数组[]，那么即告诉useEffect不依赖于state、props中的任意值，useEffect就只会运行一次，常用场景为页面获取数据的方法可以写入此处进行调用，以获取页面初始数据
      2、传入一个值构建的数组、或者多个值构建的数组，如[num]、[num,val]，上述代码变更为如下。那么此时只有当数组中的值（任意一项即可）改变时，才会重新触发回调函数
   */

  return (
    <>
      <div onClick={ () => setNum(n => n + 1) }>
        这是一个函数组件——useEffect——{ num }
      </div>
      <div onClick={ () => setStr("我是字符串") }>
      这是一个函数组件——useEffect——{ str }
    </div>
    </>
  )
}

export default StateFn;