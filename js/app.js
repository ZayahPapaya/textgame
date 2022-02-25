'use strict';
//control commands should be: left right move touch use
// let action;
// let command = ['left', 'right', 'move', 'touch', 'use'];
let Xco = 0;
let Yco = 0;
let facing = 'north';
console.log(`I'm facing ${facing}, and my coordinates are X:${Xco} Y:${Yco}`);

//  1        
//4   2      
//  3        
//        ↑  
// ← X →  Y  
//        ↓  

// function actionCall() {
//   action = prompt('What would you like to do?');
//   for (let i = 0; i < command.length; i++) {
//     if (action === command[i]) {
//       //console.log('command taken');
//       switch (i) {
//         case 0:
//           //console.log('Turn left');
//           turnLeft();
//           actionCall();
//           break;
//         case 1:
//          //console.log('Turn right');
//           turnRight();
//           actionCall();
//           break;
//         case 2:
//           //console.log('Move forward');
//           moveForward();
//           actionCall();
//           break;
//         case 3:
//           //console.log('Touch something');
//           //touchSomething();
//           actionCall();
//           break;
//         case 4:
//           //console.log('Use an item');
//           //useItem();
//           actionCall();
//           break;
//         default:
//           console.log('How did you even get here?');
//           //alert('Action not found.');
//           actionCall();
//       }
//     }
//   }
// }
//actionCall();

function turnLeft() {
  //console.log('I turn left');
  //console.log(facing);
  switch (facing) {
    case 'north':
      facing = 'west';
      console.log(`I'm facing ${facing}`);
      break;
    case 'east':
      facing = 'north';
      console.log(`I'm facing ${facing}`);
      break;
    case 'south':
      facing = 'east';
      console.log(`I'm facing ${facing}`);
      break;
    case 'west':
      facing = 'south';
      console.log(`I'm facing ${facing}`);
      break;
    default:
      console.log('How did you even get here?');
  }
}

function turnRight() {
  //console.log('I turn right');
  //console.log(`I'm facing ${facing}`);
  switch (facing) {
    case 'north':
      facing = 'east';
      console.log(`I'm facing ${facing}`);
      break;
    case 'east':
      facing = 'south';
      console.log(`I'm facing ${facing}`);
      break;
    case 'south':
      facing = 'west';
      console.log(`I'm facing ${facing}`);
      break;
    case 'west':
      facing = 'north';
      console.log(`I'm facing ${facing}`);
      break;
    default:
      console.log('How did you even get here?');
  }
}

function moveForward() {
  console.log('I move forward');
  switch (facing) {
    case 'north':
      Yco++;
      console.log(Xco, Yco);
      break;
    case 'east':
      Xco++;
      console.log(Xco, Yco);
      break;
    case 'south':
      Yco--;
      console.log(Xco, Yco);
      break;
    case 'west':
      Xco--;
      console.log(Xco, Yco);
      break;
    default:
      console.log('How did you even get here?');
  }
}