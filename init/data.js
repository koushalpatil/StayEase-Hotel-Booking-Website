const sampleListings = [
{
    title: "Modern Loft in Downtown",
    description: "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
        filename: "listingimage",
        url: ["https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        "https://www.tripsavvy.com/thmb/hmI_d_h1CNpYOXI2jzf8-rHvluo=/2540x1694/filters:no_upscale():max_bytes(150000):strip_icc()/luxe-sea-view-f49a9d6ccc97437493b87b481a2f4ed4.jpeg",
  "https://photos.mandarinoriental.com/is/image/MandarinOriental/dubai-suite-skyline-view-bedroom",
  "https://www.hotelsinheaven.com/wp-content/uploads/2020/10/mandarin-oriental-jumeirah-dubai-bedroom-suite-1500x842.jpg","http://www.btmagazine.nl/wp-content/uploads/2013/09/Bedroom-Presidential-Suite-Moevenpick-Hotel-Enshi.jpg"]
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    category: "Iconic cities",
    essentials:["Garden view","Wifi","Parking","AC","CCTV"],
    max_guest:4,
    bedrooms:4,
    beds:6,
    king:2,
    queen:2,
    twin:2,
    kitchen:"Yes",
    bathroomType:"Separate",
    bathrooms:3,
},
{
    title: "Mountain Retreat",
    description: "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
        filename: "listingimage",
        url: ["https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        "https://www.tripsavvy.com/thmb/hmI_d_h1CNpYOXI2jzf8-rHvluo=/2540x1694/filters:no_upscale():max_bytes(150000):strip_icc()/luxe-sea-view-f49a9d6ccc97437493b87b481a2f4ed4.jpeg",
  "https://photos.mandarinoriental.com/is/image/MandarinOriental/dubai-suite-skyline-view-bedroom",
  "https://www.hotelsinheaven.com/wp-content/uploads/2020/10/mandarin-oriental-jumeirah-dubai-bedroom-suite-1500x842.jpg","http://www.btmagazine.nl/wp-content/uploads/2013/09/Bedroom-Presidential-Suite-Moevenpick-Hotel-Enshi.jpg"]
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    category: "Mountains",
    essentials:["Garden view","Wifi","Parking","AC","CCTV"],
    max_guest:4,
    bedrooms:4,
    beds:6,
    king:2,
    queen:2,
    twin:2,
    kitchen:"Yes",
    bathroomType:"Separate",
    bathrooms:3,
},
{
    title: "Historic Villa in Tuscany",
    description: "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
        filename: "listingimage",
        url: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        "https://www.tripsavvy.com/thmb/hmI_d_h1CNpYOXI2jzf8-rHvluo=/2540x1694/filters:no_upscale():max_bytes(150000):strip_icc()/luxe-sea-view-f49a9d6ccc97437493b87b481a2f4ed4.jpeg",
  "https://photos.mandarinoriental.com/is/image/MandarinOriental/dubai-suite-skyline-view-bedroom",
  "https://www.hotelsinheaven.com/wp-content/uploads/2020/10/mandarin-oriental-jumeirah-dubai-bedroom-suite-1500x842.jpg","http://www.btmagazine.nl/wp-content/uploads/2013/09/Bedroom-Presidential-Suite-Moevenpick-Hotel-Enshi.jpg"]
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    category: "Rooms",
    essentials:["Garden view","Wifi","Parking","AC","CCTV"],
    max_guest:4,
    bedrooms:4,
    beds:6,
    king:2,
    queen:2,
    twin:2,
    kitchen:"Yes",
    bathroomType:"Separate",
    bathrooms:3,
},
{
    title: "Secluded Treehouse Getaway",
    description: "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
        filename: "listingimage",
        url: ["https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        "https://www.tripsavvy.com/thmb/hmI_d_h1CNpYOXI2jzf8-rHvluo=/2540x1694/filters:no_upscale():max_bytes(150000):strip_icc()/luxe-sea-view-f49a9d6ccc97437493b87b481a2f4ed4.jpeg",
  "https://photos.mandarinoriental.com/is/image/MandarinOriental/dubai-suite-skyline-view-bedroom",
  "https://www.hotelsinheaven.com/wp-content/uploads/2020/10/mandarin-oriental-jumeirah-dubai-bedroom-suite-1500x842.jpg","http://www.btmagazine.nl/wp-content/uploads/2013/09/Bedroom-Presidential-Suite-Moevenpick-Hotel-Enshi.jpg"]
    },
    price: 800,
    location: "Portland",
    country: "United States",
    category: "Rooms",
    essentials:["Garden view","Wifi","Parking","AC","CCTV"],
    max_guest:4,
    bedrooms:4,
    beds:6,
    king:2,
    queen:2,
    twin:2,
    kitchen:"Yes",
    bathroomType:"Separate",
    bathrooms:3,
},
{
    title: "Luxuries Penthouse in Lonavala",
    description: "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
        filename: "listingimage",
        url: ["https://images.pexels.com/photos/1258865/pexels-photo-1258865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://www.tripsavvy.com/thmb/hmI_d_h1CNpYOXI2jzf8-rHvluo=/2540x1694/filters:no_upscale():max_bytes(150000):strip_icc()/luxe-sea-view-f49a9d6ccc97437493b87b481a2f4ed4.jpeg",
  "https://photos.mandarinoriental.com/is/image/MandarinOriental/dubai-suite-skyline-view-bedroom",
  "https://www.hotelsinheaven.com/wp-content/uploads/2020/10/mandarin-oriental-jumeirah-dubai-bedroom-suite-1500x842.jpg","http://www.btmagazine.nl/wp-content/uploads/2013/09/Bedroom-Presidential-Suite-Moevenpick-Hotel-Enshi.jpg"]
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    category: "Rooms",
    essentials:["Garden view","Wifi","Parking","AC","CCTV"],
    max_guest:4,
    bedrooms:4,
    beds:6,
    king:2,
    queen:2,
    twin:2,
    kitchen:"Yes",
    bathroomType:"Separate",
    bathrooms:3,
},
{
    title: "Ski-In/Ski-Out Chalet",
    description: "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
        filename: "listingimage",
        url: ["https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        "https://www.tripsavvy.com/thmb/hmI_d_h1CNpYOXI2jzf8-rHvluo=/2540x1694/filters:no_upscale():max_bytes(150000):strip_icc()/luxe-sea-view-f49a9d6ccc97437493b87b481a2f4ed4.jpeg",
  "https://photos.mandarinoriental.com/is/image/MandarinOriental/dubai-suite-skyline-view-bedroom",
  "https://www.hotelsinheaven.com/wp-content/uploads/2020/10/mandarin-oriental-jumeirah-dubai-bedroom-suite-1500x842.jpg","http://www.btmagazine.nl/wp-content/uploads/2013/09/Bedroom-Presidential-Suite-Moevenpick-Hotel-Enshi.jpg"]
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    category: "Mountains",
    essentials:["Garden view","Wifi","Parking","AC","CCTV"],
    max_guest:4,
    bedrooms:4,
    beds:6,
    king:2,
    queen:2,
    twin:2,
    kitchen:"Yes",
    bathroomType:"Separate",
    bathrooms:3,
},
{
    title: "Historic Canal House",
    description: "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
        filename: "listingimage",
        url: ["https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        "https://www.tripsavvy.com/thmb/hmI_d_h1CNpYOXI2jzf8-rHvluo=/2540x1694/filters:no_upscale():max_bytes(150000):strip_icc()/luxe-sea-view-f49a9d6ccc97437493b87b481a2f4ed4.jpeg",
  "https://photos.mandarinoriental.com/is/image/MandarinOriental/dubai-suite-skyline-view-bedroom",
  "https://www.hotelsinheaven.com/wp-content/uploads/2020/10/mandarin-oriental-jumeirah-dubai-bedroom-suite-1500x842.jpg","http://www.btmagazine.nl/wp-content/uploads/2013/09/Bedroom-Presidential-Suite-Moevenpick-Hotel-Enshi.jpg"]
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
    category: "Iconic cities",
    essentials:["Garden view","Wifi","Parking","AC","CCTV"],
    max_guest:4,
    bedrooms:4,
    beds:6,
    king:2,
    queen:2,
    twin:2,
    kitchen:"Yes",
    bathroomType:"Separate",
    bathrooms:3,
},
{
    title: "Private Island Retreat",
    description: "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
        filename: "listingimage",
        url: ["https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        "https://www.tripsavvy.com/thmb/hmI_d_h1CNpYOXI2jzf8-rHvluo=/2540x1694/filters:no_upscale():max_bytes(150000):strip_icc()/luxe-sea-view-f49a9d6ccc97437493b87b481a2f4ed4.jpeg",
  "https://photos.mandarinoriental.com/is/image/MandarinOriental/dubai-suite-skyline-view-bedroom",
  "https://www.hotelsinheaven.com/wp-content/uploads/2020/10/mandarin-oriental-jumeirah-dubai-bedroom-suite-1500x842.jpg","http://www.btmagazine.nl/wp-content/uploads/2013/09/Bedroom-Presidential-Suite-Moevenpick-Hotel-Enshi.jpg"]
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
    category: "Beachfront",
    essentials:["Garden view","Wifi","Parking","AC","CCTV"],
    max_guest:4,
    bedrooms:4,
    beds:6,
    king:2,
    queen:2,
    twin:2,
    kitchen:"Yes",
    bathroomType:"Separate",
    bathrooms:3,
},
{
    title: "Charming Cottage in the Cotswolds",
    description: "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
        filename: "listingimage",
        url: ["https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        "https://www.tripsavvy.com/thmb/hmI_d_h1CNpYOXI2jzf8-rHvluo=/2540x1694/filters:no_upscale():max_bytes(150000):strip_icc()/luxe-sea-view-f49a9d6ccc97437493b87b481a2f4ed4.jpeg",
  "https://photos.mandarinoriental.com/is/image/MandarinOriental/dubai-suite-skyline-view-bedroom",
  "https://www.hotelsinheaven.com/wp-content/uploads/2020/10/mandarin-oriental-jumeirah-dubai-bedroom-suite-1500x842.jpg","http://www.btmagazine.nl/wp-content/uploads/2013/09/Bedroom-Presidential-Suite-Moevenpick-Hotel-Enshi.jpg"]
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
    category: "Beachfront",
    essentials:["Garden view","Wifi","Parking","AC","CCTV"],
    max_guest:4,
    bedrooms:4,
    beds:6,
    king:2,
    queen:2,
    twin:2,
    kitchen:"Yes",
    bathroomType:"Separate",
    bathrooms:3,
},
{
    title: "Historic Brownstone in Boston",
    description: "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
        filename: "listingimage",
        url: ["https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        "https://www.tripsavvy.com/thmb/hmI_d_h1CNpYOXI2jzf8-rHvluo=/2540x1694/filters:no_upscale():max_bytes(150000):strip_icc()/luxe-sea-view-f49a9d6ccc97437493b87b481a2f4ed4.jpeg",
  "https://photos.mandarinoriental.com/is/image/MandarinOriental/dubai-suite-skyline-view-bedroom",
  "https://www.hotelsinheaven.com/wp-content/uploads/2020/10/mandarin-oriental-jumeirah-dubai-bedroom-suite-1500x842.jpg","http://www.btmagazine.nl/wp-content/uploads/2013/09/Bedroom-Presidential-Suite-Moevenpick-Hotel-Enshi.jpg"]
    },
    price: 2200,
    location: "Boston",
    country: "United States",
    category: "Iconic cities",
    essentials:["Garden view","Wifi","Parking","AC","CCTV"],
    max_guest:4,
    bedrooms:4,
    beds:6,
    king:2,
    queen:2,
    twin:2,
    kitchen:"Yes",
    bathroomType:"Separate",
    bathrooms:3,
},
{
  title: "Beachfront Bungalow in Bali",
  description:
    "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
  image: {
    filename: "listingimage",
    url:["https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    "https://www.tripsavvy.com/thmb/hmI_d_h1CNpYOXI2jzf8-rHvluo=/2540x1694/filters:no_upscale():max_bytes(150000):strip_icc()/luxe-sea-view-f49a9d6ccc97437493b87b481a2f4ed4.jpeg",
  "https://photos.mandarinoriental.com/is/image/MandarinOriental/dubai-suite-skyline-view-bedroom",
  "https://www.hotelsinheaven.com/wp-content/uploads/2020/10/mandarin-oriental-jumeirah-dubai-bedroom-suite-1500x842.jpg","http://www.btmagazine.nl/wp-content/uploads/2013/09/Bedroom-Presidential-Suite-Moevenpick-Hotel-Enshi.jpg"]
  },
  price: 1800,
  location: "Bali",
  country: "Indonesia",
  category: "Beachfront",
  essentials:["Garden view","Wifi","Parking","AC","CCTV"],
  max_guest:4,
  bedrooms:4,
  beds:6,
  king:2,
  queen:2,
  twin:2,
  kitchen:"Yes",
  bathroomType:"Separate",
  bathrooms:3,
},
{
  title: "Mountain View Cabin in Banff",
  description:
    "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
  image: {
    filename: "listingimage",
    url: ["https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    "https://www.tripsavvy.com/thmb/hmI_d_h1CNpYOXI2jzf8-rHvluo=/2540x1694/filters:no_upscale():max_bytes(150000):strip_icc()/luxe-sea-view-f49a9d6ccc97437493b87b481a2f4ed4.jpeg",
  "https://photos.mandarinoriental.com/is/image/MandarinOriental/dubai-suite-skyline-view-bedroom",
  "https://www.hotelsinheaven.com/wp-content/uploads/2020/10/mandarin-oriental-jumeirah-dubai-bedroom-suite-1500x842.jpg","http://www.btmagazine.nl/wp-content/uploads/2013/09/Bedroom-Presidential-Suite-Moevenpick-Hotel-Enshi.jpg"]
  },
  price: 1500,
  location: "Banff",
  country: "Canada",
  category: "Mountains",
  essentials:["Garden view","Wifi","Parking","AC","CCTV"],
  max_guest:4,
  bedrooms:4,
  beds:6,
  king:2,
  queen:2,
  twin:2,
  kitchen:"Yes",
  bathroomType:"Separate",
  bathrooms:3,
},
{
  title: "Art Deco Apartment in Miami",
  description:
    "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
  image: {
    filename: "listingimage",
    url: ["https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    "https://www.tripsavvy.com/thmb/hmI_d_h1CNpYOXI2jzf8-rHvluo=/2540x1694/filters:no_upscale():max_bytes(150000):strip_icc()/luxe-sea-view-f49a9d6ccc97437493b87b481a2f4ed4.jpeg",
  "https://photos.mandarinoriental.com/is/image/MandarinOriental/dubai-suite-skyline-view-bedroom",
  "https://www.hotelsinheaven.com/wp-content/uploads/2020/10/mandarin-oriental-jumeirah-dubai-bedroom-suite-1500x842.jpg","http://www.btmagazine.nl/wp-content/uploads/2013/09/Bedroom-Presidential-Suite-Moevenpick-Hotel-Enshi.jpg"]
  },
  price: 1600,
  location: "Miami",
  country: "United States",
  category: "Iconic cities",
  essentials:["Garden view","Wifi","Parking","AC","CCTV"],
  max_guest:4,
  bedrooms:4,
  beds:6,
  king:2,
  queen:2,
  twin:2,
  kitchen:"Yes",
  bathroomType:"Separate",
  bathrooms:3,
},
{
  title: "Tropical Villa in Phuket",
  description:
    "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
  image: {
    filename: "listingimage",
    url:["https://assets.anantara.com/image/upload/q_auto,f_auto/media/minor/anantara/images/anantara-mai-khao-phuket-villas/gallery/leisure/leisure---april-2020/pool_night_time_1920x1037.jpg?mw=1440",
    "https://www.tripsavvy.com/thmb/hmI_d_h1CNpYOXI2jzf8-rHvluo=/2540x1694/filters:no_upscale():max_bytes(150000):strip_icc()/luxe-sea-view-f49a9d6ccc97437493b87b481a2f4ed4.jpeg",
  "https://photos.mandarinoriental.com/is/image/MandarinOriental/dubai-suite-skyline-view-bedroom",
  "https://www.hotelsinheaven.com/wp-content/uploads/2020/10/mandarin-oriental-jumeirah-dubai-bedroom-suite-1500x842.jpg","http://www.btmagazine.nl/wp-content/uploads/2013/09/Bedroom-Presidential-Suite-Moevenpick-Hotel-Enshi.jpg"]
  },
  price: 3000,
  location: "Phuket",
  country: "Thailand",
  category: "Beachfront",
  essentials:["Garden view","Wifi","Parking","AC","CCTV"],
  max_guest:4,
  bedrooms:4,
  beds:6,
  king:2,
  queen:2,
  twin:2,
  kitchen:"Yes",
  bathroomType:"Separate",
  bathrooms:3,
},
{
  title: "Historic Castle in Scotland",
  description:
    "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
  image: {
    filename: "listingimage",
    url:["https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    "https://www.tripsavvy.com/thmb/hmI_d_h1CNpYOXI2jzf8-rHvluo=/2540x1694/filters:no_upscale():max_bytes(150000):strip_icc()/luxe-sea-view-f49a9d6ccc97437493b87b481a2f4ed4.jpeg",
  "https://photos.mandarinoriental.com/is/image/MandarinOriental/dubai-suite-skyline-view-bedroom",
  "https://www.hotelsinheaven.com/wp-content/uploads/2020/10/mandarin-oriental-jumeirah-dubai-bedroom-suite-1500x842.jpg","http://www.btmagazine.nl/wp-content/uploads/2013/09/Bedroom-Presidential-Suite-Moevenpick-Hotel-Enshi.jpg"]
  },
  price: 4000,
  location: "Scottish Highlands",
  country: "United Kingdom",
  category: "Iconic cities",
  essentials:["Garden view","Wifi","Parking","AC","CCTV"],
  max_guest:4,
  bedrooms:4,
  beds:6,
  king:2,
  queen:2,
  twin:2,
  kitchen:"Yes",
  bathroomType:"Separate",
  bathrooms:3,
},
{
  title: "Desert Oasis in Dubai",
  description:
    "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
  image: {
    filename: "listingimage",
    url: ["https://wallpaperaccess.com/full/1099127.jpg",
    "https://www.tripsavvy.com/thmb/hmI_d_h1CNpYOXI2jzf8-rHvluo=/2540x1694/filters:no_upscale():max_bytes(150000):strip_icc()/luxe-sea-view-f49a9d6ccc97437493b87b481a2f4ed4.jpeg",
  "https://photos.mandarinoriental.com/is/image/MandarinOriental/dubai-suite-skyline-view-bedroom",
  "https://www.hotelsinheaven.com/wp-content/uploads/2020/10/mandarin-oriental-jumeirah-dubai-bedroom-suite-1500x842.jpg","http://www.btmagazine.nl/wp-content/uploads/2013/09/Bedroom-Presidential-Suite-Moevenpick-Hotel-Enshi.jpg"]
  },
  price: 5000,
  location: "Dubai",
  country: "United Arab Emirates",
  category: "Iconic cities",
  essentials:["Garden view","Wifi","Parking","AC","CCTV"],
  max_guest:4,
  bedrooms:4,
  beds:6,
  king:2,
  queen:2,
  twin:2,
  kitchen:"Yes",
  bathroomType:"Separate",
  bathrooms:3,
},
{
  title: "Rustic Log Cabin in Montana",
  description:
    "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
  image: {
    filename: "listingimage",
    url:[ "https://i.pinimg.com/originals/77/3b/38/773b387086b4c981c660388c3bf557d3.jpg",
    "https://www.tripsavvy.com/thmb/hmI_d_h1CNpYOXI2jzf8-rHvluo=/2540x1694/filters:no_upscale():max_bytes(150000):strip_icc()/luxe-sea-view-f49a9d6ccc97437493b87b481a2f4ed4.jpeg",
  "https://photos.mandarinoriental.com/is/image/MandarinOriental/dubai-suite-skyline-view-bedroom",
  "https://www.hotelsinheaven.com/wp-content/uploads/2020/10/mandarin-oriental-jumeirah-dubai-bedroom-suite-1500x842.jpg","http://www.btmagazine.nl/wp-content/uploads/2013/09/Bedroom-Presidential-Suite-Moevenpick-Hotel-Enshi.jpg"]
  },
  price: 1100,
  location: "Montana",
  country: "United States",
  category: "Farms",
  essentials:["Garden view","Wifi","Parking","AC","CCTV"],
  max_guest:4,
  bedrooms:4,
  beds:6,
  king:2,
  queen:2,
  twin:2,
  kitchen:"Yes",
  bathroomType:"Separate",
  bathrooms:3,
},
{
  title: "Beachfront Villa in Greece",
  description:
    "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
  image: {
    filename: "listingimage",
    url:["https://images.unsplash.com/photo-1605538032432-a9f0c8d9baac?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://www.tripsavvy.com/thmb/hmI_d_h1CNpYOXI2jzf8-rHvluo=/2540x1694/filters:no_upscale():max_bytes(150000):strip_icc()/luxe-sea-view-f49a9d6ccc97437493b87b481a2f4ed4.jpeg",
  "https://photos.mandarinoriental.com/is/image/MandarinOriental/dubai-suite-skyline-view-bedroom",
  "https://www.hotelsinheaven.com/wp-content/uploads/2020/10/mandarin-oriental-jumeirah-dubai-bedroom-suite-1500x842.jpg","http://www.btmagazine.nl/wp-content/uploads/2013/09/Bedroom-Presidential-Suite-Moevenpick-Hotel-Enshi.jpg"]
  },
  price: 2500,
  location: "Mykonos",
  country: "Greece",
  category: "Beachfront",
  essentials:["Garden view","Wifi","Parking","AC","CCTV"],
  max_guest:4,
  bedrooms:4,
  beds:6,
  king:2,
  queen:2,
  twin:2,
  kitchen:"Yes",
  bathroomType:"Separate",
  bathrooms:3,
},
{
  title: "Eco-Friendly Treehouse Retreat",
  description:
    "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
  image: {
    filename: "listingimage",
    url: ["https://img.freepik.com/free-photo/ai-generated-house-design_23-2150666341.jpg?t=st=1716822432~exp=1716826032~hmac=86dc840483e3540710379604de48c231d9e1a884320ea28594dafc51aee6efd9&w=1380",
    "https://www.tripsavvy.com/thmb/hmI_d_h1CNpYOXI2jzf8-rHvluo=/2540x1694/filters:no_upscale():max_bytes(150000):strip_icc()/luxe-sea-view-f49a9d6ccc97437493b87b481a2f4ed4.jpeg",
  "https://photos.mandarinoriental.com/is/image/MandarinOriental/dubai-suite-skyline-view-bedroom",
  "https://www.hotelsinheaven.com/wp-content/uploads/2020/10/mandarin-oriental-jumeirah-dubai-bedroom-suite-1500x842.jpg","http://www.btmagazine.nl/wp-content/uploads/2013/09/Bedroom-Presidential-Suite-Moevenpick-Hotel-Enshi.jpg"]
  },
  price: 750,
  location: "Costa Rica",
  country: "Costa Rica",
  category:"Skiing",
  essentials:["Garden view","Wifi","Parking","AC","CCTV"],
  max_guest:4,
  bedrooms:4,
  beds:6,
  king:2,
  queen:2,
  twin:2,
  kitchen:"Yes",
  bathroomType:"Separate",
  bathrooms:3,
},
{
  title: "Historic Cottage in Charleston",
  description:
    "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
  image: {
    filename: "listingimage",
    url: ["https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    "https://www.tripsavvy.com/thmb/hmI_d_h1CNpYOXI2jzf8-rHvluo=/2540x1694/filters:no_upscale():max_bytes(150000):strip_icc()/luxe-sea-view-f49a9d6ccc97437493b87b481a2f4ed4.jpeg",
  "https://photos.mandarinoriental.com/is/image/MandarinOriental/dubai-suite-skyline-view-bedroom",
  "https://www.hotelsinheaven.com/wp-content/uploads/2020/10/mandarin-oriental-jumeirah-dubai-bedroom-suite-1500x842.jpg","http://www.btmagazine.nl/wp-content/uploads/2013/09/Bedroom-Presidential-Suite-Moevenpick-Hotel-Enshi.jpg"]
  },
  price: 1600,
  location: "Charleston",
  country: "United States",
  category: "Iconic cities",
  essentials:["Garden view","Wifi","Parking","AC","CCTV"],
  max_guest:4,
  bedrooms:4,
  beds:6,
  king:2,
  queen:2,
  twin:2,
  kitchen:"Yes",
  bathroomType:"Separate",
  bathrooms:3,
},
{
  title: "Modern Apartment in Tokyo",
  description:
    "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
  image: {
    filename: "listingimage",
    url: ["https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    "https://www.tripsavvy.com/thmb/hmI_d_h1CNpYOXI2jzf8-rHvluo=/2540x1694/filters:no_upscale():max_bytes(150000):strip_icc()/luxe-sea-view-f49a9d6ccc97437493b87b481a2f4ed4.jpeg",
  "https://photos.mandarinoriental.com/is/image/MandarinOriental/dubai-suite-skyline-view-bedroom",
  "https://www.hotelsinheaven.com/wp-content/uploads/2020/10/mandarin-oriental-jumeirah-dubai-bedroom-suite-1500x842.jpg","http://www.btmagazine.nl/wp-content/uploads/2013/09/Bedroom-Presidential-Suite-Moevenpick-Hotel-Enshi.jpg"]
  },
  price: 2000,
  location: "Tokyo",
  country: "Japan",
  category: "Iconic cities",
  essentials:["Garden view","Wifi","Parking","AC","CCTV"],
  max_guest:4,
  bedrooms:4,
  beds:6,
  king:2,
  queen:2,
  twin:2,
  kitchen:"Yes",
  bathroomType:"Separate",
  bathrooms:3,
},
{
  title: "Lakefront Cabin in New Hampshire",
  description:
    "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
  image: {
    filename: "listingimage",
    url:["https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    "https://www.tripsavvy.com/thmb/hmI_d_h1CNpYOXI2jzf8-rHvluo=/2540x1694/filters:no_upscale():max_bytes(150000):strip_icc()/luxe-sea-view-f49a9d6ccc97437493b87b481a2f4ed4.jpeg",
  "https://photos.mandarinoriental.com/is/image/MandarinOriental/dubai-suite-skyline-view-bedroom",
  "https://www.hotelsinheaven.com/wp-content/uploads/2020/10/mandarin-oriental-jumeirah-dubai-bedroom-suite-1500x842.jpg","http://www.btmagazine.nl/wp-content/uploads/2013/09/Bedroom-Presidential-Suite-Moevenpick-Hotel-Enshi.jpg"]
  },
  price: 1200,
  location: "New Hampshire",
  country: "United States",
  category: "Mountains",
  essentials:["Garden view","Wifi","Parking","AC","CCTV"],
  max_guest:4,
  bedrooms:4,
  beds:6,
  king:2,
  queen:2,
  twin:2,
  kitchen:"Yes",
  bathroomType:"Separate",
  bathrooms:3,
},
{
  title: "Luxury Villa in the Maldives",
  description:
    "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
  image: {
    filename: "listingimage",
    url: ["https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://www.tripsavvy.com/thmb/hmI_d_h1CNpYOXI2jzf8-rHvluo=/2540x1694/filters:no_upscale():max_bytes(150000):strip_icc()/luxe-sea-view-f49a9d6ccc97437493b87b481a2f4ed4.jpeg",
  "https://photos.mandarinoriental.com/is/image/MandarinOriental/dubai-suite-skyline-view-bedroom",
  "https://www.hotelsinheaven.com/wp-content/uploads/2020/10/mandarin-oriental-jumeirah-dubai-bedroom-suite-1500x842.jpg","http://www.btmagazine.nl/wp-content/uploads/2013/09/Bedroom-Presidential-Suite-Moevenpick-Hotel-Enshi.jpg"]
  },
  price: 6000,
  location: "Maldives",
  country: "Maldives",
  category: "Beachfront",
  essentials:["Garden view","Wifi","Parking","AC","CCTV"],
  max_guest:4,
  bedrooms:4,
  beds:6,
  king:2,
  queen:2,
  twin:2,
  kitchen:"Yes",
  bathroomType:"Separate",
  bathrooms:3,
},
{
  title: "Ski Chalet in Aspen",
  description:
    "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
  image: {
    filename: "listingimage",
    url:["https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    "https://www.tripsavvy.com/thmb/hmI_d_h1CNpYOXI2jzf8-rHvluo=/2540x1694/filters:no_upscale():max_bytes(150000):strip_icc()/luxe-sea-view-f49a9d6ccc97437493b87b481a2f4ed4.jpeg",
  "https://photos.mandarinoriental.com/is/image/MandarinOriental/dubai-suite-skyline-view-bedroom",
  "https://www.hotelsinheaven.com/wp-content/uploads/2020/10/mandarin-oriental-jumeirah-dubai-bedroom-suite-1500x842.jpg","http://www.btmagazine.nl/wp-content/uploads/2013/09/Bedroom-Presidential-Suite-Moevenpick-Hotel-Enshi.jpg"]
  },
  price: 4000,
  location: "Aspen",
  country: "United States",
  category: "Skiing",
  essentials:["Garden view","Wifi","Parking","AC","CCTV"],
  max_guest:4,
  bedrooms:4,
  beds:6,
  king:2,
  queen:2,
  twin:2,
  kitchen:"Yes",
  bathroomType:"Separate",
  bathrooms:3,
},
{
  title: "Secluded Beach House in Costa Rica",
  description:
    "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
  image: {
    filename: "listingimage",
    url: ["https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://www.tripsavvy.com/thmb/hmI_d_h1CNpYOXI2jzf8-rHvluo=/2540x1694/filters:no_upscale():max_bytes(150000):strip_icc()/luxe-sea-view-f49a9d6ccc97437493b87b481a2f4ed4.jpeg",
  "https://photos.mandarinoriental.com/is/image/MandarinOriental/dubai-suite-skyline-view-bedroom",
  "https://www.hotelsinheaven.com/wp-content/uploads/2020/10/mandarin-oriental-jumeirah-dubai-bedroom-suite-1500x842.jpg","http://www.btmagazine.nl/wp-content/uploads/2013/09/Bedroom-Presidential-Suite-Moevenpick-Hotel-Enshi.jpg"]
  },
  price: 1800,
  location: "Costa Rica",
  country: "Costa Rica",
  category: "Beachfront",
  essentials:["Garden view","Wifi","Parking","AC","CCTV"],
  max_guest:4,
  bedrooms:4,
  beds:6,
  king:2,
  queen:2,
  twin:2,
  kitchen:"Yes",
  bathroomType:"Separate",
  bathrooms:3,
},
{
  title: "Beachfront Villa in Bali",
  description:
    "Relax in a luxurious beachfront villa with stunning ocean views and private infinity pool.",
  image: {
    filename: "listingimage",
    url: ["https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://www.tripsavvy.com/thmb/hmI_d_h1CNpYOXI2jzf8-rHvluo=/2540x1694/filters:no_upscale():max_bytes(150000):strip_icc()/luxe-sea-view-f49a9d6ccc97437493b87b481a2f4ed4.jpeg",
  "https://photos.mandarinoriental.com/is/image/MandarinOriental/dubai-suite-skyline-view-bedroom",
  "https://www.hotelsinheaven.com/wp-content/uploads/2020/10/mandarin-oriental-jumeirah-dubai-bedroom-suite-1500x842.jpg","http://www.btmagazine.nl/wp-content/uploads/2013/09/Bedroom-Presidential-Suite-Moevenpick-Hotel-Enshi.jpg"]
  },
  price: 60000,
  location: "Seminyak",
  country: "Indonesia",
  category: "Beachfront",
  essentials:["Garden view","Wifi","Parking","AC","CCTV"],
  max_guest:4,
  bedrooms:4,
  beds:6,
  king:2,
  queen:2,
  twin:2,
  kitchen:"Yes",
  bathroomType:"Separate",
  bathrooms:3,
},
{
  title: "Chalet in the Swiss Alps",
  description:
    "Enjoy a cozy stay in a charming chalet with breathtaking mountain views and easy access to skiing.",
  image: {
    filename: "listingimage",
    url:["https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://www.tripsavvy.com/thmb/hmI_d_h1CNpYOXI2jzf8-rHvluo=/2540x1694/filters:no_upscale():max_bytes(150000):strip_icc()/luxe-sea-view-f49a9d6ccc97437493b87b481a2f4ed4.jpeg",
  "https://photos.mandarinoriental.com/is/image/MandarinOriental/dubai-suite-skyline-view-bedroom",
  "https://www.hotelsinheaven.com/wp-content/uploads/2020/10/mandarin-oriental-jumeirah-dubai-bedroom-suite-1500x842.jpg","http://www.btmagazine.nl/wp-content/uploads/2013/09/Bedroom-Presidential-Suite-Moevenpick-Hotel-Enshi.jpg"]
  },
  price: 7000,
  location: "Zermatt",
  country: "Switzerland",
  category: "Skiing",
  essentials:["Garden view","Wifi","Parking","AC","CCTV"],
  max_guest:4,
  bedrooms:4,
  beds:6,
  king:2,
  queen:2,
  twin:2,
  kitchen:"Yes",
  bathroomType:"Separate",
  bathrooms:3,
}   
];
  
module.exports = { data: sampleListings };