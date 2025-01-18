var ans= document.querySelectorAll("h2");
var para= document.querySelectorAll("p");
var hand= document.querySelectorAll(".containAnch");
var h2hasanch = document.querySelectorAll(".h2hasanch")
var anch= document.querySelectorAll(".anch")
 


var count=1;

ans.forEach(element => {
    var classname= element.className;
        if((classname != "noth2")){
            var anstext=element.innerHTML;
            element.innerHTML=`${count++} ${anstext}`;
        }
        
           
    });
    
    
   
    
    
    para.forEach(element => {
    var parainnerHtml= element.innerHTML;
        element.innerHTML= `<h3>${parainnerHtml}</h3>`;
    
});


hand.forEach(element => {
   element.innerHTML+=`<img class="insertImg"  src="../images/hand.png" alt="">`;
    
});




