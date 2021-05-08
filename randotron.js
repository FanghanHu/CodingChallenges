//We first create an array with numbers from 1 to 10000, then we shuffle it with Fisher-yates shuffle.


console.time("Total Time");

//fill the array with numbers from 1 to 10000;
const arr = Array(10000);
for(let i = 1; i <= 10000; i++) {
    arr[i-1] = i;
}

//loop through the whole array backwards
for(let i = arr.length-1; i >= 0; i--){
    //select a random index between 0 and i
    let randomIndex = Math.floor(Math.random() * i);

    //swap the number at random index with number at i;
    const temp = arr[i];
    arr[i] = arr[randomIndex];
    arr[randomIndex] = temp;
}

console.log(arr);
console.timeEnd("Total Time");