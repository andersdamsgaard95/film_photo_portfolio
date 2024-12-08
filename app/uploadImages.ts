const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name: 'dtcdadasc', 
    api_key: '474177536948712', 
    api_secret: 'qHyZiPWWUfgAl7jJZtOSSFjNNeE'
  });

  cloudinary.uploader.upload(
    "/Users/admin/Desktop/FilmPhotos/SortHvid/img0006.jpg",
    {
      tags: "portrait, nature, back/white",
      context: "description=Freja on Skarø|country=Denmark",
    },
    function (error, result) {
        if (error) {
            console.error("Upload failed:", error);
          } else {
            console.log("Upload succeeded:", result);
          }
    }
  );