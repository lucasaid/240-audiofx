var TestAudio = new AudioFX("audio/recording.wav", function(){
    document.addEventListener('mousemove', function(e){
      var f = e.pageX / window.innerWidth;
      var q = e.pageY / window.innerHeight;
      TestAudio.changeFilter(f,q);
    });
}, {
  loop: true,
  volume: 0.85,
  autoplay: true
});
