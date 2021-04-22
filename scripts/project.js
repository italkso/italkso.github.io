var li=document.getElementById('carousel').getElementsByTagName("li");
var num=0;
var len=li.length;


setInterval(function(){
    li[num].style.display="none";
    num=++num==len?0:num;
    li[num].style.display="inline-block";
},3000);