

document.getElementById("button1").addEventListener("click", () =>{
document.getElementById("birds").play();
});

      document.addEventListener("keypress", (event) => {
        if(event.key == "b")
      document.getElementById("birds").play()
  
    })

      document.addEventListener("keypress", (event) => {
          if(event.key == "j")
        document.getElementById("jungle").play()
    
      })

      document.addEventListener("keypress", (event) => {
        if(event.key == "t")
      document.getElementById("thunder").play()
  
    })

    document.addEventListener("keypress", (event) => {
        if(event.key == "w")
      document.getElementById("waves").play()
  
    })
    

document.getElementById("button2").addEventListener("click", () =>{
    document.getElementById("jungle").play();
    });

document.getElementById("button3").addEventListener("click", () =>{
        document.getElementById("thunder").play();
        });

document.getElementById("button4").addEventListener("click", () =>{
            document.getElementById("waves").play();
            });
            
            
