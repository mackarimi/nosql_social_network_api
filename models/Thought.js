const mongoose = require("mongoose");
const dayjs = require("dayjs");
const { Schema } = mongoose;

const reactionSchema = new Schema({
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (date) => dayjs(date).format("MMM DD, YYYY [at] hh:mm a"),
  },
});

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => dayjs(date).format("MMM DD, YYYY [at] hh:mm a"),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
      versionKey: true, //  the '__v' field
    },
    id: false,
  }
);

const Thought = mongoose.model("Thought", thoughtSchema);

module.exports = Thought;
