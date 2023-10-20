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
