// Exercise:
// Create a promise that simulates a simple asynchronous operation, such as fetching data from a server. This operation should take 2 seconds to complete.
// If the operation is successful (you can simulate this with a 50% chance), resolve the promise with a success message.
// If the operation fails, reject the promise with an error message.

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let success = Math.random() > 0.5;
    if (success) {
      resolve("Operation successfully done ");
    } else {
      reject("Sorry operation failed ");
    }
  }, 2000);
});
promise
  .then((message) => {
    console.log(`${message} Yeah done for now `);
  })
  .catch((error) => {
    console.log(`${error}shit this error ocurred`);
  });
