
function transformArrayDeclarative(numbers, transformFunction) {
    return numbers.map(transformFunction);
  }
  function transformArrayImperative(numbers, transformFunction) {
    const transformedArray = [];
    for (let i = 0; i < numbers.length; i++) {
      transformedArray.push(transformFunction(numbers[i]));
    }
    return transformedArray;
  }

  const numbersArray = [1, 2, 3, 4, 5];
  const square = (num) => num * num;
  
  const transformedArrayDec = transformArrayDeclarative(numbersArray, square);
  console.log(transformedArrayDec);

  const transformedArray = transformArrayImperative(numbersArray, square);
  console.log(transformedArray);
  