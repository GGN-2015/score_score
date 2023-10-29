/* 核心控制逻辑 */

import {
    show_treble_clef, 
    hide_treble_clef, 
    show_bass_clef, 
    hide_bass_clef,
    treble_or_bass
} from "./show_hide.js";

import {
    get_top_line_top,
    get_distance,
} from "./position.js"

import {
    add_mouse_listener
} from "./mouse.js"

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
    console.log("get_top_line_top: " + get_top_line_top());
    console.log("get_distance: " + get_distance());
    console.log(treble_or_bass());
}

$(document).ready(function() { // 在页面加载完成后执行的代码
    mylog("页面加载完成");
    add_mouse_listener();
    mytest();
});