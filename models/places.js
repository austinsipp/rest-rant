const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: {type: String, default: 'http://placekitten.com/350/350'},
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: {
    type: Number,
    min: [1673, 'Surely not that old?!'],
    max: [new Date().getFullYear(), "Hey, this year is in the future!"]
  }
})

placeSchema.methods.showEstablished = function () {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}!`
}

module.exports = mongoose.model('Place', placeSchema)



/*module.exports = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/thai-food.jpg',
    picSource: 'Photo by <a href="https://unsplash.com/@jomemui?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jerome Jome</a> on <a href="https://unsplash.com/s/photos/thai-food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/coffee-cat.jpg',
    picSource: 'Photo by <a href="https://unsplash.com/@sarahshull?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sarah Shull</a> on <a href="https://unsplash.com/s/photos/coffee-cat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
  }]*/
