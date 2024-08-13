import mongoose, { Schema } from 'mongoose';

const struct = new Schema({
    mail: String,
    plan: String,
    phone: String,
    Premium: Boolean,
    lastname: String,
    password: String,
    firstname: String
});

export const user = mongoose.model("user",struct);