const mongoose = require("mongoose");
const SchemaReview = new mongoose.Schema({
    Filme:{
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: "Filmes"
    },
    Review:{
        required: true,
        type: String
    },
    Nota:{
        required: true,
        type: Number
    }
});

const ReviewMGS = mongoose.model("Reviews", SchemaReview);
module.exports = ReviewMGS;
