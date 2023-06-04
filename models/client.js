import { Schema, models, model} from "mongoose";

const ClientSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    name:{
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
    },
    phone: {
        type: String,
        required: [true, "Phone is required"],
    },
    idNumber: {
        type: Number,
    },
    comment: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Client = models.Client || model("Client", ClientSchema);

export default Client;
