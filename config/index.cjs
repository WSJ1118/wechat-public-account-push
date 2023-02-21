/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx8ad041efcc41c51f',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '0fb183ac3f8c64025498b0f779ca2e48',

  PROVINCE: '陕西',
  CITY: '西安市',

  USERS: [
    {
      // 想要发送的人的名字
      name: '',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ookk_5nPcqGIq70E4QnGcxjeqdLI',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'EzhDVc1liK7a3kCPK5sEqCIKsR4ol55gIs5fhFme8PQ',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '11-18',
      "birthday1": {"name": "佳佳小仙女", "birthday": "2000-11-18"}, # 生日1，姓名和生日，生日若为农历在最前面加上r即可
      "birthday2": {"name": "程大傻子", "birthday": "1999-12-26"}, # 生日2，同上
      "note_ch": "在最好的时光，做想做的梦，去想去的地方", # 金句中文，如果设置了，则会显示这里的，如果为空，默认会读取金山的每日金句
      "note_en": "study hard and make progress every day!" # 金句英文
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1996', date: '09-09',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '李四', year: '1996', date: '09-31',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2020-11-07' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
    }
  ],

}

module.exports = USER_CONFIG

