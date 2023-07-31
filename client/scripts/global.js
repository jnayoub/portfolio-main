//Email Icon copy to clipboard
document.getElementById('copyEmailButton').addEventListener('click', function() {
    var email = 'your-email@example.com';
    var dummy = document.createElement('textarea');

    // to avoid breaking application in case of an error
    try {
        document.body.appendChild(dummy);
        dummy.value = email;
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);
        alert('Email copied to clipboard!');
    } catch (err) {
        alert('Oops, unable to copy');
        document.body.removeChild(dummy);
    }
});
