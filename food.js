const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  foodGroup: { type: String },
  description: { type: String },
  nutritionalInformation: {
    calories: { type: Number },
    macronutrients: {
      proteins: { type: Number },
      fats: { type: Number },
      carbohydrates: { type: Number },
    },
    micronutrients: {
      vitamins: { type: String },
      minerals: { type: String },
    },
    fiber: { type: Number },
    sodium: { type: Number },
    cholesterol: { type: Number },
  },
  servingSize: { type: String },
  allergens: [{ type: String }],
  ingredients: [{ type: String }],
  preparationMethods: { type: String },
  certifications: [{ type: String }],
  countryOfOrigin: { type: String },
  brandOrManufacturer: { type: String },
  dietaryRestrictions: [{ type: String }],
  healthBenefits: { type: String },
  bestPractices: { type: String },
});

module.exports = mongoose.model('Food', foodSchema);