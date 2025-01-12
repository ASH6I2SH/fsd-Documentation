

var bans= function(){
    var a=2;
    console.log('fnc executes')
    return {
        getter: function(){
            console.log(a);
                       
        },
        setter: function(){
            a=4;

        }
    }
}
bans();


var ans = (function(){

    var privateval = 12;
    
    return {
    
        getter: function(){
    
            console.log(privateval);
    
        },
    
        setter: function (val){
    
            privateval = val;
    
        }
    
    }
})()    
    
