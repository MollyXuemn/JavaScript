/****
 * 1. try{
 * 
 * }catch(){
 * 
 * }
 * 
 * 2. throw
 */
var str = 10;
function demo(){
try{
    alert(str);
}catch(err){
    alert(err);
}
}

function demo(){
    var e = document.getElementById("txt").ariaValueMax;
    try {
        
        if(e == ""){
            throw "请输入"；
        }
    }
    } catch (err) {
        alert(err);