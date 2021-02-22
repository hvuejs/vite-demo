/*
 * @Author: 清风
 * @Date: 2021-02-20 13:10:06
 * @Description: 
 */
import React from "react";
import CopyButton from "../components/CobyButton";
import { useInputValue } from "../components/input-value";

function CopyDemo() {
  const message = useInputValue("测试");

  return (
    <div>
        <input type="text" { ...message } />
        <CopyButton text={ message.value }>
          <button>复制</button>
        </CopyButton>
      </div>
  )
}

export default CopyDemo;