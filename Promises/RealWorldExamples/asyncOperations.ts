const fetchData = (url: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.1; // Simulate a 10% chance of failure
      if (success) {
        resolve(`Data from ${url}`);
      } else {
        reject("Failed to fetch data");
      }
    }, 1000); // 1-second delay
  });
};

// Usage
fetchData("https://api.example.com/data1")
  .then((data1) => {
    console.log(data1);
    return fetchData("https://api.example.com/data2");
  })
  .then((data2) => {
    console.log(data2);
    return fetchData("https://api.example.com/data3");
  })
  .then((data3) => {
    console.log(data3);
  })
  .catch((error) => {
    console.error(`Error: ${error}`);
  });
