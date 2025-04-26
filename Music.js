



function settingsnav(){
    document.querySelector(".settingsoption").style='z-index:101;';
    document.querySelector(".closebutton").style='z-index:101;';
}

function closesettingsnav(){
    document.querySelector(".settingsoption").style='z-index:0;';
    document.querySelector(".closebutton").style='z-index:0;';
}




//song details
const container=[{
    img:"songimages/all we know chainsmokers",
    songname:"All we know",
    class:"one",
    artist:"Chainsmoker",
    song:"all we know The_Chainsmokers_-_All_We_Know_ft._Phoebe_Ryan_(Official_Music_Video)(1080p)"
},
{
    img:"songimages/alone marsh",
    songname:"Alone",
    class:"two",
    artist:"Marshmellow",
    song:"alone Marshmello_-_Alone_(Official_Music_Video)(128k)"
    
},
{
    img:"songimages/animals maroon",
    songname:"Animal",
    artist:"Marron5",
    class:"three",
    song:"Animals Maroon_5"
},
{
    img:"songimages/audio lsd",
    songname:"Audio",
    artist:"LSD",
    class:"four",
    song:"audio LSD_-_Audio_ft._Sia__Diplo__Labrinth"
},
{
    img:"songimages/back to u",
    songname:"Back to you",
    artist:"Selena Gomez",
    class:"five",
    song:"backtouSelena_Gomez_-_Back_To_You_(Lyric_Video)(128k)"
},
{
    img:"songimages/badblood",
    songname:"Bad Blood",
    artist:"Taylor Swift",
    class:"six",
    song:"bad blood Taylor_Swift_-_Bad_Blood"
},
{
    img:"songimages/beachhouse",
    songname:"Beach house",
    artist:"The Chainsmokers",
    class:"seven",
    song:"beach house The_Chainsmokers_-_Beach_House_(Official_Video)(1080p)_high_quality"
},
{
    img:"songimages/bedroomfloor",
    songname:"Bedroom floor",
    artist:"Liam Payne",
    class:"eight",
    song:"bedroom floor Liam_Payne_-_Bedroom_Floor_(Official_Lyrics_and_Audio)"
},
{
    img:"songimages/beforejpg",
    songname:"Before",
    artist:"Zayn Malik",
    class:"nine",
    song:"before Zayn_Malik_-_Befour_(djlist.net)"
},
{
    img:"songimages/betterdays",
    songname:"Better days",
    artist:"Arman Cekin",
    class:"ten",
    song:"betterdays Arman_Cekin_&_Faydee_-_Better_Days_(Lyrics)_ft._Karra(1080p)_high_quality"
},
{
    img:"songimages/children",
    songname:"Children",
    artist:"Justin Bieber",
    class:"eleven",
    song:"children Justin_Bieber_-_Children_(Audio_Only)(360p)_high_quality"
},
{
    img:"songimages/entertainer",
    songname:"Entertainer",
    artist:"zayn Malik",
    class:"twelve",
    song:"entertainer Zayn__Entertainer_(downloadnaija.com)"
},
{
    img:"songimages/faralone",
    songname:"Far Alone",
    artist:"G Eazy",
    class:"thirteen",
    song:"far alone G eazy Far alone"
},
{
    img:"songimages/foxjpg",
    songname:"Fox",
    artist:"Ylvis",
    class:"forteen",
    song:"fox ylvis_the_fox_(what_does_the_fox_say)_14356"
},
{
    img:"songimages/frequency",
    songname:"Frequency",
    artist:"DJ Snake",
    class:"fifteen",
    song:"freqency DJ_Snake_-_Frequency_75"
},
{
    img:"songimages/ghost town",
    songname:"Ghost Town",
    artist:"Adam Lambert",
    class:"sixteen",
    song:"Ghost_Town___Adam_Lambert"
},
{
    img:"songimages/got themejpg",
    songname:"GOT Theme",
    artist:"Ramjin Dwajin",
    class:"seventeen",
    song:"GOT-Season-8-Ringtone-1805-dmr"
},
{
    img:"songimages/here we gojpg",
    songname:"Here we go",
    artist:"Chris Classic",
    class:"eighteen",
    song:"here we go Chris_Classic_-_Here_We_Go_(Lyrics)_--_Godzilla_vs._King_Kong___Music_Traile"
},
{
    img:"songimages/in the end",
    songname:"In the end",
    artist:"Linkin Park",
    class:"nineteen",
    song:"In_The_End_(Official_Video)_-_Linkin_Park"
},
{
    img:"songimages/in your eyes",
    songname:"In your Eyes",
    artist:"The Weeknd",
    class:"twenty",
    song:"In_Your_Eyes"
},
{
    img:"songimages/like i would",
    songname:"Like i would",
    artist:"Zayn Malik",
    class:"tweone",
    song:"like i wouldZAYN_-_LIKE_I_WOULD"
},
{
    img:"songimages/lost in japan",
    songname:"Lost in Japan",
    artist:"Shawn Mendez",
    class:"twetwo",
    song:"Lost_In_Japan"
},
{
    img:"songimages/pillow talkjpg",
    songname:"Pillow talk",
    artist:"Zayn Malik",
    class:"twethree",
    song:"pillow talkZayn_Malik_-_Pillow_Talk_Olagist.com_"
},
{
    img:"songimages/pray for me",
    songname:"Pray for me",
    artist:"The Weeknd",
    class:"twefour",
    song:"pray for me The_Weeknd,_Kendrick_Lamar_-_Pray_For_Me_(Official_Lyric_Video)(128k)"
},
{
    img:"songimages/sickboy",
    songname:"Sick boy",
    artist:"The Chainsmokers",
    class:"twefive",
    song:"Sick_Boy"
},
{
    img:"songimages/stitches",
    songname:"Stitches",
    artist:"Shawn Mendez",
    class:"twesix",
    song:"Stitches_-_Shawn_Mendes"
},
{
    img:"songimages/Tablefor2",
    songname:"Table for 2",
    artist:"Alok",
    class:"tweseven",
    song:"Table_For_2"
},
{
    img:"songimages/thunderclouds",
    songname:"Thunderclouds",
    artist:"LSD",
    class:"tweeight",
    song:"thinderclouds LSD_ThunderClouds"
},
{
    img:"songimages/tongue tiedjpg",
    songname:"Tongue tied",
    artist:"Marshmello",
    class:"twenine",
    song:"Tongue_Tied"
},
{
    img:"songimages/try mrjpg",
    songname:"Try me",
    artist:"DJ Snake",
    class:"thirty",
    song:"try me PLASTIC_TOY___u0026_DJ_SNAKE_-_TRY_ME_[OFFICIAL_MUSIC_VIDEO](128k)"
},
{
    img:"songimages/unstoppaple",
    songname:"Unstoppable",
    artist:"The Score",
    class:"thione",
    song:"unstoppable The_Score_-_Unstoppable_(Lyric_Video)(1080p)_high_quality"
},
{
    img:"songimages/wait",
    songname:"Wait",
    artist:"Marron 5",
    class:"thitwo",
    song:"wait English_pop_songs_with_Maroon_5,_wait_with"
},
{
    img:"songimages/wake up",
    songname:"Wake up",
    artist:"The Vamps",
    class:"thithree",
    song:"wake up The_Vamps_-_Wake_Up"
},
{
    img:"songimages/watermelonjpg",
    songname:"Watermelon",
    artist:"Harry Styles",
    class:"thifour",
    song:"watermelon Harry_Styles;_Watermelon_Sugar"
},
{
    img:"songimages/wholeheart",
    songname:"Whole heart",
    artist:"Gryffin",
    class:"thifive",
    song:"whole heart Gryffin - Whole Heart (feat. Bipolar Sunshine)"
},
{
    img:"songimages/wildflower",
    songname:"Wild flower",
    artist:"5SOS",
    class:"thisix",
    song:"Wildflower"
},

]


//loop throgh above songdetails(generating html elements)
let html="";
container.forEach((songdetails)=>{
    html=html+` 
            <div class="song_container">
                <img src="${songdetails.img}.jpg" style="height:150px;">
                <div>${songdetails.songname}</div>
                <div>${songdetails.artist}</div>
                <button onclick="
                    let audio=document.querySelector('.${songdetails.class}');
                    let seekbar=document.querySelector('.progress');
                    if(audio.paused){
                        audio.play();
                    }else{
                        audio.pause();
                    }
                       

                    
                " class="play-container"><svg xmlns="http://www.w3.org/2000/svg" height="20"  viewBox="0 0 384 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="#000000" d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg></button>
                <button class="fav"><img src="fav.png" class="favfav"></button></button>
            </div>

            </div>

                <audio  class="${songdetails.class}">
                 <source src="/songs/${songdetails.song}.mp3" type="audio/mpeg">
                </audio>
            `
})


//applying details to html element(combining html elements)
document.querySelector('.main').innerHTML=html;

