document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('flip-button').addEventListener('click', function() {
        document.querySelector('.flip-container').classList.toggle('flipped');
    });
});
