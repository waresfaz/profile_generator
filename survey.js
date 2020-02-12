const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profileData = [];

rl.question(`What's your name? Nicknames are also acceptable :)`, (answer1) => {
  profileData.push(answer1);
  // console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.question(`What's an activity you like doing?`, (answer2) => {
    profileData.push(answer2);
    // console.log(`Thank you for your valuable feedback: ${answer}`);

    rl.question(`What do you listen to while doing that?`, (answer3) => {
      profileData.push(answer3);
      // console.log(`Thank you for your valuable feedback: ${answer}`);

      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.)`, (answer4) => {
        profileData.push(answer4);
        // console.log(`Thank you for your valuable feedback: ${answer}`);

        rl.question(`What's your favourite thing to eat for that meal?`, (answer5) => {
          profileData.push(answer5);
          // console.log(`Thank you for your valuable feedback: ${answer}`);
          
          rl.question(`Which sport is your absolute favourite?`, (answer6) => {
            profileData.push(answer6);
            // console.log(`Thank you for your valuable feedback: ${answer}`);

            rl.question(`What is your superpower? In a few words, tell us what you are amazing at!`, (answer7) => {
              profileData.push(answer7);
              // console.log(`Thank you for your valuable feedback: ${answer}`);

console.log(`${answer1} loves ${answer2} while listening to ${answer3}. During ${answer4} they like eating ${answer5}. They prefer ${answer6} over any other sport, and is amazing at ${answer7}! `);

  rl.close();
            });
          });
        });
      });
    });
  });
});










