/*
 * @Author: 清风
 * @Date: 2021-02-22 09:54:41
 * @Description: 
 */

import React from "react";
import { Link } from "react-router-dom";
import { renderRoutes } from "react-router-config";
export default function HooksWrap(props: any) {
  
  return (
    <div className="hooks-wrap">
      <ul>
        <li>
          <Link to="/hooks/class">class-useSate</Link>
        </li>
        <li>
          <Link to="/hooks/effect">class-effect</Link>
        </li>
        <li>
          <Link to="/hooks/function">function-useState</Link>
        </li>
        <li>
          <Link to="/hooks/usememo">useMemo</Link>
        </li>
      </ul>
      { renderRoutes(props.route.routes) }
    </div>
  )
}