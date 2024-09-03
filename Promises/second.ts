// Exercise:
// Create a promise that starts in the pending state.
// Simulate both a successful and a failed operation using two different conditions (like checking a random number).
// Log the promise’s state before and after the asynchronous operation.
// Ensure that you handle both fulfilled and rejected states by using .then() and .catch().
// Modify the above code to log a message when the promise is still in the pending state, right before the setTimeout function executes.
// After the setTimeout, log a different message depending on whether the promise was fulfilled or rejected.

const promise2 = new Promise((resolve, reject) => {
  console.log("Promise is pending till now ");
  setTimeout(() => {
    let success = Math.random() > 0.5;
    if (success) {
      resolve("Promise resolved ");
    } else {
      reject("Promise has been rejected ");
    }
  }, 2000);
});

promise2
  .then((message) => {
    console.log(`Promise is fulfilled ${message}`);
  })
  .catch((error) => {
    console.log(`Promise has been rejected due to some error  ${error}`);
  });
