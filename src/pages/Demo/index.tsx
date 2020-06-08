import * as React from 'react';
import './index.less';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import {demoMode} from '../../modes';

export interface DemoProps {

}

export interface DemoState {

}

class Demo extends React.Component<DemoProps & RouteComponentProps, DemoState> {
  
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    demoMode.getDemo({id: 1});
  }

  goToDemo2 = () => {
    this.props.history.push('/demo2')
  }

  render() {
    return (<div className="demo" onClick={this.goToDemo2}>
      <span className="desc">
        Hello Captain! This island is Demo of {process.env.NODE_ENV}. My name is {process.env.CAPTAIN_NAME}
      </span>
    </div>);
  }
}

export default withRouter(Demo);