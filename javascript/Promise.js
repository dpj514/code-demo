/**
 * 实现Promise.race
 * @param {*} pms 
 */
function PromiseRace(pms) {
    if (Array.isArray(pms)) {
        throw Error('array');
    }
    return new Promise((resolve, reject) => {
        for (let pm of pms) {
            pm.then((val) => {
                resolve(val);
            })
        }
    })
}
/**
 * 实现Promise.all
 * @param {*} pms 
 */
function PromiseAll(pms) {
    if (!Array.isArray(pms)) {
        throw Error('array');
    }
    let len = pms.length,
        count = 0;
    return new Promise((resolve, reject) => {
        const result = [];
        for (let i = 0; i < pms.length; i++) {
            pm = Promise.resolve(pms[i]);
            pm.then((val) => {
                result[i] = val;
                count++;
                if (count === len) {
                    resolve(result);
                }
            })
        }
    })
}
/**
 * Promise封装ajax的get方法
 * @param {*} url 
 * @param {*} params 
 */
function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        let xhr = XMLHttpRequest ? new XMLHttpRequest() : new window.ActiveXObject;
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                    try {
                        let response = xhr.responseText;
                        resolve(response);
                    }
                    catch (e) {
                        reject(e);
                    }
                }
                else {
                    reject(new Error('Request was unsuccessful: ' + xhr.statusText))
                }
            }
        }
        xhr.open('GET', url + '?' + Object.keys(params).map((key) => `${key}=${params[key]}`).join('"&'));
    xhr.send('null');
})
}