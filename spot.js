console.log("Welcome sir")
var audioElement = new Audio('songs/1.mp3');
// audioElement.play();
var songIndex=0;
let masterPlay = document.getElementById('masterPlay');
let myProgressBar= document.getElementById("myProgressBar")
audioElement.addEventListener('timeupdate',()=>{
    console.log("tu")

    let progress=Number.parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;

    if(audioElement.currentTime === audioElement.duration){
        audioElement.pause();
    masterPlay.classList.add("fa-play-circle")
        masterPlay.classList.remove("fa-pause-circle")
        myProgressBar.value = 0;
        audioElement.currentTime = 0;
    }

    //updateseekbar
});
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value/100 * audioElement.duration;
})
masterPlay.addEventListener('click',()=>{
  if(audioElement.paused)
    {
        console.log(audioElement);
        // Array.from(sngList)[i].getElementsByTagName("i").click();
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle")
        masterPlay.classList.add("fa-pause-circle")
        gif.style.opacity=1;
    
    }
    else{
    audioElement.pause();
    masterPlay.classList.add("fa-play-circle")
        masterPlay.classList.remove("fa-pause-circle")
        gif.style.opacity=0;
    }

})

let songs=[
    {
        songName:"Juicy",
        filePath:"songs/1.mp3",
        coverPath:"logo.png"
    },
    {
        songName:"Juicy",
        filePath:"songs/2.mp3",
        coverPath:"logo.png"
    },
    {
        songName:"Juicy",
        filePath:"songs/3.mp3",
        coverPath:"logo.png"
    },
    {
        songName:"Juicy",
        filePath:"songs/4.mp3",
        coverPath:"logo.png"
    },
    {
        songName:"Juicy",
        filePath:"songs/5.mp3",
        coverPath:"logo.png"
    },
    {
        songName:"Juicy",
        filePath:"songs/6.mp3",
        coverPath:"logo.png"
    },
    {
        songName:"Juicy",
        filePath:"songs/7.mp3",
        coverPath:"logo.png"
    }
]
let sngList=document.getElementsByClassName("songItem");
let i=0;

Array.from(sngList).forEach(element => {
    let img = element.firstElementChild;
    console.log(img)
    img.src = songs[i].coverPath;
    let name = img.nextElementSibling;
    console.log(name)
    name.innerHTML = songs[i].songName;
    let samay=element.getElementsByClassName("timestamp")
    // samay.innerHTML = songs[i].time;
    i++;
});
 i = 0;
Array.from(sngList).forEach(element => {
    element.addEventListener('click',()=>{
        // element.getElementsByClassName("lb").getElementsByClassName("songlistplay").getElementsByClassName("lb").classList.toggle("fa-play");
        // element.getElementsByClassName("lb").getElementsByClassName("songlistplay").getElementsByClassName("lb").classList.toggle("fa-pause");
        if(!audioElement.paused){
            audioElement.pause();
            masterPlay.classList.add("fa-play-circle")
                masterPlay.classList.remove("fa-pause-circle")
                gif.style.opacity=0;
        songIndex=i;
        audioElement = new Audio(songs[i].filePath);
        audioElement.currentTime=0;
        myProgressBar.value=0;
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle")
        masterPlay.classList.add("fa-pause-circle")
        gif.style.opacity=1;
    
        }
        else{
           
        console.log(audioElement);
        audioElement.currentTime=0;
        songIndex=i;
        myProgressBar.value=0;
        audioElement = new Audio(songs[i].filePath);
        audioElement.currentTime=0;
      
        masterPlay.classList.remove("fa-play-circle")
        masterPlay.classList.add("fa-pause-circle")
        gif.style.opacity=1;
        audioElement.play();
    
    
        }
        
        
        i++;
    })
})