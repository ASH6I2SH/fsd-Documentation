var ans= document.querySelectorAll("h2");
var para= document.querySelectorAll("p");
var hand= document.querySelectorAll(".containAnch");



var count=1;

ans.forEach(element => {
    var classname= element.className;
    if(classname!="noth2"){
        var text= element.innerHTML;
        element.innerHTML= `${count++}. ${text}`;
    }
    
});

para.forEach(element => {
    var parainnerHtml= element.innerHTML;
        element.innerHTML= `<h3>${parainnerHtml}</h3>`;
    
});

hand.forEach(element => {
   element.innerHTML+=`<img class="insertImg"  src="../images/hand.png" alt="">`;
    
});





