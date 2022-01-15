export const chunk = (array: Array<any>, size: number): Array<Array<any>> => {
    const res = [];
    for (let i = 0; i < array.length; i += size) {
        const chunk = array.slice(i, i + size);
        res.push(chunk);
    }
    return res;
}

export const rotateArray = (array: Array<any>[], steps: number) => {
    // First space is locked
    let swappableItems = array.slice(1);
    for(let i = 0; i < steps; i++) {
        swappableItems = shiftArray(swappableItems);
    }
    return [array[0], ...swappableItems];
}

export const shiftArray = (array: Array<any>) => {
    const shiftedArray = [...array];
    let previousItem = undefined;
    for(let i = 0; i < shiftedArray.length; i++) {
        if(previousItem == undefined) {
            previousItem = shiftedArray[i];
            shiftedArray[i] = shiftedArray[shiftedArray.length-1];
        } else {
            const current = shiftedArray[i]
            shiftedArray[i] = previousItem;
            previousItem = current;
        }
    }
    return shiftedArray;
}

export const shuffle = (array: Array<any>) => {
    const copiedArray = [...array];
    let currentIndex = copiedArray.length,  randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [copiedArray[currentIndex], copiedArray[randomIndex]] = [
            copiedArray[randomIndex], copiedArray[currentIndex]];
    }

    return copiedArray;
}