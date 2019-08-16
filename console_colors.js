/**
 * Node.js 终端输出字体颜色/背景颜色
 * 可参考：
 *     https://misc.flogisoft.com/bash/tip_colors_and_formatting#terminals_compatibility
 */

// console.log('\x1b[40m red \x1b[0m')单一使用
// console.log('\x1b[40m \x1b[31m red \x1b[0m')嵌套使用
// \x1b 是十六进制表示 等于八进制表示的 033,也可以写为

// console.log('\u001b[31m red \u001b[39m');
// console.log('\033[31m red \033[39m');
// \033[31m、\033[39m 就是特殊的控制序列，\033[31m 表示红色的前景（文字）色，\033[39m 表示默认的前景（文字）色 

var styles = {
    'bold'          : ['\x1B[1m',  '\x1B[22m'],
    'italic'        : ['\x1B[3m',  '\x1B[23m'],
    'underline'     : ['\x1B[4m',  '\x1B[24m'],
    'inverse'       : ['\x1B[7m',  '\x1B[27m'],
    'strikethrough' : ['\x1B[9m',  '\x1B[29m'],
    'white'         : ['\x1B[37m', '\x1B[39m'],
    'grey'          : ['\x1B[90m', '\x1B[39m'],
    'black'         : ['\x1B[30m', '\x1B[39m'],
    'blue'          : ['\x1B[34m', '\x1B[39m'],
    'cyan'          : ['\x1B[36m', '\x1B[39m'],
    'green'         : ['\x1B[32m', '\x1B[39m'],
    'magenta'       : ['\x1B[35m', '\x1B[39m'],
    'red'           : ['\x1B[31m', '\x1B[39m'],
    'yellow'        : ['\x1B[33m', '\x1B[39m'],
    'whiteBG'       : ['\x1B[47m', '\x1B[49m'],
    'greyBG'        : ['\x1B[58m', '\x1B[49m'],
    'blackBG'       : ['\x1B[40m', '\x1B[49m'],
    'blueBG'        : ['\x1B[44m', '\x1B[49m'],
    'cyanBG'        : ['\x1B[46m', '\x1B[49m'],
    'greenBG'       : ['\x1B[42m', '\x1B[49m'],
    'magentaBG'     : ['\x1B[45m', '\x1B[49m'],
    'redBG'         : ['\x1B[41m', '\x1B[49m'],
    'yellowBG'      : ['\x1B[43m', '\x1B[49m']
};

for(var key in styles){
	var val = styles[key]
	console.log(val[0] +key+ val[1]);
}
