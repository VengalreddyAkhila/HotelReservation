const users = require("./users.json");
const fs = require("fs");
users.push({
        "id":5,
        "name":"Ram",
        "phonenumber":9234456719,
        "emailid":"ram@gmail.com",
        "address":"Mumbai",
        "country":"India",
        "bookedid":[2,3,7,10]
},
{
    "id":6,
        "name":"Naveen",
        "phonenumber":8334456719,
        "emailid":"nav@gmail.com",
        "address":"Maharastra",
        "country":"India",
        "bookedid":[2,8,3,20]
})
console.log(users);
//to write the file in json
fs.writeFile('users.json',JSON.stringify(users),(err) => {
    if (err) {
        console.log(`Error : ${err}`);
    } else {
        console.log(`File is written successfully!`);
    }
});

fs.readFile('./users.json', 'utf8', (err, jsonString) => {
    if (err) {
        console.log("File read failed:", err)
        return
    }
    console.log('File data:', jsonString) 
})