/*
 * @Author: 清风
 * @Date: 2021-02-20 16:50:43
 * @Description: 
 */
import React from "react";

import { Link, Switch } from "react-router-dom";
import { renderRoutes } from "react-router-config"

export default class Demo extends React.Component<any, any> {
  render() {
    return (
      <div>
        demo测试
        <ul>
        <li><Link to='/demo/demo1'>demo1</Link></li>
            <li><Link to='/demo/demo2'>demo2</Link></li>
            <li><Link to='/demo/demo3'>demo3</Link></li>
        </ul>
        {
          renderRoutes(this.props.route.routes)
        }
      </div>
    )
  }
}