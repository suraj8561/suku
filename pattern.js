class Students{
    static i=0
    constructor(name,age , phoneNumber , boardMarks){
        this.name=name;
        this.age=age;
        this.phoneNumber=phoneNumber;
        this.boardMarks=boardMarks
        Students.i+=1
    }
    egligible (){
        if(this.boardMarks > 40){
            console.log('student is egligible')
        }else {
            console.log('student is not egligible')
        }
    }
}
let student1=new Students('vishal',15,'856232365',45)
let student2=new Students('pooja',15,'856232365',41)
let student3=new Students('pinky',15,'856232365',35)
let student4=new Students('meenu',15,'856232365',55)
let student5=new Students('seenu',15,'856232365',65)
console.log(Students.i)
student1.egligible()
