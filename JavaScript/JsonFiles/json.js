
    let url = 'http://localhost:1200/Ecommerce';

    function showJson(){
        fetch(url)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            data.map((myObj)=>{
            return myObj;
        })
            
            console.log(data[1])
            document.querySelector('.container').innerHTML = `
                <div class="card">
                    <div class="info">
                        <div id="img-div">
                            <img src="" alt="">
                        </div>
                        <div id="product-info">
                            <h3>
                                <p id="prod-cat">${data[3].category}</p>
                                <p id="prod-name">${data[3].price}</p>
                            </h3>
                        </div>
                    </div>
                </div>
            `
            // document.querySelector('.container').insertAdjacentElement('beforebegin', el)
        })
    }
    showJson();

        

        // function success(){
        //     alert('Run Successfull');
        // }

        function changeTheme(color){
            if(color == 'black'){
                document.querySelector('html').style.color= "white";
                document.querySelector('html').style.backgroundColor= "black";
                
            }else if(color == 'white'){
                document.querySelector('html').style.backgroundColor= "white";
                document.querySelector('html').style.color= "black";
            }
        }