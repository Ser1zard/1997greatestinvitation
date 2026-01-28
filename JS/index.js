const explosionSound = new Audio("AUDIO/explosion.mp3");
explosionSound.volume = 0.3;

document.getElementById('email_button_btn').addEventListener('click', function() {
    document.getElementById('email_notification').style.display = 'none';
    document.getElementById('email_button').style.display = 'none';

    document.getElementById('explosion').style.display = 'block';
    document.getElementById('invitation').style.display = 'block';

    explosionSound.currentTime = 0;
    explosionSound.play().then(r => 0);

    setTimeout(function() {
        document.getElementById('invitation').style.opacity = '1';
    }, 10);

    setTimeout(function() {
        document.getElementById('explosion').style.display = 'none';
    }, 750);
});