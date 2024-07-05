// 1. array ichidagi eng katta sonni toping


// let array = [4, 5, 3, 5, 2, 5, 27];
// function largenumber(array) {
//     let ArraySort = array.sort(function (a, b){
//         return b - a;
// });
// let large = ArraySort[0];
// return large
// }
// console.log(largenumber(array));






// 2. array ichidagi eng kichik sonni toping 



// let array = [43, 215, 34, 45, 32, 54, 27];
// function smallnumber(array) {
//     let ArraySort = array.sort(function (a, b){
//         return a - b;
// });
// let small = ArraySort[0];
// return small
// }
// console.log(smallnumber(array));



// 3. Foydalanuvchi son kiritadi va arrey ichidagi foydalanuvchi sonidan kichik bo’lgan sonlarni ekranga chiqaring



// let userNum = prompt("Sonni kiriting");
// let array = [10, 2, 3, 12, 12, 31, 41, 90, 13];
// function smallnumber(userNum){
//     for (let i = 0; i < array.length; i++) {
//         if (userNum > array[i]) {
//             console.log(array[i]);
//         }

//     }
// }                       

// smallnumber(userNum,array)





// 4. argument sifatida qabul qilingan sonning mukammal yoki mukammal son emasligini aniqlaydigan function yarating 




// let userNum = +prompt("sonni kiriting");
// let total = 0;

// function perfectNum(userNum){
//     for(let i = 1; i < userNum; i++)
//     if(userNum % i == 0){
//         total = total + i
//     }if(userNum == total){
//         console.log("Siz kiritgan son mukammal son")
//     }else{
//         console.log("Kiritgan soningiz mukammal emas")
//     }
// }

// perfectNum(userNum)





// 5. raqamlar kiritilgan arreyni teskari qilish (for dan foydalaning) 


// let arr = [23, 21, 5, 3, 52, 22, 14, 2, 54, 24];
// let arr2 = [];

// function reverseArr(arr){
//     for(let i = arr.length - 1; i > -1; i-- ){
//         arr2.push(arr[i]);
//     }
//     console.log(arr2)
// }

// reverseArr(arr,arr2)



// 6. arrey ichidagi tub sonlar ni toping



// let userNum = prompt("Sonni kiriting");

// function primeNumber(userNum) {
//     let total = 0;

//     for (let i = 1; i < userNum; i++) {
//         if (userNum % i == 0) {
//             total = total + 1
//         }

//     } if (total < 2) {
//         console.log("bu son tub son");
//     } else {
//         console.log("bu son tub son emas")
//     }

// }

// primeNumber(userNum)


// 7. Ixtiyoriy function va value lari sonlardan iborat bo'lgan object yaratilsin, va object value laridan tashkil topgan arrayga function parametri ham oxiridan ham boshidan qo'shilsin


// let values = {
//     firstName: "Temur",
//     lastName: "Abdialimov",
//     age: 20,
//     country: "Uzbekistan",
// };

// function arrayFunction(newValue) {
//     return newValue;
// }

// let Arrayvalue = Object.values(values);

// let newValue = arrayFunction(20);
// Arrayvalue.unshift(newValue);

// Arrayvalue.push(newValue);

// console.log(Arrayvalue);