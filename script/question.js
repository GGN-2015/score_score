import {
    get_random_integer
} from "./my_math.js"

export function get_random_question(tune_mode) {
    // 生成随机问题
    var rand;
    if(tune_mode == "treble") { // 高音谱号下的随机问题
        rand = get_random_integer(22, 46);
    }else { // 低音谱号下的随机问题
        rand = get_random_integer(10, 34);
    }
    return rand;
}

export function check_random_tune_mode() {
    return true;
}

function last_two_char(s) {
    return s.substring(s.length - 2);
}

export function question_correct() {
    var ans    = last_two_char($("#img_label_show_question").text());
    var my_ans = last_two_char($("#img_label_show_tune").text());
    
    return ans == my_ans;
}