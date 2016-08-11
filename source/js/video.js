module.exports = function () {
    var video = document.getElementById('video');
    video.addEventListener('canplay', function(e) {
        this.volume = 0.4;
        this.currentTime = 10;
        this.play();
    }, false);
};

