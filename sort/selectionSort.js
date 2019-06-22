/* 
首先在未排序序列中找到最小(大)元素，
存放到排序序列的起始位置，
然后再从剩余未排序元素中继续寻找最小(大)元素，
放到已排序队列的末尾。以次类推，直到所有元素均排序完毕
*/
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}