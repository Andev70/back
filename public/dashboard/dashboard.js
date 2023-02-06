const authToken = sessionStorage.getItem("token");
const caption = document.querySelector(".caption");
const btn = document.querySelector(".btn");

const getUser = async () => {
  try {
    const res = await fetch("/api/v1/users/user", {
      method: "GET",
      headers: { authorization: authToken },
    });
    const data = res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
//getUser().then((res) => console.log(res));

const postsGet = async () => {
  try {
    const res = await fetch("/api/v1/posts", {
      method: "GET",
      headers: { authorization: authToken },
    });
    const data = res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
//postsGet().then((res) => console.log(res));

const createPost = async () => {
  try {
    const res = await fetch("/api/v1/posts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: authToken,
      },
      body: JSON.stringify({ caption: caption.value, likes: 30 }),
    });
    const data = res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

btn.addEventListener("click", () => {
  createPost().then((res) => {
    console.log(res);
  });
});
