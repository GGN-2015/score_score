// 把编号和音名相互映射
import {
    treble_or_bass
} from "./show_hide.js";

function get_base_id(char) {
    char = char.toUpperCase();
    var list_map = "CDEFGAB";
    for(var i = 0; i < list_map.length; i += 1) {
        if(list_map[i] == char) {
            return i;
        }
    }
    return -1;
}

export function get_tune_id_for_name(name_str) { // C4 => 28
    name_str = name_str.toUpperCase();
    var base = get_base_id(name_str[0]); // CDEFGAB
    var step = parseInt(name_str[1]);

    return step * 7 + base; // 返回一个编码
}

export function get_name_for_tune_id(tune_id) { // 获得音名
    var step    = Math.floor(tune_id / 7);
    var base_id = tune_id % 7;
    var base    = ("CDEFGAB"[base_id]);
    return base + step;
}

// 高音谱号下的对应关系
function get_tune_id_for_position_id_in_treble(pos_id) {
    return 46 - pos_id;
}

// 低音谱号下的对应关系
function get_tune_id_for_position_id_in_bass(pos_id) {
    return 34 - pos_id;
}

export function get_tune_id_for_position_id(pos_id) {
    var tune_mode = treble_or_bass();

    if(tune_mode == "treble") {
        return get_tune_id_for_position_id_in_treble(pos_id);
    }
    if(tune_mode == "bass") {
        return get_tune_id_for_position_id_in_bass(pos_id);
    }
    return -1;
}