// var tag = document.createElement('script');
// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// var player;

// function onYouTubeIframeAPIReady() {
//   player = new YT.Player('youtube-video', {
//     events: {
//       'onReady': onPlayerReady,
//       'onStateChange': onPlayerStateChange
//     }
//   });
// }

// function onPlayerReady() {
//   console.log("video is ready");
// }

// function onPlayerStateChange() {
//   console.log("my state changed");
// }

// document.getElementById("mute").addEventListener('click', function(event) {
//   console.log(player);

//   if (player.isMuted()) {
//     player.unMute();
//   } else {
//     player.mute();
//   }
// });

// const mute2 = () => {
//   const video = document.getElementById('youtube-video');
//   video.muted = true;
// }

// document.getElementById("mute").addEventListener('click', mute2)

$('#audio-control').click(function(){
  if( $("#myVideo").prop('muted') ) {
        $("#myVideo").prop('muted', false);
        $(this).text('Mute');
    // or toggle class, style it with a volume icon sprite, change background-position
  } else {
    $("#myVideo").prop('muted', true);
    $(this).text('Unmute');
  }
});