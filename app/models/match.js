// app/models/bear.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var MatchSchema   = new Schema({
    player1: String,
    player2: String,
    winner: String
});

module.exports = mongoose.model('Match', MatchSchema);