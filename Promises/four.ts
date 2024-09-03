// Step 1: Create a promise that simulates fetching a user ID
const fetchUserId = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = Math.random() > 0.2; // Simulate a 20% chance of failure
    if (success) {
      resolve(123); // Simulate fetching a user ID
    } else {
      reject("Failed to fetch user ID");
    }
  }, 1000); // 1-second delay
});

// Step 2: Chain .then() methods to handle the ID and fetch details
fetchUserId
  .then((userId) => {
    console.log(`User ID fetched: ${userId}`);
    // Simulate fetching user details with a delay
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() > 0.2; // Simulate a 20% chance of failure
        if (success) {
          resolve({ id: userId, name: "John Doe" }); // Simulate user details
        } else {
          reject("Failed to fetch user details");
        }
      }, 1000); // 1-second delay
    });
  })
  .then((userDetails) => {
    console.log(`User details fetched:`, userDetails);
    // Add an additional property to user details
    userDetails.email = "john.doe@example.com";
    return userDetails;
  })
  .then((finalUserDetails) => {
    console.log(`Final user details:`, finalUserDetails);
  })
  .catch((error) => {
    console.log(`Error encountered: ${error}`);
  });
