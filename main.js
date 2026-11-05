function multyply(a,b) {
    return a * b;
}

const multyplyArrow = (a, b) => {
    return a * b;
};
console.log(multyplyArrow(5, 3));

const isEven = (number) => {
    return number % 2 === 0;
};
console.log(isEven(4));
console.log(isEven(7)); 
console.log(isEven(20));

function countVowels(str) {
    const vowels = "eqejffhq";
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("hello"));
console.log(countVowels("frontend"));
console.log(countVowels("javaScriipt"));

function reverseString(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}
console.log(reverseString("hello"));
console.log(reverseString("good"));
console.log(reverseString("javascript"));


function factorial(n) {
    let result = 1;
    for(let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(3));
console.log(factorial(0));

function sumTo(n) {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum+= 1;
    }
    return sum;
}
console.log(sumTo(5));
console.log(sumTo(10));
console.log(sumTo(15));


function createProduct(name,price) {
    return {
        name: name,
        price:price,
        currency: "сом"
    };
}
console.log(createProduct("laptop", 50000));
console.log(createProduct("iphone", 100000));

const products = [
  { name: "Ноутбук",   price: 45000, inStock: true  },
  { name: "Мышь",      price: 800,   inStock: false },
  { name: "Клавиатура", price: 2500, inStock: true  },
  { name: "Монитор",   price: 15000, inStock: true  },
  { name: "Наушники",  price: 3200,  inStock: false }
];

const names = products.map(function(product) {
    return product.name;
});
console.log(names);
const available = products.filter(function(product) {
    return product.inStock === true;
});
console.log(available);

const expensive = products.find(function(product) {
    return product.price > 10000;
});
console.log(expensive);

const totalPrice = products.reduce(function(sum, product) {
    return sum + product.price;
}, 0);
console.log(totalPrice);


const cheap = products.some(function(product) {
    return product.price < 1000;
});
console.log(cheap);

const productInfo = products.map(function(product) {
    return {
        name: product.name,
        price: product.price
    };
});
console.log(productInfo);

const allexpensive = products.every(function(product) {
    return product.price > 500;
});
console.log(allexpensive);

const index = products.findIndex(function(product) {
    return product.name === "Монитор";
});
console.log(index);

const sortedProducts = [...products].sort(function(a, b) {
    return a.price - b.price;
});

console.log(sortedProducts);

const stockCount = products.filter(function(product) {
    return product.inStock === true;
}).length;

console.log(stockCount);

const productString = products.map(function(product) {
    return `${product.name} - ${product.price} som`;
});
console.log(productString);

const veryExpensive = products.reduce(function(max, product) {
    if(product.price > max.price) {
        return product;
    }
    return max;
});
console.log(veryExpensive);

const stockTotal = products.filter(function(product) {
    return product.inStock === true;
}) 
.reduce(function(sum, product) {
    return sum + product.price;
}, 0);
console.log(stockTotal);

const disProduct = products.map(function(product) {
    return {
        ...product,
        price: product.price * 0.9
    };
});
console.log(disProduct);

const keyboard = products.some(function(product) {
    return product.name === "Клавиатура";
});
console.log(keyboard);

const students = [
    { name: "Айгуль", grade: 85, active: true },
    { name: "Бек", grade: 42, active: false },
    { name: "Дана", grade: 91, active: true },
    { name: "Эрлан", grade: 67, active: true },
    { name: "Мария", grade: 38, active: false }
];

const studentName = students.map(function(student) {
    return student.name;
});
console.log(studentName);

const goodStudent = students.filter(function(student) {
    return student.grade > 60;
});
console.log(goodStudent);

const lowGrade = students.find(function(student) {
    return student.grade < 50;
});
console.log(lowGrade);

const totalGrade = students.reduce(function(sum, student) {
    return sum + student.grade;
}, 0);

const averageGrade = totalGrade / students.length;
console.log(averageGrade);

const neactive = students.some(function(student) {
    return student.active === false;
});
console.log(neactive);

const all30 = students.every(function(student) {
    return student.grade > 30;
});
console.log(all30);

const allStudent = students.map(function(student) {
    return `${student.name}, - ${student.grade}баллов`;
});
console.log(allStudent);

const activeStud = students.filter(function(student) {
    return student.active === true;
});
console.log(activeStud);

const bestStudent = student.reduce(function(student) {
    if (student.grade > best.grade);
    return student;
});
console.log(bestStudent);

const activeName = students.filter(function(product) {
    return student.active === true;
});
.map (function(student) {
    return student.name;
});
console.log(activeName);




const user = {
    id: 1,
    username: "coder_01",
    address: {
        city: "Бишкек",
        street: "Чуй 120"
    }
};

const {
    username,
    address: { city },
    country = "Кыргызстан"
} = user;

console.log(username);
console.log(city);
console.log(country);




function average(...numbers) {
    const sum = numbers.reduce(function(total, number) {
        return total + number;
    }, 0);

    return sum / numbers.length;
}

console.log(average(10, 20, 30));
console.log(average(5, 10, 15, 20));




const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = [0, ...arr1, ...arr2];

console.log(combined);




const userCopy = {
    ...user,
    username: "developer"
};

console.log(userCopy);
console.log(user);





const settings = {
    theme: "dark",
    fontSize: 16,
    notifications: true
};

const jsonString = JSON.stringify(settings);

console.log(jsonString);

const parsedSettings = JSON.parse(jsonString);

console.log(parsedSettings);
console.log(parsedSettings.theme);


localStorage.setItem("settings", JSON.stringify(settings));

const savedSettings = localStorage.getItem("settings");

const restoredSettings = JSON.parse(savedSettings);

console.log(restoredSettings);
console.log(restoredSettings.fontSize);
