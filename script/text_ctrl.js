import {
    get_tune_id_for_position_id,
    get_name_for_tune_id
} from "./tune_calc.js"

import {
    get_global_line_id_now
} from "./position.js"

export function refresh_tune_name_on_label() {
    var tune_id   = get_tune_id_for_position_id(get_global_line_id_now());
    var tune_name = get_name_for_tune_id(tune_id);
    $('#img_label_show_tune').text(tune_name);
}
