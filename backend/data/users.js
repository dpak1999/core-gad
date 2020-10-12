import bcrypt from "bcryptjs";

const users = [
  {
    name: "Deepak Kumar Dash",
    email: "admin@example.com",
    password: bcrypt.hashSync("admin", 10),
    isAdmin: true,
  },
  {
    name: "Kishan Raj",
    email: "kishan@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Sambhav Sekhar Dalpat",
    email: "sambhav@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
