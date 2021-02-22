/*
 * @Author: 清风
 * @Date: 2021-02-22 14:33:20
 * @Description: 
 */
import React, { useState, useCallback, useMemo, useEffect } from "react";

const set: any = new Set();
export default function useCallbackFn() {
  const [num, setNum] = useState(1)
  const [age, setAge] = useState(18)

  const getDoubleNum1 = useMemo(() => {
      console.log(`获取双倍Num：${num}`)
      return 2 * num  //	①假设为复杂计算逻辑
  },[num])

  const getDoubleNum2 = useCallback(() => {
      console.log(`获取双倍Num2：${num}`)
      return 2 * num  //	②假设为复杂计算逻辑
  },[] )
  set.add(getDoubleNum2())  //	③注意set打印的长度变化（设置Callback的依赖为[]、[num]进行对比）

  console.log('set.size：',set.size)

  return (
    <div>
        <button  onClick={ () => { setNum( num => num + 1 ) }  }>+</button>
        <p> 这是一个函数式组件————num1：{ getDoubleNum1 }   {/* //①useMemo情况下 */}
          </p>
        <p> 这是一个函数式组件————num2：{  getDoubleNum2()} {/* //②useCallback情况下 */}
          </p>
          <br></br>
          age的值为————{ age }
      <br></br>
      <div className="parent-wrap">
        <hr />
        Parent: 
       <Parent />
      </div>
      </div>
  )
}



// useCallback 使用场景

function Child(props: any) {
  useEffect(() => {
    console.log("callback更新了")
  }, [props.callback])
  console.log(props)
  return (
    <div>
      子组件的值：{ props.callback }
    </div>
  )
}

function Parent() {
  const [num, setNum] = useState(1);
  const [age, setAge] = useState(18);

  const getDoubleNum = useCallback(() => {
    console.log(`获取双倍num =>:${ num }`)
    return 2 * num
  }, [num])

  return (
    <div>
      <button onClick={() => setNum(n => n + 1)}>加加</button>
      <p>这是一个函数式组件————num：{getDoubleNum()}</p>
      <p>age：{age}</p>
      <Child callback={ getDoubleNum() } />
    </div>
  )
}


