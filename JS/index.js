document.getElementById('email_button_btn').addEventListener('click', function() {
    // Hide the email notification and button
    document.getElementById('email_notification').style.display = 'none';
    document.getElementById('email_button').style.display = 'none';

    // Show the opened email image
    document.getElementById('explosion').style.display = 'block';

    setTimeout(function() {
        document.getElementById('explosion').style.display = 'none';
        document.getElementById('invitation').style.display = 'block';

        setTimeout(function() {
            document.getElementById('invitation').style.opacity = '1';
        }, 10);
    }, 750);
});