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
  plan: {
    type: Schema.Types.String,
  },
  onlineService: {
    type: Schema.Types.String,
  },
  LargerStorage: {
    type: Schema.Types.String,
  },
  CustomizableProfile: {
    type: Schema.Types.String,
  },
});

const Info = model("Info", PersonalInfoSchema);

export default Info;
