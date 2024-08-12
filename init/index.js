if(process.env.NODE_ENV != "production")
{
    require('dotenv').config();
}
const mongoose  = require('mongoose');
let data = require('./data.js');
const List = require("../models/listing.js");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;

const geocodingClient = mbxGeocoding({ accessToken: mapToken});


const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

async function generate_coordinate(address)
{
    let response = await geocodingClient.forwardGeocode({
        query: address,
        limit: 1
      })
    .send();

    return response;
}

async function initDB()
{
    await List.deleteMany({});
    let arr = data.data;
    arr = arr.map((obj) => ({ ...obj, owner: "666936272605b8ca153181b3" }));
    let newarr = [];
    
    for(let list of arr)
    {
    let response = await geocodingClient.forwardGeocode({
        query: list.location,
        limit: 1
      })
    .send();
        list.geometry = response.body.features[0].geometry;
        newarr.push(list);
    }
    await List.insertMany(newarr);
}

initDB()
.then((res)=>{
    console.log("DB initialised succesfully");
})
.catch((err)=>{
    console.log("Error in initialising the DB");
    console.log(err);
})
main()
.then((res)=>{
    console.log("DB connection succesfull");
})
.catch((err)=>{
    console.log(err);
})
async function main()
{
    await mongoose.connect(MONGO_URL);
}