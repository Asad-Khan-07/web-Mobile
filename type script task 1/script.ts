
// 1. Small Problems (Concept Checks)

//Data Type/Type annotation 
let username:string="Asad"
let age:number=17
let isActive:boolean=true

// Type Inference
// let name="asad"
// name=2

// Array & Tuples

let arr:string[]=["Asad","Hussain"]
let std:[number,string,boolean]=[12,"Asad",true]

// Enums

enum Userrole{
    Admin="Admin",
    User="User",
    Guest="guest"
}

function checkAccess(role:Userrole) {
    if (role===Userrole.Admin) {
        console.log("Access Granted");        
    } else {
        console.log("Access Deniend");   
    }
}
checkAccess(Userrole.Admin)

// Union & Intersection Types
 type ID=string|number
function printid(id:ID) {
    console.log(id);
}
printid(1999999)

type person={
    name:string
}
type employee={
    employeeid:number
}
let dev:person & employee={
    name:"asad",
    employeeid:1234
}

// Interfaces
interface Product{
    id:number,
    name:string,
    price?:number,
    readonly category:string
}
interface DiscountedProduct extends Product{
     discount: number

}
let item:DiscountedProduct={
    id:123,
    name:"Mouse",
    category:"electronics",
    discount:200
}

//  Classes & Objects
class Sportcar {
    brand:string;
    Year:number
    constructor(brand:string,Year:number) {
        this.brand=brand
        this.Year=Year
    }

    getDetails(){
      return  `Brand ${this.brand}, Year${this.Year}`;
    }

}

const spcar=new Sportcar("Toyota",2020)
console.log(spcar.getDetails());

class Car {
    public brand:string;
    private Year:number
    constructor(brand:string,Year:number) {
        this.brand=brand
        this.Year=Year
    }

    get(){
        return `Year${this.Year}`;
    }

}
const car=new Car("Toyota",2020)
console.log(car.get());

// 2. Medium Tasks (Applied Concepts)

enum Role{
    Admin="Teacher",
    Editor="Student",
    Viewer="Principal"
}

interface User{
    id:number
    name:string
    role:Role
}

class UserManager {
arr:User[] =[]

constructor(){
    this.arr=[]
}
addUser(user:User){
    this.arr.push(user)
}
 getUsersByRole(role: Role){
    this.arr.filter((user)=>{
        console.log(user.role);           
    })
}
}
const usr=new UserManager()
usr.addUser({id:1,name:"Asad",role:Role.Admin})
usr.getUsersByRole(Role.Admin)
console.log(usr);

interface Item{
    id:number
    name:string
    price:number
}

class Cart{
    private arr:Item[]=[]
    constructor(){
        this.arr=[]
    }

    additem(item:Item){
        this.arr.push(item)
    }

    getTotal():number{
        let total:number=0;
        this.arr.forEach((val)=>{
            total+=val.price
        })
       return total;
         
    }
}

const cart=new Cart()
cart.additem({id:12,name:"Mouse",price:500})
cart.additem({id:13,name:"CPU",price:1000})
cart.additem({id:13,name:"CPU",price:1000})
// console.log(cart);
// console.log(cart.getTotal());

class DiscountedCart extends Cart{


    applyDiscount(percent:number){
     return `${this.getTotal()-percent} rupee After Discount of ${percent}`   
    }
}

const dis=new DiscountedCart()

dis.additem({id:12,name:"Mouse",price:1500})
dis.additem({id:12,name:"Mouse",price:1500})
console.log(dis.applyDiscount(200));



type aliasID=string|number
class Employee{
    id:aliasID
    name:string
    salary:number

        constructor(id:aliasID,name:string,salary:number){
            this.id=id
            this.name=name
            this.salary=salary
        }
    getDetails(){
        console.log( this.id,this.name,this.salary);
        
       
    }
}

const emp=new Employee("2008","Asad",80000)
// console.log(emp);

class Manager extends Employee {
    department:string
        constructor(department:string){
           super("20008","Asad",80000)
            this.department=department
        }
    getDetails(): void {
        console.log(this.id,this.name,this.salary,this.department);
       
    }
}
const man=new Manager("Full Stack")
// man.getDetails();

//  Mega Problem (Full Integration)

enum BookCategory{
    Fiction,
    NonFiction,
    Science,
    History
}

interface Book{
    id:number|string
    title:string
    author:string
    readonly category:BookCategory
    isavalibale:boolean
}

class Library {
    protected bookarray:Book[]=[]
    constructor() {
        this.bookarray
    }
    addBook(book: Book){
        this.bookarray.push(book)
    }
    findBookByTitle(title: string):Book|undefined{
        
            for (const book of this.bookarray) {
                   if (book.title===title) {
                   return book;
                }
                
            }
            return undefined
        }

        borrowBook(id: number|string): void{
            this.bookarray.forEach((book)=>{
                if (book.id===id) {
                    if (book.isavalibale===true) {
                        book.isavalibale=false
                        console.log(book)
                        console.log("Book is given you borrowed");
                        
                    }else{
                        // book.isavalibale=true
                        console.log("Book is already borrowed");   
                    }
                }else{
                    console.log("Book Not found");
                    
                }
            })   
        }


        returnBook(id: number|string): void{
                this.bookarray.forEach((book)=>{
                    if (book.id===id) {
                        if (book.isavalibale===false) { 
                            book.isavalibale=true
                            console.log("You have given the book");
                            console.log(book);
                            
                        }else{
                            // book.isavalibale=true
                            console.log("Book is already in Library");
                        }
                    }else{
                        console.log("Book not found");      
                    }
                })
        }
}

const lib=new Library()
lib.addBook({id:1222,title:"seven",author:"Harry",category:BookCategory.Fiction,isavalibale:true})
// lib.borrowBook(1222)
// lib.returnBook(1222)
// console.log(lib);
// console.log(lib.findBookByTitle("seven"));
// lib.findBookByTitle("sevem")


// Extend Class → DigitalLibrary (extends Library)
// Adds method downloadBook(id: number): string → returns "Downloading Book Title..."

class DigitalLibrary extends Library{
    downloadbook(id:number|string):string{
        let bookarr:string="";
        this.bookarray.forEach((book)=>{
            if (id===book.id) {
                
                if (book.isavalibale===true) {
                    bookarr=`Downloading book ${book.title}.....`;
                    
                }else{
                    console.log("Book is not avalibale");
                    
                }
            }else{
                console.log("Book not Found");
                
            }
        })
        return bookarr
    }
}

const digilib=new DigitalLibrary()
digilib.addBook({id:"fiction",title:"seven",author:"Harry",category:BookCategory.Fiction,isavalibale:true})
console.log(digilib.downloadbook("fiction"));

type Libraryuser = { 
    id: number; 
    name: string;
    borrowedBooks: number[] 
    
}

function borrowBookForUser(user: Libraryuser, bookId: number){
        user.borrowedBooks.push(bookId)
        console.log(user);        
}

const person:Libraryuser={
    id:123,
    name:"Asad",
    borrowedBooks:[]
}

borrowBookForUser(person,1992)