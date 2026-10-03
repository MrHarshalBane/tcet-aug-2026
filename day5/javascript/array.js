nums = [1, 2, 3, 4, 5]
//map function
nums_sqr = nums.map(i => i * i)
console.log("Square of each number: " + nums_sqr);

//filter function
nums_even = nums.filter(i => i % 2 == 0)
console.log("Even numbers: " + nums_even);

//reduce function 
nums_sum = nums.reduce((sum, i) => sum + i)
console.log("Sum of numbers: " + nums_sum);

nums_avg = nums.reduce((sum, i) => sum + i)
console.log("Average of numbers: " + nums_avg);










//CW: WAP to print even numbers from array

// for(i = 0; i < nums.length; i++)
//     if(nums[i] % 2 == 0)
//         console.log(nums[i]);







// sum = 0
// for(i = 0; i < nums.length; i++) 
//     sum = sum + nums[i]

// console.log("Sum: " + sum);
// console.log("Average: " + sum/nums.length);

// console.log(nums);

// console.log("First Element: " + nums[0]);
// console.log("Length: " + nums.length);

// //CW: WAP to print last element of array
// console.log("Last Element: " + nums[nums.length - 1]);




