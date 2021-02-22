/*
 * @Author: 清风
 * @Date: 2021-02-02 17:51:17
 * @Description: 
 */
import React, { useState, useMemo } from "react";

/**
 *  使用useMemo可以传递一个创建函数和依赖项，创建函数会需要返回一个值，只有在依赖项发生改变的时候，才会重新调用此函数，返回一个新的值。
 *  简单来说，作用是让组件中的函数跟随状态更新（即优化函数组件中的功能函数）。

      使用：

        1.接收一个函数作为参数
        2.同样接收第二个参数作为依赖列表（可以与useEffect、useLayoutEffect进行对比学习）
        3.返回的是一个值。返回值可以是任何，函数、对象等都可以

 */

function useMemoFn() {
  const [age, setAge] = useState(0);
  const [num, setNum] = useState(1);

  const getDoubleNum = useMemo(() => {
    console.log(`获得双倍num${num}`)
    return 2 * num
  }, [num])
  return (
    <div className="hooks-usememo">
      <h2>hooks-useMemo</h2>
      <div>
        <button onClick={() => setAge(n => n + 1)}>增加年龄</button>
        <p>年龄：{ age }</p>
      </div>
      <div>
        <button onClick={() => setNum(n => n + 1)}>增加</button>
        <p>数量：{ getDoubleNum }</p>
      </div>
    </div>
  )

}

export default useMemoFn;