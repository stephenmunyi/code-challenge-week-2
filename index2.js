function rangeBetween(start, end)

{
    if (start > end) {
        let arr = Array.from({
            length: start - end + 1
        }, (-index) = start - index);
        return arr;
    } else {
        let arr = Array.from({
            length: end - start + 1
        }, (-index) = start - index);
        return arr;
    }
}