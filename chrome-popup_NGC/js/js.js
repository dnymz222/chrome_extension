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
                 var tables = content.getElementsByTagName('table');
               

                 var pageheader = document.getElementById('content');
                 var  h1 = pageheader.getElementsByTagName('h1')[0];
                 var title = h1.innerText;




                 var str = 'number,other name,obejecttype,constellation,RA,DC,AM\n';

                 var tablecount = tables.length;

                 for (var j = 0; j< tablecount; j++) {

                   var table = tables[j];

                   var items = table.rows;
                   var length = items.length;
                 
                     for (i = 1;i < length; i++) {

                        var dict = {};

                        var item = items[i];

                        var cells = item.cells;
                        if (cells.length < 7) continue;
                        

                        var name = cells[0].innerText;

                        var baierorder = cells[1].innerText;
                        var foshiordercell = cells[2];
                        var foshiorder  = foshiordercell.innerText;
                        

                     
                        
                        

                        var hdorder = cells[3].innerText;
                        var hiporder= cells[4].innerText;

                        var chiwei = cells[5].innerText;
                        var chijing= cells[6].innerText;

                       




                        str += `${name + '\t'},`;   
                        str += `${baierorder + '\t'},`;   
                        str += `${foshiorder + '\t'},`;  
                        str += `${hdorder + '\t'},`;    
                        str += `${hiporder + '\t'},`; 
                        str += `${chiwei + '\t'},`;  
                        str += `${chijing + '\t'},`;   
                       

                        str += '\n';


                     }

                
                 

                   
                 }


                 let uri = 'data:text/csv;charset=utf-8,\ufeff' + encodeURIComponent(str);
                  

                //过创建a标签实现
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