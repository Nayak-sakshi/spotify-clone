console.log('welcome to spotify clone');

let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));



let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "song/1.mp3", coverPath: "cover/10.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "song/2.mp3", coverPath: "cover/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "song/3.mp3", coverPath: "cover/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "song/4.mp3", coverPath: "cover/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "song/5.mp3", coverPath: "cover/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "song/2.mp3", coverPath: "cover/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "song/2.mp3", coverPath: "cover/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "song/2.mp3", coverPath: "cover/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "song/2.mp3", coverPath: "cover/9.jpg"},
   
]

songItems.forEach((element, i)=>{ 
    
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName; 
})

// Handle Play/Pause Click
masterPlay.addEventListener('click' ,()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

    }
})

//Listen event
audioElement.addEventListener('timeupdate' , ()=>{
    //update seeker
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressbar.value = progress
})
myProgressbar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressbar.value * audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
        
        
    })
}


Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click' , (e)=>{        
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');        
        audioElement.src = `song/${songIndex+1}.mp3`;
        // masterSongName.innerText = songs[songItems].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.add('fa-circle-pause');
        masterPlay.classList.remove('fa-circle-play');
        

       
    })
})

document.getElementById('next').addEventListener('click' , ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    // masterSongName.innerText = songs[songItems].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click' , ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    // masterSongName.innerText = songs[songItems].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
