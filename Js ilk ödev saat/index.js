let userName = prompt ("Adınızı Giriniz:")
let info = document.querySelector("#info")
info.innerHTML = "Merhaba ," + userName +"! Hoş geldin!"

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var d = date.getDay();
    
    // const d = {
    //     0:'Pazar',
    //     1:'Pazartesi',
    // }
    const days = [
        'Pazar',
        'Pazartesi',
        'Salı',
        'Çarşamba',
        'Perşembe',
        'Cuma',
        'Cumartesi'
      ]
      const dayName = days[d]
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s; 
    var time = h + ":" + m + ":" + s + "-" + dayName;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
}

showTime();