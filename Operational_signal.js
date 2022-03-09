function mySum(){
    
    var i = 10;
    var j = i++; // i++是先赋值，++i = i + 1; 是先加加后赋值
    document.getElementById("sum").innerHTML = j;


    /***************************************************/
    var j = 5 + "5";//任何和字符串相加都输出字符串

    /***************&& || ! *****************************/
    //&& 与 ： 一假即假
    //|| 或 ： 一真即真
    // ! 非

    /**************** switch case ***********************/
    var i = 2;
    switch(i){
        case 1:
            document.write("i = 1");
            break;
        case 2:
            document.write("i = 2");
            break;
        default:
            document.write("条件不满足case");
            break;
    }
    /****************** for ****************************/
    var i = [1, 2, 3, 4, 5];
    var j;
    for( j in i ){
        document.write(i[j] + "<br/>")
        j++;
    }
    /****************** do while ****************************/
    do{ //do while 先执行一次，再判断
        document.write("i=" +i+"<br/>"); 
    }while(i < 10){

    }
    while(i < 10){//while 直接判断
        document.write("i=" +i+"<br/>"); 
    }
    /****************** do while ****************************/
    break; // 跳出当前循环
    continue; //跳出本次循环迭代，进行下次循环
}