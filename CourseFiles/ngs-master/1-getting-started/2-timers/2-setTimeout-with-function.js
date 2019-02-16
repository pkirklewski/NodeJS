
const myFunc = myArg => {
  console.log('Hello after ' + myArg + ' seconds');
};
x = 4;
y = 8;
setTimeout(myFunc, x * 1000, x);
setTimeout(myFunc, y * 1000, y);


// For: func(arg1, arg2, arg3, ...)
// We can use: setTimeout(func, delay, arg1, arg2, arg3, ...)
