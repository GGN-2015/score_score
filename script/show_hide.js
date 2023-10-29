/* 本文件主要控制高音谱号和低音谱号的显示或者隐藏 */

export function show_treble_clef() { // 显示高音谱号
    $("#img_TrebleClef").css("visibility", "visible");
}

export function hide_treble_clef() { // 隐藏高音谱号
    $("#img_TrebleClef").css("visibility", "hidden");
}

export function show_bass_clef() { // 显示低音谱号
    $("#img_BassClef").css("visibility", "visible");
}

export function hide_bass_clef() { // 隐藏低音谱号
    $("#img_BassClef").css("visibility", "hidden");
}

// 显示当前谱号是谁
export function treble_or_bass() {
    var bass_v   = $("#img_BassClef").css("visibility");
    var treble_v = $("#img_TrebleClef").css("visibility");

    if(treble_v == "visible") return "treble";
    if(bass_v   == "visible") return "bass";
    return ""; // 没有人在占据谱号
}

export function get_tune_mode_name() {
    return treble_or_bass();
}

export function toggle_tune_mode() { // 更改谱号
    if(treble_or_bass() == "treble") {
        hide_treble_clef();
        show_bass_clef();
    }else {
        show_treble_clef();
        hide_bass_clef();
    }
}
