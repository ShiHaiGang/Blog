import axios from './axios';

/**
 * BaseApi.post 支持的配置
 * @param {string} url url
 * @param {object} head 自定义头
 * @param {object} body 请求参数
 * @param {string} method 请求方法
 * @param {object} header header
 * @param {string} dataType 返回的数据格式
 * @param {string} responseType 响应的数据类型
 */
export default {
	//登录
	loginServer (params) {
		return axios.post({
			url: `/private/miniprogram/home`,
			head: {
				appId: '2',
			},
			body: params
		})
    } 
}