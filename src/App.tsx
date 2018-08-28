import * as React from 'react';
import './App.less';

class App extends React.Component {
  arr: number[] = [1,2,3,4,5,6];
  liItems: JSX.Element[] = this.arr.map((item: number, index) => {
    return <li key={index}>{item * 2}</li>;
  })
  public render() {
    return (
      <div className="app">
        <ul className='li-w'>
          {this.liItems}
        </ul>
      </div>
    );
  }
  // hehe() {
  //   this.arr[0] = 11111;
  // }
}

export default App;
