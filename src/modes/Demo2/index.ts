import ActionModeBase from '../ActionModeBase';
import callAPI from '../../helpers/fetch';
import {actionTypes} from './types';

export class Demo2Mode extends ActionModeBase {
  async getDemo(params: any) {
    try {
      const res: any = await callAPI.get('/api/getDemo2', params);

      this.dispatch({
        type: actionTypes.SAVE_DEMO,
        payload: res.data
      });

    } catch(e) {
      return Promise.reject(e);
    }
  }
}
