// 3. Multi-Stage File Processing
// Scenario: You need to handle a multi-stage file processing workflow:

// Upload File
// Process File
// Store File Metadata
// Notify User
// Simulate uploading a file


const uploadFile = (file: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.1;
      success
        ? resolve(`File ${file} uploaded successfully`)
        : reject("File upload failed");
    }, 2000);
  });
};

// Simulate processing a file
const processFile = (file: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.2;
      success
        ? resolve(`File ${file} processed successfully`)
        : reject("File processing failed");
    }, 2500);
  });
};

// Simulate storing file metadata
const storeFileMetadata = (file: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.3;
      success
        ? resolve(`Metadata for ${file} stored successfully`)
        : reject("Failed to store file metadata");
    }, 1500);
  });
};

// Simulate notifying the user
const notifyUser = (user: string, file: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.1;
      success
        ? resolve(`User ${user} notified about ${file}`)
        : reject("Failed to notify user");
    }, 1000);
  });
};

// Usage
const file = "document.pdf";
const user = "user@example.com";

uploadFile(file)
  .then((uploadMessage) => {
    console.log(uploadMessage);
    return processFile(file);
  })
  .then((processMessage) => {
    console.log(processMessage);
    return storeFileMetadata(file);
  })
  .then((metadataMessage) => {
    console.log(metadataMessage);
    return notifyUser(user, file);
  })
  .then((notifyMessage) => {
    console.log(notifyMessage);
  })
  .catch((error) => {
    console.error(`Error during file processing: ${error}`);
  });

  export {}



//   Key Takeaways:
// Chaining Promises: Allows you to manage complex workflows where each step depends on the success of the previous one.
// Error Handling: Ensures that errors at any stage are caught and handled appropriately, preventing failures from going unnoticed.
// Scalability: Promises help in scaling operations by managing multiple asynchronous tasks and their dependencies.