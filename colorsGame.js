(function(window, document) {
    let numSquares = 6;
   let colors= generateRandomColors(numSquares);
   const squares = document.querySelectorAll('.square'); 
   let pickedColors = pickColor();
   const colorDisplay = document.querySelector("#colorDisplay");
   const messageDisplay = document.querySelector("#message");
   const h1 = document.querySelector("h1");
   const resetButton = document.querySelector("#reset");
   const easybtn = document.querySelector(".easyBtn")
   const hardbtn = document.querySelector(".hardBtn")


   colorDisplay.textContent = pickedColors;

   easybtn.addEventListener ('click', function() {
    easybtn.classList.add('selected');
    hardbtn.classList.remove('selected');

    numSquares = 3;
    colors=generateRandomColors(numSquares);
    pickedColors=pickColor();
    colorDisplay.textContent = pickedColors;
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = 'none';
        }
        
    }
   });

   hardbtn.addEventListener('click', function(){
       hardbtn.classList.add('selected');
       easybtn.classList.remove('selected');

       numSquares = 6;
       colors=generateRandomColors(numSquares);
       pickedColors=pickColor();
       colorDisplay.textContent = pickedColors;
       for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = 'block';
        }
        
    }

   });


    resetButton.addEventListener('click', function() {
    colors = generateRandomColors(6);
    pickedColors = pickColor();
    colorDisplay.textContent = pickedColors;
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "#232323";
    });

    for (let i = 0; i < squares.length; i++) {
       squares[i].style.backgroundColor = colors[i];

       squares[i].addEventListener("click", function(){
           const clickedColor = this.style.backgroundColor;

           if (clickedColor===pickedColors) {
               messageDisplay.textContent = "CORRECT!!";
               changeColors(clickedColor);
               h1.style.backgroundColor = clickedColor;
            }
            else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "TRY AGAIN!";
                
            }
         });
    }
    function changeColors(color) {
            for (let i = 0; i < squares.length; i++) {
                squares[i].style.backgroundColor = color;  
            }
    };
    function pickColor() {
            const random = Math.floor(Math.random() * colors.length);
            return colors[random];

    };
    function generateRandomColors(num){
                const arr = [];
                for (let i = 0; i < num; i++) {
                    arr.push(randomColor());    
                }
                return arr;
    };
    
    function randomColor(){
                const r = Math.floor(Math.random() * 256);
    
                const g = Math.floor(Math.random() * 256);
    
                const b = Math.floor(Math.random() * 256);
    
                return `rgb(${r}, ${g}, ${b})`;
    };
        
    })(window, document)