let arr = [1,2,3,4,5,6,7,8,9];
let find = 1;

function binarySearch(left, right, arr, find){
    if(left>right) return true;

    let mid = Math.floor((left+right)/2);

    if(arr[mid] === find) {
        console.log("the number find at ", mid)
        return true;
    }
    if (find > arr[mid]) return binarySearch(mid+1, right, arr, find)

    if (find < arr[mid]) return binarySearch(left, mid-1, arr, find)
}

binarySearch(0, arr.length-1, arr, find)