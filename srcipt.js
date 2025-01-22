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
lt.from(".contentList",{
    opacity: 0,
    y: -30,
    duration: 1,
    stagger: 0.2
})


var headings = gsap.utils.toArray("h2");

headings.forEach((heading) => {
  gsap.from(heading, {
    Transform: "translate(-210%)",
    duration: 1,
    scrollTrigger: {
      trigger: heading,
      end: "top 70%",
      
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
      end: "top 70%",
      
      scrub: 1,
      toggleActions: "restart none none none",
    },
  });
});







