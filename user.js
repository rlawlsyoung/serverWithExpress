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

const posts = [
  {
    id: 1,
    title: "간단한 HTTP API 개발 시작!",
    content: "Node.js에 내장되어 있는 http 모듈을 사용해서 HTTP server를 구현.",
    userId: 1,
  },
  {
    id: 2,
    title: "HTTP의 특성",
    content: "Request/Response와 Stateless!!",
    userId: 1,
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
