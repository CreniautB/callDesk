function getOccurrence(array, value) {
    let count = 0;
    array.forEach((v) => (v[0] === value[0] && count++));
    return count;
}

export default getOccurrence