/* 核心控制逻辑 */

import {
    show_treble_clef, 
    hide_treble_clef, 
    show_bass_clef, 
    hide_bass_clef
} from "./show_hide.js";

function get_timestamp() { // 获取系统秒级时间戳
    var currentTime = new Date();
    var hours       = currentTime.getHours()  .toString().padStart(2, "0");
    var minutes     = currentTime.getMinutes().toString().padStart(2, "0");
    var seconds     = currentTime.getSeconds().toString().padStart(2, "0");
    return hours + ":" + minutes + ":" + seconds
}

function mylog(message) {
    console.log("[" + get_timestamp() + "] controll.js: " + message); // 输出日志
}

mylog("脚本可用");

function mytest() {
    show_treble_clef(); // 显示高音谱号
    hide_bass_clef();   // 隐藏低音谱号
}

$(document).ready(function() { // 在页面加载完成后执行的代码
    mylog("页面加载完成");
    mytest();
});