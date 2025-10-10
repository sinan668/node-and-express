const fs = require('fs');



const newData = "This is new content added to the file.\n";


fs.appendFile('example.txt', newData, (err) => {
  if (err) {
    console.error("Error appending file:", err);
  } else {
    console.log("Data added successfully!");
  }
});
