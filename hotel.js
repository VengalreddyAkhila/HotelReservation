const hotel = require("./hotel.json");
const fs = require("fs");
hotel.push({
    "id":2,
      "name":"TajHotel",
      "numberofrooms":10,
      "Beds":"doublebed",
      "price":1500
})
console.log(hotel);
//to write the file in json
fs.writeFile('hotel.json',JSON.stringify(hotel),(err) => {
    if (err) {
        console.log(`Error : ${err}`);
    } else {
        console.log(`File is written successfully!`);
    }
});

fs.readFile('./hotel.json', 'utf8', (err, jsonString) => {
    if (err) {
        console.log("File read failed:", err)
        return
    }
    console.log('File data:', jsonString) 
})