// 2. Data Processing Pipeline
// Scenario: In a data processing application, you might need to:

// Fetch Raw Data
// Transform Data
// Store Data in Database
// Generate Reports

// Simulate fetching raw data
const fetchRawData = (): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.1;
      success
        ? resolve([
            { id: 1, value: 10 },
            { id: 2, value: 20 },
          ])
        : reject("Failed to fetch raw data");
    }, 1000);
  });
};

// Simulate transforming data
const transformData = (data: any[]): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.2;
      success
        ? resolve(
            data.map((item) => ({ ...item, transformedValue: item.value * 2 }))
          )
        : reject("Failed to transform data");
    }, 1500);
  });
};

// Simulate storing data in database
const storeDataInDatabase = (data: any[]): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.3;
      success
        ? resolve("Data stored in database")
        : reject("Failed to store data");
    }, 2000);
  });
};

// Simulate generating reports
const generateReports = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.1;
      success
        ? resolve("Reports generated")
        : reject("Failed to generate reports");
    }, 1500);
  });
};

// Usage
fetchRawData()
  .then((rawData) => {
    console.log("Raw data fetched:", rawData);
    return transformData(rawData);
  })
  .then((transformedData) => {
    console.log("Transformed data:", transformedData);
    return storeDataInDatabase(transformedData);
  })
  .then((storeMessage) => {
    console.log(storeMessage);
    return generateReports();
  })
  .then((reportMessage) => {
    console.log(reportMessage);
  })
  .catch((error) => {
    console.error(`Error in data processing pipeline: ${error}`);
  });
