<template>
  <body>
  <div>
    <h1>How much do you REALLY know about pigs? Let's find out!</h1>
  </div>

  <div class="quiz">
    <form method="POST" id="quiz">
      <ul>
        <li>
          <h1>Question 1</h1>
          <p>How much does the average piglet of the breed Swedish Kanonkula weigh?</p>

          <div>
            <input type="radio" name="Question 1 Answer" id="question-1-answer-A" value="A"/>
            <label for="question-1-answer-A">A) 50kg </label>
          </div>

          <div>
            <input type="radio" name="Question 1 Answer" id="question-1-answer-B" value="B"/>
            <label for="question-1-answer-B">B) 200kg</label>
          </div>

          <div>
            <input type="radio" name="Question 1 Answer" id="question-1-answer-C" value="C"/>
            <label for="question-1-answer-C">C) 900kg</label>
          </div>

          <div>
            <input type="radio" name="Question 1 Answer" id="question-1-answer-D" value="D"/>
            <label for="question-1-answer-D">D) 2kg</label>
          </div>
        </li>

        <li>
          <h1>Question 2</h1>
          <p>How old could a crossbreed between the Saxon Fold and African Mandula potentially get?</p>

          <div>
            <input type="radio" name="Question 2 Answer" id="question-2-answer-A" value="A"/>
            <label for="question-2-answer-A">A) 70 years</label>
          </div>

          <div>
            <input type="radio" name="Question 2 Answer" id="question-2-answer-B" value="B"/>
            <label for="question-2-answer-B">B) 2 years</label>
          </div>

          <div>
            <input type="radio" name="Question 2 Answer" id="question-2-answer-C" value="C"/>
            <label for="question-2-answer-C">C) 10 years</label>
          </div>

          <div>
            <input type="radio" name="Question 2 Answer" id="question-2-answer-D" value="D"/>
            <label for="question-2-answer-D">D) 200 years</label>
          </div>
        </li>

        <li>
          <h1>Question 3</h1>
          <p>What is the proper word for a "litter" of piglets?</p>

          <div>
            <input type="radio" name="Question 3 Answer" id="question-3-answer-A" value="A"/>
            <label for="question-3-answer-A">A) A section</label>
          </div>

          <div>
            <input type="radio" name="Question 3 Answer" id="question-3-answer-B" value="B"/>
            <label for="question-3-answer-B">B) A murder</label>
          </div>

          <div>
            <input type="radio" name="Question 3 Answer" id="question-3-answer-C" value="C"/>
            <label for="question-3-answer-C">C) A soup</label>
          </div>

          <div>
            <input type="radio" name="Question 3 Answer" id="question-3-answer-D" value="D"/>
            <label for="question-3-answer-D">D) A farrow</label>
          </div>
        </li>

        <li>
          <h1>Question 4</h1>
          <p>What is the swedish word for pig?</p>

          <div>
            <input type="radio" name="Question 4 Answer" id="question-4-answer-A" value="A"/>
            <label for="question-4-answer-A">A) Knoa</label>
          </div>

          <div>
            <input type="radio" name="Question 4 Answer" id="question-4-answer-B" value="B"/>
            <label for="question-4-answer-B">B) Gris</label>
          </div>

          <div>
            <input type="radio" name="Question 4 Answer" id="question-4-answer-C" value="C"/>
            <label for="question-4-answer-C">C) Kulting</label>
          </div>

          <div>
            <input type="radio" name="Question 4 Answer" id="question-4-answer-D" value="D"/>
            <label for="question-4-answer-D">D) Svamp</label>
          </div>
        </li>

        <li>
          <h1>Question 5</h1>
          <p>In Japan, pigs are regarded as holy creatures and worshipped as deities. True or false? </p>

          <div>
            <input type="radio" name="Question 5 Answer" id="question-5-answer-A" value="A"/>
            <label for="question-5-answer-A">A) False</label>
          </div>

          <div>
            <input type="radio" name="Question 5 Answer" id="question-5-answer-B" value="B"/>
            <label for="question-5-answer-B">B) True</label>
          </div>
        </li>
      </ul>

      <button v-on:click="calculateScore();" class="submitButton" type="button" value="Submit Answers">
        Submit Answers
      </button>

      <div id="selection"></div>
    </form>
  </div>


  <div v-if="clicked">
    <p>Answer Sheet</p>
    <ul>
      <li v-for="answer in answers" v-bind:key="answer.question1">
        | {{ answer.question1 }} |
        {{ answer.question2 }} |
        {{ answer.question3 }} |
        {{ answer.question4 }} |
        {{ answer.question5 }} |
      </li>
    </ul>
    <button v-on:click="showScore" class="hideButton" type="button" value="hideScore">Hide Score</button>
  </div>

  </body>
</template>

<script>

export default {
  name: "Quiz",
  data: function () {
    return {
      answers: [],
      clicked: false,
      score: 0,
      selectedAnswers: [],
      stringifiedAnswers: []
    }
  },
  mounted() {
    fetch('http://127.0.0.1:3030/quiz/')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data.quiz);
          this.answers = data.quiz;
        });
  },
  methods: {
    showScore() {
      this.clicked = !this.clicked
    },
    calculateScore() {

      this.score = 0;
      this.convertJsonToString();
      this.selectedAnswers.length = 0;

      document.getElementById("selection").innerHTML = "";

      let choice = document.getElementsByTagName('input');

      for (let i = 0; i < choice.length; i++) {

        if (choice[i].type === "radio") {
          if (choice[i].checked) {

            this.selectedAnswers.push(choice[i].value)
          }
        }
      }

      for (let i = 0; i < this.selectedAnswers.length; i++)
        if (this.selectedAnswers[i] === this.stringifiedAnswers[i]) {
          this.score++;
        }

      if (this.score === 5) {
        alert("やるやん！満点！5/5!");
      } else if (this.score === 4) {
        alert("4/5. 惜しい！もうちょっと頑張れな")
      } else if (this.score === 3) {
        alert("3/5. まあまあ")
      } else if (this.score === 2) {
        alert("2/5. Keep trying!")
      } else if (this.score === 1) {
        alert("1/5. Oof")
      } else if (this.score === 0) {
        alert("0/5.. What")
      }


      document.getElementById("selection").innerHTML += "Answer: " + this.stringifiedAnswers + "<br>"
      document.getElementById("selection").innerHTML += "Score: " + this.score + "<br>"
      document.getElementById("selection").innerHTML += "Selected Answers: " + this.selectedAnswers;


    },
    convertJsonToString() {

      this.stringifiedAnswers.length = 0;

      let answers = JSON.stringify(this.answers).replace(/(?![A-Z])./g, '');

      this.stringifiedAnswers.push(answers.substr(0, 1));
      this.stringifiedAnswers.push(answers.substr(1, 1));
      this.stringifiedAnswers.push(answers.substr(2, 1));
      this.stringifiedAnswers.push(answers.substr(3, 1));
      this.stringifiedAnswers.push(answers.substr(4, 1));

    }
  }
}


</script>

<style>

.quiz {
  text-align: left;
}

h1 {
  font-family: "Comic Sans MS", sans-serif;
}

.submitButton {
  width: auto;
  height: 2rem;
  margin: 0 0 2rem 2rem;
}

.hideButton {
  width: 10rem;
  height: 2rem;
  margin: 0 0 2rem 2rem;
}

ul {
  list-style-type: none;
  padding: 0;
}

</style>
