//获取字符串长度，汉字算两个字符
export const getStrLength = function (str) {
    return str.replace(/[\u0391-\uFFE5]/g, "aa").length; //先把中文替换成两个字节的英文，在计算长度
}
//
export const now = Date.now || function () {
    return new Date().getTime();
};
//延迟执行函数，多用在输入框或者滚动时
/**
 * 空闲控制 返回函数连续调用时，空闲时间必须大于或等于 wait，func 才会执行
 *
 * @param  {function} func        传入函数
 * @param  {number}   wait        表示时间窗口的间隔
 * @param  {boolean}  immediate   设置为ture时，调用触发于开始边界而不是结束边界
 * @return {function}             返回客户调用函数
 */
export const debounce = function (func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function () {
        // 据上一次触发时间间隔
        var last = Date.now() - timestamp;

        // 上次被包装函数被调用时间间隔last小于设定时间间隔wait
        if (last < wait && last > 0) {
            timeout = setTimeout(later, wait - last);
        } else {
            timeout = null;
            // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
            if (!immediate) {
                result = func.apply(context, args);
                if (!timeout) context = args = null;
            }
        }
    };

    return function () {
        context = this;
        args = arguments;
        timestamp = Date.now();
        var callNow = immediate && !timeout;
        // 如果延时不存在，重新设定延时
        if (!timeout) timeout = setTimeout(later, wait);
        if (callNow) {
            result = func.apply(context, args);
            context = args = null;
        }

        return result;
    };
};
/**
 * 频率控制 返回函数连续调用时，func 执行频率限定为 次 / wait
 *
 * @param  {function}   func      传入函数
 * @param  {number}     wait      表示时间窗口的间隔
 * @param  {object}     options   如果想忽略开始边界上的调用，传入{leading: false}。
 *                                如果想忽略结尾边界上的调用，传入{trailing: false}
 * @return {function}             返回客户调用函数
 */
export const throttle = function (func, wait, options) {
    var context, args, result;
    var timeout = null;
    // 上次执行时间点
    var previous = 0;
    if (!options) options = {};
    // 延迟执行函数
    var later = function () {
        // 若设定了开始边界不执行选项，上次执行时间始终为0
        previous = options.leading === false ? 0 : Date.now();
        timeout = null;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
    };
    return function () {
        var now = Date.now();
        // 首次执行时，如果设定了开始边界不执行选项，将上次执行时间设定为当前时间。
        if (!previous && options.leading === false) previous = now;
        // 延迟执行时间间隔
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        // 延迟时间间隔remaining小于等于0，表示上次执行至此所间隔时间已经超过一个时间窗口
        // remaining大于时间窗口wait，表示客户端系统时间被调整过
        if (remaining <= 0 || remaining > wait) {
            clearTimeout(timeout);
            timeout = null;
            previous = now;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
            //如果延迟执行不存在，且没有设定结尾边界不执行选项
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    };
};
/**
 * 分时函数例子
 * 以创建 WebQQ 列表为例
 * @param  {[type]}   data     函数执行需要用到的数据
 * @param  {Function} fn       真正需要分时执行的函数
 * @param  {[type]}   count    每次创建一批节点的数量
 * @param  {[type]}   interval 函数执行间隔
 * @return {[type]}            [description]
 */
export const timeChunk = function (data, fn, count, interval) {
    var t;

    var len = data.length;

    var start = function () {
        for (var i = 0; i < Math.min(count || 1, data.length); i++) {
            var obj = data.shift();
            fn(obj);
        }
    }

    return function () {
        t = setInterval(function () {
            if (data.length === 0) {
                return clearInterval(t);
            }

            start();
        }, interval);
    }
}
//range(1,4)->[1,2,3,4]
export const range = function (start, stop, step) {
    if (stop == null) {
        stop = start || 0;
        start = 0;
    }
    if (!step) {
        step = stop < start ? -1 : 1;
    }

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
        range[idx] = start;
    }

    return range;
};
//日期格式化函数
export const dateFormat = function (date, formatStr) {
    let _date = new Date(date);
    return formatStr.replace(/YYYY/, _date.getFullYear()).replace(/MM/, ('0' + (_date.getMonth() + 1)).slice(-2)).replace(/DD/, ('0' + _date.getDate()).slice(-2)).replace(/hh/, ('0' + _date.getHours()).slice(-2)).replace(/mm/, ('0' + _date.getMinutes()).slice(-2)).replace(/ss/, ('0' + _date.getSeconds()).slice(-2));
}
//判断对象是否为空{}
export const isEmptyObject = function (obj) {
    if (Object.prototype.toString.call(obj) === '[object Object]') {
        for (let key in obj) {
            return false;
        }
        return true;
    } else {
        throw new TypeError('typeError');
    }
}
//取得两个数之间的随机数字[min,max)
export const randomBetween = function (min, max) {
    return Math.random() * (max - min) + min;
}
export const isWindow = function (obj) {
    return obj != null && obj === obj.window;
}
export const trim = function (str, flag) {
    if (flag == 'left') {
        return str.replace(/^\s+/g, '');
    } else if (flag == 'right') {
        return str.replace(/\s+$/g, '');
    } else {
        return str.replace(/^\s+|\s+$/g, '');
    }
}

export function range(num, step) {
    return [...Array(5).keys()].filter(v => v % step == 0);
}
/**
 * deeply copy object or arrays with nested attributes
 * @param  {any} obj
 * @return {any}     a depply copied replica of arguement passed
 */

export const deepClone = (obj) => {
  if (!obj || typeof obj !== 'object') {
    return obj;
  }
  let newObj = {};
  if (Array.isArray(obj)) {
    newObj = obj.map(item => deepClone(item));
  } else {
    Object.keys(obj).forEach((key) => {
      return newObj[key] = deepClone(obj[key]);
    })
  }
  return newObj;
}
