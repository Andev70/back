const password = document.querySelector(".password");
const email = document.querySelector(".email");
const signup = document.querySelector(".signup");

// create querySelector

const createAccount = async () => {
  try {
    // const token = localStorage.getItem("token");
    const response = await fetch("/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email.value, password: password.value }),
    });
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

signup.addEventListener("click", (e) => {
  e.preventDefault();
  createAccount().then((res) => {
    // console.log(res.msg[0]);

    if (res.msg[0] === "your account has been created") {
      console.log("got one");
      location.href = "/login";
    }
  });
});
