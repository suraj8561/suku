class Students{
    static i=0
    constructor(name,age ,Marks){
        this.name=name;
        this.age=age;
        this.Marks=Marks
        Students.i+=1
    }
    setPlacementAge(minPlacementAge){
        return (minMarks)=>{
            if(this.Marks>minMarks && this.age > minPlacementAge){
                console.log(this.name +' ready for placement')
            }else{
                console.log(this.name +' not ready for placement')
            }
        }

    }
}
let student1=new Students('vishal',19,45)
let student2=new Students('pooja',18,41)
let student3=new Students('pinky',19,35)
let student4=new Students('meenu',20,55)
let student5=new Students('seenu',21,65)
console.log("Total No. Of students "+Students.i)
student1.setPlacementAge(18)(40)
