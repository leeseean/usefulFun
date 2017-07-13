//定义两个全局变量
var reg;
var errorInfo;
//每个验证都需要调用此方法
function verifyByReg(value, reg, errorInfo) {
    if (value != '' && reg != '') {
        var regExp = new RegExp(reg);
        if (!regExp.test(value)) {
            alert(errorInfo);
            throw errorInfo;
        }
    }
}
//输入的数字类型必须是int型,正负整数都可以
function validate_integer(text, value) {
    reg = /^[-\+]?\d+$/;
    errorInfo = text + " " + value + " 只能是整数,请核实重新输入!";
    verifyByReg(value, reg, errorInfo);
}
//输入的数字类型必须是double型,保留的小数位数只能是2位,可以为正负
function validate_double(text, value) {
    reg = /^[-\+]?([1-9](\d+)?|0)(\.\d{2})$/;
    errorInfo = text + " " + value + " 只能保留2为小数,请核实重新输入";
    verifyByReg(value, reg, errorInfo);
}
//输入的必须是全是数字类型型,不能出现其他字符
function validate_number(text, value) {
    reg = /^\d+$/;
    errorInfo = text + " " + value + " 只能是数字,请核实重新输入";
    verifyByReg(value, reg, errorInfo);
}
//验证输入n位的数值类型
function validate_number_n(text, value, n) {
    reg = eval("/^\\d{" + n + "}$/");
    errorInfo = text + " " + value + " 只能是" + n + "位数字,请核实重新输入";
    verifyByReg(value, reg, errorInfo);
}
//验证有两位小数的正实数
function validate_decimal_two(text, value) {
    reg = /^([1-9](\d+)?|0)(.[0-9]{2})?$/;
    errorInfo = text + " " + value + " 只能是保留2位小数的正数,请核实重新输入";
    verifyByReg(value, reg, errorInfo);
}
//验证非零的正整数
function validate_number_positive(text, value) {
    reg = /^\+?[1-9][0-9]*$/;
    errorInfo = text + " " + value + " 只能是非0的正整数,请核实重新输入";
    verifyByReg(value, reg, errorInfo);
}
//验证非零的负整数
function validate_number_negative(text, value) {
    reg = /^[-][1-9][0-9]*$/;
    errorInfo = text + " " + value + " 只能是非0的负整数,请核实重新输入";
    verifyByReg(value, reg, errorInfo);
}
//验证非负整数,可以为0
function validate_positive_haszero(text, value) {
    reg = /^[1-9](\d+)?|0$/;
    errorInfo = text + " " + value + " 只能是是0或正整数,请核实重新输入";
    verifyByReg(value, reg, errorInfo);
}
//验证非正整数,可以为0
function validate_negative_haszero(text, value) {
    reg = /^\-[1-9](\d+)?|0$/;
    errorInfo = text + " " + value + " 只能是是0或负整数,请核实重新输入";
    verifyByReg(value, reg, errorInfo);
}
//验证非负浮点数（正浮点数 + 0）
function validate_float_notnegative(text, value) {
    reg = /^([1-9](\d+)?|0)(\.\d+)|0$/;
    errorInfo = text + " " + value + " 只能是是0或正浮点数,请核实重新输入";
    verifyByReg(value, reg, errorInfo);
}
//验证正浮点数
function validate_float_positive(text, value) {
    reg = /^([1-9](\d+)?|0)(\.\d+)$/;
    errorInfo = text + " " + value + " 只能是正浮点数,请核实重新输入";
    verifyByReg(value, reg, errorInfo);
}
//非正浮点数（负浮点数 + 0）
function validate_float_notpositive(text, value) {
    reg = /^\-([1-9](\d+)?|0)(\.\d+)|0$/;
    errorInfo = text + " " + value + " 只能是是0或者负浮点数,请核实重新输入";
    verifyByReg(value, reg, errorInfo);
}
//验证负浮点数
function validate_float_negative(text, value) {
    reg = /^\-([1-9](\d+)?|0)(\.\d+)$/;
    errorInfo = text + " " + value + " 只能是负浮点数,请核实重新输入";
    verifyByReg(value, reg, errorInfo);
}
//验证正浮点数多少位小数
function validate_float_posbit(text, value, n) {
    reg = eval("/^(\\d+)(\\.\\d{" + n + "})$/");
    errorInfo = text + " " + value + " 只能是" + n + "位正浮点数,请核实重新输入";
    verifyByReg(value, reg, errorInfo);
}
//验证负浮点数多少位小数
function validate_float_negbit(text, value, n) {
    reg = eval("/^(-?\\d+)(\\.\\d{" + n + "})$/");
    errorInfo = text + " " + value + " 只能是" + n + "位负浮点数,请核实重新输入";
    verifyByReg(value, reg, errorInfo);
}
//校验文本是否为空
function checknull(text, value) {
    if (value == "" || typeof (value) == 'undefined') {
        errorInfo = text + " " + value + " 不能为空,请重新输入!";
        returnInfo(errorInfo);
    }
}
//验证由26个英文字母组成的字符串
function validate_string_letter(text, value) {
    reg = /^[A-Za-z]+$/;
    errorInfo = text + " " + value + " 只能是26位不区分大小写的英文字母组成,请核实重新输入";
    verifyByReg(value, reg, errorInfo);
}
//验证由26个英文字母的大写组成的字符串
function validate_string_bigletter(text, value) {
    reg = /^[A-Z]+$/;
    errorInfo = text + " " + value + " 只能是26位大写的英文字母组成,请核实重新输入";
    verifyByReg(value, reg, errorInfo);
}
//验证由26个英文字母的小写组成的字符串
function validate_string_smallletter(text, value) {
    reg = /^[a-z]+$/;
    errorInfo = text + " " + value + " 只能是26位小写的英文字母组成,请核实重新输入";
    verifyByReg(value, reg, errorInfo);
}
//验证由数字和26个英文字母组成的字符串
function validate_string_number(text, value) {
    reg = /^[A-Za-z0-9]+$/;
    errorInfo = text + " " + value + " 只能是数字和26个英文字母组成,请核实重新输入";
    verifyByReg(value, reg, errorInfo);
}
//验证由数字、26个英文字母或者下划线组成的字符串
function validate_string_numberandunderline(text, value) {
    reg = /^\w+$/;
    errorInfo = text + " " + value + " 只能是数字、26个英文字母或者下划线组成,请核实重新输入";
    verifyByReg(value, reg, errorInfo);
}
//验证邮箱
function validate_email(value) {
    reg = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
    errorInfo = '邮箱 ' + value + " 无效,请重新输入";
    verifyByReg(value, reg, errorInfo);
}
//验证时如果选择默认调用此方法 金额类型,可以是正整数或保留4位有效数字的正整数
/**有问题
function validate_money_default(text,value){
var reg=/^\d+(\.\d{4})?$/;
var errorInfo=text+" "+value+" 只能是正整数或保留4位有效数字,请核实重新输入";
verifyByReg(value,reg,errorInfo);
}
**/
//验证输入的只能是中文
function validate_chinese(text, value) {
    reg = /^[\u4e00-\u9fa5]+$/;
    errorInfo = text + " " + value + " 只能是中文字符,请重新输入";
    verifyByReg(value, reg, errorInfo);
}
//验证输入的只能是n位的中文
function validate_bitchinese(text, value, bit) {
    reg = eval("/^[\\u4e00-\\u9fa5]{" + bit + "}$/");
    alert(reg);
    errorInfo = text + " " + value + " 只能是" + bit + "位中文字符,请重新输入";
    verifyByReg(value, reg, errorInfo);
}
//跟最大的值比较,此方法是看数字是否超出系统的上限
function thanMax(text, number, max) {
    if (number > max) {
        errorInfo = text + " " + number + " 不能大于" + max + ",请重新输入";
        returnInfo(errorInfo);
    }
}
//跟最小的值比较,此方法是看数字是否低于系统的下限
function thinMin(text, number, min) {
    if (number < min) {
        errorInfo = text + " " + number + " 不能小于" + min + ",请重新输入";
        returnInfo(errorInfo);
    }
}
//输入文本的字符串是否在系统的指定长度内
function isLimit(text, value, length) {
    var arr = value.split("");
    if (arr.length > length) {
        errorInfo = text + " " + value + " 字符过长,请输入最多" + length + "位字符";
        returnInfo(errorInfo);
    }
}
//邮政编码的验证
function validate_zipcode(value) {
    reg = /[1-9]\d{5}(?!\d)/;
    errorInfo = '邮政编码 ' + value + " 有误,请核实重新输入";
    verifyByReg(value, reg, errorInfo);
}
//对数值类型的数据进行简单的验证和转换,因为在设置的时候没有传入这个参数的话就会出现js代码错误，所以应该对数值型的数据进行转换
//非空字符的判定
function getZeroByNull(text, value) {
    errorInfo = text + " " + value + " 不能为空,请核实重新输入";
    if (value == null || value == '' || value == 'undefined') {
        returnInfo(errorInfo);
    }
}
//身份证验证,分为了两种,15位和18位
function validate_IdCard(value) {
    var size = value.split("");
    if (size.length == 15) {
        reg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/; //15位身份证验证
        errorInfo = '位身份证号码 ' + value + " 有误,请核实重新输入";
    } else if (size.length == 18) {
        reg = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X|x)$/; //18位身份证验证
        errorInfo = '位身份证号码 ' + value + " 有误,请核实重新输入";
    } else {
        errorInfo = "请输入合法的身份证号码!";
        returnInfo(errorInfo);
    }
    verifyByReg(value, reg, errorInfo);
}
//不进过正则表达式验证,只需要返回信息,适合内部调用此方法
function returnInfo(message) {
    alert(message);
    throw message;
}
//许可证号 生产企业的格式：QS 1234 2346 3456 其中空格可有可无
///经营企业许可证的格式为: 湘010249 但是中国的省会简称可能会有三个字的，所以中文可以定义为1-3个
function validate_license(value, type) {
    if (type == 1) {
        reg = /^[a-zA-Z]{2}[ ]?(\d{4}[ ]?\d{4}[ ]?\d{4})$/; //生产企业许可证号
        errorInfo = "生产许可证号 " + value + " 有误,请核实重新输入!";
    } else if (type == 2) {
        reg = /^[\u4e00-\u9fa5]{1,3}\d{6}$/;
        errorInfo = "经营许可证号 " + value + " 有误,请核实重新输入!";
    }
    verifyByReg(value, reg, errorInfo);
}
//传真 可以匹配的字符串如：+123 -999 999 ； +123-999 999 ；123 999 999 ；+123 999999等
function validate_fax(value) {
    reg = /^([+]{0,1})?\d{1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/;
    errorInfo = "传真 " + value + " 有误,请重新输入!";
    verifyByReg(value, reg, errorInfo);
}
//电话号码可以输入：电话或者手机 其中手机号码可以是(+86)、(86)+号码，也可以是号码 电话的号码可以是区号+号码 区号-号码 号码
function validate_tel(value) {
    reg = /(^(0\d{2,3}([-|+])?)?\d{7}$)|(^(\d{3,4}([-|+])?)?\d{7,8}$)|(^([+]?(86)?[+]?)1[3-9]\d{9}$)/;
    errorInfo = '电话号码 ' + value + " 有误,请核实重新输入!";
    verifyByReg(value, reg, errorInfo);
}
//日：大于0小于等于31的正整数
function validate_day(value) {
    reg = /(^[0]?[1-9]$)|(^[1-2]\d$)|(^[3][0-1]$)/;
    errorInfo = '日期 ' + value + " 有误,请核实重新输入!";
    verifyByReg(value, reg, errorInfo);
}
//月：合法月份
function validate_month(value) {
    reg = /(^[0]?[1-9]$)|(^[1][0-2]$)/;
    errorInfo = '月份 ' + value + " 有误,请核实重新输入!";
    verifyByReg(value, reg, errorInfo);
}
//年：合法年份 在这里合法的年份为公元1000年至公元2999年
function validate_year(value) {
    reg = /^[1-2]\d{3}$/;
    errorInfo = '年份 ' + value + " 有误,请核实重新输入!";
    verifyByReg(value, reg, errorInfo);
}
//百分比：合法百分比（0-100之前的数字）
function validate_percentage(text, value) {
    reg = /(^[1-9](\d)?(\.\d+)?$)|(^0(\.\d+)?$)|(^100$)/;
    errorInfo = text + " " + value + " 有误,请输入0到100的数字!";
    verifyByReg(value, reg, errorInfo);
}
//系数：小于等于1的正数 在这里系数的小数点后面也是2位
function validate_modulus(text, value) {
    reg = /^[0](\.\d{2})$|^[1](\.[0]{2})?$/;
    errorInfo = text + " " + value + " 有误,请输入小于0到1的数字!";
    verifyByReg(value, reg, errorInfo);
}
//验证非负的正数，包含了正整数和正浮点数
function validate_posnumhaszero(text, value) {
    checknull(text, value);
    reg = /^[1-9](\d+)?(\.\d+)?$|^0(\.\d+)?$/;
    errorInfo = text + " " + value + " 有误，请输入大于或等于0 的数字!";
    verifyByReg(value, reg, errorInfo);
}
//验证非正的负数，包含了负整数和负浮点数
function validate_negnumhaszero(text, value) {
    checknull(text, value);
    reg = /^[-][1-9](\d+)?(\.\d+)?$|^[-]0(\.\d+)?$/;
    errorInfo = text + " " + value + " 有误，请输入小于或等于0 的数字!";
    verifyByReg(value, reg, errorInfo);
}
//验证正数，包含了正整数和正浮点数
function validate_posnum(text, value) {
    checknull(text, value);
    reg = /^[1-9](\d+)?(\.\d+)?$|^0(\.\d+)$/;
    errorInfo = text + " " + value + " 有误，请输入大于0 的数字!";
    verifyByReg(value, reg, errorInfo);
}
//验证负数，包含了负整数和负浮点数
function validate_negnum(text, value) {
    checknull(text, value);
    reg = /^[-][1-9](\d+)?(\.\d+)?$|^[-]0(\.\d+)$/;
    errorInfo = text + " " + value + " 有误，请输入小于0 的数字!";
    verifyByReg(value, reg, errorInfo);
}
//验证数,包括所有的数值,正数、负数、正浮点数、负浮点数
function validate_allnum(text, value) {
    checknull(text, value);
    reg = /^[-|+]?[1-9](\d+)?(\.\d+)?$|^[-|+]?0(\.\d+)?$/;
    errorInfo = text + " " + value + " 有误，请输入数字!";
    verifyByReg(value, reg, errorInfo);
}
//获取地址栏参数
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
//判断是否纯标签无id，class等属性，也无内容
function RegSingleTag(str){
    return ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i ).test(str);
}
