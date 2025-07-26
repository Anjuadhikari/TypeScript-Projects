import mongoose, { Schema, Document } from "mongoose";
export interface Message extends Document {
  content: string;
  createdAt: Date;
}

const MessageSchema: Schema<Message> = new Schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,

  },
});

export interface User extends Document{
    username:string;
    email:string;
    password:string;
    verifyCode:string;
    verifyCodeExpires:Date;
    isAcceptingMessages:boolean;
    messages: Message[];

}

const UserSchema: Schema<User> = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  verifyCode: {
    type: String,
    required: true,
  },
  verifyCodeExpires: {
    type: Date,
    required: true,
  },
  isAcceptingMessages: {
    type: Boolean,
    default: false,
  },
  messages: [MessageSchema],
});