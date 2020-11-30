(function(){
    $(document).ready(function(){
        // document.body.contentEditable = "true"
        /*//发消息
        var bac = chrome.extension.connect({name: "bgAndCon"});
        bac.postMessage({joke: "Knock knock"});*/
        //接收消息
        chrome.extension.onConnect.addListener(function(cab) {
            cab.onMessage.addListener(function(msg) {
                 // var t_titles = document.getElementByTagName("title") ;
                 var content = document.getElementById('bodyContent');
                 var table = content.getElementsByTagName('table')[0];
                 var items = table.rows;
                 var length = items.length;

                 var pageheader = document.getElementById('content');
                 var  h1 = pageheader.getElementsByTagName('h1')[0];
                 var title = h1.innerText;


                 var str = '名称,拜耳编号,佛氏编号,HD编号,HIP编号,赤经,赤纬,视星等,绝对星等,距离,光谱型,注释\n';
                 
                 for (i = 1;i < length; i++) {

                    var dict = {};

                    var item = items[i];

                    var cells = item.cells;
                     var hasgude = cells.length >12?1:0;

                    var name = cells[0].innerText;

                    var baierorder = cells[1].innerText;
                    var foshiorder = cells[2].innerText;
                    var hdorder = cells[3+hasgude].innerText;
                    var hiporder= cells[4+hasgude].innerText;

                    var chiwei = cells[5+hasgude].innerText;
                    var chijing= cells[6+hasgude].innerText;

                    var shixingdeng= cells[7+hasgude].innerText;
                    var jueduixingdeng = cells[8+hasgude].innerText;
                    var distance = cells[9+hasgude].innerText;

                    var guangpuxing = cells[10+hasgude].innerText;
                    var zhushi= cells[11+hasgude].innerText;




                    str += `${name + '\t'},`;   
                    str += `${baierorder + '\t'},`;   
                    str += `${foshiorder + '\t'},`;  
                    str += `${hdorder + '\t'},`;    
                    str += `${hiporder + '\t'},`; 
                    str += `${chiwei + '\t'},`;  
                    str += `${chijing + '\t'},`;   
                    str += `${shixingdeng+ '\t'},`;   
                    str += `${jueduixingdeng + '\t'},`; 
                    str += `${distance + '\t'},`;  
                    str += `${guangpuxing+ '\t'},`;   
                    str += `${zhushi+ '\t'},`;      

                    str += '\n';


                 }

                
                 

                 let uri = 'data:text/csv;charset=utf-8,\ufeff' + encodeURIComponent(str);
                  //通过创建a标签实现
                  var link = document.createElement("a");
                  link.href = uri;
                  

                  //对下载的文件命名
                  link.download =  title+'.csv';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);

                // if(msg.flag){
                //     $("body").find("*").mouseenter(function(){
                //         event.stopPropagation();
                //         $(this).css({"box-shadow":"0 0 5px 1px #3AB2FF"});
                //         $(this).one("click", function(){
                //             event.stopPropagation();
                //             $(this).hide();
                //             return false;
                //         })
                //     });
                //     $("body").find("*").mouseout(function(){
                //         event.stopPropagation();
                //         $(this).css("box-shadow", "none");
                //     })
                // } else {
                //     $("body").find("*").unbind("mouseenter").unbind("mouseout").unbind("click");
                // }
            })
        })
        /*chrome.extension.onConnect.addListener(function(cab) {
            console.log("AAA")
            cab.onMessage.addListener(function(msg) {
                console.log(msg.greeting);
                console.log("BBB")
            })
        })*/
    });
})();