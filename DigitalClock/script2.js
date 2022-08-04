function displayTime()
{
    var dateTime = new Date();
    var hrs= dateTime.getHours();
    var min= dateTime.getMinutes();
    var sec= dateTime.getSeconds();
    var session= document.getElementById('sessions');

    if(hrs>=24)
    {
        session.innerHTML = 'AM';
        hrs = hrs-12;
        if(hrs<10){
            hrs ="0"+ hrs;
        }
        if(min<1){
            min = "0" + min;
        }
        if(sec<10){
            sec = "0" + sec;
        }
        
    }else
    {
        session.innerHTML = 'PM';
    }
    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
    
            
}
setInterval(displayTime, 10);