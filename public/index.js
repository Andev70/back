const name = document.querySelector(".name");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const postBtn = document.querySelector(".post");
const imgFile = document.querySelector(".img");
const main = document.querySelector(".main");
let imageSrc = "";

imgFile.addEventListener("change", (e) => {
  const file = imgFile.files[0];
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    console.log(reader.result);
    imageSrc = reader.result;
  });
  reader.readAsDataURL(file);
});
const postProd = async () => {
  try {
    let res = await fetch("/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        dp: imageSrc,
        password: password.value,
      }),
    });
    const data = res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

postBtn.addEventListener("click", () => {
  postProd().then((res) => console.log(res));
});

const imgGet = async () => {
  try {
    const res = await fetch("api/v1/users/63db8edba284c319b61e4fc1");
    const data = res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

imgGet().then((res) => {
  console.log(res.user.dp);
});
