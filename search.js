let api = "AIzaSyAIKpVgXIrhmWyThxs3ZIcf4Q9NjLY-0Jg";

const searchVid = async (val) => {
  let int = document.querySelector("input").value || val;
  let res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?q=${int}&type=video&key=${api}&maxResults=20&part=snippet`
  );
  let data = await res.json();
  let array = data.items;
  mapDataS(array);
}; ////////

let val = JSON.parse(localStorage.getItem("searchVal"));
searchVid(val);
//////////////////
let searchRes = document.querySelector(".search-res");
const mapDataS = (data) => {
  searchRes.innerHTML = "";
  data.map(({ id, snippet }) => {
    let div = document.createElement("div");
    div.classList.add("item");
    let imgDiv = document.createElement("div");
    imgDiv.classList.add("sh-img-div");
    let thumbnail = document.createElement("img");
    thumbnail.classList.add("sh-thumbnail");
    thumbnail.src = snippet.thumbnails.high.url;
    imgDiv.append(thumbnail);
    let txtDiv = document.createElement("div");
    txtDiv.classList.add("sh-txt-div");
    let titleDiv = document.createElement("div");
    titleDiv.classList.add("sh-title-div");

    let title = document.createElement("h1");
    title.textContent = snippet.title;
    let chName = document.createElement("h2");
    chName.innerHTML = `<img src="${snippet.thumbnails.default.url}">${snippet.channelTitle}`;
    let time = 12 - snippet.publishTime.split("-")[1];
    if (time < 1) {
      time = "2 Weeks ago";
    } else if (time > 1 && time < 3) {
      time = `${time} Years ago`;
    } else {
      time = `${time} Months ago`;
    }
    let view = document.createElement("div");
    view.classList.add("sh-viws");
    view.innerHTML = `${Math.floor(
      Math.random() * (300 - 100) + 100
    )}K Views . <span>${time}</span>`;
    titleDiv.append(title, chName, view);
    txtDiv.append(titleDiv);
    div.append(imgDiv, txtDiv);
    searchRes.append(div);
    div.addEventListener("click", () => {
      localStorage.setItem("vidId", JSON.stringify(id.videoId));
      location.href = "videopage.html";
    });
  });
};

//////////////////
document.querySelector(".fab-button").addEventListener("click", () => {
  document.querySelector(".nav-left").classList.toggle("left-active");
  document.querySelector(".main-videos").classList.toggle("main-videos-aside");
});