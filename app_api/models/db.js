var mongoose = require('mongoose');
var dbURI='mongodb://localhost/mekanbul';
mongoose.connect(dbURI);
mongoose.connection.on("connected",function(){
    console.log(dbURI+" adresindeki veritabanına bağlanıldı!\n")
})
mongoose.connection.on("error",function(){
    console.log(dbURI+" adresindeki veritabanına bağlanılamadı!\n")
})
mongoose.connection.on("disconnected",function(){
    console.log(dbURI+" adresindeki veritabanına bağlantı kesildi!\n")
})
process.on("SIGINT",function(){
    mongoose.connection.close()
    console.log("Uygulama Kapatıldı")
    process.exit(0)
})

require("./venue")
