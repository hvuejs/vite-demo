/*
 * @Author: 清风
 * @Date: 2021-02-20 10:15:41
 * @Description: 使用 react-copy-to-clipboard 封装复制信息按钮 hooks
 */
import React, { useCallback, ReactElement } from 'react';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import {useTransitionState} from './transition-state';

interface Props {
  text: string,
  children: ReactElement
}

const CopyButton = ({ text, children }: Props) => {
  const [noticing, setNoticing] = useTransitionState(false, 2500);
  const copy = useCallback((text) => {
    if (!text) {
      console.log('请输入内容');
    } else {
      console.log("复制成功！", text)
      setNoticing(true)
    }
  }, [noticing]);

  return (
    <CopyToClipboard text={text} onCopy={ copy }>
      { children }
    </CopyToClipboard>
  )
}


export default CopyButton;