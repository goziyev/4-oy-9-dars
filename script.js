const arr = [
  {
    name: "John",
    username: "john007",
    age: 30,
  },
  {
    name: "Adam",
    username: "blackStar",
    age: 20,
  },
  {
    name: "Doe",
    username: "vorzakon008",
    age: 40,
  },
  {
    name: "Alex",
    username: "alex01006",
    age: 50,
  },
];

// 1-masala
const firstMatter = function (arr) {
  let sum = 1;
  arr.forEach((element) => {
    sum *= element.age;
  });
  return sum;
};
// console.log(firstMatter(arr));

// 2-masala
const secondMatter = (arr) => {
  let res = arr.filter((value) => {
    return value.age > 25;
  });
  return res;
};
// console.log(secondMatter(arr));

// 3-masala
const threeMatter = function (arr) {
  let sum = 0;
  let count = 0;
  for (const item of arr) {
    count++;
    sum += item.age;
  }
  return Math.trunc(sum / count);
};

// console.log(threeMatter(arr));

// 4-masala
const fourMatter = (arr) => {
  let max = arr[0]["age"];
  arr.forEach((element) => {
    if (max < element.age) {
      max = element.age;
    }
  });
  return max;
};

// console.log(fourMatter(arr));

// 5-masala
function fiveMatter(arr) {
  let min = arr[0]["age"];
  let count = 0;
  arr.forEach((element) => {
    if (min > element.age) {
      min = element.age;
      count++;
    }
  });
  return arr[count];
}
// console.log(fiveMatter(arr));

// 6-masala
let array = [1, 2, 3, 4, 5];
const sixMatter = (arr) => {
  let total =  arr.map((value) => {
    if (value % 2 == 1) {
      return value ** 2;
    } else {
    return  value ** 3;
    }
  });
  return total
}
// console.log(sixMatter(array));
