import React from 'react';
// class Welcome extends React.Component {
//   render() {
//     return <h1  className="title">Hello,{this.props.name}</h1>;
//   }
// }

function Welcome(props){
  return <h1 className="title"> Hello,{props.name}</h1>
}
// module.exports = Welcome;
export default Welcome