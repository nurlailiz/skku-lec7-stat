function sum(numbers){
    let s = 0;
    for(let i = 0; i < numbers.length; i++){
        s += numbers[i];
    }
    return s;
}

function avg(numbers) {
    return sum(numbers) / numbers.length; 
}

function max(numbers) {
    let m = numbers[0];
    for (let i = 1; i < numbers.length; i++){
        if (m < numbers[i]){
            m = numbers[i]; 
        }
    } 
    return m; 
}

exports.sum = sum;
exports.avg = avg;
exports.max = max;