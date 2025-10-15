const express = require("express")
const { AddMovie } = require("../../Functions/Movie/AddMovie.js")
const { listMovies } = require("../../Functions/Movie/ListMovie.js")
const { RemoveMovie } = require("../../Functions/Movie/RemoveMovie.js")
const { EditMovie } = require("../../Functions/Movie/EditMovie.js")
const { AddReview } = require("../../Functions/Review/AddReview.js")
const { EditReview } = require("../../Functions/Review/EditReview.js")
const { ListReview } = require("../../Functions/Review/ListReview.js")

const route = express.Router()

route.post('/Cinema', AddMovie)
route.get('/Cinema', listMovies)
route.delete('/Cinema/:id', RemoveMovie)
route.put('/Cinema/:id', EditMovie)

route.post('/Review/:movieid', AddReview)
route.put('/Review/:id', EditReview)
route.get('/Review', ListReview)

module.exports = route