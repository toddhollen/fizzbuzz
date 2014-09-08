$(document).ready(function () {
    var fizzBuzz = function () {
    	var answer = $('#input-line').val();
        if (answer < 101 && answer >= 1){
        for (i = 1; i <= answer; i++) {
     		var three = i % 3 == 0
            var five = i % 5 == 0
            if (three && five) {
                $('body').append("<div>Fizz-Buzz</div>");
                
            } else if (five) {
                $('body').append("<div>Buzz</div>");
                
            } else if (three) {
                $('body').append("<div>Fizz</div>");
                
            } else {
                $('body').append("<div>" + i + "</div>");
                
            }
        }}
        else {
                alert("Please enter a WHOLE NUMERIC value between 1-100")
            }
        }

    $(document).keydown(function (event) {
        if (event.which == 13) {
            fizzBuzz();
        }
	$(document).on('click', '#Enter', function(){
        fizzBuzz();
    })
    })
      

});