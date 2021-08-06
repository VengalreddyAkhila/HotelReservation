const users = require("./users.json");
const fs = require("fs");
class Users{
  constructor(id,name,phonenumber,emailid,address,country,bookedid){
    this.id = id;
    this.name = name;
    this.phonenumber = phonenumber;
    this.emailid = emailid;
    this.address = address;
    this.country = country;
    this.bookedid = bookedid;
  }
  checkprice(){
    console.log(this.name);
  }
}
let usersdata = new Users(2,"Akhi",8247236922,"akki@gmail.com","Hyd","India",[23,21]);
let getdata = new Users(3,"banu",9087654323,"as@gmail.com","Vizag","India",24);
usersdata.checkprice();
getdata.checkprice();
console.log(usersdata);
//read the file 
fs.readFile('booking.json', function (err, data) {
    var json = JSON.parse(data)
   // console.log(typeof(Beds))
    json.push(usersdata.bookedid)
//write the file in json
    fs.writeFile("booking.json", JSON.stringify(json), (err) =>{
        console.log(err)
    })
})


var res1 = "";
   var res2 = "";
   for (var i in usersdata.bookedid) {
      res1 += usersdata.bookedid[i] 
   }
   console.log("Before change: " +" "+res1);
   usersdata.bookedid[0] = "98";
   usersdata.bookedid[1] = "72";
   for (var i in usersdata.bookedid) {
      res2 += usersdata.bookedid[i] 
   }
   console.log("After change:" +" "+res2);


