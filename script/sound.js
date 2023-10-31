export function play_sound(path_to_sound, speed) { // 创建 <audio> 元素
    const audioElement = new Audio();
    audioElement.src = path_to_sound;
    audioElement.playbackRate = speed;
    audioElement.play();
}

export function play_success_wav() {
    setTimeout(function() {
        play_sound("./sound/success.wav", 2.0); // 播放一段音乐
    }, 100);
}