const mongoose = require("mongoose")
const Durga1 = new mongoose.Schema({
    message : {
        type : String
    }
});
const Durga = mongoose.model("Durga",Durga1);
module.exports = Durga