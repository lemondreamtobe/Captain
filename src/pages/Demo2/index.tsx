import * as React from 'react';
import './index.less';
import $$ from '../../helpers/fetch';
import {RouteComponentProps, withRouter} from 'react-router-dom';

export interface Demo2Props {

}

export interface Demo2State {

}

class Demo2 extends React.Component<Demo2Props & RouteComponentProps, Demo2State> {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    try {
      const res = await $$.get('/api/getDemo2');
      console.log(res);
    } catch (err) {
      console.log('/api/getDemo', err);
    }
  }

  goToDemo = () => {
    this.props.history.push('/')
  }

  render() {
    return (<div className="demo2" onClick={this.goToDemo}>
      <span className="desc">
        Hello Captain! This island is Demo2 of {process.env.NODE_ENV}. My name is {process.env.CAPTAIN_NAME}
        </span>
    </div>);
  }
}

export default withRouter(Demo2);
