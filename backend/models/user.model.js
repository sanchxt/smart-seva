import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdminAccount: {
      type: String,
      default: "",
    },
    profilePicture: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },
    currentPrescription: {
      type: String,
      default: "",
    },
    medicine: {
      type: [String],
      default: [],
    },
    frequency: {
      type: [String],
      default: [],
      enum: ["Twice a day", "Once a day", "Thrice a day"],
    },
    time: {
      type: [Number],
      default: [10],
    },
    AM: {
      type: [Boolean],
      default: [true],
    },
    how: {
      type: [String],
      default: ["After"],
      enum: ["After", "Before"],
    },
    contacts: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
