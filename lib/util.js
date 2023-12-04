function moveArrayItems(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const firstItem = arr.shift();
    arr.push(firstItem);
    return arr;
}