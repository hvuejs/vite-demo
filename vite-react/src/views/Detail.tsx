/*
 * @Author: 清风
 * @Date: 2021-02-22 11:36:59
 * @Description: 
 */

import React from 'react';
import { RouteComponentProps, match } from "react-router-dom";

export interface IProps extends RouteComponentProps {
  match: match<{
    userId: string
  }>;
}

export default function Detail(props: IProps) {
  console.log(props)
  return (
    <div>
      <h2>详情</h2>
      { props.match.params.userId }
    </div>
  )
}

