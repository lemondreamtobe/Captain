export default {
  '/api/getDemo2': {
    method: 'get',
    data: {
      "data": [ // 充值项列表
        { // 充值项
          "price": 520, // 充值流量
          "code": 0 // 充值项目码
        },
        { // 充值项
          "price": 1200, // 充值流量
          "code": 1 // 充值项目码
        },
        { // 充值项
          "price": 2200, // 充值流量
          "code": 2 // 充值项目码
        },
        { // 充值项
          "price": 2500, // 充值流量
          "code": 3 // 充值项目码
        },
        { // 充值项
          "price": 12000, // 充值流量
          "code": 4 // 充值项目码
        },
      ],
      "error_code": 0,
      "message": "ok"
    }
  }
}
