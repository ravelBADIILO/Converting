function computeQuizzes() {
  var quiz1Score = parseInt(document.getElementById("quiz1Score").value);
  var quiz2Score = parseInt(document.getElementById("quiz2Score").value);
  var quiz3Score = parseInt(document.getElementById("quiz3Score").value);
  var totalQuizzesScore = quiz1Score + quiz2Score + quiz3Score;
  document.getElementById("totalQuizzesScore").value = totalQuizzesScore;

  var quiz1Percentage = (quiz1Score / parseInt(document.getElementById("quiz1Range").value)) * 100;
  document.getElementById("quiz1Percentage").innerHTML = quiz1Percentage.toFixed(2) + "%";

  var quiz2Percentage = (quiz2Score / parseInt(document.getElementById("quiz2Range").value)) * 100;
  document.getElementById("quiz2Percentage").innerHTML = quiz2Percentage.toFixed(2) + "%";

  var quiz3Percentage = (quiz3Score / parseInt(document.getElementById("quiz3Range").value)) * 100;
  document.getElementById("quiz3Percentage").innerHTML = quiz3Percentage.toFixed(2) + "%";

  var totalQuizzesPercentage = (totalQuizzesScore / (parseInt(document.getElementById("quiz1Range").value) + parseInt(document.getElementById("quiz2Range").value) + parseInt(document.getElementById("quiz3Range").value))) * 20;
  document.getElementById("totalQuizzesPercentage").innerHTML = totalQuizzesPercentage.toFixed(2) + "%";
}

function computePerformanceTasks() {
  var pt1Score = parseInt(document.getElementById("pt1Score").value);
  var pt2Score = parseInt(document.getElementById("pt2Score").value);
  var pt3Score = parseInt(document.getElementById("pt3Score").value);
  var totalPtScore = pt1Score + pt2Score + pt3Score;
  document.getElementById("totalPtScore").value = totalPtScore;

  var pt1Percentage = (pt1Score / parseInt(document.getElementById("pt1Range").value)) * 100;
  document.getElementById("pt1Percentage").innerHTML = pt1Percentage.toFixed(2) + "%";

  var pt2Percentage = (pt2Score / parseInt(document.getElementById("pt2Range").value)) * 100;
  document.getElementById("pt2Percentage").innerHTML = pt2Percentage.toFixed(2) + "%";

  var pt3Percentage = (pt3Score / parseInt(document.getElementById("pt3Range").value)) * 100;
  document.getElementById("pt3Percentage").innerHTML = pt3Percentage.toFixed(2) + "%";

  var totalPtPercentage = (totalPtScore / (parseInt(document.getElementById("pt1Range").value) + parseInt(document.getElementById("pt2Range").value) + parseInt(document.getElementById("pt3Range").value))) * 60;
  document.getElementById("totalPtPercentage").innerHTML = totalPtPercentage.toFixed(2) + "%";
}

function computeExamPercentage() {
  var examScore = parseInt(document.getElementById("examScore").value);
  var examRange = parseInt(document.getElementById("examRange").value);
  var examPercentage = (examScore / examRange) * 20;
  document.getElementById("examPercentage").innerHTML = examPercentage.toFixed(2) + "%";
}

function computeGrade() {
  var quizPercentage = parseFloat(document.getElementById("totalQuizzesPercentage").innerHTML);
  var ptPercentage = parseFloat(document.getElementById("totalPtPercentage").innerHTML);
  var examScore = parseInt(document.getElementById("examScore").value);
  var examRange = parseInt(document.getElementById("examRange").value);
  var examPercentage = (examScore / examRange) * 20;
  var finalGrade = (quizPercentage + 0.20) + (ptPercentage + 0.60) + (examPercentage + 0.20);
  document.getElementById("finalGrade").innerHTML = finalGrade.toFixed(2) 
}


function showGrade() {
  var showGradeCheckbox = document.getElementById("showGrade");
  var finalGradeSpan = document.getElementById("finalGrade");
  if (showGradeCheckbox.checked) {
    finalGradeSpan.style.display = "inline-block";
  } else {
    finalGradeSpan.style.display = "none";
  }
}
