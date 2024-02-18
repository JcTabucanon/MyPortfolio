const videos = document.querySelectorAll('.projectVideo');
let hasPlayed = [];

function playVideo(video) {
   if (!hasPlayed[video.dataset.index]) {
      video.play();
      hasPlayed[video.dataset.index] = true;
   }
}

function checkVideoScroll() {
   videos.forEach((video) => {
      const rect = video.getBoundingClientRect();

      // Check if the video is in the viewport
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
         playVideo(video);
      } else {
         // Pause the video when not in the viewport
         video.pause();
         video.currentTime = 0; // Reset video to the beginning
         hasPlayed[video.dataset.index] = false; // Allow the video to play again when re-entering the section
      }
   });
}

// Assign dataset.index to each video for tracking purposes
videos.forEach((video, index) => {
   video.dataset.index = index;
});

window.addEventListener('scroll', checkVideoScroll);
window.addEventListener('resize', checkVideoScroll);
checkVideoScroll(); // Check on page load



document.addEventListener("DOMContentLoaded", function () {
   const sections = document.querySelectorAll('section');
   const navLinks = document.querySelectorAll('nav .navBtn a');

   window.addEventListener('scroll', () => {
       let current = '';

       sections.forEach(section => {
           const sectionTop = section.offsetTop;
           const sectionHeight = section.clientHeight;

           if (pageYOffset >= sectionTop - sectionHeight / 3) {
               current = section.getAttribute('id');
           }
       });

       navLinks.forEach(link => {
           link.classList.remove('active');
           if (link.getAttribute('href').slice(1) === current) {
               link.classList.add('active');
           }
       });
   });
});

    
    