let Dom = Dom || {};
Dom = {
    checkValType(val) {
        let typeString = Object.prototype.toString.call(val);
        switch (typeString) {
            case '[object String]':
                return 'String';
            case '[object Boolean]':
                return 'Boolean';
            case '[object Function]':
                return typeof val === 'symbol' ? 'Symbol' : 'Function';
            case '[object Array]':
                return 'Array';
            case '[object Error]':
                return 'Error';
            case '[object Date]':
                return 'Date';
            case '[object RegExp]':
                return 'RegExp';
            case '[object Object]':
                return 'Object';
            case '[object Null]':
                return 'Null';
            case '[object Underfined]':
                return 'Underfined';
            default:
                break;
        }
    },
    setStyle(elem, obj) { //批量设置样式,elem要设置的元素,obj={'height':'5px','color':'red'}等样式集合
        for (let key in obj) {
            elem.style[key] = obj[key];
        }
        return this; //返回上下文方便链式调用
    },
    getStyle(elem, styleName, pseudoElt = null) { //pseudoElt伪元素例如getStyle(ele,'height',':after')，这样就匹配ele伪元素的样式
        return (window || document.defaultView).getComputedStyle(elem, pseudoElt)[styleName];
    },
    addClass(elem, className) {
        if (this.checkValType(className) === 'String') { //单个时传入字符串
            elem.classList.add(className);
        } else if (this.checkValType(className) === 'Array') { //多个时传入数组
            elem.classList.add(...className);
        }
        return this;
    },
    removeClass(elem, className) {
        if (this.checkValType(className) === 'String') { //单个时传入字符串
            elem.classList.remove(className);
        } else if (this.checkValType(className) === 'Array') { //多个时传入数组
            elem.classList.remove(...className);
        }
        return this;
    },
    hasClass(elem, className) {
        if (this.checkValType(className) === 'String') { //单个时传入字符串
            elem.classList.contains(className);
        } else if (this.checkValType(className) === 'Array') { //多个时传入数组
            elem.classList.contains(...className);
        }
        return this;
    },
    toggleClass(elem, className) { //只操作单个class
        elem.classList.toggle ? elem.classList.toggle(className) : (this.hasClass(elem, className) ? this.removeClass(elem, className) : this.addClass(elem, className));
        return this;
    },
    siblings(elem){
        let matched=[];
        let n = (elem.parentNode || {}).firstChild;
        for(;n;n= n.nextSibling){
            if(n.nodeType===1&&n!==elem){
                matched.push(n);
            }
        }
        return matched;
    },
    sibling(cur,dir){//工具函数
        while((cur=cur[dir])&&cur.nodeType!==1){}
        return cur;
    },
    next(elem){
        return this.sibling(elem,"nextSibling");
    },
    prev(elem){
        return this.sibling(elem,"previousSibling");
    }

}