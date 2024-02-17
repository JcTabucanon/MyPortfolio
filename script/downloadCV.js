function downloadCV() {
   var fileID = '18u75arR5F8aILK9iN5cepNR61E1RmSsi';
   var downloadLink = 'https://drive.google.com/uc?export=download&id=' + fileID;

   var link = document.createElement('a');
      link.href = downloadLink;
      link.download = 'Your_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
   }