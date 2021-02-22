/*
 * @Author: 清风
 * @Date: 2021-02-20 13:35:20
 * @Description: 
 */

import React, {  Component } from "react";
const asyncComponent = (importComponent: any) => {
  return class extends Component<any, {
    component: any
  }> {
    constructor(props:any) {
      super(props)
      this.state = {
        component: null
      }
    }
		
		componentDidMount() {
			importComponent() //我们传进来的函数返回我们想要的组件B
				.then((cmp: any) => {
					this.setState({component: cmp.default}); //把组件B存起来
				});
		}
		
		render() {
			const C = this.state.component;  // 渲染的时候把组件B拿出来
			return C && <C {...this.props}/> // 返回的其实就是组件B，并且把传给A的属性也转移到B上
		}
	}
};

export default asyncComponent;


  //   <Router >
  //   <Switch>
  //     {
  //       routers.map((router, index) => {
  //         return (
  //           <Route key={index} path={router.path} exact={router.exact} render={(props) => 
  //             <router.component {...props} routes={ router.children }>
  //               {
  //                 router.children?.map((item, itemIndex) => {
  //                   return (
  //                     <Route exact={item.exact} key={itemIndex} path={item.path} render={(props) => <item.component {...props} >
  //                       {
  //                         item.children?.map((child, childIndex) => {
  //                             return (
  //                                 <Route
  //                                     exact={child.exact}
  //                                     key={childIndex}
  //                                     path={child.path}
  //                                     render={(props)=><child.component { ...props }/> }
  //                                 />
  //                             )
  //                         })
  //                       }
  //                     </item.component>} ></Route>
  //                   )
  //                 })
  //               }
  //             </router.component>
  //           } ></Route>
  //         )
  //       })
  //     }
  //   </Switch>
  // </Router>
  

