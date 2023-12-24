// string1

// let n = 5;

// for (let i = 65; i < 65 + n; i++) {
//   let strlet = String.fromCharCode(i);
//   console.log(strlet);
// }

// string2

// let n = "Chingiz";

// if (/[0-9]/.test(n)) {
//   console.log("digit");
// } else if (/[a-zA-Z]/.test(n)) {
//   console.log("lotin");
// } else {
//   console.log("nol");
// }

// string3

// let str = "Saidaziz"

// if (str.length === 0) {
//     console.log("Satr yoq!");
//     return;
//   }

//   let firstCharCode = str.charCodeAt(0);
//   let lastCharCode = str.charCodeAt(str.length - 1);

//   console.log("Birinchisi: " + firstCharCode);
//   console.log("Oxirgisi: " + lastCharCode);

// string4

// let N = 5;
// let belgi = "A";
// let res = belgi;

// for (let i = 1; i < N; i++) {
//   res += belgi;
// }

// console.log(res);

// string5

// let str = "Saidaziz";
// let revStr = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   revStr += str[i];
// }

// console.log(revStr);

// string6

// function getStars(str, N) {
//   let res = "";
//   for (let i = 0; i < str.length; i++) {
//     res += str[i];
//     for (let j = 1; j <= N; j++) {
//       res += "*";
//     }
//   }
//   return res;
// }

// let inputSTR = "Saidaziz";
// let N = 1;

// let newSTR = getStars(inputSTR, N);

// console.log(newSTR);

// string7

// function findNumber(str) {
//   let num = [];
//   for (let char of str) {
//     if (!isNaN(char)) {
//       num.push(char);
//     }
//   }
//   return num;
// }

// let inputString = "Saidaziz8717";
// let foundnum = findNumber(inputString);

// console.log("Satrdigi sonla: " + foundnum.join(""));

// string8

// let str = "Salom mening ismim Saidaziz";
// let count = 0;

// for (let i = 0; i < str.length; i++) {
//   let charCode = str.charCodeAt(i);
//   if (
//     (charCode >= 65 && charCode <= 122) ||
//     (charCode >= 1072 && charCode <= 1103)
//   ) {
//     count++;
//   }
// }

// console.log("Lotin va kiril xarflarni soni: " + count);

// string9

// function lowerSTR(str) {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     let char = str.charAt(i);
//     if (char >= "A" && char <= "Z") {
//       result += String.fromCharCode(char.charCodeAt(0) + 32);
//     } else {
//       result += char;
//     }
//   }
//   return result;
// }

// let inString = "SAIDAZIZ SAIDAMINOV";
// let conString = lowerSTR(inString);

// console.log("Kichikga o'zgartirilgan satr: " + conString);

// string10

// function mixSTR(str) {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     let char = str.charAt(i);
//     if (char >= "a" && char <= "z") {
//       result += char.toUpperCase();
//     } else if (char >= "A" && char <= "Z") {
//       result += char.toLowerCase();
//     } else {
//       result += char;
//     }
//   }
//   return result;
// }

// let inString = "sAIDAZIZ sAIDAMINOV";
// let mixString = mixSTR(inString);

// console.log("Almashtirilgan satr: " + mixString);

// string11

// let str = "12.3"

// if (!isNaN(str)) {
//   if (str.includes(".")) {
//     console.log(2);
//   } else {
//     console.log(1);
//   }
// } else {
//   console.log(0);
// }

// string12

// function getInverseNumber(n) {
//   if (typeof n !== "number" || !Number.isInteger(n)) {
//     return n;
//   }

//   let innum = 0;
//   while (n > 0) {
//     innum = innum * 10 + (n % 10);
//     n = Math.floor(n / 10);
//   }

//   return innum;
// }

// let num = 12345;

// let inNum = getInverseNumber(num);

// console.log("Teskarisi: " + inNum);

// string13

// function getExpression(exp) {
//   let res = 0;
//   let curNumber = 0;
//   let isPositive = true;
//   for (let i = 0; i < exp.length; i++) {
//     let char = exp.charAt(i);

//     if (!isNaN(char) && char !== " ") {
//       curNumber = curNumber * 10 + parseInt(char);
//     } else {
//       if (!isPositive) {
//         curNumber *= -1;
//       }
//       res += curNumber;
//       curNumber = 0;

//       if (char === "-") {
//         isPositive = false;
//       } else if (char === "+") {
//         isPositive = true;
//       }
//     }
//   }
//   if (!isPositive) {
//     curNumber *= -1;
//   }
//   res += curNumber;
//   return res;
// }

// let inExpression = "7 + 3 - 2";
// let expValue = getExpression(inExpression);
// console.log("Arifmetik ifodaning qiymati: " + expValue);

// string14

// function mixStrings(N1, N2, S1, S2) {
//   if (N1 < 0 || N2 < 0) {
//     return "N1 va N2 natural son bo'lishi kerak!";
//   }
//   let newString = S1.substring(0, N1) + S2.substring(S2.length - N2);
//   return newString;
// }

// let N1 = 3;
// let N2 = 2;
// let S1 = "Hello";
// let S2 = "World";

// let mixString = mixStrings(N1, N2, S1, S2);

// console.log("Yangi hosil qilingan satr: " + mixString);

// string15

// let char = "a";
// let str = "Salom chingiz";
// let res = "";

// for (let i = 0; i < str.length; i++) {
//   if (str.charAt(i) === char) {
//     res += char + char;
//   } else {
//     res += str.charAt(i);
//   }
// }

// console.log("Natija: " + res);

// string16

// let char = "o";
// let str = "Salom Hammaga";
// let newSTR = "Man ";
// let res = "";

// for (let i = 0; i < str.length; i++) {
//   if (str.charAt(i) === char) {
//     res += newSTR + char;
//   } else {
//     res += str.charAt(i);
//   }
// }

// console.log("Natija: " + res);

// string17

// let mainStr = "Salom Hammaga Salom Salom";
// let subStr = "Salom";

// if (subStr.length === 0) {
//   return 0;
// }

// let count = 0;
// let index = mainStr.indexOf(subStr);

// while (index !== -1) {
//   count++;
//   index = mainStr.indexOf(subStr, index + subStr.length);
// }
// console.log("Takrorlanishlar soni: " + count);

// string18

// function remSTR(mainStr, subStr) {
//   let i = mainStr.indexOf(subStr);
//   if (i !== -1) {
//     return mainStr.slice(0, i) + mainStr.slice(i + subStr.length);
//   }
//   return mainStr;
// }
// let S1 = "Salom Hammaga Salom";
// let S2 = "Salom";

// let modString = remSTR(S1, S2);

// console.log("Natija: " + modString);

// string19

// let mainStr = "Salom Hammaga Salom Salom";
// let subStr = "Salom";
// let i = mainStr.indexOf(subStr);
// let result = mainStr;
// while (i !== -1) {
//   result = result.slice(0, i) + result.slice(i + subStr.length);
//   i = result.indexOf(subStr);
// }
// console.log("Natija: " + result);

// string20

// function repSTR(mainStr, oldStr, newStr) {
//   let index = mainStr.indexOf(oldStr);
//   if (index !== -1) {
//     return (
//       mainStr.slice(0, index) + newStr + mainStr.slice(index + oldStr.length)
//     );
//   }
//   return mainStr;
// }

// let S1 = "Salom ozi vasya";
// let S2 = "Salom";
// let S3 = "Qale ishla";
// let modString = repSTR(S1, S2, S3);

// console.log("Natija: " + modString);

// string21

// function repSTR(mainStr, oldStr, newStr) {
//   let index = mainStr.lastIndexOf(oldStr);
//   if (index !== -1) {
//     return (
//       mainStr.substring(0, index) +
//       newStr +
//       mainStr.substring(index + oldStr.length)
//     );
//   }
//   return mainStr;
// }

// let S1 = "Nima gap ozi vasya qale";
// let S2 = "qale";
// let S3 = "Qale ishla";
// let modString = repSTR(S1, S2, S3);
// console.log("Natija: " + modString);

// string22

// string 22

// let str1 = "talat ot qorin toxtat";
// let temp = [];
// let res = 0;

// temp = str1.split(" ");

// for (const el of temp) {
//   if (el[0] == el[el.length-1]) {
//     res++;
//   }
// }

// console.log(res);

// string23

// let senSTR = "Mani ismim Saidaziz lekin hamma mani Aziz diydi";
// let words = senSTR.split(" ");
// let count = 0;
// for (let i = 0; i < words.length; i++) {
//   let word = words[i].toUpperCase();
//   let aCount = 0;
//   for (let j = 0; j < word.length; j++) {
//     if (word.charAt(j) === "A") {
//       aCount++;
//     }
//   }
//   if (aCount === 2) {
//     count++;
//   }
// }

// console.log("2 ta 'A' harfi bor so'zlar soni: " + count);

// string24

// function getString(str) {
//   let words = str.split(" ");
//   let maxLength = 0;
//   let lonWord = "";
//   for (let i = 0; i < words.length; i++) {
//     let curWord = words[i];
//     if (curWord.length > maxLength) {
//       maxLength = curWord.length;
//       lonWord = curWord;
//     }
//   }
//   return lonWord;
// }
// let inString = "Nima gaplar! Bugun zor kun boldi";
// let lonWord = getString(inString);
// console.log("Eng uzun so'z: " + lonWord);

// string25

// let str = "Qale ishla ozi vasya!";

// let words = str.split(" ");
// let res = words.join(". ");

// console.log(res);

// string26

// let str = "qale ishla ozi vasya";
// let words = str.split(" ");
// let uprWORDs = [];

// for (let i = 0; i < words.length; i++) {
//   let word = words[i];

//   if (word.length > 0) {
//     let uprWORD = word.charAt(0).toUpperCase() + word.slice(1);
//     uprWORDs.push(uprWORD);
//   }
// }

// let res = uprWORDs.join(" ");

// console.log("Natija: " + res);

// string27

// let str = "Qale! ishla! ozi. vasya,?";

// let marks = [".", ",", ";", ":", "?", "!", "-", "'", '"', "(", ")"];
// let count = 0;

// for (let i = 0; i < str.length; i++) {
//   if (marks.includes(str.charAt(i))) {
//     count++;
//   }
// }

// console.log("Marklar soni: " + count);

// string28

// let path = "D:/Qudrat_c++/books/My_book.exe";

// let parts = path.split("/");
// let fileExtension = parts[parts.length - 1];
// let fileName = fileExtension.split(".")[0];

// console.log("Faylning nomi: " + fileName);

// string29

// let path = "D:/Qudrat_c++/books/My_book.exe";

// let parts = path.split("/");
// let fileExtension = parts[parts.length - 1];
// let fileName = fileExtension.split(".").pop();

// console.log("Faylning nomi: " + fileName);

// string30

// let path = "D:/Qudrat_c++/books/My_book.exe";

// let parts = path.split("/");
// let fileExtension = parts[parts.length - 2];
// let fileName = fileExtension.split(".").pop();

// console.log("Faylning nomi: " + fileName);