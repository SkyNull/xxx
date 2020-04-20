/**
 * Created by liying on 2018/9/20.
 */
/*
import obj from './a.js'; //这种引入方式 需要导出的文件加一个 default
console.log(obj);//输出结果是{obj: {…}}*/

import {obj,str} from './a.js';//这种方式采用的更多一点;
//大括号中的名字必须跟 导出的名字保持一致
//console.log(obj,str);//输出结果是{name: "珠峰"}
import * as qqq from './a.js';//可以将全部内容拿过来
console.log(qqq);
/*npm run dev*/


