const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt the user to select the media stram, pass the video elelemnt and play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // Catch errors
        console.log('ERROR: Whooops, error here: ', error);
    }
}

button.addEventListener('click', async () => {
    // Disable the button
    button.disabled = true;
    // Start picture in picture
    await videoElement.requestPictureInPicture();
    // Reset the button
    button.disabled = false;
});

// On load
selectMediaStream();