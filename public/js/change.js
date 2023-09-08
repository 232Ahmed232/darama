

    var i = 1;
    
    var img = document.getElementById("imgch");
    
    
    const imgcg = [
      '1.jpg',
      '2.jpg',
      '3.jpg',
      '4.jpg',
      '5.jpg',
      '6.png',
      '7.jpg',
      
    
    ]
    
    
    function fd() {
      i++;
      if (i>=imgcg.length) {
        i = 0;
      }
      img.style.background = `url('/img/logos/${imgcg[i]}')`
      img.style.backgroundRepeat = "no-repeat"
      img.style.animation = "dis 4s infinite"
      img.style.backgroundSize = 'contain'
      img.style.backgroundPosition= "center"
    
    }
    
    
    function bd() {
      i--;
      if (i<0) {
        i = imgcg.length-1;
      }
      img.style.background = `url('/img/logos/${imgcg[i]}')`
      img.style.backgroundRepeat = "no-repeat"
      img.style.animation = "dis 2s infinite"

      img.style.backgroundSize = 'contain'
      img.style.backgroundPosition= "center"
    
      
    }
    
    setInterval(fd,4000);
    
