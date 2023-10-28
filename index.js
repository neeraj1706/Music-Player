 let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterplay = document.getElementById("masterplay");
let progressbar = document.getElementById("progressbar");
let gif = document.getElementById("gif");
let songbanners = Array.from(document.getElementsByClassName("songbanner"));

let songs = [
  { songName: "case", filePath: "songs/3.mp3", coverPath: "covers/1.jpg" },
  {
    songName: "chetak 2",
    filePath: "songs/1.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "fuck-1",
    filePath: "songs/2.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "gunde chacha",
    filePath: "songs/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "jee ni lagda",
    filePath: "songs/5.mp3",
    coverPath: "covers/5.jpg",
  },
  {
    songName: "kharch karod",
    filePath: "songs/6.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songName: "Right Hand",
    filePath: "songs/7.mp3",
    coverPath: "covers/7.jpg",
  },
  {
    songName: "Right Hand nn",
    filePath: "songs/7.mp3",
    coverPath: "covers/7.jpg",
  },
];

songbanners.forEach((element, i) => {

  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("mysongname")[0].innerText = songs[i].songName;
});

//  audioElement.play();

// handle play pause

masterplay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterplay.classList.remove("fa-pause-circle");
    masterplay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});

// listen to events

audioElement.addEventListener("timeupdate", () => {
  // update seekbaar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);

  progressbar.value = progress;
});

progressbar.addEventListener("change", () => {
  audioElement.currentTime = (progressbar.value * audioElement.duration) / 100;
});
const makeallplays = ()=>{
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
        element.classList.add("fa-play-circle")
        element.classList.remove("fa-pause-circle")
})
}
Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
    
    element.addEventListener('click' , (e)=>{
        makeallplays();
        songIndexindex =parseInt(e.target.id);
        e.target.classList.remove("fa-play-circle")
        e.target.classList.add("fa-pause-circle")

        
        audioElement.src = `songs/${songIndexindex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle");

    })
})

document.getElementById("next").addEventListener('click' , ()=>{
    if(songIndex > 8){
        songIndex = 0
    }
    else {
        songIndex += 1 ;
    }
    audioElement.src = `songs/${songIndexindex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle");
}
)

document.getElementById("next").addEventListener('click' , ()=>{
    if(songIndex < 0){
        songIndex = 0
    }
    else {
        songIndex -= 1 ;
    }
    audioElement.src = `songs/${songIndexindex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle");
}
)