$(document).ready(function() {
	// hide results template and error alerts on initial page load
	$("#results").hide();
	// prevent ability to type negative numbers or spaces in input fields
	$("[type='number']").bind("keydown", function(e) 
	);

	$("#calculate-btn").on("click", function() {
		var calculateAndDisplayScore = function() {
			window.scrollTo(0, 400);
			// hide form template if all inputs are completed
			$("#form").hide();

			// get input values

			var foodInput1 = document.getElementById("foodInput1").value;
      var foodInput2 = document.getElementById("foodInput2").value
			var carInput = document.getElementById("sliderRange").value;
			
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
			function calculateScore() {
        //foodScore = foodInput1 * 100;
        //foodScore += foodInput2 * 100;
        //carScore = carInput * 100;
        //totalScore = foodScore + carScore;
        //return totalScore;
        return 5*5;
      }
      
			// calculate total score and round to nearest whole integer
			totalScore = Math.round(foodScore + carScore + wasteScore);
			var formattedScore = totalScore.toLocaleString("en");
			// console.log(totalScore);

			document.getElementById("score").innerHTML = formattedScore;

			// display results

			// refresh page when recalculate button clicked
			
		}
    
	});
  calculateScore();
});