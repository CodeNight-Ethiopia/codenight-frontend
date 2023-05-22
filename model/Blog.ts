import mongoose from "mongoose";

/* BlogSchema*/
const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "please provide a title for this blog"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
  link: {
    type: String,
    required: [true, "please provide a link for this blog"],
  },
  tag: {
    type: String,
  },
  published_by: {
    type: String,
    required: [true, "please provide owner name for this blog"],
  },
});

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
