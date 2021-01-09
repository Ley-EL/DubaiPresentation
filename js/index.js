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
    console.log("Before changevideo " + VideoIndex);
    ShowVideos(VideoIndex += n);
    console.log("After changevideo " + VideoIndex);
}

function ShowVideos(n) {

    let video = document.querySelector('video');
    let videosSourceName = ["videos/155.mp4", "videos/164.mp4", "videos/165.mp4"];

    if(n < 1) {
        VideoIndex = videosSourceName.length;
    }

    if(n > videosSourceName.length) {
        VideoIndex = 1;
    }

    console.log("Before showvideo " + VideoIndex);
    video.setAttribute("src", videosSourceName[VideoIndex - 1])
    
    console.log("After showvideo " + VideoIndex);
}