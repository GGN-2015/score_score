import {
    get_distance,
    get_position_from_continuous,
    get_global_line_id_now
} from "./position.js"

import {
    refresh_tune_name_on_label
} from "./text_ctrl.js"

export function add_mouse_listener() {
    $(document).mousemove(function(event) {
        var mouseX = event.pageX;
        var mouseY = event.pageY;

        refresh_tune_name_on_label();
    
        // 获取离散型位置
        var dis_pos = get_position_from_continuous(mouseY);
        var img_position_now = dis_pos - 1.8 * get_distance();
        $('#img_QuarterNote').css('top', img_position_now + 'px');
    });

    $(document).click(function(event) {
        
    });
}
