//Task 1
var str = "Have A nice day, baby! ;)";
console.log(str);


//Task 2
var age = 25;
console.log(age);
age = "nothing"; // наверное это было сделано пока я не поменяла текст в задании но тут нужно было записать значение undefined


//Task 3
var info;
info = {
    name: "Pedro",
    age: -7
};
console.log(info.name);
console.log(info.age);
var name;
name = info.name;
console.log(name);
delete info.name;
console.log(name);


//Task 4
var customArray;
customArray=[3,2,1];
console.log(customArray);
customArray=0;
console.log(customArray);


//Task 5
var student="Sashko";
console.log(student);
//index.html and script.js have been created!
student="Sashko.Babich";
console.log(student);


//Task 6
var complex;
complex = ["My name is"];
// здесь сразу можно было массив обьявить и записать в него значение с 44-45 строки так обычно делают
complex.push(7);
/* тут абсолютно не обязательно было писать черезе метод push + это не очень очевидно зачем это делать тут именно так
возможно есть уже желание этим пользоваться - тогда скажу сразу что этими методами обычно пользуються когда в цикле записывают что то 
в массив а таких случаях либо указывают явный элемент которому присваивают значение либо в массив записывают сразу все элементы  
поочередно */
complex.push(null);
complex[3]=info;
console.log(complex[2]);


//Task 7
var complexObj={};
complexObj.name = "Amazing S";
complexObj.age = 27;
complexObj.friends = ["Biba","Boba"];
complexObj.soc_links={FB:"https://www.facebook.com/profile.php?id=100008212801432",googleplus:"https://plus.google.com"};
var temp=`My name is ${complexObj.name}. I am ${complexObj.age} years old. My best friends are ${complexObj.friends[0]} and ${complexObj.friends[1]}. You can find me here: ${complexObj.soc_links.FB} or somewhere there: ${complexObj.soc_links.googleplus}.`;
console.log(temp);
