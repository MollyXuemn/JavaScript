window.onload = function(){
    imgLocation("container", "box");
    window.onscroll = function(){
        imgLocation("container","box");
        var imgData = {"data": [{"src":"./img/us1.jpeg"},
    {"src":"./img/us2.jpeg"},{"src":"./img/mexico2.jpeg"},
    {"src":"img/mexico3.jpeg"},{"src":"img/mexico4.jpeg"}]}
        //加载底部新的图片
        window.onscroll = function(){
            if(checkFlag()){
                var cparent = document.getElementById("container");
                for(var i=0;i<imgData.data.length;i++){
                    //class名称要与之前对应
                    var ccontent = document.createElement("div");
                    ccontent.className="box";
                    cparent.appendChild(ccontent);
                    var boximg = document.createElement("div");
                    boximg.appendChild(boximg);
                    var img = document.createElement("img");
                    img.src = "img/" +imgData.data[i].src;
                    boximg.appendChild(img);
                }
                //加载格式
                imgLocation("container","box");
            }
        }
        
    }
}
//当拖到最下面最后一张图片之前加载
function checkFlag(){
    var cparent = document.getElementById("container");
    var ccontent = getChildElement(cparent,"box");
    //最下面一张图片高度
    var lastContentHeight = ccontent[ccontent.length - 1].offsetTop;
    //console.log(lastContentHeight);
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var pageHeight = document.documentElement.clientHeight || document.body.clientHeight;
    //console.log(lastContentHeight+":" +scrollTop+":"+pageHeight);
    if(lastContentHeight < scrollTop+pageHeight){
        return true;
    }
}

function imgLocation(parent, content){
    //将parent下多有的content全部取出
    var cparent = document.getElementById(parent);
    var ccontent = getChildElement(cparent,content);
    //改变图片对于windows的宽度
    var imgWidth = ccontent[0].offsetWidth;
    //每行可以容纳多少个图片
    var num = Math.floor(document.documentElement.clientWidth/imgWidth);
    cparent.style.cssText = "width:" + imgWidth*num+"px;margin: 0 auto";

    var BoxHeightArr=[];
    for(var i=0;i<ccontent.length;i++){
        if(i<num){
            //当前所选图片高度
            BoxHeightArr[i] = ccontent[i].offsetHeight;
            //console.log(BoxHeightArr[i]);
        }else{
            var minheight = Math.min.apply(null, BoxHeightArr);
            var minIndex = getminheightLocation(BoxHeightArr,minheight);
            //console.log(minheight);
            ccontent[i].style.position = "absolute";
            ccontent[i].style.top = minheight+"px";
            //将想要移动图片放在指定图片/列后面
            ccontent[i].style.left = ccontent[minIndex].offsetLeft+"px";
            //当前列图片高度+现在放置图片高度
            BoxHeightArr[minIndex] = BoxHeightArr[minIndex]+ccontent[i].offsetHeight;
        }
    }
}
function getminheightLocation (BoxHeightArr,minheight){
    for(var i in BoxHeightArr){
        if(BoxHeightArr[i]== minheight){
            return i;
        }
    }
}

function getChildElement(parent, content){
    var contentArr = [];
    //提取所有内容
    var allcontent  = parent.getElementsByTagName("*");
    for(var i=0; i <allcontent.length;i++){
        if(allcontent[i].className==content){
            contentArr.push(allcontent[i]);
        }
    }
    return contentArr;
}