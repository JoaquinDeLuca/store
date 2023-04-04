import { Schema, model, models } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true, min: 3, max: 25 },
    lastName: { type: String, required: true, min: 3, max: 25 },
    photo: { type: String, required: true},
    mail: { type: String, required: [true, "Mail is required"], unique: true },
    password: { type: String, required: [true, "Password is required"] },
    logged: { type: Boolean, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default models.user || model("user", userSchema);
