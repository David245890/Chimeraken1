document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('myAudio');
    var playButton = document.getElementById('playButton');
    var stopButton = document.getElementById('stopButton');
    var textOverlay = document.getElementById('textOverlay');

    var text = "See Everything, Say Nothing.";
    var index = 0;
    var typingSpeed = 100;

    function typeText() {
        if (index < text.length) {
            textOverlay.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, typingSpeed);
        }
    }

    playButton.addEventListener('click', function() {
        audio.play().catch(function(error) {
            console.log('Playback failed: ' + error);
        });
        textOverlay.style.display = 'block';
        if (textOverlay.textContent === '') {
            typeText();
        }
    });

    stopButton.addEventListener('click', function() {
        audio.pause();
        audio.currentTime = 0;
        textOverlay.style.display = 'none';
        textOverlay.textContent = '';
        index = 0;
    });
});
