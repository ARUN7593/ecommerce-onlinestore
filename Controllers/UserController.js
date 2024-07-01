import { users } from "../Data.js";
import User from "../Models/UserModels.js";
import expressAsyncHandler from "express-async-handler";

const importUsers = expressAsyncHandler(async (req, res) => {
  await User.deleteMany({});
  const createedUSers = await User.insertMany(users);
  res.status(201).send(createdUsers);
});

export { importUsers };
