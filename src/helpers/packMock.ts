import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import $$ from 'lodash';

const mock = new MockAdapter(axios);

export default (...mocks) => {
  mocks.forEach(mockFile => {
    let mockAPIs = {};

    if ($$.isFunction(mockFile)) {
      mockAPIs = mockFile();
    } else if ($$.isObject(mockFile)) {
      mockAPIs = mockFile;
    } else {
      throw new Error('mock file require both Function or Object');
    }

    for (const key in mockAPIs) {
      const url = key;
      const method = mockAPIs[key].method;
      const data = mockAPIs[key].data;
      let mockpad = method === 'get' ?  mock.onGet : mock.onPost;
      mockpad = mockpad.bind(mock);
      mockpad(url).reply(config => {
        return [
          200,
          data,
        ];
      });
    }
  })
}
