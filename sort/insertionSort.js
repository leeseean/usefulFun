/* 
中心思想：通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。
*/
function insertionSort(arr) {
    if (arr.length <= 1) return arr;
    for (let i = 1; i < arr.length; i++) {
        const preIndex = i - 1;
        const current = arr[i];
        while (preIndex >= 0 && current < arr[preIndex]) {
            arr[preIndex + 1] = arr[preIndex]; 
            preIndex--;
        }
        arr[preIndex + 1] = current;
    }
    return arr;
}