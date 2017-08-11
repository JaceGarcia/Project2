const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClothesSchema = new Schema({
    id: String,
    image: String,
    size: String,
    color: String,
    gender: String,
    age_group: String,
    price: Number,
    quantity: Number
});


const OrderSchema = new Schema({
    id: String,
    clothes: [ClothesSchema]
});

const UserSchema = new Schema({
    id: String,
    first_name: String,
    last_name: String,
    email: { type: String, required: true, unique: true },
    created_at: Date,
    updated_at: Date,
    order: [OrderSchema]
});

const UserModel = mongoose.model("User", UserSchema);
const OrderModel = mongoose.model("Order", OrderSchema);
const ClothesModel = mongoose.model("Clothes", ClothesSchema);

module.exports = {
    User: UserModel,
    Order: OrderModel,
    Clothes: ClothesModel
};