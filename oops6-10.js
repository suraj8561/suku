// task 6 
// Write a program by creating an 'Employee' class having the following methods and print the final salary.
// 1 - 'getInfo()' which takes the salary, number of hours of work per day of employee as parameter
// 2 - 'AddSal()' which adds 10 to salary of the employee if it is less than 500.
// 3 - 'AddWork()' which adds 5 to salary of employee if the number of hours of work per day is more than 6 hours.

// class Employee {

//     getInfo(salary,hour_per_day){
//     this.salary=salary;
//     this.hour_per_day;
//     }
//     AddSal(){
//       if(this.salary<500){
//         this.salary+=10;
//       }
//     }
//     AddWork(){
//       if(this.hour_per_day>6){
//         this.salary+=5;
//         }
//     }
//     }
//      var Employee1=new Employee();
//      Employee1.getInfo(496,8)
//      Employee1.AddSal()
//      Employee1.AddWork()
//      console.log(Employee1.salary)


// task 8 
// Write a program to create a class count_objects and calculate the number of objects that has been created in realtime.
// class count_objects {

//     static i=0; 
//     constructor(){
//      count_objects.i+=1;
//     }  
//    }
//     var a= new count_objects(); 
//     var b= new count_objects();  
//     var c= new count_objects(); 
//     var d= new count_objects();
//     console.log(count_objects.i)
   

// task10
// Create a class "PARENT" with a method that prints "This is parent class" and its Child class "CHILD" with a method that prints "This is child class". Now, create an object for each of the class and call
// 1 - method of parent class by object of parent class
// 2 - method of child class by object of child class
// 3 - method of parent class by object of child class

// class PARENT {

//     printParent(){
//      console.log("This is parent class");
//     }
//    }
//    class CHILD extends PARENT{
//     printChild(){
//      super.printParent();
//      console.log("This is child class")
//     }
//    }
//    var s = new PARENT();
//    var m = new CHILD();
//    s.printParent();
//    m.printChild()
// var nums=[4,5,6,7,0,1,2], target=0
//     var left = 0
// var right = nums.length - 1

// while(left <= right){
//   var mid = Math.floor((left + right) / 2);
//    if(target==nums[mid]){
//        console.log(mid);
   
//  if(nums[mid]>=nums[left]){
//   if((target >= nums[left])&&(target <= nums[mid]))
//        right=mid-1
     
//    else 
//        left=mid+1 
//    }
//    else{
//        if( (target <= nums[right]) && (target >= nums[mid]) )
//            left = mid+1
//        else
//            right=mid-1
//        }
//    }
//    console.log(-1);
// }
