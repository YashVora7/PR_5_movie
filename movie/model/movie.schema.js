const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema
    ({
        title:String,
        description:String,
        releaseDate:Date,
        category:String,
        actors: [{ name: String }],
        image,
        ratings: [
          {
            value: Number,
            min: 0,
            max: 10,
          },
        ],
        comments: [
          {
            text: String,
          },
        ],
        addedBy: String,
      });

const movieModel = mongoose.model('User',movieSchema);

module.exports = movieModel