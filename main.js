var offer=document.getElementById("offer");
(function(){
    offerStr();
    video();
})();
function randomNum(minNum, maxNum) {
    switch (arguments.length) {
      case 1:
        return parseInt(Math.random() * minNum + 1, 10);
        break;
      case 2:
        return parseInt(Math.random() * ( maxNum - minNum + 1 ) + minNum, 10);
        break;
      default:
        return 0;
        break;
    }
  }
  function offerStr(){
    var offerStr=['LUNCH TIME SPECIAL OFFER-$188 SUSHI SET 12 PIECES','LUNCH TIME SPECIAL OFFER-UNLIMITED REFILLED',' LUNCH TIME SPECIAL OFFER-PICKLES FOR FREE']
     offer.innerText=offerStr[ randomNum(0, 2)];
  }
 var offerTime=setInterval(offerStr,3000);
 function video(){
    var md=document.getElementById("video");
    var mds=document.getElementById("videos");
    var source=document.getElementById("source");
    md.addEventListener("ended",function(){
        md.style.display="none";
        mds.style.display="block";
        mds.play();
    });
    mds.addEventListener("ended",function(){
        mds.style.display="none";
        md.style.display="block";
        md.play();
    });
 }


var btn=document.getElementById("btn");
var datetime = document.getElementById("datetime");
var warn = document.getElementById("warn");
var number = document.getElementById("number");
var myselect = document.getElementById("reserved-time");　　//获取select对象
var index = myselect.selectedIndex;　　　　　　　　　//获取被选中的索引
var day = myselect.options[index].value;　　　　　　//获取被选中的值
var reset=document.getElementById("reset");
function info(){
    //调用指定函数
    reserve(datetime.value,day,number.value);
    var str="Reservation succeeded! Your reservation time is"+datetime.value+"day--"+day+"Number"+number.value;
    warn.innerText=str;
    warn.style.opacity = "1";
    setTimeout(function(){
        warn.style.opacity = "0";
    },2000);

}
function isnull(val) {
    
    var str = val.replace(/(^\s*)|(\s*$)/g, ''); 
    if(str == '' || str == undefined || str == null) {
        return true;
    } else {
       
        return false;
    }
}

btn.addEventListener("click",function(e){
    if(isnull(datetime.value) ||	isnull(number.value)) {
        warn.innerText="Data not completed,please re-enter";
        warn.style.opacity = "1";
        setTimeout(function(){
            warn.style.opacity = "0";
        },2000);
        return false;
       
    } else{
         info();
      
    }

},false);
reset.addEventListener("click",function(e){
    datetime.value="";
    number.value="";
});