const validAnagram = (str1, str2) => {
    if (str1 === "" && str2 === "") {
        return false;
    }

    let frequencyObject1 = {};
    let frequencyObject2 = {};

    for (let val of str1) {
        frequencyObject1[val] = (frequencyObject1[val] || 0) + 1;
    }
    for (let val of str2) {
        frequencyObject2[val] = (frequencyObject2[val] || 0) + 1;
    }

    for (let key in frequencyObject1) {
        if (!(key in frequencyObject2) || frequencyObject1[key] !== frequencyObject2[key]) {
            return false;
        }
    }

    for (let key in frequencyObject2) {
        if (!(key in frequencyObject1) || frequencyObject1[key] !== frequencyObject2[key]) {
            return false;
        }
    }

    return true;
}

