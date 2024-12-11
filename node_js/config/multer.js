const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Ensure the upload folder exists
const uploadFolder = 'uploads/';
if (!fs.existsSync(uploadFolder)) {
  fs.mkdirSync(uploadFolder);
}

// Set up storage to customize the file name
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadFolder); // Directory for storing files
  },
  filename: function (req, file, cb) {
    // Use the original file name, or you can add a timestamp or unique identifier
    cb(null, Date.now() + path.extname(file.originalname)); // Avoid naming collisions
  }
});

// Initialize multer with the storage option
const upload = multer({ storage: storage });

module.exports = upload;
