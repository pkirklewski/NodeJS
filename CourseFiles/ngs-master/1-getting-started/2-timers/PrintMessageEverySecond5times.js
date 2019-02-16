var count = 1;
const myFunc = () => {
    console.log('Hi there... ' + count );
count++;

if (count > 5){clearInterval(intervalObject);}

};

var intervalObject = setInterval(myFunc,1000);
