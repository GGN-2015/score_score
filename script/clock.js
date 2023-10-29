var step_counter = 0;

export function count_down_trigger(from_where, callback) {
    step_counter = from_where;
    for(var i = 0; i <= from_where; i += 1) {
        setTimeout(function() {
            callback(step_counter);
            step_counter -= 1;
        }, (i+1) * 1000);
    }
}