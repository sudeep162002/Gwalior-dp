import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userId: String,
  fullName: String,
  ritwickName: String,
  swastyayani: String,
  istavrity: String,
  acharyavrity: String,
  dakshina: String,
  sangathani: String,
  ritwicki: String,
  proname: String,
  anandabazar: String,
  srimandir: String,
  parivrity: String,
  misc: String

});

export const Users = mongoose.model('Users', userSchema);
