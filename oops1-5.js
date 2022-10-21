// task 3 
// Concepts on objects, classes, Different types of OOPs supported in your Language.
// Concepts on Binary Search and Map, Set.
// Create a class named 'Student' with String variable 'name' and integer variable 'roll_no'. Use Constructors to Assign the value of roll_no as '2' and that of name as "John" by creating an object of the class Student.

// class Triangle
// {
//   constructor(side1,side2,side3)
//   {
//     this.side1=side1;
//     this.side2=side2;
//     this.side3=side3;
//   }
//   calculate_area()
//   {
//     const s=((this.side1+this.side2+this.side3)/2);
//     const area=Math.sqrt(s*(s-this.side1)*(s-this.side2)*(s-this.side3));
//     console.log(area);

//   }
//   calculate_perimeter()
//   {
//     var perimeter= (this.side1+this.side2+this.side3);
//     console.log(perimeter);
//   }
// }

// var triangle1= new Triangle(3,4,5)

// triangle1.calculate_area();
// triangle1.calculate_perimeter();


// task 4
// Write a program to print the area and perimeter of a triangle object having sides of 3, 4 and 5 units by creating a class named 'Triangle' and having two functions calculate_area and calculate_perimeter and constructors(parameterized constructor where you assign (3,4,5)) .
// myCode  
// class Triangle {
//     constructor (s1=3,s2=4,s3=5){
//     this.side1=s1;
//     this.side2=s2;
//     this.side3=s3;
//     }
//     print_attribute(){
//     console.log(this.calculate_perimeter(), this.calculate_area());
//     }
//     calculate_perimeter(){
//     var peri= this.side1+this.side2+this.side3;
//     return peri;
//     }
//     calculate_area(){
//     var s=(this.side1+this.side2+this.side3)/2;
//     var area = Math.sqrt(s*(s-this.side1)*(s-this.side2)*(s-this.side3));
//     return area;
//     }
//     }
//     var my_triangle=new Triangle()
//     my_triangle.print_attribute();
//     my_triangle.calculate_perimeter()
//     my_triangle.calculate_area()

// task 5 
// Write a program that would print the information (name, year of joining, address) of three employees by creating a class named 'Employee' and inside the class there is a function print_details printing all the details of the employee .
// class Employee {
// constructor(n, Y, A){
//     this.name=n;  
//     this.year_of_joining=Y;   
//     this.Address=A;   
//     }   
//     print(){    
//      console.log(this.name,this.year_of_joining,this.Address);    
//     }    
//     }   
//     var Employee2=new Employee("Sam"+"   ",2000+" ", "68D-WallsStreat")
//     Employee2.print();
    
//     var Employee1=new Employee("Robert"+" ", 1994+" ", "64C-WallsStreat")
//     Employee1.print();
//     var Employee3=new Employee("John"+"    ", 1999+"  ", "26B-WallsStreat")
//     Employee3.print();