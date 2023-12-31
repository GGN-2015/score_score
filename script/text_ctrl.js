import {
    get_tune_id_for_position_id,
    get_name_for_tune_id
} from "./tune_calc.js"

import {
    get_global_line_id_now
} from "./position.js"

import {
    get_random_question,
} from "./question.js"

import {
    get_tune_mode_name
} from "./show_hide.js"

import {
    play_sound
} from "./sound.js"

export function refresh_tune_name_on_label() {
    var tune_id   = get_tune_id_for_position_id(get_global_line_id_now());
    var tune_name = get_name_for_tune_id(tune_id);
    $('#img_label_show_tune').text("你的回答:" + tune_name);
}

var last_question = 0;
export function refresh_question() { // 更新一个随机问题
    // if(get_random_integer(0, 1) == 1 && check_random_tune_mode()) {
    //     toggle_tune_mode(); // 随机更换谱号
    // }

    // 重新生成问题直到能够保证相邻两个问题距离大于等于 3
    var tune_id = get_random_question(get_tune_mode_name());
    while(Math.abs(tune_id - last_question) < 3) {
        tune_id = get_random_question(get_tune_mode_name());
    }

    var tune_name = get_name_for_tune_id(tune_id);
    $('#img_label_show_question').text("当前问题:" + tune_name);

    last_question = tune_id;
}

var question_count = 0;
export function add_correct_question_count() { // 加一个正确回答问题数
    question_count += 1;

    $("#img_label_show_score").text("分数：" + question_count);
}
