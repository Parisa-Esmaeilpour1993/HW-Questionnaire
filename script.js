function scores() {
  let score = 0;
  if (quiz.q1[0].checked) {
    score += 1;
  } else {
    console.log("Answer of first question is script");
  }
  if (quiz.q2[0].checked) {
    score += 1;
  } else {
    console.log("Answer of second question is alert");
  }
  if (quiz.q3[3].checked) {
    score += 1;
  } else {
    console.log("Answer of third question is equal");
  }
  if (quiz.q4[1].checked) {
    score += 1;
  } else {
    console.log("Answer of forth question is strong");
  }
  alert("Your Score: " + score + " of 4");
}
