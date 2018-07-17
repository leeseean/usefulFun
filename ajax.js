export default function Ajax({
    type = "GET",
    url = "",
    async = true,
    params = {},
    responseType = "text",
    contentType = "application/x-www-form-urlencoded", //xhr.setRequestHeader("Content-Type",option.contentType); 
    done = () => {},
    fail = () => {}
}) {
    type = type.toUpperCase();
    params = formatParams(params);
    //创建xhr对象 step1
    const xhr = window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest();
    xhr.responseType = responseType;    
    //接收 step3
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            const status = xhr.status;
            if (status >= 200 && status < 300) {
                done(response);
            } else {
                fail(status);
            }
        }
    }
    //发送 step2
    if (type === "GET") {
        xhr.open("GET", url + "?" + params, async);
        xhr.send(null);
    } else if (type === "POST") {
        xhr.open("POST", url, async);
        //设置表单提交时的内容类型
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(params);
    }
}

function formatParams(params) {
    const arr = [];
    for (let name in params) {
        arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(params[name]));
    }
    arr.push(("_=" + Math.random()).replace(".", ""));
    return arr.join("&");
}

