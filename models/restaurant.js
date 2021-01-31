const mongoose = require('mongoose')
const Schema = mongoose.Schema
const restaurantSchema = new Schema({
  name: {
    type: String,
    trim: false,
    required: true
  },
  name_en: {
    type: String,
    trim: false,
    required: false
  },
  category: {
    type: String,
    trim: false,
    required: false
  },
  rating: {
    type: Number,
    required: false
  },
  location: {
    type: String,
    trim: false,
    required: true
  },
  phone: {
    type: String,
    trim: false,
    required: true
  },
  google_map: {
    type: String,
    trim: false,
    required: false
  },
  image: {
    type: String,
    trim: false,
    required: false
  },
  description: {
    type: String,
    trim: false,
    required: false
  }
})

module.exports = mongoose.model('Restaurant', restaurantSchema)