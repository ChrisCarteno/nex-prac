import { Schema, models, model} from "mongoose";

const ClientSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    name:{
        first: String,
        last: String,
        requires: [true, "Name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
    },
    phone: {
        type: String,
        required: [true, "Phone is required"],
    },
    address: {
        type: String,
        required: [true, "Address is required"],
    },
    tag: {
        type: String,
        required: [true, "Tag is required"],
    },
    address: {
        type: String,
    },
    comments: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Client = models.Client || model("Client", ClientSchema);

export default Client;
