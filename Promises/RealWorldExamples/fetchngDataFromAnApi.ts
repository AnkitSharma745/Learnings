const fetchUserProfile = (userId: number): Promise<any> => {
  return new Promise((resolve, reject) => {
    // Simulate an API call
    setTimeout(() => {
      const success = Math.random() > 0.1; // Simulate a 10% chance of failure
      if (success) {
        resolve({ id: userId, name: "Alice", age: 30 });
      } else {
        reject("Failed to fetch user profile");
      }
    }, 1500); // 1.5-second delay
  });
};

// Usage
fetchUserProfile(1)
  .then((profile) => {
    console.log(`User Profile:`, profile);
    // Perform another async operation, e.g., fetching user posts
    return fetchUserPosts(profile.id);
  })
  .then((posts) => {
    console.log(`User Posts:`, posts);
  })
  .catch((error) => {
    console.error(`Error: ${error}`);
  });

const fetchUserPosts = (userId: number): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    // Simulate fetching posts
    setTimeout(() => {
      const success = Math.random() > 0.2; // Simulate an 80% chance of success
      if (success) {
        resolve([
          { postId: 1, content: "Hello World!" },
          { postId: 2, content: "Another Post" },
        ]);
      } else {
        reject("Failed to fetch user posts");
      }
    }, 2000); // 2-second delay
  });
};
