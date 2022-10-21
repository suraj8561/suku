// constructor 
// function BankAccount(customerName,AccountNumber=Date.now(),bankBalance){
//     this.customerName=customerName
//     this.AccountNumber=Date.now();
//     this.bankBalance=bankBalance;
    
//     this.deposite=function(amount){
      
//     this.bankBalance+=amount
//     }
//     this.widrol=function(amount){
//       this.bankBalance-=amount
//     }
//   }
//    const suraj=new BankAccount('surauj',Date.now(),1000)
//    const vishal=new BankAccount('vishal',Date.now(),2000)
//   suraj.deposite(5000)
//   vishal.deposite(5100)
//   suraj.widrol(1200)
//   vishal.widrol(1100)
//    console.log(suraj,vishal)


// prototype methyod 
// function BankAccount(customerName,AccountNumber=Date.now(),bankBalance){
//     this.customerName=customerName
//     this.AccountNumber=Date.now();
//     this.bankBalance=bankBalance;
    
//   }
//    const suraj=new BankAccount('surauj',Date.now(),1000)
//    const vishal=new BankAccount('vishal',Date.now(),2000)
   
//    BankAccount.prototype.deposite=function(amount){
//     this.bankBalance+=amount
//     }

//    BankAccount.prototype.widral=function(amount){
//     this.bankBalance-=amount
//     }

//   suraj.deposite(5000)
//   vishal.deposite(5100)
//   suraj.widral(1200)
//   vishal.widral(1100)
//    console.log(suraj,vishal)

// class 
// class BankAccount{
//     constructor(customerName,AccountNumber=Date.now(),bankBalance){
//    this.customerName=customerName
//    this.AccountNumber=Date.now();
//    this.bankBalance=bankBalance;
//    }
//    deposite(amount){
//      this.bankBalance+=amount
//    }
//    widraw(amount){
//      this.bankBalance-=amount
//    }
//  }
//   const suraj=new BankAccount('surauj',Date.now(),1000)
//   const vishal=new BankAccount('vishal',Date.now(),2000)
 
//  suraj.deposite(5000)
//  vishal.deposite(5100)
//  suraj.widraw(1200)
//  vishal.widraw(1100)
//  console.log(suraj,vishal)
  
//   inheritance
// class BankAccount{
//     constructor(customerName,AccountNumber=Date.now(),bankBalance){
//    this.customerName=customerName
//    this.AccountNumber=Date.now();
//    this.bankBalance=bankBalance;
//    }
//    deposite(amount){
//      this.bankBalance+=amount
//    }
//    widraw(amount){
//      this.bankBalance-=amount
//    }
//  }
 
 
//  class currentAccount extends BankAccount{
//    transactionLimit=50000;
//    constructor(customerName,AccountNumber=Date.now(),bankBalance){
//    super(customerName,AccountNumber=Date.now(),bankBalance)
//  }
//  takeBussinessLoan(amount){
//    console.log("Taking Bussiness Loan"+amount);
//  }
//  }
 
 
//  class savingAccount extends BankAccount{
//    transactionLimit=10000;
//    constructor(customerName,AccountNumber=Date.now(),bankBalance){
//    super(customerName,AccountNumber=Date.now(),bankBalance)
//  }
//  takePerssionalLoan(amount){
//    console.log("Taking personal Loan"+amount);
//  }
//  }
 
//   const suraj=new savingAccount('surauj',Date.now(),1000)
//   const vishal=new currentAccount('vishal',Date.now(),2000)
 
//  suraj.deposite(500)
//  suraj.widraw(100)
//  suraj.takePerssionalLoan(40000)
//  vishal.deposite(100)
//  vishal.widraw(1000)
//  console.log(suraj,vishal)

//    satic mathod 
// class user{
//     static cache ={
//       1:"wanna more more cache"
//     }
//     static hasCache() {
//       console.log(this.cache)
//     }
//   }
//   user.hasCache()
  
//   class person {
//     static id=1;
//     constructor(name,age,income){
//       this.name=name;
//       this.age=age
//       this.income=income;
//       this.id=person.id++
//     }
//     static compareAge(a,b){
//       return a.age-b.age;
//     }
//     static compareIncome(a,b){
//       return a.income-b.income;
//     }
//   }
//   var person1=new person('suraj',28,20000);
//   var person2=new person('amit',35,40000);
//   var person3=new person("lalit",40,30000);
//   // console.log(person3,person2,person1)
  
//   var arr=[];
//   arr.push(person1,person2,person3);
//   // arr.sort(person.compareAge);
//   arr.sort(person.compareIncome);
//   console.log(arr);