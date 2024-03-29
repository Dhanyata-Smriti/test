let my_Resume=

    {"basics": [
      {
      "name": "DHANYATA SMRITI M",
      "email": "dhiyaaritz@gamil.com",
      "phone": 8807693981,
      "degree": "B.E",
      "location": {
        "address": "No:6,Vasantham Avanue main street,Sikkandar Savadi",
        "postalCode": 625018,
        "city": "Madurai",
        "state": "Tamilnadu",
        "country": "India"
                  }
      }
              ]
              ,
      "profiles": [
        {
          "website": "https://dhiyaaritz.wixsite.com/port",
          "github":"https://github.com/Dhanyata-Smriti/test"
        }
      ]
    ,
    
    "education": [
      {
        "institution": "Sathyabama INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "department": "Electronics and Communication",
        "studyType": "fulltime",
        "batch start year": 2021,
        "batch end year": 2025,
        "gpa": 9.4,
      }
    ],
    "skills": [
      {
        "name": "python,javascript,c,c++,Data Structures,MYSQL",
        "level": "beginer",
        "project": [
          "Dual Axis Solar controller",
          "Green House Monitoring System"
        ]
      }
    ],
    "languages": [
      {
        "language": "Tamil,Enlish",
      }
    ],
    "interests": [
      {
        "name": "Fashion Designer,entrepreneur",
      }
    ]
  };

  
for(const key in my_Resume){
    console.log(key);
    console.log(my_Resume[key]);

};
const keys = Object.keys(my_Resume);

for (const key of keys) {
  console.log(`${key}:`);
  console.log(my_Resume[key]);
};
for(let i=0;i<keys.length;i++){
  console.log(`category: ${keys[i]}`);
  console.log("Data:",my_Resume[keys[i]]);
}
Object.keys(my_Resume).forEach(key => 
  {
  const value = my_Resume[key];
  console.log(`${key}:`);
  console.log(my_Resume[key]);
});




