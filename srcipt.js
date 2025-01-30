var ans= document.querySelectorAll("h2");
var para= document.querySelectorAll("p");
var hand= document.querySelectorAll(".containAnch");
var h2hasanch = document.querySelectorAll(".h2hasanch")
var anch= document.querySelectorAll(".anch")
var contentList= document.querySelectorAll(".contentList")


var count=1;
ans.forEach(element => {
    var classname= element.className;
        if((classname != "noth2")){
            var anstext=element.innerHTML;
            element.innerHTML=`${count++} ${anstext}`;
        }  
    });


var count2= 1;
contentList.forEach(((element)=> {
    var contentListText= element.textContent;
    element.textContent= `${count2++}. ${contentListText}`
}))    

     
para.forEach(element => {
    var parainnerHtml= element.innerHTML;
    element.innerHTML= `<h3>${parainnerHtml}</h3>`;
    
});


hand.forEach(element => {
   element.innerHTML+=`<img class="insertImg"  src="../headings/hand.png" alt="">`;
    
});

var lt= gsap.timeline();
lt.from("h1",{
    opacity: 0,
    y: -30,
    duration: 1,
    delay:0.5
})
// lt.from(".contentList",{
//     opacity: 0,
//     y: -30,
//     duration: 1,
//     stagger: 0.2
// })


var headings = gsap.utils.toArray("h2");

headings.forEach((heading) => {
  gsap.from(heading, {
    opacity: 0,
    y: -30,
    duration: 1,
    scrollTrigger: {
      trigger: heading,
      end: "top 60%",
      scrub: 1,
      toggleActions: "restart none none none",
    },
  });
});

var images = gsap.utils.toArray("img");
images.forEach((image) => {
  gsap.from(image, {
    scale: 0,
    duration: 1,
    scrollTrigger: {
      trigger: image,
      end: "top 60%",
      scrub: 1,
      toggleActions: "restart none none none",
    },
  });
});

var para = gsap.utils.toArray("p");
para.forEach((par) => {
  gsap.from(par, {
    opacity: 0,
    y: -30,
    duration: 3,
    scrollTrigger: {
      trigger: par,
      end: "top 60%",
      scrub: 1,
      toggleActions: "restart none none none",
    },
  });
});

var string=  document.querySelector(".string");

var initialPath= `M 10 100 Q 600 100 1190 100`;
var finalPath= `M 10 100 Q 600 100 1190 100`;

string.addEventListener("mousemove", function(dets){

  var stringY= string.getBoundingClientRect().top;
  var stringX= string.getBoundingClientRect().left;
  console.log(dets.y - stringY);
  initialPath= `M 10 100 Q ${dets.x - stringX} ${dets.y-stringY} 1190 100`;

  gsap.to("svg path",{
    attr: {d:initialPath},
    ease: "elastic.out"
   })

})

string.addEventListener("mouseleave", function(dets){

  gsap.to("svg path",{
    attr: {d:finalPath},
    ease: "elastic.out"
   })
})

window.addEventListener("mousemove", function(dets){
  document.querySelector(".ball").style.visibility="visible";
  mouseX= dets.x;
  console.log(mouseX);
  mouseY= dets.y;
  gsap.to(".ball",{
    left: mouseX + "px",
    top: mouseY + "px",
    ease: Power3,
  })

})







