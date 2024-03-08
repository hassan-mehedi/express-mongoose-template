import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: [true, "Name is required"], trim: true },
        address: { type: String, trim: true },
        type: { type: String, trim: true },
        phone: { type: String, trim: true, match: /^\d{11,15}$/ },
        email: { type: String, required: [true, "Email is required"], trim: true, unique: true },
        password: { type: String, required: [true, "password is required"], trim: true },
        isDeleted: { type: Boolean, default: false },
        deletedAt: { type: Date, default: null },
    },
    {
        timestamps: true,
    }
);

const user = mongoose.model("user", userSchema);
export default user;
