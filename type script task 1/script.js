"use strict";
// 1. Small Problems (Concept Checks)
Object.defineProperty(exports, "__esModule", { value: true });
//Data Type/Type annotation 
let username = "Asad";
let age = 17;
let isActive = true;
// Type Inference
// let name="asad"
// name=2
// Array & Tuples
let arr = ["Asad", "Hussain"];
let std = [12, "Asad", true];
// Enums
var Userrole;
(function (Userrole) {
    Userrole["Admin"] = "Admin";
    Userrole["User"] = "User";
    Userrole["Guest"] = "guest";
})(Userrole || (Userrole = {}));
function checkAccess(role) {
    if (role === Userrole.Admin) {
        console.log("Access Granted");
    }
    else {
        console.log("Access Deniend");
    }
}
checkAccess(Userrole.Admin);
function printid(id) {
    console.log(id);
}
printid(1999999);
let dev = {
    name: "asad",
    employeeid: 1234
};
let item = {
    id: 123,
    name: "Mouse",
    category: "electronics",
    discount: 200
};
//  Classes & Objects
class Sportcar {
    brand;
    Year;
    constructor(brand, Year) {
        this.brand = brand;
        this.Year = Year;
    }
    getDetails() {
        return `Brand ${this.brand}, Year${this.Year}`;
    }
}
const spcar = new Sportcar("Toyota", 2020);
console.log(spcar.getDetails());
class Car {
    brand;
    Year;
    constructor(brand, Year) {
        this.brand = brand;
        this.Year = Year;
    }
    get() {
        return `Year${this.Year}`;
    }
}
const car = new Car("Toyota", 2020);
console.log(car.get());
// 2. Medium Tasks (Applied Concepts)
var Role;
(function (Role) {
    Role["Admin"] = "Teacher";
    Role["Editor"] = "Student";
    Role["Viewer"] = "Principal";
})(Role || (Role = {}));
class UserManager {
    arr = [];
    constructor() {
        this.arr = [];
    }
    addUser(user) {
        this.arr.push(user);
    }
    getUsersByRole(role) {
        this.arr.filter((user) => {
            console.log(user.role);
        });
    }
}
const usr = new UserManager();
usr.addUser({ id: 1, name: "Asad", role: Role.Admin });
usr.getUsersByRole(Role.Admin);
console.log(usr);
class Cart {
    arr = [];
    constructor() {
        this.arr = [];
    }
    additem(item) {
        this.arr.push(item);
    }
    getTotal() {
        let total = 0;
        this.arr.forEach((val) => {
            total += val.price;
        });
        return total;
    }
}
const cart = new Cart();
cart.additem({ id: 12, name: "Mouse", price: 500 });
cart.additem({ id: 13, name: "CPU", price: 1000 });
cart.additem({ id: 13, name: "CPU", price: 1000 });
// console.log(cart);
// console.log(cart.getTotal());
class DiscountedCart extends Cart {
    applyDiscount(percent) {
        return `${this.getTotal() - percent} rupee After Discount of ${percent}`;
    }
}
const dis = new DiscountedCart();
dis.additem({ id: 12, name: "Mouse", price: 1500 });
dis.additem({ id: 12, name: "Mouse", price: 1500 });
console.log(dis.applyDiscount(200));
class Employee {
    id;
    name;
    salary;
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    getDetails() {
        console.log(this.id, this.name, this.salary);
    }
}
const emp = new Employee("2008", "Asad", 80000);
// console.log(emp);
class Manager extends Employee {
    department;
    constructor(department) {
        super("20008", "Asad", 80000);
        this.department = department;
    }
    getDetails() {
        console.log(this.id, this.name, this.salary, this.department);
    }
}
const man = new Manager("Full Stack");
// man.getDetails();
//  Mega Problem (Full Integration)
var BookCategory;
(function (BookCategory) {
    BookCategory[BookCategory["Fiction"] = 0] = "Fiction";
    BookCategory[BookCategory["NonFiction"] = 1] = "NonFiction";
    BookCategory[BookCategory["Science"] = 2] = "Science";
    BookCategory[BookCategory["History"] = 3] = "History";
})(BookCategory || (BookCategory = {}));
class Library {
    bookarray = [];
    constructor() {
        this.bookarray;
    }
    addBook(book) {
        this.bookarray.push(book);
    }
    findBookByTitle(title) {
        for (const book of this.bookarray) {
            if (book.title === title) {
                return book;
            }
        }
        return undefined;
    }
    borrowBook(id) {
        this.bookarray.forEach((book) => {
            if (book.id === id) {
                if (book.isavalibale === true) {
                    book.isavalibale = false;
                    console.log(book);
                    console.log("Book is given you borrowed");
                }
                else {
                    // book.isavalibale=true
                    console.log("Book is already borrowed");
                }
            }
            else {
                console.log("Book Not found");
            }
        });
    }
    returnBook(id) {
        this.bookarray.forEach((book) => {
            if (book.id === id) {
                if (book.isavalibale === false) {
                    book.isavalibale = true;
                    console.log("You have given the book");
                    console.log(book);
                }
                else {
                    // book.isavalibale=true
                    console.log("Book is already in Library");
                }
            }
            else {
                console.log("Book not found");
            }
        });
    }
}
const lib = new Library();
lib.addBook({ id: 1222, title: "seven", author: "Harry", category: BookCategory.Fiction, isavalibale: true });
// lib.borrowBook(1222)
// lib.returnBook(1222)
// console.log(lib);
// console.log(lib.findBookByTitle("seven"));
// lib.findBookByTitle("sevem")
// Extend Class → DigitalLibrary (extends Library)
// Adds method downloadBook(id: number): string → returns "Downloading Book Title..."
class DigitalLibrary extends Library {
    downloadbook(id) {
        let bookarr = "";
        this.bookarray.forEach((book) => {
            if (id === book.id) {
                if (book.isavalibale === true) {
                    bookarr = `Downloading book ${book.title}.....`;
                }
                else {
                    console.log("Book is not avalibale");
                }
            }
            else {
                console.log("Book not Found");
            }
        });
        return bookarr;
    }
}
const digilib = new DigitalLibrary();
digilib.addBook({ id: "fiction", title: "seven", author: "Harry", category: BookCategory.Fiction, isavalibale: true });
console.log(digilib.downloadbook("fiction"));
function borrowBookForUser(user, bookId) {
    user.borrowedBooks.push(bookId);
    console.log(user);
}
const person = {
    id: 123,
    name: "Asad",
    borrowedBooks: []
};
borrowBookForUser(person, 1992);
//# sourceMappingURL=script.js.map