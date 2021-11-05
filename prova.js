//fetch with callback then
let response = fetch("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlwgODTedHwGYF8Q7OAEyhOXbAfrh67IYGiw&usqp=CAU")
    .then(response => response.blob())
    .then(imageBlob => {
        const url = URL.createObjectURL(imageBlob);
        console.log(imageBlob);
        document.write('<img src=' + url + '>');
    }).catch(e => {
        console.log('There has been a problem with your fetch operation: ' + e.message);
    });

console.log(response);

//fetch with async method and await keyword
async function myFetch() {
    let response = await fetch("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlwgODTedHwGYF8Q7OAEyhOXbAfrh67IYGiw&usqp=CAU");
    let myBlob = await response.blob();
    let url = URL.createObjectURL(myBlob);
    console.log(url);
    document.write('<img src=' + url + '>');
}
myFetch()
    .catch(e => {
        console.log('There has been a problem with your fetch operation: ' + e.message);
    });


//create a custom Promise
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success!');
    }, 2000);
});


//create a function return a Promise
function timeoutPromise(message, interval) {
    return new Promise((resolve, reject) => {
        if (message === '' || typeof message !== 'string') {
            reject('Message is empty or not a string');
        } else if (interval < 0 || typeof interval !== 'number') {
            reject('Interval is negative or not a number');
        } else {
            setTimeout(() => resolve(message), interval);
        }
    })
}


//call a function return a Promise with then callback
timeoutPromise('Hello Andrea!', 2000)
    .then(message => alert(message))
    .catch(e => console.log('Error: ' + e));



//call a function return a Promise with async and await
async function timeoutPromiseAwait() {
    message = await timeoutPromise('Hello Andrea!', 2000);
    alert(message);
}
timeoutPromiseAwait().catch(e => console.log('Error: ' + e));

