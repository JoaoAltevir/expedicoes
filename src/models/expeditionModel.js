import {Schema, model} from "mongoose"
const expeditionSchema = new Schema({
    location: {
        type: Schema.Types.String,
        required: true
    },
    date: {
        type: Schema.Types.Date,
        required: true
    },
    participants: {
        type:[Schema.Types.ObjectId],
        required: true,
        ref: "Explorer"
    },
    speciesFound: {
        type: [Schema.Types.ObjectId],
        required: false,
        ref: "Species"
    }
})

const Expedition = model("Expedition", expeditionSchema);

export default Expedition