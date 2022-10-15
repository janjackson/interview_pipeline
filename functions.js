/* --- Question Functions ---
   -------------------------------------------------- */

//what is this function doing?
function next_q() {
  //if in div appears end as id and class from div contains hide go inside of loop
  if ($("#end").hasClass("hide") == true) {
    //q.shift() does mean remove first element from array q and return it
    //if elem exists it gets stored in var question
    var question = q.shift();

    //done means that question is answered
    if (question != "done") {
      //this line means that question is displayed in div with id question
      $("#question").html(question);
      //restart timer
      timer_restart();
      //display_tip() means that tip is displayed.
      display_tip();
      //else means that question is done and question gets hided
    } else {
      $("#question").addClass("hide");
      $("#timer").addClass("hide");
      $(".pg").addClass("hide");

      $("#end").removeClass("hide");
    }
  }
}

//function which searches based on the input value (which is a key) for an the value of the appropriate key and displays this value in the DOM
function next_a() {
  //make answer visible
  $("#answer").html("<h2>" + "dkdkdkddkdkkdkdk" + "</h2>");
  console.log("next_a");
  //this should work. now i only need to define what the answer is
}

/* --- Timer Functions ---
   -------------------------------------------------- */

function timer_tick() {
  //$ is call to jquery function to return a set of elements found in DOM
  $("#timer").removeClass("warning");
  //returns true if element has class warning
  $("#timer").removeClass("fail");

  timer = timer - 1;

  //adds the timer with an "s" at the end to html
  $("#timer").html(timer + " s");

  //if timer is smaller than 5 add class warning which created this #ffcc66 background
  if (timer < 10) {
    $("#timer").addClass("warning");
  }
  //change backround to red if timer is smaller than 5
  if (timer < 5) {
    $("#timer").removeClass("warning");
    $("#timer").addClass("fail");
  }
  //if timer is smaller than 0 hide / go to next question
  if (timer <= 0) {
    $("#timer").addClass("hide");
    $(".pg").removeClass("hide");
  }
  //setTimeout means that timer_tick() is called after 1 second
  setTimeout("timer_tick();", 1000);
}

//function to restart timer
function timer_restart() {
  $("#timer").removeClass("warning");
  $("#timer").removeClass("fail");
  $(".pg").addClass("hide");
  $("#timer").removeClass("hide");

  //todo set timer to 120 sek
  timer = 1000;

  $("#timer").html("15 s");
}

/* --- Tip Functions ---
   -------------------------------------------------- */

//function to display tip
function display_tip() {
  var tip = tips.shift();

  $("#tip").html(tip);

  tips.push(tip);
}
