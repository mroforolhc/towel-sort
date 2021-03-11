module.exports = function towelSort (matrix) {
    let answer = [];

    if (matrix) {
        matrix.forEach((array, index) => {
            if (index % 2) answer = answer.concat(array.reverse());
            else answer = answer.concat(array); 
        });
    }

    return answer;
}
