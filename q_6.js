//Using named function

function handleResult1(funResult1) {

    // Do something with funResult1
    asyncFunction2(handleResult2);
  }
  
  function handleResult2(funResult2) {
    // Do something with result2
    asyncFunction3(handleResult3);
  }
  
  function handleResult3(funresult3) {
    // Do something with result3
    // ...
  }
  
  asyncFunction1(handleResult1);


//   Using Promises

asyncFunction1()
  .then((proresult1) => {
    // Do something with result1
    return asyncFunction2();
  })
  .then((proresult2) => {
    // Do something with result2
    return asyncFunction3();
  })
  .then((proresult3) => {
    // Do something with result3
    // ...
  })
  .catch((proerror) => {
    // Handle errors
  });


//   using Async/await=>

async function fetchData() {
    try {
      const result1 = await asyncFunction1();
      // Do something with result1
  
      const result2 = await asyncFunction2();
      // Do something with result2
  
      const result3 = await asyncFunction3();
      // Do something with result3
  
      // ...
    } catch (error) {
      // Handle errors
    }
  }
  
  fetchData();
  

  