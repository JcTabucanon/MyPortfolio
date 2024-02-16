function downloadCV() {
   var fileID = '1Z1hCGYcyghiVkPAAzLOfhGUgQZFQhh1V';
   var downloadLink = 'https://drive.google.com/uc?export=download&id=' + fileID;

   var link = document.createElement('a');
      link.href = downloadLink;
      link.download = 'Your_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
   }