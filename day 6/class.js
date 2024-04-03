
class Person{
    constructor(detail){
        console.log(detail);
    }
};
class person_other extends Person{
    constructor(skills,education,detail){
        super(detail);
        console.log("Skill: ",skills);
        console.log("Education: ",education);
    }
};

const education=function(){
    const edu ={
        institution: "Sathyabama INSTITUTE OF SCIENCE AND TECHNOLOGY",
        department: "Electronics and Communication",
        studyType: "fulltime",
        batch_start_year: 2021,
        batch_end_year: 2025,
        gpa: 9.4,
    }
    return edu;
}
const skills=function (){
    const skill =  {
        name: "python,javascript,c,c++,Data Structures,MYSQL",
        level: "beginer",
        project :function(){
            var a=[
                "Dual Axis Solar controller",
                "Green House Monitoring System"
            ]
            return a;
            } 
        
      }
    
    return skill;
    skill.project()
}
const detail =function(){
    const details={
 First_Name:"Dhanyata Smriti",
 Last_Name:"Muruhan Raj",
 Age:20,
city:"Madurai",
}
return details;
  
}


const per_other= new person_other(skills(),education(),detail());


