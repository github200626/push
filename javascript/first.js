//Get video element

const video = document.getElementById('hover-video');
const videosource = video.src;
const videoname = videosource.substring(videosource.lastIndexOf('/') + 1 );
const wordtoremove = '.mp4';
const newvideoname = videoname.replace(new RegExp('\\b' + wordtoremove + '\\b', ''), '');
document.getElementById('display-video-name').innerHTML = newvideoname;

const video2 = document.getElementById('hover-video2');
const videosource2 = video2.src;
const videoname2 = videosource2.substring(videosource2.lastIndexOf('/') + 1 );
const wordtoremove2 = '.mkv';
const newvideoname2 = videoname2.replace(new RegExp('\\b' + wordtoremove2 + '\\b', 'g'), '');
document.getElementById('display-video-name2').innerHTML = newvideoname2;

const video3 = document.getElementById('hover-video3');
const videosource3 = video3.src;
const videoname3 = videosource3.substring(videosource3.lastIndexOf('/') + 1 );
const wordtoremove3 = '.mp4';
const newvideoname3 = videoname3.replace(new RegExp('\\b' + wordtoremove3 + '\\b', 'g'), '');
document.getElementById('display-video-name3').innerHTML = newvideoname3;

const video4 = document.getElementById('hover-video4');
const videosource4 = video4.src;
const videoname4 = videosource4.substring(videosource4.lastIndexOf('/') + 1 );
const wordtoremove4 = '.mp4';
const newvideoname4 = videoname4.replace(new RegExp('\\b' + wordtoremove4 + '\\b', 'g'), '');
document.getElementById('display-video-name4').innerHTML = newvideoname4;

const video5 = document.getElementById('hover-video5');
const videosource5 = video3.src;
const videoname5 = videosource5.substring(videosource5.lastIndexOf('/') + 1 );
const wordtoremove5 = '.mp4';
const newvideoname5 = videoname5.replace(new RegExp('\\b' + wordtoremove5 + '\\b', 'g'), '');
document.getElementById('display-video-name5').innerHTML = newvideoname5;

const video6 = document.getElementById('hover-video6');
const videosource6 = video6.src;
const videoname6 = videosource6.substring(videosource6.lastIndexOf('/') + 1 );
const wordtoremove6 = '.mp4';
const newvideoname6 = videoname6.replace(new RegExp('\\b' + wordtoremove6 + '\\b', 'g'), '');
document.getElementById('display-video-name6').innerHTML = newvideoname6;

const video7 = document.getElementById('hover-video7');
const videosource7 = video7.src;
const videoname7 = videosource7.substring(videosource7.lastIndexOf('/') + 1 );
const wordtoremove7 = '.mp4';
const newvideoname7 = videoname7.replace(new RegExp('\\b' + wordtoremove7 + '\\b', 'g'), '');
document.getElementById('display-video-name7').innerHTML = newvideoname7;

const video8 = document.getElementById('hover-video8');
const videosource8 = video8.src;
const videoname8 = videosource8.substring(videosource8.lastIndexOf('/') + 1 );
const wordtoremove8 = '.mp4';
const newvideoname8 = videoname8.replace(new RegExp('\\b' + wordtoremove8 + '\\b', 'g'), '');
document.getElementById('display-video-name8').innerHTML = newvideoname8;

const video9 = document.getElementById('hover-video9');
const videosource9 = video9.src;
const videoname9 = videosource9.substring(videosource9.lastIndexOf('/') + 1 );
const wordtoremove9 = '.mp4';
const newvideoname9 = videoname9.replace(new RegExp('\\b' + wordtoremove9 + '\\b', 'g'), '');
document.getElementById('display-video-name9').innerHTML = newvideoname9;

const video10 = document.getElementById('hover-video10');
const videosource10 = video10.src;
const videoname10 = videosource10.substring(videosource10.lastIndexOf('/') + 1 );
const wordtoremove10 = '.mp4';
const newvideoname10 = videoname10.replace(new RegExp('\\b' + wordtoremove10 + '\\b', 'g'), '');
document.getElementById('display-video-name10').innerHTML = newvideoname10;

document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('hover-video');
    const durationDisplay = document.getElementById('duration');

    video.addEventListener('loadedmetadata', function() {
        durationDisplay.textContent = formatTime(video.duration);
    });

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('hover-video2');
    const durationDisplay = document.getElementById('duration2');

    video.addEventListener('loadedmetadata', function() {
        durationDisplay.textContent = formatTime(video.duration);
    });

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('hover-video3');
    const durationDisplay = document.getElementById('duration3');

    video.addEventListener('loadedmetadata', function() {
        durationDisplay.textContent = formatTime(video.duration);
    });

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('hover-video4');
    const durationDisplay = document.getElementById('duration4');

    video.addEventListener('loadedmetadata', function() {
        durationDisplay.textContent = formatTime(video.duration);
    });

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('hover-video5');
    const durationDisplay = document.getElementById('duration5');

    video.addEventListener('loadedmetadata', function() {
        durationDisplay.textContent = formatTime(video.duration);
    });

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('hover-video6');
    const durationDisplay = document.getElementById('duration6');

    video.addEventListener('loadedmetadata', function() {
        durationDisplay.textContent = formatTime(video.duration);
    });

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('hover-video7');
    const durationDisplay = document.getElementById('duration7');

    video.addEventListener('loadedmetadata', function() {
        durationDisplay.textContent = formatTime(video.duration);
    });

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('hover-video8');
    const durationDisplay = document.getElementById('duration8');

    video.addEventListener('loadedmetadata', function() {
        durationDisplay.textContent = formatTime(video.duration);
    });

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('hover-video9');
    const durationDisplay = document.getElementById('duration9');

    video.addEventListener('loadedmetadata', function() {
        durationDisplay.textContent = formatTime(video.duration);
    });

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('hover-video10');
    const durationDisplay = document.getElementById('duration10');

    video.addEventListener('loadedmetadata', function() {
        durationDisplay.textContent = formatTime(video.duration);
    });

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


// Get the button
let mybutton = document.getElementById("scrollToTopBtn");

// When the user scrolls down 200px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function followMe() {

    if ( document.getElementById('change-text').innerHTML === "Follow" ) {
        document.getElementById('change-text').innerHTML = "Following";
    } else {
        document.getElementById('change-text').innerHTML = "Follow";
    }
}

function addPost() {
    let display_post = document.getElementById('post');
    let display_stream = document.getElementById('stream');
    let design = document.getElementById('post-border');
    let no_design = document.getElementById('stream-border');
    display_post.style.display = "block";
    display_stream.style.display = "none";
    design.style.color = "black";
    design.style.borderBottom = "2px solid black";
    no_design.style.color = "grey";
    no_design.style.borderBottom = "0px solid grey"
}

function addStream() {
    let display_post = document.getElementById('post');
    let display_stream = document.getElementById('stream');
    let design = document.getElementById('stream-border');
    let no_design = document.getElementById('post-border');
    display_post.style.display = "none";
    display_stream.style.display = "block";
    design.style.color = "black";
    design.style.borderBottom = "2px solid black";
    no_design.style.color = "grey";
    no_design.style.borderBottom = "0px solid grey"
}

function defaul() {
    let heart = document.getElementById('default');
    let red_heart = document.getElementById('active');
    heart.style.display = "none";
    red_heart.style.display = "inline";
}

function active() {
    let heart = document.getElementById('default');
    let red_heart = document.getElementById('active');
    heart.style.display = "inline";
    red_heart.style.display = "none";
}