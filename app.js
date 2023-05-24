const mediaContainer = document.getElementById('media-container');

const mediaList = [
    { type: 'image', path: '/assets/Sample-jpg-image-50kb.jpg' },
    { type: 'video', path: '/assets/big_buck_bunny_720p_20mb.mp4' }
];


let currentIndex = 0;

function playMedia() {
    const media = mediaList[currentIndex];

    if (media.type === 'image') {
        const imageElement = document.createElement('img');
        imageElement.src = media.path;
        mediaContainer.innerHTML = '';
        mediaContainer.appendChild(imageElement);
        setTimeout(nextMedia, 10000); // 10 saniye bekleyin ve bir sonraki medyayı oynatın
    } else if (media.type === 'video') {
        const videoElement = document.createElement('video');
        videoElement.src = media.path;
        videoElement.autoplay = true;
        videoElement.controls = true;
        videoElement.style.width = '100%'; 
        mediaContainer.innerHTML = '';
     
        mediaContainer.appendChild(videoElement);

        videoElement.addEventListener('ended', nextMedia);
    }
}

function nextMedia() {
    currentIndex = (currentIndex + 1) % mediaList.length;
    playMedia();
}

playMedia();
