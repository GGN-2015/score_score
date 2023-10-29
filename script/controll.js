/* 核心控制逻辑 */

import {
    show_treble_clef, 
    hide_bass_clef,
} from "./show_hide.js";


import {
    add_mouse_listener
} from "./mouse.js"

import {
    count_down_trigger
} from "./clock.js"

import {
    refresh_question
} from "./text_ctrl.js"

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
show_treble_clef(); // 显示高音谱号
hide_bass_clef();   // 隐藏低音谱号

$(document).ready(function() { // 在页面加载完成后执行的代码
    mylog("页面加载完成");
    add_mouse_listener();

    refresh_question();
    count_down_trigger(120, (value) => {
        $("#img_label_time_left").text("倒计时：" + value);
    })
});
