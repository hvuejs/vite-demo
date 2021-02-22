/*
 * @Author: 清风
 * @Date: 2021-02-02 17:14:05
 * @Description: 
 */
import React, { useLayoutEffect, useState } from "react";

/**
 *  useLayoutEffect
 * 
      一般将useLayoutEffect称为有DOM操作的副作用hooks。作用是在DOM更新完成之后执行某个操作。执行时机：在DOM更新之后执行与useEffect对比

  相同点

    1.第一个参数，接收一个函数作为参数
    2.第二个参数，接收【依赖列表】，只有依赖更新时，才会执行函数
    3.返回一个函数，先执行返回函数，再执行参数函数
    （所以说执行过程的流程是一样的）


  不同点

      执行时机不同。useLayoutEffect在DOM更新之后执行；useEffect在render渲染结束后执行。
      执行示例代码会发现useLayoutEffect永远比useEffect先执行，这是因为DOM更新之后，渲染才结束或者渲染还会结束

 */

function LayoutEffect() {
  const [num, setNum] = useState(0)

  //在类组件中用componentWillMount生命周期来实现
  useLayoutEffect(() => {
    console.log("useLayoutEffect")
    // 可以在此进行事件绑定
    return () => {
      // 在此进行事件移除
      console.log("1:"+num)
    } 
  }, [num])

  return (
    <div onClick={ () => setNum(n => n + 1)}>
      函数组件LayoutEffect————{ num }
    </div>
  )
}

export default LayoutEffect;