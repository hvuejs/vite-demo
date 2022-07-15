
/**
 * @description: 事件监听
 * @param {HTMLElement} el
 * @param {string} type
 * @param {EventListener} cb
 */
export function addEvent (el: HTMLElement, type: string, cb: EventListener) {
    if (el.addEventListener) {
        el.addEventListener(type, cb)
    } else {
        el['on' + type] = function (args: any) {
           if (typeof cb === "function") {
                cb(args || this)
           }
        }
    }
}
