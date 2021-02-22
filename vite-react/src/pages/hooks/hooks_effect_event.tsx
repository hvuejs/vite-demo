import React, { useEffect, useState } from "react";

type ElementData = {
  clientX: number,
  clientY: number
}

/**
 *  清除副作用
 * 
 *      上面写的都是一些不需要清除的副作用，只是回调触发一些简单的方法，但是有一些副作用是需要清除的。
 *      例如绑定一些DOM事件，在这种情况下，清除工作是非常重要的，可以防止引起内存泄露，例如下面给出的代码对比

    1、未清除副作用的情况下。
      此时第一次点击正常输出一次打印当前位置，而后每一次useEffect调用都会新绑定一个updateMouse方法，那么点击一次所触发绑定的方法越来越多，
      那么之后点击一次就会疯狂打印打印当前位置，这也就造成了页面性能、内存泄露等问题

    2、清除副作用的情况下

        （1）首次刷新或进入页面会先执行除return以外的内容，也就是会执行一个绑定的方法，然后将updateMouse方法绑定到click事件上
        （2）并将改次useEffect中的事件清除返回出去，但是此时是并没有执行return中的内容的（重点注意）
        （3）然后当你点击第一次的时候，就会打印设置当前鼠标页面坐标，然后先执行上一次return返回出去的内容，注意这里是执行上一次return中的清除事件绑定方法，然后执行该清除事件绑定方法，当然清除也是清除的上一个useEffect中的绑定事件
        （4）然后再开始执行新的useEffect中的绑定事件方法，并再次将改次useEffect清除事件绑定的方法return返回出去，如此就形成了一个链式一样的过程
        （5）当页面卸载的时候，会执行最后一次return返回出来的清除事件绑定的方法，这样也就保证了页面卸载的时候，移除了绑定添加的DOM事件方法。
 */

 
function EffectFn() {
  const [positions, setPositions] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const updateMouse = (e: ElementData) => {
      console.log('打印当前位置')
      setPositions({ x: e.clientX, y: e.clientY })
    }
    document.addEventListener('click', updateMouse)

    // 如果不销毁就会造成页面性能下降，内存泄漏（真实测试案例）
    return () => {
      //  在每次执行useEffect之前都会执行上一次return中内容
      document.removeEventListener("click", updateMouse)
      //  移除绑定方法事件(要修改依赖，绑定到依赖上)
      console.log("销毁")
    }
  })
  return (
    <div>
      <p>X: {positions.x}</p>
      <p>Y: {positions.y}</p>
    </div>
  )
}


export default EffectFn;