const arr = [1,2,5,3,2,5,76,8,3,2,5,43,7,3,12,6,56,23,5];

/**
 * find the nth smallest number from the given array
 */
function findNthMin(arr, n) {
    const mins = [];
    for(const num of arr) {
        let found = false;
        for(let i=0; i<mins.length;i++) {
            const min = mins[i];
            if(num < min) {
                mins.splice(i, 0, num);
                found = true;
                break;
            }
        }
        if(!found && mins.length < n) {
            mins.push(num);
        }
    }

    return mins[n];
}

console.log(findNthMin(arr, 4)); //expect 5