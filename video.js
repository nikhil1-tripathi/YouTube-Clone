let vidData = JSON.parse(localStorage.getItem("videoDetail"));
document.querySelector(
  "iframe"
).src = `https://www.youtube.com/embed/${vidData[2].videoId}?autoplay=1&mute=1`;
document.querySelector(".fab-button").addEventListener("click", () => {
  document.querySelector(".nav-left").classList.toggle("left-active");
  document
    .querySelector(".nav-left-opened")
    .classList.toggle("nav-left-opened-block");
  document.querySelector(".library-btn").classList.toggle("library-btn-block");
  document.querySelector(".nav-left").classList.toggle("nav-left-block");
  document.querySelector(".main-videos").classList.toggle("main-videos-aside");
  document.querySelector(".nav-slide").classList.toggle("nav-slide-aside");
});
///////////////////
let show = document.querySelector(".show-more");
show.onclick = () => {
  if (show.textContent == "Show more") {
    document.querySelector(".discription-box").classList.remove("disc-less");
    show.textContent = "Show less";
  } else if (show.textContent == "Show less") {
    document.querySelector(".discription-box").classList.add("disc-less");
    show.textContent = "Show more";
  }
};
// like button
let like = document.querySelector(".like");
let disLike = document.querySelector(".dis-like");
let likePath = document.querySelector(".like-path");
let disDikePath = document.querySelector(".dis-like-path");
let likeCount = document.querySelector(".like-count");
let likep =
  "M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z";
let likedp =
  "M3,11h3v10H3V11z M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11v10h10.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z";
let dislikep =
  "M17,4h-1H6.57C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21 c0.58,0,1.14-0.24,1.52-0.65L17,14h4V4H17z M10.4,19.67C10.21,19.88,9.92,20,9.62,20c-0.26,0-0.5-0.11-0.63-0.3 c-0.07-0.1-0.15-0.26-0.09-0.47l1.52-4.94l0.4-1.29H9.46H5.23c-0.41,0-0.8-0.17-1.03-0.46c-0.12-0.15-0.25-0.4-0.18-0.72l1.34-6 C5.46,5.35,5.97,5,6.57,5H16v8.61L10.4,19.67z M20,13h-3V5h3V13z";
let dislikedp =
  "M18,4h3v10h-3V4z M5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21c0.58,0,1.14-0.24,1.52-0.65L17,14V4H6.57 C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14z";

like.onclick = () => {
  if (likePath.getAttribute("d") == likep) {
    likePath.setAttribute("d", likedp);
    likeCount.textContent++;
  } else {
    likePath.setAttribute("d", likep);
    likeCount.textContent--;
  }
  disDikePath.setAttribute("d", dislikep);
};
disLike.onclick = () => {
  if (likePath.getAttribute("d") == likedp) {
    likePath.setAttribute("d", likep);
    likeCount.textContent--;
    disDikePath.setAttribute("d", dislikedp);
  } else {
    if (disDikePath.getAttribute("d") == dislikep) {
      disDikePath.setAttribute("d", dislikedp);
    } else {
      disDikePath.setAttribute("d", dislikep);
    }
  }
};
/////
////////////////////
// subscribe
let subDiv = document.querySelector(".subsciption");
let sub = document.querySelector(".subscribe");
let bell = document.querySelector(".bell");
let bellPath = document.querySelector(".bill-path");
let belld =
  "M10,20h4c0,1.1-0.9,2-2,2S10,21.1,10,20z M20,17.35V19H4v-1.65l2-1.88v-5.15c0-2.92,1.56-5.22,4-5.98V3.96 c0-1.42,1.49-2.5,2.99-1.76C13.64,2.52,14,3.23,14,3.96l0,0.39c2.44,0.75,4,3.06,4,5.98v5.15L20,17.35z M19,17.77l-2-1.88v-5.47 c0-2.47-1.19-4.36-3.13-5.1c-1.26-0.53-2.64-0.5-3.84,0.03C8.15,6.11,7,7.99,7,10.42v5.47l-2,1.88V18h14V17.77z";
let bellD =
  "M21.5 8.99992H19.5V8.80992C19.5 6.89992 18.39 5.18991 16.6 4.32991L17.47 2.52991C19.96 3.71991 21.5 6.12992 21.5 8.80992V8.99992ZM4.5 8.80992C4.5 6.89992 5.61 5.18991 7.4 4.32991L6.53 2.52991C4.04 3.71991 2.5 6.12992 2.5 8.80992V8.99992H4.5V8.80992ZM12 21.9999C13.1 21.9999 14 21.0999 14 19.9999H10C10 21.0999 10.9 21.9999 12 21.9999ZM20 17.3499V18.9999H4V17.3499L6 15.4699V10.3199C6 7.39991 7.56 5.09992 10 4.33992V3.95991C10 2.53991 11.49 1.45991 12.99 2.19991C13.64 2.51991 14 3.22991 14 3.95991V4.34991C16.44 5.09991 18 7.40991 18 10.3299V15.4799L20 17.3499Z";
sub.onclick = () => {
  subDiv.classList.toggle("subscibed");
  checkSub();
};
function checkSub() {
  if (subDiv.classList.contains("subscibed")) {
    sub.innerHTML = "SUBSCIBED";
  } else {
    sub.innerHTML = "SUBSCIBE";
    bellPath.setAttribute("d", belld);
  }
}
bell.onclick = () => {
  if (bellPath.getAttribute("d") == belld) {
    bellPath.setAttribute("d", bellD);
  } else {
    bellPath.setAttribute("d", belld);
  }
};
function getMonth(m) {
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  if (m[0] == 0) {
    m = m[1];
  }
  for (let i = 0; i < 12; i++) {
    if (m == i + 1) {
      return months[i];
    }
  }
}
document.querySelector(".discription").textContent = vidData[0].description;
document.querySelector(".ch-name").textContent = vidData[0].channelTitle;
document.querySelector(".ch-logo").src =
  vidData[1].items[0].snippet.thumbnails.default.url;
document.querySelector(".video-title").textContent = vidData[0].title;
let time = vidData[0].publishedAt.split("T")[0].split("-");

document.querySelector(
  ".video-view-date"
).textContent = `105k views . ${getMonth(time[1])} ${time[2]},${time[0]}`;
///////////////////////////

///////////////////show relaited-videos
let tag = vidData[0].title.split(" ");
let keyword = "";
for (var i = 0; i < 4; i++) {
  keyword += tag[i] + " ";
}
let relaited = document.querySelector(".relaited-videos");
let api = "AIzaSyAIKpVgXIrhmWyThxs3ZIcf4Q9NjLY-0Jg";
const searchRel = async (val) => {
  let int = document.querySelector("input").value || val;
  let res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?q=${int}&type=video&key=${api}&maxResults=20&part=snippet`
  );
  let data = await res.json();
  mapRelated(data.items);
};
searchRel(keyword);

function mapRelated(data) {
  
  data.map(({ snippet }) => {
    let div = document.createElement("div");
    let imgDiv = document.createElement("div");
    imgDiv.classList.add("rel-img");
    let img = document.createElement("img");
    img.src = snippet.thumbnails.default.url;
    /////
    let txtDiv = document.createElement("div");
    txtDiv.classList.add("rel-txt");
    let title = document.createElement("h1");
    title.textContent = snippet.title;
    let chName = document.createElement("p");
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
    txtDiv.append(title, chName, view);
    imgDiv.append(img);
    div.append(imgDiv, txtDiv);
    relaited.append(div);
  });
}