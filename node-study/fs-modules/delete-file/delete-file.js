const fs = require('fs');


fs.unlink('text.txt',(err) => {
  if (err) {
    console.error("Error deleting file:", err);
  } else {
    console.log("File deleted successfully!");
  }
});