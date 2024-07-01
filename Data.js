import bcrypt from "bcryptjs";

export const users = [
  {
    fullName: "Demo user",
    email: "demo@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    phone: "1234567890",
  },
  {
    fullName: "Demo second",
    email: "demosecond@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    phone: "1234567890",
  },
];
