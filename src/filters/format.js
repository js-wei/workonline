/**
 * @Author: 魏巍
 * @Date:   2017-10-24T10:53:05+08:00
 * @Email:  524314430@qq.com
 * @Last modified by:   魏巍
 * @Last modified time: 2017-11-24T09:33:02+08:00
 */
export const formart_date = (phptime,fmt='yyyy-MM-dd hh:mm:ss')=>{
	var t = new Date(phptime);  
	var tf = function(i){return (i < 10 ? '0' : '') + i};  
	return fmt.replace(/yyyy|MM|dd|hh|mm|ss/g, function(a){  
		switch(a){  
			case 'yyyy':  
				return tf(t.getFullYear());  
				break;  
			case 'MM':  
				return tf(t.getMonth() + 1);  
				break;  
			case 'mm':  
				return tf(t.getMinutes());  
				break;  
			case 'dd':  
				return tf(t.getDate());  
				break;  
			case 'hh':  
				return tf(t.getHours());  
				break;  
			case 'ss':  
				return tf(t.getSeconds());  
				break;  
		}  
	});    
}

export const is_formart_date=(phptime,fmt='yyyy-MM-dd hh:mm:ss')=>{
	var   now     = new Date(phptime*1000);
	var o = {
		"M+": now.getMonth() + 1, //月份 
		"d+": now.getDate(), //日 
		"h+" : now.getHours()%12 == 0 ? 12 : now.getHours()%12, //小时  
		"m+": now.getMinutes(), //分 
		"s+": now.getSeconds(), //秒 
		"q+": Math.floor((now.getMonth() + 3) / 3), //季度 
		"S": now.getMilliseconds() //毫秒 
	};
	        
	var week = {         
		"0" : "/u65e5",         
		"1" : "/u4e00",         
		"2" : "/u4e8c",         
		"3" : "/u4e09",         
		"4" : "/u56db",         
		"5" : "/u4e94",         
		"6" : "/u516d"        
	}; 
	        
	if(/(y+)/.test(fmt)){         
		fmt=fmt.replace(RegExp.$1, (now.getFullYear()+"").substr(4 - RegExp.$1.length));         
	}         
	if(/(E+)/.test(fmt)){         
		fmt=fmt.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "/u661f/u671f" : "/u5468") : "")+week[now.getDay()+""]);         
	}         
	for(var k in o){         
		if(new RegExp("("+ k +")").test(fmt)){         
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));         
		}         
	}         
	return fmt;        
}


/**
 * [subString 截取指定的字符串]
 * @param  {String}  [content=''] [内容]
 * @param  {Number}  [lng=50]     [截取长度]
 * @param  {Boolean} [flag=false] [是否超出隐藏]
 * @return {[type]}               [description]
 */
export const sub_string=(content,lng,flag=false)=>{
	if(!content){
		return '';
	}
	lng = lng || 20;
	flag = flag || false;
	return flag ? content.substring(0,lng) + '...' : content.substring(0,lng);
}
/**
 * [is_default 默认值]
 * @param  {[type]} content            [内容]
 * @param  {String} [str='似乎没有内容'] [替换内容]
 * @return {[type]}                    [description]
 */
export const is_default=(content,str='似乎没有内容')=>{
	if(!content){
		return str;
	}
	return content;
}

export const is_mobile_safe=(tel)=>{
	if(tel){
		return tel.substring(0,3)+"****"+tel.substring(8,11);
	}
	return '';
}
