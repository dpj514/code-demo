/**
 * 防抖
 * @param {*} func 
 * @param {*} wait 
 * @param {*} immediate 
 */
function debounce(func, wait, immediate = false) {
    let timer
    flag = true;
    return function (...args) {
        if (timer) {
            clearTimeout(timer);
        }
        if (immediate) {
            if (flag) {
                func.apply(this, args);
            }
            flag = false;
            timer = setTimeout(() => flag = true, wait);
        }
        else {
            timer = setTimeout(() => func.apply(this, args), wait)
        }
    }
}