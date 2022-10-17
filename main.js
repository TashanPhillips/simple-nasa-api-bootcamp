document.querySelector("button").addEventListener("click", getApod);
function getApod() {
  const date = document.querySelector("input").value;
  fetch(
    `https://api.nasa.gov/planetary/apod?api_key=RaAPlPdWACQu5bK1gVGG5ZycrELyMSwCIrr53Kib&date=${date}`
  )
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);

      document.querySelector("#location").innerText = data.title;
      document.querySelector("img").src = data.hdurl;
      document.querySelector("#facility").innerText = data.explanation;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
