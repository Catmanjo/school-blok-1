let readlineSync = require('readline-sync');

let food = 0;
let rads = 0;
let suit = 0;

begin()

//the beginning plus the first scenes in the house
function begin() {
  console.clear();
  let choicebegin = ['Wake up', 'Sleep'];
  console.log('');
  console.log('[Unknown]: Wake up, our end is near');
  console.log('[Unknown]: We need to hide in the bunker');
  let actionbegin = readlineSync.keyInSelect(choicebegin, '', { cancel: false });
  switch (actionbegin) {
    case 0:
      scene1()
      break;
    case 1:
      console.clear();
      console.log('');
      console.log('[Ending 0] Too lazy to live');
      console.log('eventually your body evaporates in the nuclear blast... L');
      console.log('');
      break;
  };
};

//house scene two, get food, die or get no food
function scene1() {
  console.clear();
  console.log('');
  let choice1 = ['Get food and water', 'Grab a bag and stuff it full of food', 'Go to the bunker'];
  console.log('[Unknown]: take some food and water and go to the bunker');
  console.log('[Action]: What do you do?');
  let action1 = readlineSync.keyInSelect(choice1, '', { cancel: false });
  switch (action1) {
    case 0:
      console.clear();
      food = 1
      console.log('');
      console.log('[Action]: You get food and run to the bunker');
      console.log('[Action]: But the other person is nowhere to be seen');
      console.log('[Action]: What do you do?');
      bunker1()
      break;
    case 1:
      console.clear();
      console.log('');
      console.log('[Action]: Your busy searching for a bag in the hallway...');
      ending1()
      break;
    case 2:
      console.clear();
      console.log('');
      console.log('[Action]: You run to the bunker empty handed');
      console.log('[Action]: But the other person is nowhere to be seen');
      console.log('[Action]: What do you do?');
      bunker1()
      break;
  };
};

//all the scenes in the bunker
//bunker scene 1
//lost the unknown person.. look around or stay
function bunker1() {
  let choicebun = ['Look for him', 'stay in the bunker'];
  let actionbun = readlineSync.keyInSelect(choicebun, '', { cancel: false });
  switch (actionbun) {
    case 0:
      console.clear();
      console.log('');
      console.log('[Action]: You open the hatch...');
      ending1()
      break;
    case 1:
      console.clear();
      console.log('');
      console.log('[Action]: You stay in the bunker');
      console.log('[Action]: After a few second you hear a loud explosion');
      bunker2()
      break;
  };
};

//bunker scene 2 
//naar buiten, rond zoeken of wachten
//rad suit
function bunker2() {
  let choicebun2 = ['Look outside', 'Search around', 'Wait'];
  console.log('[Action]: A few days go by')
  console.log('[Action]: And you get bored after a while');
  if (food == 0) {
    console.log('[Action]: Your beginning to get hungry');
  };
  console.log('[Action]: What will you do?');
  let actionbun2 = readlineSync.keyInSelect(choicebun2, '', { cancel: false });
  switch (actionbun2) {
    case 0:
      console.clear();
      console.log('');
      console.log('[You]: Uhh... Bad idea, but okay..');
      ending3()
      break;
    case 1:
      //look around in the bunker
      console.clear();
      console.log('');
      if (food == 0) {
        ending2()
      } else {
        console.log('[Action]: You found an anti radiation suit');
        suit += 1;
        console.log('[You]: Now I can finally go outside');
        let outq = ['yes', 'no'];
        let outh = readlineSync.keyInSelect(outq, '', { cancel: false });
        switch (outh) {
          case 0:
            console.clear();
            console.log('');
            console.log('[Action]: You open the hatch and go outside');
            outside1()
            break;
          case 1:
            console.clear();
            console.log('');
            console.log('[You]: Shut yo ***** *** up, Im going outside');
            console.log('[Action]: You open the hatch and go outside');
            ending6()
            break;
        }
      }
      break;
    case 2:
      //if hunger true
      console.clear();
      console.log('');
      if (food == 0) {
        let hunger2 = ['Just ignore your hunger', 'Search for food', 'Open the hatch'];
        console.log('[Action]: You remember that u forgot to get food');
        console.log('[Action]: What will you do against your hunger');
        let choicehun = readlineSync.keyInSelect(hunger2, '', { cancel: false }); 1
        switch (choicehun) {
          case 0:
            console.clear();
            console.log('');
            ending2()
            break;
          case 1:
            console.clear();
            console.log('');
            console.log('[Action]: You found a dead rat');
            console.log('[Question]: Do you eat the rat?');
            console.log('');
            let ratfood = readlineSync.question('');
            if (ratfood == 'yes' || 'Yes' || 'YES') {
              //if you ate the rat
              rads += 1;
              console.clear();
              console.log('');
              console.log('[Action]: You decide to go outside because your bored');
              console.log('[You]: Maybe Im Immune to radiation because of eating the rat');
              console.log('[You]: I feel a bit nauseos, but that is all');

            } else {
              console.clear();
              console.log('');
              console.log('[Action]: You decide not to eat the rat');
              ending2()
            };
            break;
          case 2:
            console.clear();
            console.log('');
            console.log('[You]: Uhh... Bad idea, but okay..');
            ending3()
            break;
        };
      } else {
        //wait with no hunger
        //raided
        console.clear();
        let Raiders = ['Stay still', 'Open the door', 'Ask who they are'];
        console.log('[Action]: You hear someone knocking on the vault door');
        console.log('[Action]: What do you do?');
        let raid = readlineSync.keyInSelect(Raiders, '', { cancel: false });
        switch (raid) {
          case 0:

            console.log('[Raider]: Open Da Noor');
            console.log('[Action]: You keep perfectly still');
            ending4()
            break;
          case 1:
            console.log('[Action]: You unlock the hatch');
            ending5()
            break;
          case 2:
            console.log('[Raider]: None of your business');
            ending4()
            break;
        }
      };
      break;
  };
};

//going outside
function outside1() {

}

// all the endings are listed here

//nuclear explosion death
function ending1() {
  console.log('[Ending 1] Nuclear explosion death');
  console.log('You hear a loud bang and everything fades into white');
  console.log('The atoms in your body break into million pieces (that means your dead btw)');
  console.log('');
};

//starvation death
function ending2() {
  console.log('[Ending 2] Starvation');
  console.log('You suddenly collapse and die of starvation... Lame... skill issue');
  console.log('');
};

//radiation poisoning death
function ending3() {
  console.log('[Ending 3] Radiation?');
  console.log('You get very nauseous and begin vomiting blood');
  console.log('Eventually you die.. dumb idea indeed..');
  console.log('');
};

//raider death one and two
function ending4() {
  console.log('[Ending 4] Raiders blow of your door... and your face');
  console.log('Eventually they blow of the door with a pair of C4');
  console.log('You get roasted in the fire of the blast');
  console.log('');
};
function ending5() {
  console.log('[Ending 5] Spawncamped');
  console.log('You open the hatch and...');
  console.log('You get blasted in the face with a shotgun');
  console.log('');
};
//good ending
function ending6() {
  console.log('[Ending 6] Good ending');
  console.log('You survived, yippie');
};