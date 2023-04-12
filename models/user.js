import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
  isActive: { type: Boolean, default: true },
  location: {
    type: { type: String },
    coordinates: [],
  },
});

userSchema.index({ location: "2dsphere" });

export default mongoose.model("User", userSchema);
