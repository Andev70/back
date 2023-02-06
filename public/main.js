const userPass = document.querySelector(".password");
const userEmail = document.querySelector(".email");
const userId = document.querySelector(".user-email");
const caption = document.querySelector(".user-password");
getBtn = document.querySelector(".get");
const btn = document.querySelector(".btn");
localStorage.clear();
// btn.addEventListener("click", () => {
//   axios
//     .post("api/v1/posts", {
//       user: "old",
//       caption: "new post",
//       likes: 30,
//     })
//     .then((res) => console.log(res.data))
//     .catch((e) => console.log(e));
// });

// click.addEventListener("click", () => {
//   axios
//     .get("api/v1/posts/")
//     .then((res) => console.log(res.data))
//     .catch((e) => console.log(e));
// });
// const deletee = async () => {
//   try {
//     const res = fetch("api/v1/posts/63de83ce7fbe045275eab380", {
//       method: "DELETE",
//     });
//     const data = res.json();
//     return data;
//   } catch (e) {
//     console.log(e);
//   }
// };
// del.addEventListener("click", () => {
//   deletee().then((response) => console.log(response));
// });

const asyncPostCall = async () => {
  try {
    const response = await fetch("/api/v1/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // your expected POST request payload goes here

        email: userEmail.value,
        password: userPass.value,
      }),
    });
    const data = response.json();
    // enter you logic when the fetch is successful
    return data;
  } catch (error) {
    // enter your logic for when there is an error (ex. error toast)

    console.log(error);
  }
};

btn.addEventListener("click", () => {
  asyncPostCall().then((res) => {
    console.log(res);
    const token = res.token;
    localStorage.setItem("token", token);
  });
});

// get userPass
const getUser = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch("/api/v1/users/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    });
    const data = response.json();
    // enter you logic when the fetch is successful
    return data;
  } catch (error) {
    // enter your logic for when there is an error (ex. error toast)

    console.log(error);
  }
};

getBtn.addEventListener("click", () => {

  getUser().then((res) => console.log(res));
});

const postSt = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch("/api/v1/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: token || "",
      },
      body: JSON.stringify({
        caption: caption.value,
        likes: 0,
      }),
    });
    const data = response.json();
    // enter you logic when the fetch is successful
    return data;
  } catch (error) {
    // enter your logic for when there is an error (ex. error toast)

    console.log(error);
  }
};

// getBtn.addEventListener("click", () => {
//   //   console.log("ok");
//   const obj = { name: "anupal" };

//   postSt().then((res) => console.log(res));
// });
