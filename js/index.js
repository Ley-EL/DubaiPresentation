let slideIndex = 1;

ShowSlides(slideIndex)

function ChangeSlides(n) {
    ShowSlides(slideIndex += n);
}

function ShowSlides(n) {
    let slides = document.getElementsByClassName("slide");

    if (n < 1) {
        slideIndex = slides.length;
    }

    if (n > slides.length) {
        slideIndex = 1;
    }

    Array.from(slides).forEach(item => {
        item.style.display = "none";
    });

    slides[slideIndex - 1].style.display = "block";
}


setInterval(() => {
    ChangeSlides(1);
}, 3000);


let VideoIndex = 1;

ShowVideos(VideoIndex);

function ChangeVideos(n) {
    ShowVideos(VideoIndex += n);
}

function ShowVideos(n) {

    let video = document.querySelector('video');
    let videosSourceName = ["videos/dubai.mp4"];

    if(n < 1) {
        VideoIndex = videosSourceName.length;
    }

    if(n > videosSourceName.length) {
        VideoIndex = 1;
    }

    video.setAttribute("src", videosSourceName[VideoIndex - 1])
}