/*常用算法函数*/
/*去重*/
export function delRepeat(arr) {

  var newArray = new Array();

  var len = arr.length;

  for (var i = 0; i < len; i++) {

    for (var j = i + 1; j < len; j++)

    {

      if (arr[i] == arr[j])

      {

        ++i;

      }

    }

    newArray.push(arr[i]);

  }

  return newArray;

}
/*二分法,又称为折半查找算法，但是有缺陷就是要求数字是预先排序好的*/
export function binary(items, value) {

  var startIndex = 0,

    stopIndex = items.length - 1,

    midlleIndex = (startIndex + stopIndex) >>> 1;

  while (items[middleIndex] != value && startIndex < stopIndex) {

    if (items[middleIndex] > value) {

      stopIndex = middleIndex - 1;

    } else {

      startIndex = middleI3ndex + 1;

    }

    middleIndex = (startIndex + stopIndex) >>> 1;

  }

  return items[middleIndex] != value ? false : true;

}
/*十六进制颜色值的随机生成*/

export function randomColor() {

  var arrHex = ["0", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d"],

    strHex = "#",

    index;

  for (var i = 0; i < 6; i++) {

    index = Math.round(Math.random() * 15);

    strHex += arrHex[index];

  }

  return strHex;

}

/*一个求字符串长度的方法,汉字算两个字符*/

export function GetBytes(str) {

  var len = str.length,

    bytes = len;

  for (var i = 0; i < len; i++) {

    if (str.CharCodeAt > 255) {

      bytes++;

    }

  }

  return bytes;

}

/*插入排序，所谓的插入排序，就是将序列中的第一个元素看成一个有序的子序列，然后不段向后比较交换比较交换。*/

export function insertSort(arr) {

  var key;

  for (var j = 1; j < arr.length; j++) {
    //排好序的
    var i = j - 1;

    key = arr[j];

    while (i >= 0 && arr[i] > key) {

      arr[i + 1] = arr[i];

      i--;

    }

    arr[i + 1] = key;

  }

  return arr;

}


/*希尔排序，希尔排序，也称递减增量排序算法具体描述，其实说到底也是插入排序的变种*/

export function shellSort(array) {

  var stepArr = [1750, 701, 301, 132, 57, 23, 10, 4, 1]; // reverse()在维基上看到这个最优的步长较小数组

  var i = 0;

  var stepArrLength = stepArr.length;

  var len = array.length;

  var len2 = parseInt(len / 2);

  for (; i < stepArrLength; i++) {

    if (stepArr[i] > len2) {

      continue;

    }

    stepSort(stepArr[i]);

  }

  // 排序一个步长

  export function stepSort(step) {

    //console.log(step) 使用的步长统计

    var i = 0,
      j = 0,
      f, tem, key;

    var stepLen = len % step > 0 ? parseInt(len / step) + 1 : len / step;

    for (; i < step; i++) { // 依次循环列

      for (j = 1; /*j < stepLen && */ step * j + i < len; j++) { //依次循环每列的每行

        tem = f = step * j + i;

        key = array[f];



        while ((tem -= step) >= 0) { // 依次向上查找

          if (array[tem] > key) {

            array[tem + step] = array[tem];

          } else {

            break;

          }

        }

        array[tem + step] = key;

      }

    }

  }

  return array;

}

/*快速排序，其实说到底快速排序算法就系对冒泡排序的一种改进，采用的就是算法理论中的分治递归的思想，说得明白点，它的做法就是：通过一趟排序将待排序的纪录分割成两部分，其中一部分的纪录值比另外一部分的纪录值要小，就可以继续分别对这两部分纪录进行排序；不段的递归实施上面两个操作，从而实现纪录值的排序。

这么说可能不是很清晰，直接上代码：*/


export function sort(arr) {

  return quickSort(arr, 0, arr.length - 1);

  export function quickSort(arr, l, r) {

    if (l < r) {

      var mid = arr[parseInt((l + r) / 2)],
        i = l - 1,
        j = r + 1;

      while (true) {

        //大的放到右边，小的放到左边, i与j均为游标

        while (arr[++i] < mid);

        while (arr[--j] > mid);

        if (i >= j) break; //判断条件

        var temp = arr[i];

        arr[i] = arr[j];

        arr[j] = temp;

      }

      quickSort(arr, l, i - 1);

      quickSort(arr, j + 1, r);

    }

    return arr;

  }

}


/*冒泡法*/

export function bullSort(array) {

  var temp;

  for (var i = 0; i < array.length; i++) {

    for (var j = array.length - 1; j > i; j--) {

      if (array[j] < array[j - 1]) {

        temp = array[j];

        array[j] = array[j - 1];

        array[j - 1] = temp;

      }

    }

  }

  return array;

}



/*选择法排序*/


export function selectionSort(data) {

  var i, j, min, temp, count = data.length;

  for (i = 0; i < count - 1; i++) {

    /* find the minimum */

    min = i;

    for (j = i + 1; j < count; j++)

    {
      if (data[j] < data[min])

      {
        min = j;
      }

    }

    /* swap data[i] and data[min] */

    temp = data[i];

    data[i] = data[min];

    data[min] = temp;

  }

  return data;

}



/**

* 堆排序

* @param items 数组

* @return 排序后的数组

*/

export function heapSort(items) {

  items = array2heap(items); //将数组转化为堆

  for (var i = items.length - 1; i >= 0; i--)

  {

    items = swap(items, 0, i); //将根和位置i的数据交换(用于将最大值放在最后面)

    items = moveDown(items, 0, i - 1); //数据交换后恢复堆的属性

  }

  return items;

}

/**

* 将数组转换为堆

* @param items 数组

* @return 堆

*/

export function array2heap(items) {

  for (var i = Math.ceil(items.length / 2) - 1; i >= 0; i--)

  {

    items = moveDown(items, i, items.length - 1); //转换为堆属性

  }

  return items;

}

/**

* 转换为堆

* @param items 数组

* @param first 第一个元素

* @param last 最后一个元素

* @return 堆

*/

export function moveDown(items, first, last) {

  var largest = 2 * first + 1;

  while (largest <= last)

  {

    if (largest < last && items[largest] < items[largest + 1])

    {

      largest++;

    }

    if (items[first] < items[largest])

    {

      items = swap(items, first, largest); // 交换数据

      first = largest; //往下移

      largest = 2 * first + 1;

    } else

    {

      largest = last + 1; //跳出循环

    }

  }

  return items;

}
/**
* 交换数据

* @param items 数组

* @param index1 索引1

* @param index2 索引2

* @return 数据交换后的数组

*/
export function swap(items, index1, index2) {

  var tmp = items[index1];

  items[index1] = items[index2];

  items[index2] = tmp;

  return items;

}
/*所谓归并就是将两个或者两个以上的有序表合成一个新的有序表。
递归形式的算法在形式上较为简洁但实用性较差，与快速排序和堆排序相比，归并排序的最大特点是，它是一种稳定的排序方法。

js实现归并：*/
export function MemeryArray(Arr, n, Brr, m) {
  var i, j, k;

  var Crr = new Array();

  i = j = k = 0;

  while (i < n && j < m)

  {

    if (Arr[i] < Brr[j])

      Crr[k++] = Arr[i++];

    else

      Crr[k++] = Brr[j++];

  }

  while (i < n)

    Crr[k++] = Arr[i++];

  while (j < m)

    Crr[k++] = Brr[j++];

  return Crr;

}
//将有二个有序数列a[first...mid]和a[mid...last]合并。
export function mergearray(Arr, first, mid, last, tempArr) {

  var i = first,
    j = mid + 1;

  var m = mid,
    n = last;

  var k = 0;

  while (i <= m && j <= n)

  {

    if (Arr[i] < Arr[j])

      tempArr[k++] = Arr[i++];

    else

      tempArr[k++] = Arr[j++];

  }

  while (i <= m)

    tempArr[k++] = Arr[i++];

  while (j <= n)

    tempArr[k++] = Arr[j++];

  for (i = 0; i < k; i++)

    Arr[first + i] = tempArr[i];

}

export function mergesort(Arr, first, last) {

  var tempArr = new Array();

  if (first < last)

  {

    var mid = (first + last) >>> 1;

    mergesort(Arr, first, mid, tempArr); //左边有序

    mergesort(Arr, mid + 1, last, tempArr); //右边有序

    mergearray(Arr, first, mid, last, tempArr); //再将二个有序数列合并

  }

  return Arr;

}


//求两个字符串的相似度,返回差别字符数,Levenshtein Distance算法实现

export function Levenshtein_Distance(s, t) {

  　
  var n = s.length; // length of s

  　
  var m = t.length; // length of t

  　
  var d = []; // matrix

  　
  var i; // iterates through s

  　
  var j; // iterates through t

  　
  var s_i; // ith character of s

  　
  var t_j; // jth character of t

  　
  var cost; // cost

  　 // Step 1

  　
  if (n == 0) return m;

  　
  if (m == 0) return n;

  　 // Step 2

  　
  for (i = 0; i <= n; i++) {

    　　
    d[i] = [];

    　　
    d[i][0] = i;

    　
  }

  　
  for (j = 0; j <= m; j++) {

    　　
    d[0][j] = j;

    　
  }

  　 // Step 3

  　
  for (i = 1; i <= n; i++) {

    　　
    s_i = s.charAt(i - 1);

    　　 // Step 4

    　　
    for (j = 1; j <= m; j++) {

      　　　
      t_j = t.charAt(j - 1);

      　　　 // Step 5

      　　　
      if (s_i == t_j) {

        　　　　
        cost = 0;

        　　　
      } else {

        　　　　
        cost = 1;

        　　　
      }

      　　　 // Step 6

      　　　
      d[i][j] = Minimum(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);

      　　
    }

    　
  }

  　 // Step 7

  　
  return d[n][m];

}

//求两个字符串的相似度,返回相似度百分比

export function Levenshtein_Distance_Percent(s, t) {

  　
  var l = s.length > t.length ? s.length : t.length;

  　
  var d = Levenshtein_Distance(s, t);

  　
  return (1 - d / l).toFixed(4);

}
//顺子号:1,2,3,4,5或者9,0,1,2,3,4或者7,8,9,0,1
export function checkShunzi(arr, min, max) { //思路圆环
  arr = arr.sort();
  if (isShunNum(arr)) {
    return true;
  }
  //如果不是123456这种,而是9012这种，那么剩余的345678是shunNum，就判断剩余的号码是不是shunNum
  const restArr = [];
  for (let i = min; i < max; i++) {
    if (arr.indexOf(i) === -1) {
      restArr.push(i);
    }
  }

  return isShunNum(arr);

  function isShunNum(arr) {
    return arr.every(function (item, index, arr) {
      return 0 === index || (Number(item) + 10 - 1) % 10 == arr[index - 1];
    })
  }
}
/*js递归实现方案*/
export function factorial(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

//组合combination:m个数中取出n个不同数的组合数目，如3个取两个[1,2,3]->[1,2],[1,3],[2,3]
export function combination(m, n) {
  return m < n ? 0 : factorial(m) / (factorial(n) * factorial(m - n));
}
//求两个数字的交集 [1,2,4],[2,3] -> [2]
export function intersection(a, b) {
  return a.filter(function (n) {
    return b.indexOf(n) != -1;
  });
}
//求两个元素无重复并集 [1,2,4],[2,3] -> [1,2,3,4]
export function union(a, b) {
  return (a.concat(b)).filter(function (item, index, self) {
    return self.indexOf(item) === index;
  });
}
//求a数组相对于b数组的补集 [1,2,4],[2,3] -> [1,4]
export function difference(a, b) {
  return a.filter(function (item) {
    return b.indexOf(item) === -1;
  });
}
//求数组排列的所有排列方式[1,2,3]->[1,2],[1,3],[2,3],[2,1],[3,1],[3,2]
export function queue(arr, size) {
  if (size > arr.length) {
    return;
  }
  var allResult = [];
  export function _queue(arr, size, result) {
    if (result.length == size) {
      allResult.push(result);
    } else {
      for (var i = 0, len = arr.length; i < len; i++) {
        var newArr = [].concat(arr),
          curItem = newArr.splice(i, 1);
        _queue(newArr, size, [].concat(result, curItem));
      }
    }
  }
  _queue(arr, size, []);

  return allResult;
}

//求数组组合的所有组合方式[1,2,3]->[1,2],[1,3],[2,3]
export function choose(arr, size) {
  var allResult = [];
  export function _choose(arr, size, result) {
    var arrLen = arr.length;
    if (size > arrLen) {
      return;
    }
    if (size == arrLen) {
      allResult.push([].concat(result, arr))
    } else {
      for (var i = 0; i < arrLen; i++) {
        var newResult = [].concat(result);
        newResult.push(arr[i]);

        if (size == 1) {
          allResult.push(newResult);
        } else {
          var newArr = [].concat(arr);
          newArr.splice(0, i + 　1);
          _choose(newArr, size - 1, newResult);
        }
      }
    }
  }
  _choose(arr, size, []);

  return allResult;
}
//从n组相同数组中各取1个数字组合，组合数字不能相同如3个[1,2,3,4]数组各取1个数字 permutation([1, 2, 3, 4], 3)=>["2,3,4", "1,3,4", "1,2,4", "1,2,3"]
export function permutation(list, n) {
  var results = []

  export function _perm(list, n, res, start) {
    if (res.length === n) {
      return results.push(res.join(','))
    }

    if (start === list.length) {
      return
    }

    _perm(list, n, res.slice(), start + 1)
    res.push(list[start])
    _perm(list, n, res, start + 1)
  }

  _perm(list, n, [], 0)

  return results
}
/* 判断点是否在图形中 */
export function point_in_polygon(point, vs) {

  var x = point[0],
    y = point[1];

  var inside = false;
  for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
    var xi = vs[i][0],
      yi = vs[i][1];
    var xj = vs[j][0],
      yj = vs[j][1];

    var intersect = ((yi > y) != (yj > y)) &&
      (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
    if (intersect) inside = !inside;
  }

  return inside;
}