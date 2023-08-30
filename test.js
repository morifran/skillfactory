function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const randomArray = [];
  
  for (let i = 0; i < 10; i++) {
    randomArray.push(generateRandomNumber(1, 100));
  }
  
  console.log("Случайный массив чисел:", randomArray);
  
  const randomString = Math.random().toString(36).substring(7);
  console.log("Случайная строка:", randomString);