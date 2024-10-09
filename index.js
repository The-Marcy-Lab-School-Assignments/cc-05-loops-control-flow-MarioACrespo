//

const multiplesOfSixAndNine = () => {
  let i = 0;
  for (let i = 0; i <= 100; i++) {
    if (i % 6 === 0 && i % 9 === 0) {
      console.log(i);
    }
  }
};

//multiplesOfSixAndNine();

const greaterNum = (num1, num2) => {
  if (num1.isInteger === num1 && num2.isInteger === num2) {
    return "null";
  } else if (num1 === num2) {
    return "both  intigers  are equal";
  } else if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  } else {
    return "null";
  }
};

// console.log(greaterNum(10, 7)); //returns 10
// console.log(greaterNum(1.14, 1.14)); //returns "both integers are equal"
// console.log(greaterNum("21", 21)); //returns null
// console.log(greaterNum("21", "21")); //returns null

const sumOfFourAndSix = () => {
  let sum = 0;
  let i = 0;
  while (i != 999) {
    i++;
    if (i % 4 === 0 && i % 6 === 0) {
      sum += i;
    }
  }
  return sum;
};

//console.log(sumOfFourAndSix());

const oddAndEvenToN = (num) => {
  let i = 0;
  while (i <= num) {
    if (i % 2 === 0) {
      console.log(`${i} is even`);
    } else {
      console.log(`${i} is odd`);
    }
    i++;
  }
};

//oddAndEvenToN(5);

const sumOfNotDivisbleByTen = () => {
  let sum = 0;
  let i = 0;
  while (i != 1000) {
    i++;
    if (i % 10 !== 0) {
      sum += i;
    }
  }

  return sum;
};

console.log(sumOfNotDivisbleByTen());

const gNum = (num1, num2, num3, num4) => {
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    typeof num3 !== "number" ||
    typeof num4 !== "number"
  ) {
    return null;
  } else if (num1 === num2 && num2 === num3 && num3 === num4) {
    return "all integers are equal";
  } else if (
    (num1 === num2 && num2 === num3) ||
    (num1 === num2 && num2 === num4) ||
    (num1 === num3 && num3 === num4) ||
    (num2 === num3 && num3 === num4)
  ) {
    return "three integers are equal";
  } else if (
    num1 === num2 ||
    num1 === num3 ||
    num1 === num4 ||
    num2 === num3 ||
    num2 === num4 ||
    num3 === num4
  ) {
    return "two integers are equal";
  } else {
    return Math.max(num1, num2, num3, num4);
  }
};

// Example usage:
console.log(gNum(5, 7, 3, 7)); // Output: "two integers are equal"
console.log(gNum(5, 5, 5, 5)); // Output: "all integers are equal"
console.log(gNum(10, 3, 10, 10)); // Output: "three integers are equal"
console.log(gNum(8, 4, 9, 3)); // Output: 9
console.log(gNum(2, 3, 4, "5")); // Output: null (non-integer argument)
