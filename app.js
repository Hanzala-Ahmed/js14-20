// alert("Hello World")
// Arrays

// Q no 1
// var a = [];

// Q no 2 
// var a = ["Micheal", "John"];
// a[0] = "";
// a[1] = "";

// Q no 3
// var stringArr = ["Hanzala", "Ahmed"];

// Q no 4
// var numbersArr = [1, 2, 3, 4,];

// Q no 5
// var booleanArr = [true, false];

// Q no 6
// var mixedArr = ["Hanzala", true, 1, 3, "Ahmed", false];

// Q no 7
// var qualificationArr = ["SCC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phill", "PHD"];
// document.write("Qualification: <br>");
// document.write("<br> 1) " + qualificationArr[0]);
// document.write("<br> 2) " + qualificationArr[1]);
// document.write("<br> 3) " + qualificationArr[2]);
// document.write("<br> 4) " + qualificationArr[3]);
// document.write("<br> 5) " + qualificationArr[4]);
// document.write("<br> 6) " + qualificationArr[5]);
// document.write("<br> 7) " + qualificationArr[6]);
// document.write("<br> 8) " + qualificationArr[7]);

// Q no 8
// var studentName = ["Micheal", "John", "Tony"];
// var score = [320, 230, 480];
// document.write("Score of " + studentName[0] + "is " + score[0] + ". Percentage: " + score[0]/500*100 + "%");
// document.write("<br> Score of " + studentName[1] + "is " + score[1] + ". Percentage: " + score[1]/500*100 + "%");
// document.write("<br> Score of " + studentName[2] + "is " + score[2] + ". Percentage: " + score[2]/500*100 + "%");

// Q no 9 a
// var colorNamesArr = ["Orange", "Red", "Green", "Blue", "Yellow"];
// colorNamesArr.unshift(prompt("What color you want to add in the begining"));
// document.write("Successfully Added, To see result go tot console");
// console.log(colorNamesArr);

// Q no 9 b
// var colorNamesArr = ["Orange", "Red", "Green", "Blue", "Yellow"];
// colorNamesArr.push(prompt("What color you want to add in the end"));
// document.write("Successfully Added, To see result go tot console");
// console.log(colorNamesArr);

// Q no 9 c
// var colorNamesArr = ["Orange", "Red", "Green", "Blue", "Yellow"];
// colorNamesArr.unshift(prompt("What color you want to add in the begining"));
// colorNamesArr.unshift(prompt("What color you want to add in the begining"));
// document.write("Successfully Added, To see result go tot console");
// console.log(colorNamesArr);

// Q no 9 d
// var colorNamesArr = ["Orange", "Red", "Green", "Blue", "Yellow"];
// document.write("Old Arrays: " + colorNamesArr);
// colorNamesArr.shift(0);
// document.write("<br> New Arrays after delete the first color: " + colorNamesArr);

// Q no 9 e
// var colorNamesArr = ["Orange", "Red", "Green", "Blue", "Yellow"];
// document.write("Old Arrays: " + colorNamesArr);
// colorNamesArr.pop(0);
// document.write("<br> New Arrays after delete the end color: " + colorNamesArr);

// Q no 9 f
// var colorNamesArr = ["Orange", "Red", "Green", "Blue", "Yellow"];
// document.write("Old Arrays: " + colorNamesArr + "<br>");
// var newindexArr = parseInt(prompt("In which index do you want to add a color"));
// var newArr = prompt("What color you want to add?");
// colorNamesArr.splice(newindexArr, 0, newArr);
// document.write("New Arrays: " + colorNamesArr);

// Q no 9 g
// var colorNamesArr = ["Orange", "Red", "Green", "Blue", "Yellow"];
// document.write("Old Arrays: " + colorNamesArr + "<br>");
// var newindexArr = parseInt(prompt("From which index do you want to delete a color"));
// var newArr = parseInt(prompt("How many colors do you want to delete?"));
// colorNamesArr.splice(newindexArr, newArr);
// document.write("New Arrays: " + colorNamesArr);

// Q no 10
// var studentScore = [320, 230, 480, 120];
// document.write("Scores of Students : " + studentScore);
// studentScore.sort((a, b) => a - b);
// document.write("<br> Ordered Scores of Students : " + studentScore);

// Q no 11
// var citiesList = ["karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// document.write("Cities List: <br>" + citiesList);
// var newCitiesList = citiesList.slice(2, 4);
// document.write("<br> <br> Selected Cities List: <br>" + newCitiesList);

// Q no 12
// var arr = ["This", "is", "my", "cat"];
// document.write("Array: <br>" + arr);
// var newarr = arr.join(" ");
// document.write("<br> <br>String: <br>" + newarr);

// Q no 13
// var devices = ["keyboard", "mouse", "printer", "monitor"];
// document.write("Devices: <br>" + devices);
// document.write("<br> <br>Out: <br>" + devices[0]);
// document.write("<br>Out: <br>" + devices[1]);
// document.write("<br>Out: <br>" + devices[2]);
// document.write("<br>Out: <br>" + devices[3]);

// Q no 14
// var devices = ["keyboard", "mouse", "printer", "monitor"];
// document.write("Devices: <br>" + devices);
// document.write("<br> <br>Out: <br>" + devices[3]);
// document.write("<br>Out: <br>" + devices[2]);
// document.write("<br>Out: <br>" + devices[1]);
// document.write("<br>Out: <br>" + devices[0]);

// Q no 15
// var phones = ["Apple", "Samsung", "Motorala", "Nokia", "Sony", "Haier"];
// document.write("<select>" + 
//     "<option>" + phones[0] + "</option>" +
//     "<option>" + phones[1] + "</option>" +
//     "<option>" + phones[2] + "</option>" +
//     "<option>" + phones[3] + "</option>" +
// "</select>");

// Arrays and Loop 
// Q no 1 empty multidimensional array
// var arr = [[], []];

// Q no 2
// var arr =[[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
// document.write(arr[0] + "<br>");
// document.write(arr[1] + "<br>");
// document.write(arr[2] + "<br>");

// Q no 3
// for(var i = 1 ; i <= 10 ; i++ ){
//     document.write(i + "<br>")
// }

// Q no 4
// var num = +prompt("Enter Table number");
// var tableLength = +prompt("Enter maximum Table number");
// document.write("Multiplication Table of " + num + " Length " + tableLength + "<br> <br>");
// for(var i = 1 ; i <= tableLength ; i++){
//     document.write(num + " x " + i + " = " + num*i + "<br>")
// }

// Q no 5
// var fruits = ["Apple" , "Banana" , "Mango" , "Orange", "Strawberry"];
// for(var i = 0 ; i < fruits.length ; i++){
//         document.write( fruits[i] + "<br>"); 
// }
// for(var i = 0 ; i < fruits.length ; i++){
//     document.write("<br>Elemnets at index " + i + " is " + fruits[i]);
// }

// Q no 6 
// document.write("<b>Counting:</b> <br>");
// for(i = 1 ; i <= 10 ; i++){
//     document.write(i + " ")
// }

// document.write("<br> <br><b>Reverse Counting:</b> <br>");
// for(i = 10 ; i >= 1 ; i--){
//     document.write(i + " ")
// }

// document.write("<br> <br><b>Even:</b> <br>");
// for(i = 1 ; i <= 20 ; i++){
//     i = i + 1
//     document.write(i + " ")
// }

// document.write("<br> <br><b>Odd:</b> <br>");
// for(i = 0 ; i <= 20 ; i++){
//     i = i + 1
//     document.write(i + " ")
// }

// document.write("<br> <br><b>Series:</b> <br>");
// for(i = 1 ; i <= 20 ; i++){
//     i = i + 1
//     document.write(i + "k ")
// }

// Q no 7 
// var a = ["cake", "apple pie", "cookie", "chips", "patties"];
// var b = prompt("Welcome to ABC Bakery. What do you want to order sir/Ma'am");
// var c = false
// for (var i = 0; i < a.length; i++){
// if (b === a[i]){
//     c = true;
//     document.write("cookie is <b>available</b> at index " + a.indexOf(b) + " in our bakery.");
// }
// }
// if (c === false){
//     document.write("We are sorry. pastry is <b>not available</b> in our bakery");
// }

// Q no 8
// var a = [24, 53, 78, 91, 12];
// var b = a[0];
// document.write("Array Items:" + a)
// for(var i = 0; i < a.length; i++){
//     if (a[i] > b){
//         b = a[i]
//     }
// }
// document.write("<br>The largets number is: " + b);

// Q no 9
// var a = [24, 53, 78, 91, 12];
// var b = a[0];
// document.write("Array Items:" + a)
// for(var i = 0; i < a.length; i++){
//     if (a[i] < b){
//         b = a[i]
//     }
// }
// document.write("<br>The Smallest number is: " + b);

// Q no 10
for (var i = 5; i <= 100; i = i+5){
    document.write(i +"<br>");
}