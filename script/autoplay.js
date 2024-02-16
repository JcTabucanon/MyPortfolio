   const video = document.getElementById('projectVideo');
      let hasPlayed = false;

      function playVideo() {
         if (!hasPlayed) {
               video.play();
               hasPlayed = true;
         }
      }

      function checkVideoScroll() {
         const projectSection = document.getElementById('project-img');
         const rect = projectSection.getBoundingClientRect();

         // Check if the project section is in the viewport
         if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
               playVideo();
         } else {
               // Pause the video when not in the viewport
               video.pause();
               video.currentTime = 0; // Reset video to the beginning
               hasPlayed = false; // Allow the video to play again when re-entering the section
         }
      }

      window.addEventListener('scroll', checkVideoScroll);
      window.addEventListener('resize', checkVideoScroll);
      checkVideoScroll(); // Check on page load