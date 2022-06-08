'use strict'


// //1
// const arr = [1,2,3];
// const arr2 =[4,5,6];
//
// // arr.push(...arr2)
// const arr3 = [...arr, ...arr2]
// const arr4 = arr.concat(arr2)
// console.log(arr);
//
// //2
//
// const arr = [1,2,3];
// arr.reverse();
//
// console.log(arr);

// //3
//
// const arr = [1,2,3];
// arr.push(4,5,6);
//
// console.log(arr);

// //4
//
// const arr = [1,2,3];
//
//
// arr.unshift(4,5,6);
//
// console.log(arr);

// //5
//
// const arr = ['js','css','jq'];
//
// alert(arr[0]);

//6

// const arr = ['js','css','jq'];
//
// alert(arr[arr.length - 1]); // Arr remains unchanged
// alert(arr.pop()); // last element is removed from arr


// 7
//
// const arr = [1,2,3,4,5];
// arr.push(1,2,3);
//
// console.log(arr)

// //8
//
// const arr = [1,2,3,4,5];
// arr.push(4,5);
//
// console.log(arr)

// 9

// const arr = [1,2,3,4,5];
//
// const arr1 = arr.filter(item => item >= 4)
//
// console.log(arr1, arr);

// // 10
//
// const arr = [1,2,3,4,5];
// arr.push(2,3,4);
//
//
// console.log(arr);

// // 11
//
// const arr = [1,2,3,4,5];
// arr.splice(3,0,'a','b','c')
//
// console.log(arr)


// //12
//
// const arr = [1,2,3,4,5];
// arr.splice(1,0,'a','b');
// arr.splice(6,0,'c');
// arr.splice(8,0,'e');
//
// console.log(arr);

// // 13
//
// const arr = [3,4,1,2,7];
// arr.sort()
//
// console.log(arr)

// 14
//
// const arr = [5,6,7,8,9].reduce((sum, item) => sum + item, 0);
// console.log(arr);

//15

// const arr = [5,6,7,8,9].map(function(element) {
//     return element * element;
// });
// console.log(arr);
//
// 16

// const arr = [1,-3,5,6,-7,8,9,-11];
// const result = arr.filter(item => item < 0)
//
// console.log(result);

// // 17
//
// const arr = [1,-3,5,6,-7,8,9,-11];
// let result = arr.filter(elem => elem % 2 === 0);
//
// console.log(result);

// 18
//
// const arr = ['aaa','aaaqqq','zzzqq','zz','qsaa']
//
// const result = arr.filter(word => word.length > 5);
//
// console.log(result);

// // 19
//
// const arr = [1,2,[3,4],5,[6,7]];
//
// let filtr = arr.filter(Array.isArray);
// console.log(filtr);

// // 20
//
// const arr = [5,-3,6,-5,0,-7,8,9].reduce((negatives, item)=> negatives + (item < 0 ? 1 : 0),0);
//
// console.log(arr);
//
