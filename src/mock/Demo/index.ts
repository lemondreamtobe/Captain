export default {
  '/api/getDemo': {
    method: 'get',
    data: {
      "data": [ // 充值项列表
        { // 充值项
          "price": 50, // 充值流量
          "code": 0 // 充值项目码
        },
        { // 充值项
          "price": 100, // 充值流量
          "code": 1 // 充值项目码
        },
        { // 充值项
          "price": 200, // 充值流量
          "code": 2 // 充值项目码
        },
        { // 充值项
          "price": 500, // 充值流量
          "code": 3 // 充值项目码
        },
        { // 充值项
          "price": 1000, // 充值流量
          "code": 4 // 充值项目码
        },
      ],
      "error_code": 0,
      "message": "ok"
    }
  }
}
