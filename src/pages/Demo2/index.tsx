import * as React from 'react';
import './index.less';

export interface Demo2Props {
  
}
 
export interface Demo2State {
  
}
 
class Demo2 extends React.Component<Demo2Props, Demo2State> {
  constructor(props: Demo2Props) {
    super(props);
  }
  render() { 
    return ( <div className="demo2">
      hello world! demo2
    </div> );
  }
}
 
export default Demo2;