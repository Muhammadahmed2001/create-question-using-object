// function check() {
    //     var value = textArea.value;
    //     var lines = [];
//     var currentLine = '';
    
//     for (var i = 0; i < value.length; i++) {
//       currentLine += value[i];
//       if (value[i] === '\n' || i === value.length - 1) {
    //         // If a newline character is found or we're at the end of the value, consider it a line
    //         if (currentLine.includes("?")) {
//           console.log("Line with a question mark: " + currentLine);
//           // You can save the line to an array or perform other actions here
//         }
//         // currentLine = ''; // Reset the currentLine variable
//       }
//     }
//   }


    // var textArea = document.getElementById("textArea");

    // function check(){
    //     var value = textArea.value;
    //     var linesWithQuestions = []
    //     var currentLine = '';
    //     for(i = 0; i < value.length;i++){
    //         currentLine += value[i]
    //         // console.log(value[i])
    //         if(value[i]=== "\n"){
    //             if(currentLine.includes("?")){
    //                 linesWithQuestions.push(currentLine)
                    
    //             }
    //             currentLine = ""
    //         }


    //     }
    //     return linesWithQuestions;
    // }

    // var linesWithQuestions = check();
    // console.log(linesWithQuestions);



    var textArea = document.getElementById("textArea");

function check() {
    var value = textArea.value;
    var linesWithQuestions = []; // Create an array to store lines with questions
    var currentLine = '';
    
    for (var i = 0; i < value.length; i++) {
        currentLine += value[i];
        if (value[i] === "\n") {
            if (currentLine.includes("?")) {
                linesWithQuestions.push(currentLine); // Add the line to the array
            }
            currentLine = "";
        }
    }
    
    return linesWithQuestions; // Return the array of lines with questions
}

var linesWithQuestions = check(); // Call the function and store the result

// Access the lines with questions outside the function
console.log(linesWithQuestions);


