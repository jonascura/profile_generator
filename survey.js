const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? ", (answer1) => {
  rl.question("What's an activity that you like to do? ", (answer2) => {
    rl.question("What do you listen to while doing that? ", (answer3) => {
      rl.question("Which meal is your favourite? ", (answer4) => {
        rl.question("What's your favorite thing to eat for tha meal? ", (answer5) => {
          rl.question("What sport is your absolute favorite? ", (answer6) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!? ", (answer7) => {
              console.log(`Bio: Hi my name is ${answer1}. I like to do ${answer2} while listening to ${answer3}. My favorite meal is ${answer4} cuz I get to eat ${answer5}. My favorite sport is ${answer6} and my superpower is ${answer7}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});