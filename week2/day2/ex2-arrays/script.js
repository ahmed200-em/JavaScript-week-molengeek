let name = ['John', 'Ahmed', 'Sophie']

// ! exercise 1
console.log(name)
console.log(name.length)
console.log(name[0]);
console.log(name[2]);

// ! exercise 2
name.push("Sara")
console.log(name);
name.pop();
console.log(name);

// ! exercise 3
name.unshift("Michael")
console.log(name);
name.shift()
console.log(name);

// ! exercise 4
let food=["Pizza", "Burger", "Pasta", "Salad", "Sushi"];
food.splice(1,1, "Tajik")
console.log(food);
food.slice(2,1)
console.log(food);

// ! exercise 5
let numbers=[1, 2, 24, 5, 4];
console.log(numbers);
numbers.sort((a, b) => a - b);
console.log(numbers);
numbers.reverse();
console.log(numbers);

// ! exercise 6
let object = ["pc", "laptop", "tablet", "smartphone"];
console.log(object.includes("tablet"));
console.log(object.includes("smartwatch"));
console.log(object.indexOf("tablet"));

// ! exercise 7
let animals = ["cat", "dog", 11, "hamster", "bird"];
animals.forEach(element => {
    console.log(element, typeof element, animals.indexOf(element) );
});


// ! exercise 8
let numb = [6, 5, 6, 24, 15];
let doubledNumbers = numb.map(num => num * 2);
console.log(doubledNumbers);

// ! exercise 9
let greater10 = numb.filter(num => num > 10);
console.log(greater10);

// ! exercise 10
let firstNumb = numb.find(num => num > 10);
console.log(firstNumb);


