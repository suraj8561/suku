// task 11 
// Create a class named 'Member' having the following members:
// Data Attributes of Member Class
// 1 - Name
// 2 - Age
// 3 - Phone number
// 4 - Address
// 5 - Salary
// It also has a method named 'printSalary' which prints the salary of the members.

// Two classes 'Employee' and 'Manager' inherits the 'Member' class. The 'Employee' and 'Manager' classes have attributes 'specialization' and 'department' respectively. Now, assign name, age, phone number, address and salary to an employee and a manager by making an object of both of these classes and print the same.

// class Member {
//     constructor (Name, Age, Phone_number, Address, Salary){
//    this.Name=Name;
//    this.Age=Age;
//    this.Phone_number=Phone_number;
//    this.Address=Address;
//    this.Salary=Salary;
//    }
//    printSalary(){
//     console.log(this.Salary)
//    }
//    }
//    class Employee extends Member {
//     constructor (Name, Age, Phone_number, Address, Salary,specialization){
//      super(Name, Age, Phone_number, Address, Salary)
//      this.specialization=specialization;
//     }
//    }
//    class Manager extends Member{
//     constructor (Name, Age, Phone_number, Address, Salary,department){
//      super(Name, Age, Phone_number, Address, Salary)
//      this.department=department
//    }
//    }
//    var person1 = new Employee("suraj",28,85619618025,"jodhpur_342304",21000,"backend developer")   
//    var person2 = new Manager("meenakshi",28,85619618025,"kota_352304",25000,"backend")   
//    person1.printSalary();
//    person2.printSalary();
// task 12 
// Create a class named 'Shape' with a method to print "This is shape". Then create two other classes named 'Rectangle', 'Circle' inheriting the Shape class, both having a method to print "This is rectangular shape" and "This is circular shape" respectively. Create a child class 'Square' of 'rectangle' having a method to print "Square is a rectangle". Now call the method of 'Shape' and 'Rectangle' class by the object of 'Square' class.
// class shape{
//     constructor(shap){
//      this.shap=shap
//     }
//     print1(){
//      console.log("This is shape");
//     }
//    }
//    class Rectangle extends shape {
//     constructor(ract,shap){
//      super(shap)
//      this.ract=ract;
//     }
//     print2(){
//      console.log("This is rectangular shape");
//     }
//    }
//    class Circle extends shape {
//     constructor(shap,ract,cir){
//      this.cir=cir;
//     }
//      print3(){
//      console.log("This is circular shape");
//     }
//    }
//    class Square extends Rectangle{
//      constructor(shap,ract,cir,squ){
//       super(shap,ract)
//       this.squ=squ;
//      }
//     print4(){
//      console.log("Square is a rectangle");
//     }
//    }
//    var d=new Square();
//    d.print1();
//    d.print4();

// task14 
// Create a class named 'Shape' with a method to print "This is shape". Then create two other classes named 'Rectangle', 'Circle' inheriting the Shape class, both having a method to print "This is rectangular shape" and "This is circular shape" respectively. Create a child class 'Square' of 'rectangle' having a method to print "Square is a rectangle". Now call the method of 'Shape' and 'Rectangle' class by the object of 'Square' class.
// var search = function(nums, target) {
//     var left = 0
// var right = nums.length - 1

// while(left <= right){
//   var mid = Math.floor((left + right)/ 2);
//    if(target===nums[mid])
//        return mid;

// if(target<= nums[mid]){
//  right=mid-1;
// }else{
//  left =mid+1;
// }
// }
// return -1;
// };

// task 15
// A peak element is an element that is strictly greater than its neighbors.
// var findPeakElement = function(nums) {
//     var l = 0, r = nums.length - 1;
//         while (l < r) {
//             var mid = Math.floor((l + r) / 2);
//             if (nums[mid] > nums[mid + 1]){
//                 r = mid;
//             }else{
//                 l = mid + 1;
//         }
//         }
//         return l;
    
// };
// There is an integer array nums sorted in ascending order (with distinct values).
// var search = function(nums, target) {
     
//     var left = 0
// var right = nums.length - 1

// while(left <= right){
// var mid = Math.floor((left + right)/ 2);
// if(target === nums[mid])
//  return mid;

// if(nums[left]<=nums[mid]){
// if(nums[left]<=target && target <= nums[mid])
// right=mid-1;
// else
// left=mid+1;
// }
// else{
// if(nums[mid]<=target && target<=nums[right])
// left=mid+1;
// else
// right=mid-1; 
// }
// }
// return -1;

// };