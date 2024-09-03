const asyncOperation = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    const success = Math.random() > 0.5;

    if (success) {
      resolve(10); // Resolve with a number
    } else {
      reject("Initial operation failed"); // Reject with an error message
    }
  }, 1000);
});

// Chaining .then() methods
asyncOperation
  .then((result) => {
    console.log(`First result: ${result}`);
    return result * 2; // Returning a new value to the next .then()
  })
  .then((doubledResult) => {
    console.log(`Doubled result: ${doubledResult}`);
    return doubledResult + 5; // Returning another value
  })
  .then((finalResult) => {
    console.log(`Final result after addition: ${finalResult}`);
  })
  .catch((error) => {
    console.log(`Error encountered: ${error}`);
  });
