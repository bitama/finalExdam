const mongoose = require('mongoose');

const PirateSchema = new mongoose.Schema({
        name: {
            type: String,
        required: [true, "Name is required"],
        validate: {
            validator: (input) => {
                return input.length >= 3;
            },
            message:(input)=>`${input.value} is not enough characters.Needs at least 3 characters!!`
        }
        },
        imageUrl: {
            type: String,
            required: [true, "imageUrl is required"],
            validate: {
                validator: (input) => {
                    return input.length >= 3;
                },
                message:(input)=>`${input.value} is not enough characters.Needs at least 3 characters!!`
            }
        },
        treasure: {
            type: Number,
            required: [true, "Treasure  is required"],
            },

            
            phrase: {
                type: String,
                required: [true, "Phrase is required"],
                validate: {
                    validator: (input) => {
                        return input.length >= 3;
                    },
                    message:(input)=>`${input.value} is not enough characters.Needs at least 3 characters!!`
                }
    },
            crewPosition: {
                type: String,
                required: [true, "Phrase is required"],
                validate: {
                    validator: (input) => {
                        return input.length >= 3;
                    },
                    message:(input)=>`${input.value} is not enough characters.Needs at least 3 characters!!`
                }
            },
            
            pegLeg: {
                type:Boolean,
                required:[true,"yes or no pegLeg"]
            },
            eyePath: {
                type: Boolean,
                required:[true,"yes or no eyePath"]
            },
            hookHand: {
                type: Boolean,
                required:[true,"yes or no HookHand"]
            },
    
        
    
        
})
const Pirate= mongoose.model('Pirate', PirateSchema);

module.exports = Pirate;
