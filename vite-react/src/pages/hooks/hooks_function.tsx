/*
 * @Author: 清风
 * @Date: 2021-02-02 15:28:30
 * @Description: 
 */
import React, { useEffect, useState } from "react";


function StateFunction() {
  const [name, setName] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      console.log(name)
    }, 3000)
  })

  return (
    <div onClick={ () => setName(name => name + 1) }>
      这是一个函数组件—————{ name }
    </div>
  )
}


export default StateFunction;