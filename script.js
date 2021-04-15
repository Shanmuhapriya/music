window.onload=()=>{
    const song_img_el=document.getElementById('song-image');
    const song_title_el=document.getElementById('song-title');
    const song_artist_el=document.getElementById('song-artist');
    const song_next_up_el=document.getElementById('song-next-up');

    const play_btn=document.getElementById('play-btn');
    const play_btn_icon=document.getElementById('play-icon');
    const prev_btn=document.getElementById('prev-btn');
    const next_btn=document.getElementById('next-btn');

    const audio_player=document.getElementById('music-player');

    let current_song_index;
    let next_song_index;

    let songs=[
        {
            title:"Kadalale",
            artist:"Sid Sriram",
            song_path: "C:/Users/Shanmuhapriya/Desktop/Websites/music/Kadalalle.mp3",
            img_path: "C:/Users/Shanmuhapriya/Desktop/Websites/music/blue.jpg"
        },
        {
            title:"Gira Gira",
            artist:"Shreya",
            song_path: "C:/Users/Shanmuhapriya/Desktop/Websites/music/Gira Gira Gira.mp3",
            img_path: "C:/Users/Shanmuhapriya/Desktop/Websites/music/blue.jpg"
        },
        {
            title:"First Class",
            artist:"Arjit Singh",
            song_path: "C:/Users/Shanmuhapriya/Desktop/Websites/music/Kalank Title Song.mp3",
            img_path: "C:/Users/Shanmuhapriya/Desktop/Websites/music/blue.jpg"
        }
    ]

    play_btn.addEventListener('click',TogglePlaySong);

    InitPlayer();

    function InitPlayer(){
        current_song_index=0;
        next_song_index=current_song_index+1;
        UpdatePlayer();
    }

    function UpdatePlayer(){
        let song=songs[current_song_index];

        song_img_el.style="background-image:url('" + song.img_path + "');"
        song_title_el.innerText=song.title;
        song_artist_el.innerText=song.artist;

        song_next_up_el.innerText=songs[next_song_index].title+" by "+songs[next_song_index].artist;

        audio_player.src=song.song_path;
    }

    function TogglePlaySong(){
        if(audio_player.paused){
            audio_player.play();
            play_btn_icon.classList.remove('fa-play');
            play_btn_icon.classList.add('fa-pause');
        }
        else{
            audio_player.pause();
            play_btn_icon.classList.add('fa-play');
            play_btn_icon.classList.remove('fa-pause');
        }
    }
}