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
   element.innerHTML+=`<img class="insertImg"  src="../images/hand.png" alt="">`;
    
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










