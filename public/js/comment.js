// on click of comment button, grab specific blog post and add the relevant comments and users that made the reviews
const textAreaEl = document.querySelector("textarea");
const commentButtonEl = document.querySelector(".comment-button");

reviewButtonEl.addEventListener("click", async () => {
  const currentUrl = window.location;
  const urlArr = currentUrl.href.split("/");
  const blogId = urlArr[urlArr.length - 1];

  try {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        content: textAreaEl.value,
        blog_id: blogId,
        user_id: userId,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      console.log(response);
      let url = response.url.split("/");
      if (url[url.length - 1] === "login") {
        document.location.replace(`/login`);
      } else {
        document.location.replace(`/blog/${blogId}`);
      }
    } else {
      alert("Failed to sign up.");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
