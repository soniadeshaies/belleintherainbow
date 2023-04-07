let input, button, result, question, submit, answer;

// let Answer1;

let colorInput = document.getElementById('color-input');

let c;

function setup() {
    // make the div called "mySketch" a p5.js canvas element
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('mySketch');

    result = createElement('p', 'type any color in the rainbow');
    result.style('font-size', '30px');
    result.style('margin', '0px');
    result.style('text-align', 'center');
    result.id('answer');
    answer = document.getElementById('answer');
    colorInput.appendChild(answer);

    input = createInput('');
    input.id('question');

    question = document.getElementById('question');
    colorInput.appendChild(question);

  
    button = createButton('submit');
    button.id('submit');
    submit = document.getElementById('submit');
    colorInput.appendChild(submit);
    button.mousePressed(output);

  }
  
  function draw() {

  }
  
  function windowResized() {
    // resize the canvas when the screen is resized.
    resizeCanvas(windowWidth, windowHeight);
}

// function myInputEvent() {
//   console.log('you are typing: ', this.value());
// }

function output() {
  const answers = input.value();
  input.value('');

  let answer1 = createP('');
  answer1.id('answer-1')
  answer1.style('font-size', '30px');
  answer1.style('margin', '0px');

  let Answer1 = document.getElementById('answer-1');
  colorInput.appendChild(Answer1);
  Answer1.innerHTML = answers;

  if (answers == "red"){
    Answer1.innerHTML = answers;
    window.location.replace("red.html");
  } else if (answers == "orange"){
    Answer1.innerHTML = answers;
    window.location.replace("orange.html");
  } else if (answers == "yellow"){
    Answer1.innerHTML = answers;
    window.location.replace("yellow.html");
  } else if (answers == "green"){
    Answer1.innerHTML = answers;
    window.location.replace("green.html");
  } else if (answers == "blue"){
    Answer1.innerHTML = answers;
    window.location.replace("blue.html");
  } else if (answers == "purple"){
    Answer1.innerHTML = answers;
    window.location.replace("purple.html");
  } else {
    Answer1.innerHTML = "belle does not like that color";
  }
}

function circles () {
  fill(c);
  noStroke();
  ellipse(200,200,200,200);
}

