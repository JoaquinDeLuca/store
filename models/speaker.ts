import {Schema, model, models } from 'mongoose'

const speakerSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        unique: true,
        trim: true
    }, 
    price: {type: Number, required: true,},
    image: {type: String, required: true},
    attributes: {type: Object }

},{
    timestamps: true,
    versionKey: false
})

export default models.speaker || model("speaker", speakerSchema);