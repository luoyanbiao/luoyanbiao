// 检测数据类型终极方案
function checkType(str) {
    var type = Object.prototype.toString.call(str);
    var reg = /\w+/g
    return type.match(reg)[1];
}

console.log(checkType('haha'));