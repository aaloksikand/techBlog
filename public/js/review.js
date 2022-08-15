
// on click of review button, grab specific movie and add the relevant reviews and users that made the reviews
const textAreaEl = document.querySelector("textarea");
const reviewButtonEl = document.querySelector(".review-button");

reviewButtonEl.addEventListener("click", async ()=>{
    const currentUrl = window.location;
    const urlArr = currentUrl.href.split("/");
    const movieId = urlArr[urlArr.length - 1]

    try {
        const response = await fetch('/api/reviews', {
            method: 'POST',
            body: JSON.stringify({ content: textAreaEl.value, movie_id: movieId, rating: 3, user_id: 2 }),
            headers: { 'Content-Type': 'application/json' },
          });
          if (response.ok) {
            console.log(response)
            let url = response.url.split("/")
            if (url[url.length - 1] === "login") {

              document.location.replace(`/login`);
            } else {
              document.location.replace(`/movie/${movieId}`);
            }
          } else {
            alert('Failed to sign up.');
          }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
});