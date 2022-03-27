let searchb = document.getElementById("search");
searchb.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    let int = document.querySelector("input").value || val;
    localStorage.setItem("searchVal", JSON.stringify(int));
    location.href = "search.html";
  }
});
function search() {
  let int = document.querySelector("input").value || val;
  localStorage.setItem("searchVal", JSON.stringify(int));
  location.href = "search.html";
}
////////////////
const iconColor = (theme) => {
  let icon = document.querySelectorAll("path");
  for (let i = 0; i < icon.length; i++) {
    if (i !== 1 && i !== 2) {
      icon[i].setAttribute("fill", theme);
    }
  }
};
let userBtn = document.querySelector("#img");
let option = document.querySelector(".user-option");
userBtn.onclick = () => {
  option.classList.toggle("user-active");
};
let lightIcon = document.querySelector(".light");
let darkIcon = document.querySelector(".dark");
//////////////////////
// theme Slide
let apper = document.querySelector(".apper");
let themeSlide = document.querySelector(".theme-slide");
let goBack = document.querySelector(".go-back");
apper.onclick = () => {
  themeSlide.style.left = "-100%";
};
goBack.onclick = () => {
  themeSlide.style.left = "0";
};
/////////////////////
// change theme
let tick = `<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"
focusable="false" class="style-scope yt-icon"
style="pointer-events: none; display: block; width: 100%; height: 100%;">
<g class="style-scope yt-icon">
    <path
        d="M9,18.7l-5.4-5.4l0.7-0.7L9,17.3L20.6,5.6l0.7,0.7L9,18.7z"
        class="style-scope yt-icon"></path>
</g>
</svg>`;
let body = document.querySelector("body");
let theme = JSON.parse(localStorage.getItem("theme")) || "dark";
if (theme == "light") {
  body.classList.add("theme-light");
  lightIcon.innerHTML = tick;
  darkIcon.innerHTML = "";
  iconColor("black");
} else if (theme == "dark") {
  body.classList.remove("theme-light");
  lightIcon.innerHTML = "";
  darkIcon.innerHTML = tick;
  iconColor("white");
}
let light = document.querySelector(".light-theme");
let dark = document.querySelector(".dark-theme");
light.onclick = () => {
  body.classList.add("theme-light");
  lightIcon.innerHTML = tick;
  darkIcon.innerHTML = "";
  iconColor("black");
  localStorage.setItem("theme", JSON.stringify("light"));
};
dark.onclick = () => {
  body.classList.remove("theme-light");
  lightIcon.innerHTML = "";
  darkIcon.innerHTML = tick;
  iconColor("white");
  localStorage.setItem("theme", JSON.stringify("dark"));
};

// let key = "AIzaSyAIKpVgXIrhmWyThxs3ZIcf4Q9NjLY-0Jg";
let key = "AIzaSyBIbVkfoR0jTOtQVN8PjOgb4UW3oDr12Lg";

const getData = async (tag) => {
  let t = tag || "punabi+songs";
  const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&location=20.5937%2C78.9629&locationRadius=10mi&q=${t}&type=video&key=${key}&maxResults=50`;
  let res = await fetch(url);
  let data = await res.json();
  mapData(data.items);
  console.log(data.items);
};
let tags = document.getElementsByClassName("tags");
for (let i = 0; i < tags.length; i++) {
  tags[i].onclick = () => {
    console.log(tags[i].textContent);
    getData(tags[i].textContent);
    for (let j = 0; j < tags.length; j++) {
      if (tags[j] == tags[i]) {
        tags[j].classList.add("active-nav");
      } else {
        tags[j].classList.remove("active-nav");
      }
    }
  };
}
tags[0].classList.add("active-nav");

let data = JSON.parse(localStorage.getItem("youtubeData"));
let main = document.querySelector(".main-videos");
const mapData = (data) => {
  main.innerHTML = "";
  data.map(({ id, snippet }) => {
    channelDetails();
    async function channelDetails() {
      const url = `https://www.googleapis.com/youtube/v3/channels?part=snippet&fields=items%2Fsnippet%2Fthumbnails%2Fdefault&id=${snippet.channelId}&key=${key}`;
      let res = await fetch(url);
      let d = await res.json();
      let chLogo = d.items[0].snippet.thumbnails.default.url;

      let div = document.createElement("div");
      let imgDiv = document.createElement("div");
      imgDiv.classList.add("img-div");
      let thumbnail = document.createElement("img");
      thumbnail.classList.add("thumbnail");
      thumbnail.src = snippet.thumbnails.high.url;
      imgDiv.append(thumbnail);
      let txtDiv = document.createElement("div");
      txtDiv.classList.add("txt-div");
      let titleDiv = document.createElement("div");
      titleDiv.classList.add("title-div");
      let chanLogo = document.createElement("img");
      chanLogo.src = chLogo;
      let title = document.createElement("h1");
      title.textContent = snippet.title;
      let chName = document.createElement("h2");
      chName.innerHTML = snippet.channelTitle;
      let time = 12 - snippet.publishTime.split("-")[1];
      if (time < 1) {
        time = "2 Weeks ago";
      } else if (time > 1 && time < 3) {
        time = `${time} Years ago`;
      } else {
        time = `${time} Months ago`;
      }
      let view = document.createElement("div");
      view.classList.add("viws");
      view.innerHTML = `${Math.floor(
        Math.random() * (300 - 100) + 100
      )}K Views . <span>${time}</span>`;
      titleDiv.append(title, chName, view);

      txtDiv.append(chanLogo, titleDiv);
      div.append(imgDiv, txtDiv);
      main.append(div);
      div.addEventListener("click", () => {
        let videoDetail = [snippet, d, id];
        localStorage.setItem("videoDetail", JSON.stringify(videoDetail));
        location.href = "videopage.html";
      });
    }
  });
};
mapData(data);
//////////////////
document.querySelector(".fab-button").addEventListener("click", () => {
  document.querySelector(".nav-left").classList.toggle("left-active");
  document
    .querySelector(".nav-left-opened")
    .classList.toggle("nav-left-opened-block");
  document.querySelector(".library-btn").classList.toggle("library-btn-block");
  document.querySelector(".main-videos").classList.toggle("main-videos-aside");
  document.querySelector(".nav-slide").classList.toggle("nav-slide-aside");
});