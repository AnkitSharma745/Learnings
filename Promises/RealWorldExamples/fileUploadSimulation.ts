const uploadFile = (fileName: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    // Simulate file upload
    setTimeout(() => {
      const success = Math.random() > 0.3; // Simulate a 70% chance of success
      if (success) {
        resolve(`File ${fileName} uploaded successfully`);
      } else {
        reject("File upload failed");
      }
    }, 2000); // 2-second delay
  });
};

// Usage
uploadFile("document.txt")
  .then((message) => {
    console.log(message);
    // Simulate processing the uploaded file
    return processUploadedFile("document.txt");
  })
  .then((result) => {
    console.log(`Processing result: ${result}`);
  })
  .catch((error) => {
    console.error(`Error: ${error}`);
  });

const processUploadedFile = (fileName: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    // Simulate file processing
    setTimeout(() => {
      const success = Math.random() > 0.2; // Simulate an 80% chance of success
      if (success) {
        resolve(`File ${fileName} processed successfully`);
      } else {
        reject("File processing failed");
      }
    }, 3000); // 3-second delay
  });
};
