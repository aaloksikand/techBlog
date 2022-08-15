// let profileUrl; unecessary because we are not using cloudinary
// login form 
const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in");
    }
  }
};
// signup form to add users and replace them in the database
const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#name-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  

  if (name && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ name, email, password, profileUrl }),  //remove profileUrl because no cloudinary
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};
// cloudinary code to uplaod profile picture
//we aren't using cloudinary so delete lines 48 through 63
const cloudName = "df7rc1j7l"; // replace with your own cloud name
const uploadPreset = "rckr81y9"; // replace with your own upload preset

var myWidget = cloudinary.createUploadWidget({
  cloudName,
  uploadPreset}, (error, result) => { 
    if (!error && result && result.event === "success") { 
      console.log('Done! Here is the image info: ', result.info.url);
      profileUrl = result.info.url; 
    }
  }
)
// query selectors for cloudinary upload widgets
document.getElementById("upload_widget").addEventListener("click", function(){
    myWidget.open();
  }, false);

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
