/*
 * @Author: 清风
 * @Date: 2021-02-02 14:46:08
 * @Description: 类组件
 */
import React from "react";

type Props = {

}

export interface State {
  name: string,
  num: number
}

class StateClass extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      name: '类',
      num: 0
    }
  }

  componentDidMount() {
    setTimeout(() => {
      console.log(this.state.num)
    }, 3000)
  }

  componentDidUpdate() {
    setTimeout(() => {
      console.log(this.state.num)
    }, 3000)
  }

  render() {
    return (
      <div onClick={ this.setName }>
        这是一个类组件————{ this.state.name }
      </div>
    )
  }


  setName = () => {
    this.setState({
      name: '我通过类组件变成这样的',
      num: this.state.num + 1
    })
  }
  
}

export default StateClass;