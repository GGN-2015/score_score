export function play_sound(path_to_sound) { // 创建 <audio> 元素
    const audioElement = new Audio();
    audioElement.src = path_to_sound;
    audioElement.play();
}