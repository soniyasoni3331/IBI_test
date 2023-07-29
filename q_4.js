function getUserData() {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous API call
      setTimeout(() => {
        const user = { id: 1, name: "John Doe", email: "john@example.com" };
        resolve(user);
      }, 1000);
    });
  }
  
  function getAdditionalData(userId) {
    return new Promise((resolve, reject) => {
      // Simulating another asynchronous API call
      setTimeout(() => {
        const additionalData = { userId, info: "Additional data for user" };
        resolve(additionalData);
      }, 1500);
    });
  }
  