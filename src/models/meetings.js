const mongoose = require('mongoose')
const validator = require('validator')

const meetingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3
    },
    name: {
        type: String,
        required: true,
        minlength: 3
    },


    email: {
        type: String,
        required: true,
        uniqe: [true, "Email id already present"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email")
            }
        }

    },
    rsvp:{
        type:String,
    
        required:true,
    },
    start_time:{
        type:Number,
        required:true
    },
    end_time:{
        type:Number,
        required:true
    },
    creation_timestamp:{
        type:Number,
        required:true
    }
})

//we will create a new collection
const Meeting = new mongoose.model('Meeting',meetingSchema)

module.exports=Meeting