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
  try {
    const user = req.body.data;

    users.push({
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
    });

    console.log(`after push : ${users}`);

    res.status(200).json({ message: "userCreated!" });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

module.exports = { createUser };
