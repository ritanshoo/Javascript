// indian Watch
let indianWatch = () => {
    let today = new Date();
    let options = { timeZone: 'Asia/Kolkata' };
    let time = today.toLocaleTimeString('en-US', options);
    let date = today.toLocaleDateString('en-US', options);
    document.querySelector('#indian-date').innerText = date;
    document.querySelector('#indian-time').innerText = time;
};

setInterval(indianWatch, 1000);

// USA Watch
let usaWatch = () => {
    let today = new Date();
    let options = { timeZone: 'America/New_York' };
    let time = today.toLocaleTimeString('en-US', options);
    let date = today.toLocaleDateString('en-US', options);
    document.querySelector('#usa-date').innerText = date;
    document.querySelector('#usa-time').innerText = time;
};
setInterval(usaWatch, 1000);

// China Watch
let chinaWatch = () => {
    let today = new Date();
    let options = { timeZone: 'Asia/Shanghai' };
    let time = today.toLocaleTimeString('en-US', options);
    let date = today.toLocaleDateString('en-US', options);
    document.querySelector('#china-date').innerText = date;
    document.querySelector('#china-time').innerText = time;
};
setInterval(chinaWatch, 1000);

const functionTest = () => {
    console.log("HIII TEST ")
}

const key = setInterval(() => {
    console.log("1s HIII TEST ")
}, 1000)

setTimeout(()=>{
   clearInterval(key)
},10000)

const key2 = setInterval(() => {
    console.log("2s HIII TEST ")
}, 2000)

console.log({key,key2})