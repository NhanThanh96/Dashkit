$(document).ready(function(){
  $( ".js-datetime-picker__input" ).datepicker();

  $(".js-sidebar__toggle-button").on("click", function(){
    $(".sidebar__collapse").slideToggle(300);
  });

  $(window).resize(function () { 
    if($(this).width() > 768 ) {
      $(".sidebar__collapse").show();
    }
  });
  $(".js-doughnut-canvas").each(function(){
    var dataSet =  $(this).attr("data-set");
    var parsedTest = JSON.parse(dataSet); 
    new Chart($(this), {
      type: 'doughnut',
      data: {
        datasets: [
          {
            borderWidth: 2,
            hoverBorderColor: "transparent",
            borderColor: '#252830',
            data: parsedTest[0].data,
            backgroundColor: ["#1ca8dd", "#1bc98e"],
          }
        ],
        labels: parsedTest[0].label,
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        cutoutPercentage: 80,
        // responsive: true,
        
      }
    });
  });

  $(".js-line-chart-canvas").each(function(){
    var dataSet =  $(this).attr("data-set");
    var parsedTest = JSON.parse(dataSet); 
    new Chart($(this), {
      type: 'line',
      data: {
        datasets: [
          {
            fill: !0,
            backgroundColor: "rgba(255,255,255,.3)",
            borderColor: "#fff",
            pointBorderColor: "#fff",
            lineTension: .25,
            pointRadius: 0,
            pointHoverRadius: 0,
            pointHitRadius: 20,
            data: parsedTest[0].data,
          }
        ],
        labels: parsedTest[0].label,
      },
      options: {
        responsive: true,
        animation: {
          duration: 0
        },
        legend: {
          display: !1
        },
        scales: {
          xAxes: [{
            display: !1
          }],
          yAxes: [{
            display: !1
          }]
        },
        tooltips: {
          enabled: !1
        }
      }
    });
  });
});
