import { Schema, model } from "mongoose"

const speciesSchema = new Schema({
    name: {
        type: Schema.Types.String,
        required: true
    },
    discoveryLocation: {
        type: Schema.Types.String,
        required: true
    },
    rarity: {
        type: Schema.Types.Number,
        required: true,
        max: 10
    },
    documented: {
        type: Schema.Types.Boolean,
        required: false,
        default: false
    }
})

const Species = model("Species", speciesSchema);

export default Species