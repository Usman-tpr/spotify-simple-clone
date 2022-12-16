let playbutton=document.getElementById('play');
const progress=document.getElementById('progressbar')
const audioelement= new Audio('music/1.mp3')
const gif=document.getElementById('gif');
const songitem=Array.from(document.getElementsByClassName('songitem'));


let songindex=0;

let songs=[
    {songname:'to da noor darya..' ,coverpath:'logo.png'},
    {songname:'Tasawar' ,coverpath:'logo.png'},
    {songname:'Da cha da..' ,coverpath:'logo.png'},
    {songname:'raka sharab..' ,coverpath:'logo.png'},
    {songname:'khumar khumar' ,coverpath:'logo.png'},
    {songname:'rabaghi' ,coverpath:'logo.png'}
];

songitem.forEach((element,i) => {
   element.getElementsByTagName('img')[0].src=songs[i].coverpath;
   element.getElementsByClassName('songspan')[0].innerText=songs[i].songname
});

    playbutton.addEventListener('click',()=>{
   
        if(audioelement.paused || audioelement.currentTime<=0){
            audioelement.play();
            playbutton.classList.remove('fa-play-circle')
            playbutton.classList.add('fa-pause-circle')
            gif.style.opacity=1;
        }
        else{
            audioelement.pause();
            playbutton.classList.remove('fa-pause-circle')
            playbutton.classList.add('fa-play-circle')
            gif.style.opacity=0;
        }
    });





audioelement.addEventListener('timeupdate',()=>{
    progressvalue=parseInt((audioelement.currentTime/audioelement.duration)*100);
    progress.value=progressvalue;
});



progress.addEventListener('change',()=>{
   audioelement.currentTime=progress.value * audioelement.duration/100;

    
   
});
const makeallplays=()=>{
    Array.from(document.getElementsByClassName('songplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
       
    })
}

Array.from(document.getElementsByClassName('songplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeallplays();
       
        songindex=parseInt(e.target.id)
                 e.target.classList.remove('fa-play-circle');
                 e.target.classList.add('fa-pause-circle');
                 audioelement.src=`music/${songindex+1}.mp3`;
                 audioelement.play();
                playbutton.classList.remove('fa-play-circle');
                playbutton.classList.add('fa-pause-circle')
                document.getElementById('singer').innerText=songs[songindex].songname;
                gif.style.opacity=1;

    });
});
document.getElementById('pre').addEventListener('click',()=>{

    songindex-=1
    audioelement.src=`music/${songindex+1}.mp3`;
    audioelement.play();
   playbutton.classList.remove('fa-play-circle');
   playbutton.classList.add('fa-pause-circle')
   document.getElementById('singer').innerText=songs[songindex].songname;
   gif.style.opacity=1;

})
document.getElementById('next').addEventListener('click',()=>{

    songindex+=1
    audioelement.src=`music/${songindex+1}.mp3`;
    audioelement.play();
   playbutton.classList.remove('fa-play-circle');
   playbutton.classList.add('fa-pause-circle')
   document.getElementById('singer').innerText=songs[songindex].songname;
   gif.style.opacity=1;

})
