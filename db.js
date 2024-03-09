// db.js

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/food-nutrition-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
