var isMoving = true;
      function setBackgroundMoving() {
        if(isMoving == true){
        setTimeout(function() {
          
          // background berjalan
          var bg = document.getElementById('board');
          bg.style.backgroundPosition = (parseInt(bg.style.backgroundPosition.replace('px', ''))-1) + 'px';
         
         // update live score
         document.getElementById('score').innerHTML = parseInt(document.getElementById('score').innerHTML) +1;
         
         // panggil fungsinya terus menerus (recursive)
          setBackgroundMoving();
        },5);
        }
      }
      
      // inisialisasi fungsi background berjalan
      setBackgroundMoving();
      
      function setBoxMoving() {
        var box = document.getElementById('box'),
        dino = document.getElementById('dino');
        
    setTimeout(function() {
      
      box.style.marginLeft = (parseInt(box.style.marginLeft.replace('px','')) -1 ) + 'px';
      
        if(parseInt(box.style.marginLeft.replace('px','')) < -100){
          box.style.marginLeft = "600px";
        }
        if(dino.offsetTop + 50 >= box.offsetTop && dino.offsetLeft + 50 >= box.offsetLeft && dino.offsetTop  + 50 <= box.offsetTop + 50 && dino.offsetLeft <= box.offsetLeft + 50) {
          alert('Game Over, Score anda : ' + document.getElementById('score').innerHTML);
          dino.setAttribute('class','freeze');
          isMoving = false;
        }else{
         // panggil fungsinya terus menerus (recursive)
               setBoxMoving();
        }
        },5);
      }
      // inisialisasi box bergerak
      setBoxMoving();
      window.addEventListener('keyup', function(e) {
        
        // untuk mendeteksi tombol spasi
       if(e.keyCode == 32) {
         // setting dino nya loncat
         document.getElementById('dino').style.marginTop = "30px";
          document.getElementById('dino').setAttribute('class','freeze');
          
          // kembalikan dino ke darat
         setTimeout(function() {
       document.getElementById('dino').style.marginTop = "170px";
       document.getElementById('dino').setAttribute('class','');
         }, 1000);
       }
         
       
      });