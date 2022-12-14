const posts = {
  data: [
    {
      userID: 1,
      userName: "Rebekah Johnson",
      postingId: 1,
      postingTitle: "간단한 HTTP API 개발 시작!",
      postingContent:
        "Node.js에 내장되어 있는 http 모듈을 사용해서 HTTP server를 구현.",
    },
    {
      userID: 1,
      userName: "Fabian Predovic",
      postingId: 2,
      postingTitle: "HTTP의 특성",
      postingContent: "Request/Response와 Stateless!!",
    },
    {
      userID: 3,
      userName: "new user 1",
      postingId: 3,
      postingTitle: "내용 1",
      postingContent: "sampleContent3",
    },
    {
      userID: 4,
      userName: "new user 2",
      postingId: 4,
      postingTitle: "내용 2",
      postingContent: "sampleContent4",
    },
  ],
};

const viewPost = (req, res) => {
  res.status(200).json(posts);
};

const modifyPost = (req, res) => {
  try {
    const { postingId, postingTitle, postingContent } = req.body.data;
    const post = posts.data[postingId - 1];
    if (postingTitle !== undefined) post.postingTitle = postingTitle;
    if (postingContent !== undefined) post.postingContent = postingContent;
    console.log(posts);

    res.status(200).json({ message: "postModified!" });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

const deletePost = (req, res) => {
  const postingId = Number(req.query.postingId);
  if (!Number.isNaN(postingId)) {
    const post = posts.data.find((post) => post.postingId === postingId);
    posts.data.splice(post.postingId - 1, 1);
    console.log(posts.data);

    res.status(200).json({ message: "postDeleted!" });
  } else res.status(400).json({ message: "Error!" });
};

const viewMyPosts = (req, res) => {
  try {
    const userID = Number(req.query.userID);
    const postArr = posts.data.filter((post) => post.userID === userID);
    const userName = postArr[0].userName;

    res.status(200).json({
      data: {
        userID: userID,
        userName: userName,
        postings: postArr,
      },
    });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

module.exports = { viewPost, modifyPost, deletePost, viewMyPosts };
