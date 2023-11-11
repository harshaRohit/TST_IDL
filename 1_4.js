const originalObject = {
    someKey: 'someValue',
    anotherKey: 'anotherValue'
  };
  
  const proxyObject = new Proxy(originalObject, {
    get: function (target, prop) {
      return "404";
    },
  });
  
  console.log(proxyObject.someKey); 
  console.log(proxyObject.anotherKey); 
  console.log(proxyObject.nonExistentKey); 
  