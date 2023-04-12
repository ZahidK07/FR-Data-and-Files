
// let showData = document.querySelector('#btn')

// showData.addEventListener('click',()=>{
//     document.getElementById('card').innerHTML = `
//         <div id="card-info">
//             <img src="" alt="">
//         </div>
//         <div id="Info">
//             <div id="Info-1">
//                 <span>Bank Name : ICICI</span>
//                 <span>Ac Name : Zahid</span>
//             </div>
//             <div id="Info-2">
//                 <span>Ac Number : 121255507</span>
//                 <span>Type : Savings</span>
//             </div>
//         </div>
//     `
// });

// let bankData = [{
//     id : 1,
//     Bank_Name: "ICICI",
//     name:"Zahid",
//     Ac_number : "121255507",
//     type: "Savings"
// }]

let myUrl = ('https://reqres.in/api/users?page=2');

let details=()=>{
    fetch(myUrl).then((res)=>{
        res.json()
    }).then((data)=>{
        for(i=0;i<data.length;i++){
            let elemnt = document.createElement('option') // creates <option> Tag
            let textNode = document.createTextNode(data[0].page)
            elemnt.appendChild(textNode) //<option>text node</option>
            // elemnt.value = bankData[0].id
            document.getEelementById('select').appendChild(elemnt)
            /* creates <select>
                            <option value = 0>text node</option>
                        </select>*/
        }
    })
}

// bankData.map((list)=>{
//     return list
// })
// let a = document.getElementById('select');
// a.innerHTML = `
//     <option>${bankData[0].id}</option>
//     <option>${bankData[0].Bank_Name}</option>
//     <option>${bankData[0].name}</option>
//     <option>${bankData[0].name}</option>
//     <option>${bankData[0].name}</option>
// `;

// bankData.map((list)=>{
//     return list
// })
// console.log(`<p>${bankData[0].name}</p>`)

// function bankList() {
//     let select = document.querySelector('#select');
//     select.addEventListener('click',()=>{
//         select.innerHTML = `
//         <option>ZAhid</option>
//         <option>${myBank.Bank_Name}</option>
//         <option>${myBank.Bank_Name}</option>
//         `;
//     });
// }

