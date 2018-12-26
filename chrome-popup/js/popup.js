
var b = "I'm popup";
var bg = chrome.extension.getBackgroundPage();//获取background页面,popup与background通信
if(bg){
    $(".btn").click(function(){
        if(!bg.flag.begin) {
            bg.flag.begin = 1;
            bg.flag.change = 1;
        } else {
            bg.flag.begin = 0;
            bg.flag.change = 1;
        }
    })
} 
$(document).ready(function(){
    if(bg.flag.begin)
        $(".btn").html("下载完成");
    else
        $(".btn").html("下载Excel表"); 
})