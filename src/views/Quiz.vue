<template>
  <body>
  <div>
    <h1>How much do you REALLY know about pigs? Let's find out!</h1>
  </div>

  <div class="quiz">
    <form action="127.0.0.1:8080/quiz" method="POST" id="quiz">
      <ul>
        <li>
          <h1>Question 1</h1>
          <p>How much does the average piglet of the breed Swedish Kanonkula weigh?</p>

          <div>
            <input type="radio" name="question-1-answer" id="question-1-answer-A" value="A"/>
            <label for="question-1-answer-A">A) 50kg </label>
          </div>

          <div>
            <input type="radio" name="question-1-answer" id="question-1-answer-B" value="B"/>
            <label for="question-1-answer-B">B) 200kg</label>
          </div>

          <div>
            <input type="radio" name="question-1-answer" id="question-1-answer-C" value="C"/>
            <label for="question-1-answer-C">C) 900kg</label>
          </div>

          <div>
            <input type="radio" name="question-1-answer" id="question-1-answer-D" value="D"/>
            <label for="question-1-answer-D">D) 2kg</label>
          </div>
        </li>

        <li>
          <h1>Question 2</h1>
          <p>How old could a crossbreed between the Saxon Fold and African Mandula potentially get?</p>

          <div>
            <input type="radio" name="question-2-answer" id="question-2-answer-A" value="A"/>
            <label for="question-2-answer-A">A) 70 years</label>
          </div>

          <div>
            <input type="radio" name="question-2-answer" id="question-2-answer-B" value="B"/>
            <label for="question-2-answer-B">B) 2 years</label>
          </div>

          <div>
            <input type="radio" name="question-2-answer" id="question-2-answer-C" value="C"/>
            <label for="question-2-answer-C">C) 10 years</label>
          </div>

          <div>
            <input type="radio" name="question-2-answer" id="question-2-answer-D" value="D"/>
            <label for="question-2-answer-D">D) 200 years</label>
          </div>
        </li>

        <li>
          <h1>Question 3</h1>
          <p>What is the proper word for a "litter" of piglets?</p>

          <div>
            <input type="radio" name="question-3-answer" id="question-3-answer-A" value="A"/>
            <label for="question-3-answer-A">A) A section</label>
          </div>

          <div>
            <input type="radio" name="question-3-answer" id="question-3-answer-B" value="B"/>
            <label for="question-3-answer-B">B) A murder</label>
          </div>

          <div>
            <input type="radio" name="question-3-answer" id="question-3-answer-C" value="C"/>
            <label for="question-3-answer-C">C) A soup</label>
          </div>

          <div>
            <input type="radio" name="question-3-answer" id="question-3-answer-D" value="D"/>
            <label for="question-3-answer-D">D) A farrow</label>
          </div>
        </li>

        <li>
          <h1>Question 4</h1>
          <p>What is the swedish word for pig?</p>

          <div>
            <input type="radio" name="question-4-answer" id="question-4-answer-A" value="A"/>
            <label for="question-4-answer-A">A) Knoa</label>
          </div>

          <div>
            <input type="radio" name="question-4-answer" id="question-4-answer-B" value="B"/>
            <label for="question-4-answer-B">B) Gris</label>
          </div>

          <div>
            <input type="radio" name="question-4-answer" id="question-4-answer-C" value="C"/>
            <label for="question-4-answer-C">C) Kulting</label>
          </div>

          <div>
            <input type="radio" name="question-4-answer" id="question-4-answer-D" value="D"/>
            <label for="question-4-answer-D">D) Svamp</label>
          </div>
        </li>

        <li>
          <h1>Question 5</h1>
          <p>In Japan, pigs are regarded as holy creatures and worshipped as deities. True or false? </p>

          <div>
            <input type="radio" name="question-5-answer" id="question-5-answer-A" value="A"/>
            <label for="question-5-answer-A">A) False</label>
          </div>

          <div>
            <input type="radio" name="question-5-answer" id="question-5-answer-B" value="B"/>
            <label for="question-5-answer-B">B) True</label>
          </div>
        </li>
      </ul>

      <input class="submitButton" type="submit" value="Submit Answers"/>
    </form>

  </div>
  </body>
</template>

<style>

.quiz {
  text-align: left;
}

h1{
  font-family: "Comic Sans MS",sans-serif;
}

.submitButton{
  width: auto;
  height: 2rem;
  margin: 0 0 2rem 2rem;
}

</style>
