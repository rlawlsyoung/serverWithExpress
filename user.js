const users = [
  {
    id: 1,
    name: "Kim Jin Young",
    email: "jinyoung01099@gmail.com",
    password: "1q2w3e",
  },
  {
    id: 2,
    name: "Choi sung",
    email: "choisung1@gmail.com",
    password: "password",
  },
];

const createUser = (req, res) => {
  const user = req.body.data;

  users.push({
    id: user.id,
    name: user.name,
    email: user.email,
    password: user.password,
  });

  console.log(`after push : ${users}`);

  res.json({ message: "userCreated!" });
};

module.exports = { createUser };
