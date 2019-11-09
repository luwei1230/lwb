/**
 * 常用工具类
 * @author: luwei
 * @create: 2019/11/09 17:21
 */

class Util {

    /**
     * 深拷贝
     * @param obj
     * @param callback
     */
    deepCopy(obj) {
        if (!obj || (typeof obj !== 'object')) {
            return obj;
        }

        let obj2 = null;
        if (obj instanceof Array) {
            // 处理数组
            obj2 = [];
            for (let [key, value] of obj.entries()) {
                obj2[key] = this.deepCopy(value);
            }
        } else {
            // 处理对象
            obj2 = {};
            for (let key in obj) {
                obj2[key] = this.deepCopy(obj[key]);
            }
        }
        return obj2
    }

}

module.exports = Util;
