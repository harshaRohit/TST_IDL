
function delayedLog(message, delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(message);
        resolve();
      }, delay);
    });
  }
  
  delayedLog('First log', 1000)
    .then(() => delayedLog('Second log', 500))
    .then(() => delayedLog('Third log', 200))
    .then(() => delayedLog('Last log', 300));
  
  console.log('Immediate log');
  