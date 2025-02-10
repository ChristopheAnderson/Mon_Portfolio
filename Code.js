let currentIndex = 0;
  const items = document.querySelectorAll('.carousel-item');
  const indicators = document.querySelectorAll('.indicator');
  const totalSlides = items.length;
  let interval;

  function updateCarousel() {
      items.forEach((item, index) => {
          item.classList.toggle('opacity-100', index === currentIndex);
          item.classList.toggle('opacity-0', index !== currentIndex);
      });

      indicators.forEach((indicator, index) => {
          indicator.classList.toggle('bg-gray-700', index === currentIndex);
          indicator.classList.toggle('bg-gray-300', index !== currentIndex);
      });
  }

  function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateCarousel();
  }

  function prevSlide() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateCarousel();
  }

  document.getElementById('next').addEventListener('click', () => {
      nextSlide();
      resetAutoSlide();
  });

  document.getElementById('prev').addEventListener('click', () => {
      prevSlide();
      resetAutoSlide();
  });

  function startAutoSlide() {
      interval = setInterval(nextSlide, 3000);
  }

  function resetAutoSlide() {
      clearInterval(interval);
      startAutoSlide();
  }

  startAutoSlide();
  updateCarousel();




    //alert("Bonsoir , c'est JS")
    function showContent(content) {
        document.getElementById(content).classList.remove('hidden'); // Affiche la section
        
        setTimeout(() => { 
            document.getElementById(content).style.opacity = 1;
        }, 300); // Changez cette valeur pour ajuster le délai
    }

    function goBack(content) {
        document.getElementById(content).classList.add('hidden');
        document.getElementById(content).style.opacity = 0; // Cache la section
    }



    function folow(content) {
        const num = parseInt(content, 10); 
        const numpre = num-1; 
    
        numi = "newContent" + num
        numprei = "newContent" + numpre
        //alert(numprei)
        document.getElementById(numprei).classList.add('hidden');
        document.getElementById(numprei).style.opacity = 0; // Cache la section

        document.getElementById(numi).classList.remove('hidden'); // Affiche la section  
        setTimeout(() => { 
            document.getElementById(numi).style.opacity = 1;
        }, 300); // Changez cette valeur pour ajuster le délai
    }






    function prev(content) {
        const num = parseInt(content, 10); 
        const numpre = num+1; 

        numi = "newContent" + num
        numprei = "newContent" + numpre
        //alert(numprei)
        document.getElementById(numprei).classList.add('hidden');
        document.getElementById(numprei).style.opacity = 0; // Cache la section

        document.getElementById(numi).classList.remove('hidden'); // Affiche la section  
        setTimeout(() => { 
            document.getElementById(numi).style.opacity = 1;
        }, 300); // Changez cette valeur pour ajuster le délai
    }






  





  function gallery(){
    this.index=0;
    this.load=function(){
      this.rootEl = document.querySelector(".gallery");
      this.platform = this.rootEl.querySelector(".platform");
      this.frames = this.platform.querySelectorAll(".each-frame");
      this.contentArea = this.rootEl.querySelector(".content-area");      
      this.width = parseInt(this.rootEl.style.width);
      this.limit = {start:0,end:this.frames.length-1};
      this.frames.forEach(each=>{each.style.width=this.width+"px";});   
      this.goto(this.index);      
    }
    this.set_title = function(){this.rootEl.querySelector(".heading").innerText=this.frames[this.index].getAttribute("title");}
    this.next = function(){this.platform.style.right=this.width * ++this.index + "px";this.set_title();}
    this.prev = function(){this.platform.style.right=this.width * --this.index + "px";this.set_title();}
    this.goto = function(index){this.platform.style.right = this.width * index + "px";this.index=index;this.set_title();}
    this.load();
}
var G = new gallery();
  G.rootEl.addEventListener("click",function(t){
      var val = t.target.getAttribute("action");
      if(val == "next" && G.index != G.limit.end){G.next();}
      if(val == "prev" && G.index != G.limit.start){G.prev();}
      if(val == "goto"){
          let rv = t.target.getAttribute("goto");
          rv = rv == "end" ? G.limit.end:rv;
          G.goto(parseInt(rv));
      }
  });
  document.addEventListener("keyup",function(t){
      var val = t.keyCode;
      if(val == 39 && G.index != G.limit.end){G.next();}
      if(val == 37 && G.index != G.limit.start){G.prev();}
  });

  // run G.load() if new data loaded with ajax


  



