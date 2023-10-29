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

export function add_mouse_listener() {
    $(document).mousemove(function(event) {
        var mouseX = event.pageX;
        var mouseY = event.pageY;
    
        // 获取离散型位置
        var dis_pos = get_position_from_continuous(mouseY);
        var img_position_now = dis_pos - 1.8 * get_distance();
        $('#img_QuarterNote').css('top', img_position_now + 'px');
    });

    $(document).click(function(event) {
        refresh_tune_name_on_label();

        if(question_correct()) { // 每当问题回答正确时
            refresh_question();
            add_correct_question_count();
        }
    });
}
