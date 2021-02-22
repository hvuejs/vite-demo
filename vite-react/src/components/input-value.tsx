/*
 * @Author: 清风
 * @Date: 2021-02-20 11:30:44
 * @Description: hooks 封装 input 的值和事件
 */
import { useState, useCallback } from "react";

interface ChangeEvent {
  target: { value: string };
}

export interface InputValueState {
  value: string;
  onChange(e: ChangeEvent): void;
}


export function useInputValue(initialValue: string = ""): InputValueState {
  const [value, setValue] = useState(initialValue);
  const onChange = useCallback((e: ChangeEvent) => {
    setValue(e.target.value)
  }, [])
  return { value, onChange }
}