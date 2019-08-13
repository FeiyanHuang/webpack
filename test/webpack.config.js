const path=require('path');

module.exports={
	//JavaScript执行入口文件,
	entry:'./src/js/main.js',
	//需要指定一下输出的路径path和输出的文件名filename
	output:{
		filename:'bundle.js',   //自定义输出文件名
		path:path.resolve(__dirname,'./dist')  //自定义输出文件所在目录
    },
    mode: 'development'
}
// 原文链接：https://blog.csdn.net/maolaixin/article/details/84102122
// https://github.com/ruanyf/webpack-demos   npm install webpack-cli -g