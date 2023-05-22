'use strict';
let timer=10;
let time = document.getElementById('display');
time.style.margin= "auto";
time.style.textAlign = "center";
time.style.maxWidth ="200px"
setTimeout(() => {
    time.className = "btn btn-success";
    time.innerHTML = timer--;
    setTimeout(() =>{
        time.className = "btn btn-success";
        time.innerHTML = timer--;
        setTimeout(() =>{
            time.className = "btn btn-success";
            time.innerHTML = timer--;
            setTimeout(() =>{
                time.className = "btn btn-success";
                time.innerHTML = timer--;
                setTimeout(() =>{
                    time.className = "btn btn-success";
                    time.innerHTML = timer--;
                    setTimeout(() =>{
                        time.className = "btn btn-success";
                        time.innerHTML = timer--;
                        setTimeout(() =>{
                            time.className = "btn btn-success";
                            time.innerHTML = timer--;
                            setTimeout(() =>{
                                time.className = "btn btn-success";
                                time.innerHTML = timer--;
                                setTimeout(() =>{
                                    time.className = "btn btn-success";
                                    time.innerHTML = timer--;
                                    setTimeout(() =>{
                                        time.className = "btn btn-success";
                                        time.innerHTML = timer--;
                                        setTimeout(() =>{
                                            time.style.fontSize = "36px";
                                            time.style.maxWidth = "600px";
                                            time.className = "badge rounded-pill bg-success";
                                            time.innerHTML = "Happy Independence Day"
                                            
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)     
        },1000)
    },1000)
}, 1000); 