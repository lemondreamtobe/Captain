import * as React from 'react';
import './index.less';

export interface DemoProps {
  
}
 
export interface DemoState {
  
}
 
class Demo extends React.Component<DemoProps, DemoState> {
  constructor(props: DemoProps) {
    super(props);
  }
  render() { 
    return ( <div className="demo">
      hello world!
    </div> );
  }
}
 
export default Demo;