import React from 'react';
class Welcome extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      date: new Date(),
      test: "1"
    }

    setInterval(function () {
      this.setState({
        date: new Date(),
        test: 'constructor'
      })
    }, 5000)


    console.log("我是在constructor里面将props和state初始化好了")
  }
  componentWillMount() {
    this.setState({
      date: new Date(),
      test: "componentWillMount"
    })

    console.log("运行到这里，说明马上就运行render")
  }
  render() {

    console.log("这里就是 render")
    return (
      <div>
        <h1 className="title">Hello,{this.props.name}</h1>
        <h2> {this.state.date.toString()}</h2>
        <p>{this.state.test}</p>
      </div>
    );
  }
  componentDidMount() {
    this.setState({
      date: new Date(),
      test: "componentDidMount"
    })
    console.log("已经挂载到页面里了")
  }

  componentWillReceiveProps() {
    this.setState({
      date: new Date(),
      test: "componentWillReceiveProps"
    })
  }

  shouldComponentUpdate() {
    this.setState({
      date: new Date(),
      test: "shouldComponentUpdate"
    })

    return true;
  }
  componentWillUpdate() {
    
  }

  componentDidUpdate() {
    
  }

  componentWillUnmount() {
    console.log("结束了")
  }
}

// function Welcome(props){
//   return <h1 className="title"> Hello,{props.name}</h1>
// }
// module.exports = Welcome;
export default Welcome