/* 获取棋盘相关的坐标 */

export function get_top(elementId) {
    var value_px = $('#' + elementId).css('top');
    return parseInt(value_px.slice(0, -2)); // 删除单位 px
}

export function get_top_line_top() { // 得到最上面的上加线的 top
    return get_top("img_shr_04");
}

export function get_distance() { // 相邻线间距
    return (get_top("img_shr_03") - get_top("img_shr_04"));
}

var global_line_id_now = 0;
export function get_global_line_id_now() {
    return global_line_id_now;
}

export function set_position_for_movable(mouseX) {
    var id_array = new Array(
        "img_shr_01", "img_shr_02", "img_shr_03", "img_shr_04", "img_shr_05", "img_shr_06", "img_shr_07", "img_shr_08", 
    );
    var width = parseInt($("#img_shr_01").css("width").slice(0, -2));
    for(var i = 0; i < id_array.length; i += 1) {
        var id_now = id_array[i];

        $("#" + id_now).css("left", mouseX - width / 2); 
    }

    $("#img_QuarterNote").css("left", mouseX - (width * 0.6));
}

// 获取离散型位置
export function get_position_from_continuous(mouseY) {

    mouseY = mouseY - 10;

    // 构造所有可能停留音符的纵坐标
    var position_array = new Array(
        get_top("img_shr_04"),
        0,
        get_top("img_shr_03"),
        0,
        get_top("img_shr_02"),
        0,
        get_top("img_shr_01"),
        0,
        get_top("img_hr_01"),
        0,
        get_top("img_hr_02"),
        0,
        get_top("img_hr_03"),
        0,
        get_top("img_hr_04"),
        0,
        get_top("img_hr_05"),
        0,
        get_top("img_shr_05"),
        0,
        get_top("img_shr_06"),
        0,
        get_top("img_shr_07"),
        0,
        get_top("img_shr_08"),
    );
    for(var i = 0; i < position_array.length; i += 1) {
        if(position_array[i] == 0) {
            position_array[i] = (position_array[i-1] + position_array[i+1])/2;
        }
    }
    
    var dis_now = Math.abs(position_array[0] - mouseY);
    var pos_now = position_array[0];
    var id_now  = 0;

    for(var i = 1; i < position_array.length; i += 1) {
        var dis = Math.abs(position_array[i] - mouseY);
        var pos = position_array[i];

        if(dis < dis_now) {
            dis_now = dis;
            pos_now = pos;
            id_now  = i;
        }
    }

    global_line_id_now = id_now; // 记录停留在哪条线上
    return pos_now;
}