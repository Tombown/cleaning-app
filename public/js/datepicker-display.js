$('#datepicker').datepicker();
  $("#datepicker").on("changeDate", function(event) {
    $("#date-display").text(
      $("#datepicker").datepicker('getFormattedDate'),
      document.getElementById("date-title").innerHTML = "Date"
    )
});
