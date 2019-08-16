/**
 * 环境接口地址配置
 * deve 开发接口
 * prod 生产接口
 */

export default {
	deve: {
		api: 'https://test.xyztree.com/api',
		socket: 'wss://test.xyztree.com/socket'
	},
	prod: {
		api: 'https://api.xyztree.com',
		socket: 'wss://api.xyztree.com/socket'
	}
}
