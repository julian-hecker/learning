function average(scores = []) {
    let sum = 0;
    let i;
    for (i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return Math.round(sum / i);
}

console.log(
average([40,65,77,82,80,54,73,63,95,49]));