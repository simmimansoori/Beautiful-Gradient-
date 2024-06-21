let btn1 = document.querySelector('.colorBtn1');
        let btn2 = document.querySelector('.colorBtn2');
        let copyCo = document.querySelector(".copyCode");
        let rgb1 = "#69ed04";
        let rgb2 = "#051937";

        console.log("btn1");

        const hexValue = () => {

            let myHexaValues = "0123456789abcdef";
            let preFix ="#";
            for(let i = 0 ; i < 6; i++){
                 preFix = preFix + (myHexaValues[Math.round(Math.random()*15)]);
            }
           return preFix;

        }

        const handleBtn1 = () => {
             rgb1 = hexValue();
            console.log(rgb1);
            btn1.innerHTML = rgb1;
            document.body.style.backgroundImage =
             `linear-gradient(to right, ${rgb1},${rgb2})`;

            copyCo.innerHTML =
             `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
        };
        
        const handleBtn2 = () => {
           rgb2 = hexValue();
            console.log(rgb2);
            btn2.innerHTML = rgb2;
            document.body.style.backgroundImage =
             `linear-gradient(to right, ${rgb1} ,${rgb2})`;
             copyCo.innerHTML =
             `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
        };
       

        btn1.addEventListener("click", handleBtn1);
        btn2.addEventListener("click", handleBtn2);

        copyCo.addEventListener("click", ()=>{

            navigator.clipboard.writeText(copyCo.innerText);
            alert("Copied to Clipboard");

        });
        
