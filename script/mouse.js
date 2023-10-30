import {
    get_distance,
    get_position_from_continuous,
} from "./position.js"

import {
    refresh_question,
    refresh_tune_name_on_label,
    add_correct_question_count
} from "./text_ctrl.js"

import {
    question_correct
} from "./question.js"

import {
    set_game_start,
    get_game_start
} from "./game_am.js"

import {
    count_down_trigger
} from "./clock.js"

import {
    set_position_for_movable
} from "./position.js"

import { 
    toggle_tune_mode 
} from "./show_hide.js"

export function add_mouse_listener() {
    $(document).mousemove(function(event) {
        var mouseX = event.pageX;
        var mouseY = event.pageY;

        set_position_for_movable(mouseX); // 移动所有需要跟随鼠标移动的东西
    
        // 获取离散型位置
        var dis_pos = get_position_from_continuous(mouseY);
        var img_position_now = dis_pos - 1.8 * get_distance();
        $('#img_QuarterNote').css('top', img_position_now + 'px');
    });

    $(document).click(function(event) {
        refresh_tune_name_on_label();

        if(question_correct() && get_game_start()) { // 每当问题回答正确时
            refresh_question();
            add_correct_question_count();
        }

        const selection = window.getSelection(); // 取消选区
        selection.removeAllRanges();
    });

    $("#img_label_show_score").click(function(event) { // 开始倒计时
        $("#img_label_show_score").text("分数：" + 0);
        refresh_question(); // 点击开始倒计时要重新计算问题，因为可能改变了谱号

        set_game_start();
        count_down_trigger(120, (value) => {
            $("#img_label_time_left").text("倒计时：" + value);

            if(value == 0) {
                var score_text = $("#img_label_show_score").text();
                alert("游戏结束" + score_text);
                window.location.reload(); // 强制窗口刷新
            }
        })
    });

    $("#img_TrebleClef").click(function(event) { // 游戏未开始可以切换类型
        if(get_game_start() === false) {
            toggle_tune_mode();
        }
    });
    $("#img_BassClef").click(function(event) { // 游戏未开始可以切换类型
        if(get_game_start() === false) {
            toggle_tune_mode();
        }
    });
}
