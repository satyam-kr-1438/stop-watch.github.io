
let hr=0;
let min=0;
let sec=0;
let count=0;
let timer=false;

   function start()
   {
       timer=true;
       stopwatch();
   }
   function stop()
   {
        timer=false;
   }
   function reset()
   {
       timer=false;
      hr=0;
      min=0;
      sec=0;
      count=0;               
            let hr2=document.getElementById("hr1");
            hr2.innerHTML="00";
            let min2=document.getElementById("min1");
            min2.innerHTML="00";
            let sec2=document.getElementById("sec1");
            sec2.innerHTML="00";
            let count2=document.getElementById("count1");
            count2.innerHTML="00";
   }
   function stopwatch()
   {
        if(timer==true)
        {
            count=count+1;
            if(count==100)
            {
                sec=sec+1;
                count=0;
            }
            if(sec==60)
            {
                min=min+1;
                sec=0;
            }
            if(min==60)
            {
                hr=hr+1;
                min=0;
                sec=0;
            }
            let hrstring=hr;
            let minstring=min;
            let secstring=sec;
            let countstring=count;
            if(hr<10)
            {
                hrstring="0"+hrstring;
            }
            if(min<10)
            {
                minstring="0"+minstring;
            }
            if(sec<10)
            {
                secstring="0"+secstring;
            }
            if(count<10)
            {
                countstring="0"+countstring;
            }

            let count2=document.getElementById("count1");
            count2.innerHTML=countstring;
            let sec2=document.getElementById("sec1");
            sec2.innerHTML=secstring;
            let min2=document.getElementById("min1");
            min2.innerHTML=minstring;
            let hr2=document.getElementById("hr1");
            hr2.innerHTML=hrstring;
            setTimeout(stopwatch,10);             
        }
   }
