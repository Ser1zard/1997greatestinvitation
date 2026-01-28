const explosionSound = new Audio("AUDIO/xpl.mp3");

explosionSound.volume = 0.1;

document.getElementById('btn-button').addEventListener('click', function() {
    document.getElementById('email-img').style.display = 'none';
    document.getElementById('btn-img').style.display = 'none';

    document.getElementById('xpl-img').style.display = 'block';
    document.getElementById('ltr-img').style.display = 'block';

    explosionSound.currentTime = 0;
    explosionSound.play().then(r => 0);

    setTimeout(function() {
        document.getElementById('ltr-img').style.opacity = '1';
    }, 10);

    setTimeout(function() {
        document.getElementById('xpl-img').style.display = 'none';
    }, 750);
});