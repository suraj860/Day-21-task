

setTimeout(()=>{
    document.querySelector("div").style.boxShadow = "  13px 14px 25px red";
    document.querySelector("h1").style.color = "red"
    document.querySelector("h1").innerText = "10";
    setTimeout(()=>{
        document.querySelector("div").style.boxShadow = "  13px 14px 25px #FF2E63";
        document.querySelector("h1").style.color = "#FF2E63"
        document.querySelector("h1").innerText = "9";
        setTimeout(()=>{
            document.querySelector("div").style.boxShadow = "  13px 14px 25px #08D9D6";
            document.querySelector("h1").style.color = "#08D9D6"
            document.querySelector("h1").innerText = "8";
            setTimeout(()=>{
                document.querySelector("div").style.boxShadow = "  13px 14px 25px #30E3CA";
                document.querySelector("h1").style.color = "#30E3CA"
                document.querySelector("h1").innerText = "7";
                setTimeout(()=>{
                    document.querySelector("div").style.boxShadow = "  13px 14px 25px #FF9999";
                    document.querySelector("h1").style.color = "#FF9999"
                    document.querySelector("h1").innerText = "6";
                    setTimeout(()=>{
                        document.querySelector("div").style.boxShadow = "  13px 14px 25px #A2D5F2";
                        document.querySelector("h1").style.color = "#A2D5F2"
                        document.querySelector("h1").innerText = "5";
                        setTimeout(()=>{
                            document.querySelector("div").style.boxShadow = "  13px 14px 25px #9D0191";
                            document.querySelector("h1").style.color = "#9D0191"
                            document.querySelector("h1").innerText = "4";
                            setTimeout(()=>{
                                document.querySelector("div").style.boxShadow = "  13px 14px 25px #FFD369";
                                document.querySelector("h1").style.color = "#FFD369"
                                document.querySelector("h1").innerText = "3";
                                setTimeout(()=>{
                                    document.querySelector("div").style.boxShadow = "  13px 14px 25px #F875AA";
                                    document.querySelector("h1").style.color = "#F875AA"
                                    document.querySelector("h1").innerText = "2";
                                    setTimeout(()=>{
                                        document.querySelector("div").style.boxShadow = "  13px 14px 25px red";
                                        document.querySelector("h1").style.color = "red"
                                        document.querySelector("h1").innerText = "1";
                                        setTimeout(()=>{
                                            document.querySelector("div").style.boxShadow = "  13px 14px 25px orangered";
                                            document.querySelector("h1").style.color = "orangered"
                                            document.querySelector("div").innerHTML = `<img src= "https://i.pinimg.com/originals/bd/ec/dc/bdecdc45915d2c39c580c7095cb4be98.jpg" alt="">`;
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)