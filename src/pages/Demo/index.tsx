import * as React from 'react';
import './index.less';
import $$ from '../../helpers/fetch';
import {withRouter, RouteComponentProps} from 'react-router-dom';

export interface DemoProps {

}

export interface DemoState {

}

class Demo extends React.Component<DemoProps & RouteComponentProps, DemoState> {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    try {
      const res = await $$.get('/api/getDemo');
      console.log(res);
    } catch (err) {
      console.log('/api/getDemo', err);
    }
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