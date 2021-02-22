/*
 * @Author: 清风
 * @Date: 2021-02-20 16:31:15
 * @Description: 
 */
import AsyncCom from "../config/asyncRouter";

import Home from "../views/Home";
import Detail from "../views/Detail";
import CopyCom from "../views/CopyDemo";

import Demo from "../pages/demo/index";
import Demo1 from "../pages/demo/1";
import Demo2 from "../pages/demo/2";
import { lazy } from "react";
const Demo3 = AsyncCom(() =>import("../pages/demo/3"));

// hooks
import HooksWrap from "../pages/hooks/index";
import FunctionCom from "../pages/hooks/hooks_function";

interface router {
  path:string,
  component: any,
  exact?: boolean,
  routes?:Array<router>
}

const routers:Array<router> = [
  {
      path:'/',
      component: Home,
      exact: true
  },
  {
    path: '/demo',
    component: Demo,
    routes:[
      {
          path:'/demo/demo1',
          component:Demo1
      },
      {
          path:'/demo/demo2',
          component:Demo2
      },
      {
          path:'/demo/demo3',
          component:Demo3
      }
    ]
  },
    
  {
    path: '/detail/:userId',
    component: Detail
  },
  {
    path: '/copy',
    component: CopyCom
  },
  {
    path: '/hooks',
    component: HooksWrap,
    routes: [
      {
        path: '/hooks/class',
        component: lazy(() => import("../pages/hooks/hooks_class")),
      },
      {
        path: '/hooks/effect',
        component: lazy(() => import("../pages/hooks/hooks_effect")),
      },
      {
        path: '/hooks/function',
        component: FunctionCom,
      },
      {
        path: '/hooks/usememo',
        component: lazy(() =>import("../pages/hooks/hooks_useMemo")),
      },
    ]
  },
]
export default routers

