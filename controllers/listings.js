const List = require('../models/listing.js');
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken});
const User = require('../models/user.js');


module.exports.index = async(req,res)=>{
    let listings = await List.find({});
    let favourites = "";
    if(req.user)
    {
        favourites = req.user.favourites;
       
    }
    
    res.render("listings/index.ejs",{listings,favourites});
}

module.exports.filters = async(req,res)=>{
    let lists = await List.find({});
    let listings = [];
    for(let list of lists)
    {
        if(list.category === req.params.filter ||  req.params.filter=== 'Trending')
        {
            listings.push(list);
        }
    }
    let favourites = "";
    if(req.user)
    {
        favourites = req.user.favourites;
       
    }
    res.render("listings/index.ejs",{listings,favourites});
}
module.exports.renderNewForm = (req,res)=>{
   
    res.render("listings/new.ejs");
};

module.exports.showListing = async(req,res)=>{
    let {id} = req.params;
    let data = await List.findById(id).populate({path:"reviews",populate:{path:"author"}}).populate("owner");
    
    if(data)
    {
    res.render("listings/show.ejs",{data});
    }
    else
    {
        req.flash("error","Listing you requested does not found!");
        res.redirect("/listings");
    }
}

module.exports.createListing = async(req,res,next)=>{
    let response = await geocodingClient.forwardGeocode({
        query: req.body.location,
        limit: 1
      })
    .send();
    // response.body.feature[0].geometry.coordinates => this will have the coordinated of the given location which we have given in the query(above)
    

    let arr = [];
    for(let ele of req.files)
    {
        arr.push(ele.path);
    }

    let obj = req.body;
    console.log("files: ",req.files);
    console.log("files: ",req.file);
    if(!obj)
    {
        return next(new ExpressError(400,"Send valid data for adding your list."))
    }
    let {title,description,price,country,location,max_guest,bedrooms,bathrooms,beds,kitchen,king,queen,twin,bathroomType} = obj;
    const newList = new List({
        title,
        description,
        price,
        country,
        location,
        max_guest,bedrooms,bathrooms,beds,kitchen,king,queen,twin,bathroomType,
        image: {
            filename:req.files[0].filename,
            url: arr,
        },
        essentials:obj.essential,
        category:obj.category
    });
    newList.geometry = response.body.features[0].geometry;
    newList.owner = req.user._id;
    let result = await newList.save();
    console.log("ADDED LISTING TO DB: ",result);
    req.flash("success","Listing added!");
    res.redirect("/listings");

    res.send(req.file);
}




module.exports.showMap = async(req,res)=>{
    let listings = await List.find({});
    let geometry = []; let count=0;
    for(let list of listings)
    {
        list.geometry.properties = {category:list.category,id:count++,country:list.country,location:list.location,phoneno:8530629424,name:list.title,img:list.image.url[0],price:list.price,o_id:list._id};
        geometry.push(list.geometry);
    }

    
    res.render("listings/map.ejs",{geometry});
}


module.exports.editListing = async(req,res)=>{
   
    let response = await geocodingClient.forwardGeocode({
        query: req.body.location,
        limit: 1
      })
    .send();

    let {id} = req.params;
    let updated_info = req.body;
    let listing = await List.findByIdAndUpdate(id,{title:updated_info.title,bathroomType:updated_info.bathroomType,bathrooms:updated_info.bathrooms,bedrooms:updated_info.bedrooms,kitchen:updated_info.kitchen,king:updated_info.king,queen:updated_info.queen,twin:updated_info.twin,max_guest:updated_info.max_guest,beds:updated_info.beds,description:updated_info.description,price:updated_info.price,location:updated_info.location,country:updated_info.country,category:updated_info.category,essentials:updated_info.essential,geometry:response.body.features[0].geometry},{runValidators:true});
    
    let arr = [];
    if (req.files.length > 0) {
        // listing.images = req.files.map(file => ({ filename: file.filename, url: file.path }));
        console.log("request files- ",req.files);
        for(let ele of req.files)
        {
            arr.push(ele.path);
        }
        listing.image.url = arr;
    listing.image.filename = req.files[0].filename;
    }
    
    await listing.save();
    req.flash("success","Listing updated!");
    res.redirect(`/listings/${id}`);
}






module.exports.handleBooking = async (req, res) => {

    let otp = req.body.first + req.body.second + req.body.third + req.body.forth + req.body.fifth + req.body.sixth;
    console.log("Temp data from handleBooking - ", req.session.tempData);
    if (otp !== req.session.tempData.otp) {
        console.log("Invalid otp");
        
        req.flash("error", "Invalid OTP, please try again!");
        return res.redirect('/invalid1');
    }



    let { id } = req.params;
    const { checkIn, checkOut } = req.session.tempData;

    // Convert checkIn and checkOut to Date objects assuming format is DD-MM-YYYY
    const [day1, month1, year1] = checkIn.split('-');
    const [day2, month2, year2] = checkOut.split('-');

    const checkInDate = new Date(`${year1}-${month1}-${day1}`);
    const checkOutDate = new Date(`${year2}-${month2}-${day2}`);

    if (checkInDate.getTime() === checkOutDate.getTime()) {
        req.flash("error", "Check-in and check-out dates cannot be the same.");
        return res.redirect(`/listings/${id}`);
    }

    const user = await User.findById(req.user._id).populate('bookings.listing').exec();
    const bookings = user.bookings;

    for (let booking of bookings) {
        const bookingCheckInDate = new Date(booking.checkInDate);
        const bookingCheckOutDate = new Date(booking.checkOutDate);

        if ((checkInDate >= bookingCheckInDate && checkInDate < bookingCheckOutDate) ||
            (checkOutDate > bookingCheckInDate && checkOutDate <= bookingCheckOutDate) ||
            (checkInDate <= bookingCheckInDate && checkOutDate >= bookingCheckOutDate)) {
            req.flash("error", "Please select valid check-out date!");
            return res.redirect(`/listings/${id}`);
        }
    }

    let timeDifference = checkOutDate - checkInDate;
    let nights = timeDifference / (1000 * 60 * 60 * 24);
    console.log("total nights are - ", nights);

    let list = await List.findById(id);

    // Format dates for storage if needed
    const formattedCheckIn = `${year1}-${month1}-${day1}`;
    const formattedCheckOut = `${year2}-${month2}-${day2}`;

    // list.checkInDates.push(formattedCheckIn);
    // list.checkOutDates.push(formattedCheckOut);


    //new adding
    let obj1 = {checkInDate:formattedCheckIn,checkOutDate:formattedCheckOut,user:user._id};
    list.bookings.push(obj1);

    const currentDate = new Date();
    const currentDay = currentDate.getDate().toString().padStart(2, '0'); // Ensures two digits
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
    const currentYear = currentDate.getFullYear();

    const time = `${currentDay}-${currentMonth}-${currentYear}`;

    let pay = list.price + 500 + ((list.price*18)/100);
    let obj = { checkInDate: formattedCheckIn, checkOutDate: formattedCheckOut, listing: list._id, nights, time,status:"Confirmed" ,pay};

    user.bookings.push(obj);

    await list.save();
    await user.save();

    console.log("request body from handlebooking is - ",req.body);
    console.log("user is - ", user);

    
    req.flash("success","Your reservation has been successfully confirmed!");
    res.render("user/reservations.ejs", { user });
}


module.exports.handlebookingerror = (req,res)=>{
    let {id} = req.params;
    res.redirect(`/listings/${id}`);
}



module.exports.deleteListing = async(req,res)=>{
    let {id} = req.params;
    let result = await List.findByIdAndDelete(id);
    console.log(result);
    req.flash("success","Listing deleted!");
    res.redirect("/listings");
}

module.exports.images = async (req,res)=>{
    let {id} = req.params;
    let list = await List.findById(id);
    let images = list.image.url;
    res.render("listings/images.ejs",{images,id});
}

module.exports.search = async (req, res, next) => {
        let { destination } = req.body;
    
        if (typeof destination !== 'string') {
            return next(new ExpressError(400, "Invalid input. Please enter a city name."));
        }
        let favourites = "";
    if(req.user)
    {
        favourites = req.user.favourites;
       
    }
    
        // Format the input string
        let str = destination.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
    
        console.log("Formatted string is: ", str);
    
        // Create a regular expression for a case-insensitive search
        let regex = new RegExp(str, 'i');
    
        // Perform the search
        let filtered = await List.find({
            $or: [
              { location: regex },
              { country: regex }
            ]
        });
    
        console.log("Filtered lists: ", filtered);
    
        res.render("listings/index.ejs", { listings: filtered ,favourites});
    
};

module.exports.renderEditForm = async(req,res)=>{
    let {id} = req.params;
    let list = await List.findById(id);
    
    if(list )
    {
        let copy
        if(list.image.url.length)
        {
        copy = list.image.url[0];
        copy = copy.replace("/upload","/upload/w_250");
        }
        res.render("listings/edit.ejs",{list,copy});
    }
    else
    {
        req.flash("error","Listing you requested does not found!");
        res.redirect("/listings");
    }
}