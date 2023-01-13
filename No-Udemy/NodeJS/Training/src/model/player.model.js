const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    Team: {
        type: String,
        required: true,
    },
    Name: {
        type: String,
        required: true,
    },
    Role: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
    },
});

const PlayerModel = mongoose.model("player", playerSchema);
module.exports = PlayerModel;