import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "Text is required"
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
  // Comment 랑 Video는 RelationShip 있어서 둘중 하나에 작성해야한다.
  // 아래는 그 관계를 Comment에 작성한 내용
  // video: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Video"
  // }
});

const model = mongoose.model("Comment", CommentSchema);

export default model;
