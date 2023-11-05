var textArea = document.getElementById("textArea");
var obj = {};
var question = [];
function submit() {
  var value = textArea.value.split("\n");
  var count = 1;
  for (var i = 0; i < value.length; i++) {
    if (value[i] === "") {
      question.push(obj);
      obj = {};
      count = 1
    } else {
      if (value[i].indexOf("?") !== -1) {
        obj.question = value[i];
      } else {
        if (value[i].indexOf("*") !== -1) {
          obj.correct = value[i].slice(0, -1);
          obj["opption" + count] = value[i].slice(0, -1);
        } else {
          obj["opption" + count] = value[i];
        }
        count++;
      }
    }
  }
  console.log(question);
}
