$(document).ready(function() {
	// hide results template and error alerts on initial page load
	$("#results").hide();
	$(".alert").hide();

	// prevent ability to type negative numbers or spaces in input fields
	$("[type='number']").bind("keydown", function(e) {
		var code = e.keyCode || e.which;

		if (code == 189 || code == 173 || code == 32 || code == 69 || code == 109) {
			return false;
		}
	});

	$("#calculate-btn").on("click", function() {
		var calculateAndDisplayScore = function() {
			window.scrollTo(0, 400);
			// hide form template if all inputs are completed
			$("#form").hide();

			// get input values

			var foodInput1 = document.getElementById("foodInput1").value;
      var foodInput2 = document.getElementById("foodInput2").value
			var carInput = document.getElementById("car").value;
			
			// set variables for calculating each component score
      var foodScore = "";
			var carScore = "";
      var wasteScore = "";
			var totalScore = "";
			
			if (carInput === 0) {
				carScore = 0;
			} else {
				carScore = carInput * 0.79;
			}
			// console.log("Car score is: " + carScore);
		
			// calculate scores for each category
			function calculateAndDisplayScore() {
        foodScore = foodInput1 * 100;
        foodScore += foodInput2 * 100;
        console.log(foodScore);
      }
      
			// calculate total score and round to nearest whole integer
			totalScore = Math.round(foodScore + carScore + wasteScore);
			var formattedScore = totalScore.toLocaleString("en");
			// console.log(totalScore);

			document.getElementById("score").innerHTML = formattedScore;

			// display results

			// refresh page when recalculate button clicked
			
		}
			calculateAndDisplayScore();
	});	
});