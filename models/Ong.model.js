const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ongSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    match: [/^\S+@\S+\.\S+$/, "Please use a valid email address."],
    unique: true,
    lowercase: true,
    trim: true,
  },
  passwordHash: {
    type: String,
    required: [true, "Password is required"],
  },
  imgProfile: {
    type: String,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  cnpj: {
    type: Number,
    required: true
  },
  description: {
    type: String,
  },
  adId: {
    type: [{type: Schema.Types.ObjectId, ref: "Announcement" }],
    trim: true,
  },
  transactions: {
    type: [{type: Schema.Types.ObjectId, ref:"Transaction"}]
  },
});

module.exports = mongoose.model("Ong", ongSchema);
