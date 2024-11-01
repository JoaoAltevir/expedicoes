import { Schema, model } from "mongoose";

const explorerSchema = new Schema({
    name: {
        type: Schema.Types.String,
        required: true
    },
    fieldOfStudy: {
        type: Schema.Types.String,
        required: true
    },
    expeditionsParticipated: {
        type: Schema.Types.Number,
        required: false,
        default: 0
    }
})

const Explorer = model("Explorer", explorerSchema);

export default Explorer