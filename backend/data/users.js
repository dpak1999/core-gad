import bcrypt from "bcryptjs";

const users = [
  {
    name: "Deepak Kumar Dash",
    email: "admin@example.com",
    password: bcrypt.hashSync("admin", 10),
    isAdmin: true,
  },
  {
    name: "Emily Zen",
    email: "emily@example.com",
    password: bcrypt.hashSync("emily#10", 10),
  },
  {
    name: "Tom Collins",
    email: "tom@example.com",
    password: bcrypt.hashSync("tom#10", 10),
  },
  {
    name: "Shawn Mendes",
    email: "shawn@example.com",
    password: bcrypt.hashSync("shawn#10", 10),
  },
  {
    name: "Brad Pitt",
    email: "brad@example.com",
    password: bcrypt.hashSync("brad#10", 10),
  },
  {
    name: "Billie Ellish",
    email: "billie@example.com",
    password: bcrypt.hashSync("billie#10", 10),
  },
  {
    name: "Robert Downy",
    email: "robert@example.com",
    password: bcrypt.hashSync("robert#10", 10),
  },
  {
    name: "Bradley Cooper",
    email: "bradley@example.com",
    password: bcrypt.hashSync("bradley#10", 10),
  },
  {
    name: "Gal Gadot",
    email: "gal@example.com",
    password: bcrypt.hashSync("gal#10", 10),
  },
];

export default users;
