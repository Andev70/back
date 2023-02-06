const userPass = document.querySelector(".password");
const userEmail = document.querySelector(".email");
const login = document.querySelector(".signup");

sessionStorage.clear();

const asyncPostCall = async () => {
  try {
    const response = await fetch("/api/v1/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userEmail.value,
        password: userPass.value,
      }),
    });
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

login.addEventListener("click", (e) => {
  e.preventDefault();
  asyncPostCall().then((res) => {
     console.log(res);
    if (res.msg === "login successful") {
      const token = res.token;

      sessionStorage.setItem("token", token);
      const myToken = sessionStorage.getItem("token");
      // console.log(myToken);
      location.href="/dashboard"
    }
  });
});
