

var a = document.getElementById('out');
var b = document.getElementById('div');
var c = document.querySelector('#address');

let getLoc=()=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }else{
        a.innerHTML = 'Error! Cannot Support Feature ';
    }
}
// showing device current position 
let showPosition = data =>{
    b.innerHTML = `
        <p>${data.coords.latitude} </br> 
           ${data.coords.longitude}
        </p>`;
    console.log(data);
}


let showLocation=()=>{
    let url = 'https://dummyjson.com/products' // free Products API
    fetch(url)
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data)
        c.innerText = `${data.products[5].title}`
    })
}
showLocation()

// a.innerHTML = 'Cookies enabled ' + navigator.cookieEnabled;
console.log(navigator.cookieEnabled)

