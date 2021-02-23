const date = new Date();

const months = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];

const day = [
    2,
    2,
    4,
    2
]

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  
  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  document.querySelector(".date p").innerHTML = new Date().toDateString();

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div class="full-days${i}">${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();


var calendar = {jan: {1: "Сайхан амарна"}, 
                feb: {1: "Сагсны тэмцээнтэй", 3: "Шагнал гардуулна даа", 17: "Жавхлан багшийн лаб 2-ыг хийнэ"}, 
                mar: {2: "Энэ лабынхаа хугацааг сунгах уу яах вэ гэдэгээ шийднэ", 6: "Энд юу бичье дээ байз", 8: "Эмэгтэйчүүддээ баяр хүргэнэ дээ"}, 
                apr: {1: "Бүгдээрээ худлаа ярьцаагаагаарай"}, 
                may: {10: "Энэ сард ч ёстой юу ч болдоггүй сар даа"}, 
                jun: {6: "Жавхлан багшийн төрсөн өдөр"},  
                jul: {4: "Хичээл амарсаан ураа"}, 
                aug: {1: "Хөдөө явдаг цаг даа", 25: "Хичээл сонголт эхэллээ"}, 
                sep: {1: "9-н сарын нэгэн боллоо ерөөсөө бидний баяр даа"}, 
                oct: {13: "Сур сур бас дахин сур"}, 
                nov: {2: "Сурсаар л бай"}, 
                dec: {20: "Өвлийн семистер хаагдах нь дээ", 30: "Дүн гаргаж дууслаа баярлалаа баяртай"} 
            }


const month_day = [
    jan = [1],
    feb = [1, 3, 17],
    mar = [2, 6, 8],
    apr = [1],
    may = [10],
    jun = [6],
    jul = [4],
    aug = [1, 25],
    sep = [1],
    oct = [13],
    nov = [2],
    dec = [20, 30]
];

document.querySelector(".next").addEventListener("click", () => {
    for(i = 0; i < 12; i++){
        if(document.querySelector(".date h1").innerHTML == months[i]){
          if(document.querySelector(".date h1").innerHTML == months[6]){
              document.querySelector(".full-days6").style.backgroundColor = "#222227";
              document.querySelector(".full-days1").style.backgroundColor = "#222227";
              document.querySelector(".full-days25").style.backgroundColor = "#222227";
              document.querySelector(".full-days2").style.backgroundColor = "#222227";
          }
            const mon = month_day[date.getMonth()]
            console.log(mon)
            var mar1 = [];
            for(j = 0; j < mon.length; j++ ){
            mar1.push(mon[j] + JSON.stringify(calendar[document.querySelector(".date h1").innerHTML][mon[j]]) + "<br>");
            document.querySelector(`.full-days${mon[j]}`).style.backgroundColor = "red";
            }
            const mar2 = JSON.stringify(mar1).replace(/[[,"]/g,'').replace("]", "").replace(/\\/g, ". ")
            document.querySelector(".Event-text").innerHTML = mar2
        }
        
    }
})
document.querySelector(".prev").addEventListener("click", () => {
  for(i = 0; i < 12; i++){
      if(document.querySelector(".date h1").innerHTML == months[i]){
        if(document.querySelector(".date h1").innerHTML == months[6] || document.querySelector(".date h1").innerHTML == months[9]){
          document.querySelector(".full-days6").style.backgroundColor = "#222227";
          document.querySelector(".full-days1").style.backgroundColor = "#222227";
          document.querySelector(".full-days25").style.backgroundColor = "#222227";
          document.querySelector(".full-days2").style.backgroundColor = "#222227";
      }
          const mon = month_day[date.getMonth()]
          console.log(mon)
          var mar1 = [];
          for(j = 0; j < mon.length; j++ ){
          mar1.push(mon[j] + JSON.stringify(calendar[document.querySelector(".date h1").innerHTML][mon[j]]) + "<br>");
          document.querySelector(`.full-days${mon[j]}`).style.backgroundColor = "red";
          }
          const mar2 = JSON.stringify(mar1).replace(/[[,"]/g,'').replace("]", "").replace(/\\/g, ". ")
          document.querySelector(".Event-text").innerHTML = mar2
      }
      
  }
})



