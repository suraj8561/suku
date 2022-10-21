// first method 
// class car {
  
//     print_atrributes(){
//       console.log(this.speed,this.color)
//     }
//   }
//   var my_santro=new car();
//   my_santro.color="red"
//   my_santro.speed=100;
//   my_santro.tyre=4
//   my_santro.print_atrributes();
  
//   var your_sweeft=new car();
//   your_sweeft.color="white";
//   your_sweeft.speed=200;
//   your_sweeft.tyre=4;
//   your_sweeft.print_atrributes();



// second method using constructor

// class car {

//   constructor(c = "white", s = 120, ty = 4) {
//     this.color = c;
//     this.speed = s;
//     this.tyre = ty;
//   }
//   print_atrributes() {
//     console.log(this.speed, this.color, this.calculate_distance())
//   }
//   calculate_distance(time = 60) {
//     return this.speed * time;
//   }
// }
// var my_santro = new car("red", 100, 4);
// my_santro.print_atrributes();
// my_santro.calculate_distance()

// var your_sweeft = new car("white", 200, 4);
// your_sweeft.print_atrributes();
// your_sweeft.calculate_distance()

// var my_audi = new car();
// my_audi.print_atrributes();
// my_audi.calculate_distance()
//   output
//   100 red
//   200 white

// super mathod 
// class abc {
//     constructor (a,b){
//       this.y=a;
//       this.z=b;
//     }
//     print(){
//       console.log(this.y);
//     }
//   }
//   class child extends abc {
//     constructor(x,y,d){
//       console.log("print child method")
//       super(x,y)
//     }
//     print(){
//       super.print()
//     }
//   }
//   var x=new child(3,4,5);
//   x.print();

// another example 
// class animal{
//     constructor(color){
//       this.color=color
//     }
//     printColor(){
//       console.log(this.color);
//     }
//   }
//   class Dog extends animal{
    
//     constructor (color,food)
//     {
//     super(color,food);  
//     this.food=food;
//     }
//     eating(){
//       console.log("eating" , this.food)
//     }
//     display(){
//       this.printColor();
//       this.eating()
//     }
//   }
//   d=new Dog("blue","bread")
//   d.display()

class BankAccount{
    constructor(countomerName,balance=0){
      this.countomerName=countomerName;
    this.AccountNumber=Date.now()
    this.#balance=balance;
    }
    deposite(amount){
      this.#balance+=amount
    }
    windaw(amount){
      this.#balance-=amount
    }
     setBalance(amount){
      this.#balance=amount
    }
  }
  class currentAccount extends BankAccount{
    transictionlimit=50000;
    constructor(countomerName,balance=0){
      super(countomerName,balance)
    }
    takeBussinessLoan(amount){
      console.log("taking bussiness loan: " +amount)
    }
  }
  class savingAccount extends BankAccount{
    transictionlimit=50000;
    constructor(countomerName,balance=0){
      super(countomerName,balance)
    }
    takesavingLoan(amount){
      console.log("taking saving loan"+amount)
    }
   
  }
  const suraj  = new currentAccount("suraj kumar")
  // suraj.deposite(1000)
  // suraj.windaw(100)
  // suraj.#balance="ho gya gotala"
  suraj.setBalance(4000)
  // suraj.takeBussinessLoan(100000)
  console.log(suraj)