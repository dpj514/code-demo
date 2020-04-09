/**
 * 节流
 * @param func 
 * @param wait 
 */
function throttle(func, wait) {
    let lastCallTime = Date.now();
    return function (...args) {
        let now = Date.now();
        if (now - lastCallTime < wait) {
            return;
        }
        else {
            func.apply(this, args);
            lastCallTime = now;
        }
    }
}