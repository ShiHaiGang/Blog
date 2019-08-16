import config from './config';

// 接口环境
var BaseUrl = process.env.NODE_ENV == 'production' ? config.prod : config.deve;

/**
 * POST接口封装
 * [head]
 * imei:        设备的国际移动设备身份码
 * model:       设备型号
 * appId:       应用ID
 * vendor:      设备的生产厂商
 * channel:     渠道
 * version:     应用版本号
 * sourceType:  访问平台 = ['WEB', 'ANDROID', 'IOS', 'ADMIN', 'EDITOR', 'SHARE', 'MINIPROGRAM', 'ANY']
 * [WxRequest]
 * url:         开发者服务器接口地址
 * data:        请求的参数
 * method:      请求方法
 * header:      header
 * dataType:    返回的数据格式
 * responseType: 响应的数据类型
 * success:     成功的回调函数
 * fail:        失败的回调函数
 */

export default {
    post(param = {}) {
        var head = { 
            imei: param.head.imei || '', 
            model: param.head.model || '', 
            appId: param.head.appId || '2', 
            vendor: param.head.vendor || '', 
            channel: param.head.channel || '', 
            version: param.head.version || '1.0.0', 
            sourceType: param.head.sourceType || 'IOS',
        }
        var AccessToken = wx.getStorageSync('Access-Token');
        var WxRequest = new Promise((resolve, reject) => {
            wx.request({
                url: `${BaseUrl.api}${param.url}`,
                data: {
                    head: head || {},
                    // body: param.body || {}
                    ...param.body
                },
                method: param.method || 'POST',
                header: {'Access-Token': AccessToken, ...param.header}, // 默认值
                dataType: param.dataType || 'json',
                responseType: param.responseType || 'text',
                success(res) {
                    resolve(res.data)
                },	
                fail(err) {
                    reject(err)
                }
            })
        })
        return WxRequest
    },
    pay(param) {
        var head = {
            timeStamp: param.timeStamp || Date.parse(new Date()) + '',//时间戳
            nonceStr: param.nonceStr || 'shanghaijiupan',//随机字符串
            package: param.package || '',//prepay_id 参数值
            signType: param.signType || 'MD5',//默认
            paySign: param.paySign || '',//签名
        }
        var Payment = new Promise((resolve, reject) =>{
            wx.requestPayment({
                timeStamp: head.timeStamp,
                nonceStr: head.nonceStr,
                package: head.package,
                signType: head.signType,
                paySign: head.paySign,
                success(res) {
                    resolve(res)
                },
                fail(err) {
                    // reject(err)
                    reject('支付失败')
                }
            })
        })
        return Payment
    },
}