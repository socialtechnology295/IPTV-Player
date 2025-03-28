// script.js
function playVideo() {
    const url = document.getElementById('iptv-url').value;
    const videoElement = document.getElementById('video-player');

    try {
        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(url);
            hls.attachMedia(videoElement);
        } else if (videoElement.canPlayType('application/vnd.apple.mpegurl')) {
            videoElement.src = url;
        } else {
            videoElement.src = url; // يدعم الصيغ الأخرى مثل MP4 و TS
        }

        videoElement.play();
    } catch (error) {
        console.error("Error playing video:", error);
        alert("Failed to load video. Please check the URL or file format.");
    }
}
