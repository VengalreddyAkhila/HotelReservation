const hotel = require("./hotel.json");
const fs = require("fs");
class Hotel {
    constructor (id,name,numberofrooms,Beds,price)
    {
        this.id = id;
        this.name = name;
        this.numberofrooms = numberofrooms;
        this.Beds = Beds;
        this.price = price;
    }
    checkprice(){
        console.log(this.name,this.id)
    }
}
let hoteldata = new Hotel(1,"Banjara",10,"doublebed",1500);
let taj = new Hotel(4,"paradise",9,"single",7890);
hoteldata.checkprice();
taj.checkprice();
console.log(taj);

//read the file 
fs.readFile('hotel1.json', function (err, data) {
    var json = JSON.parse(data)
    json.push(taj)
//write the file in json
    fs.writeFile("hotel1.json", JSON.stringify(json), (err) =>{
        console.log(err)
    })
})

var res1 = "";
   var res2 = "";
   for (var i in hoteldata.Beds) {
      res1 += hoteldata.Beds[i] 
   }
   console.log("Before change: " +" "+res1);
   
   hoteldata.Beds[0] = "singlebed";
   for (var i in hoteldata.Beds) {
      res2 += hoteldata.Beds[i] 
   }
   console.log("After change:" +" "+res2);



