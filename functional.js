//获取字符串长度，汉字算两个字符
function getStrLength(str){
    return str.replace(/[\u0391-\uFFE5]/g,"aa").length;  //先把中文替换成两个字节的英文，在计算长度
}
