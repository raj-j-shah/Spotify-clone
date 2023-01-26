console.log("Welcome sir")
var audioElement = new Audio('songs/1.mp3');
var sngdes = document.getElementById("gif");

// audioElement.play();
var songIndex=1;
let masterPlay = document.getElementById('masterPlay');
let myProgressBar= document.getElementById("myProgressBar");
const tu = ()=>{

    let progress=Number.parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;

    if(audioElement.currentTime === audioElement.duration){
        audioElement.stop();
        masterPlay.classList.add("fa-play-circle")
        masterPlay.classList.remove("fa-pause-circle")
        myProgressBar.value = 0;
        audioElement.currentTime = 0;
    }

    //updateseekbar
}
audioElement.addEventListener('timeupdate',tu);

const masterclick = ()=>{
    let em = document.getElementById(songIndex);
    if(audioElement.paused)
    {
      
        // Array.from(sngList)[i].getElementsByTagName("i").click();
        sngdes.innerHTML = songs[songIndex-1].name;
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle")
        masterPlay.classList.add("fa-pause-circle")
        em.classList.toggle("fa-pause")
        em.classList.toggle("fa-play")
        gif.style.opacity=1;
        
    
    }
    else{
    audioElement.pause();
    masterPlay.classList.add("fa-play-circle")
        masterPlay.classList.remove("fa-pause-circle")
        em.classList.toggle("fa-pause")
        em.classList.toggle("fa-play")
        gif.style.opacity=0;
    }
}
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value/100 * audioElement.duration;
})
masterPlay.addEventListener('click',masterclick)

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
        songName:"Juicy fas",
        filePath:"songs/5.mp3",
        coverPath:"logo.png"
    },
    {
        songName:"Juicy mix",
        filePath:"songs/6.mp3",
        coverPath:"logo.png"
    },
    {
        songName:"mix",
        filePath:"songs/7.mp3",
        coverPath:"logo.png"
    }
]
let sngList=document.getElementsByClassName("songItem");
let i=0;

Array.from(sngList).forEach(element => {
    let img = element.firstElementChild;
   
    img.src = songs[i].coverPath;
    let name = img.nextElementSibling;
    
    name.innerHTML = songs[i].songName;
    let icon = element.getElementsByClassName("lb")[0];
    icon.id = i+1;
    i++;
});
for(i=1;i<=sngList.length;i++){
    let em = document.getElementById(i);
    em.addEventListener('click',()=>{

        if(audioElement.paused){
            myProgressBar.value=0;
            songIndex=Number.parseInt(em.id);
            let cursng = "songs/"+songIndex+".mp3";
            audioElement = new Audio(cursng);
            audioElement.addEventListener('timeupdate',tu);
            myProgressBar.value = audioElement.currentTime/audioElement.duration *100;
            masterclick();
        }
        else{
        
            masterclick();
            if(songIndex!=em.id){
            myProgressBar.value=0;
            myProgressBar.value = audioElement.currentTime/audioElement.duration *100;
            songIndex=Number.parseInt(em.id);
            let cursng = "songs/"+songIndex+".mp3";
            audioElement = new Audio(cursng);
            audioElement.addEventListener('timeupdate',tu);
            masterclick();
            }

            
        }
    })
}


