const userName = document.querySelector(".name");
const userEmail = document.querySelector(".email");
const userPassword = document.querySelector(".password");
const btn = document.querySelector(".submit");
const click = document.querySelector(".get");
const del = document.querySelector(".del");

btn.addEventListener("click", () => {
  axios
    .post("api/v1/posts", {
      user: "old",
      caption: "new post",
      likes: 30,
    })
    .then((res) => console.log(res.data))
    .catch((e) => console.log(e));
});

click.addEventListener("click", () => {
  axios
    .get("api/v1/posts/")
    .then((res) => console.log(res.data))
    .catch((e) => console.log(e));
});
const deletee = async () => {
  try {
    const res = fetch("api/v1/posts/63de83ce7fbe045275eab380", {
      method: "DELETE",
    });

    return res;
  } catch (e) {
    console.log(e);
  }
};
del.addEventListener("click", () => {
  deletee().then((response) => console.log(response));
});
