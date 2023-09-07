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
    type: Schema.Types.Number,
    required: true,
  },
  plan: {
    type: Schema.Types.Number,
  },
  onlineService: {
    type: Schema.Types.Number,
  },
  LargerStorage: {
    type: Schema.Types.Number,
  },
  CustomizableProfile: {
    type: Schema.Types.Number,
  },
});

const Info = model("Info", PersonalInfoSchema);

export default Info;
