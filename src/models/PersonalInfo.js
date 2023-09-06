import { Schema, model } from "mongoose";

const PersonalInfoSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
  },
  email: {
    type: Schema.Types.String,
    required: true,
  },
  phone: {
    type: Schema.Types.String,
    required: true,
  },
});

const Info = model("Info", PersonalInfoSchema);

export default Info;
