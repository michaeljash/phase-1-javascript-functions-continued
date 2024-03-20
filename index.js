// code your solution here
functions saturdayFun(activity = "roller-skate"){
   return 'This Saturday,I want to ${activity}!';
   console.log(saturdayFun());
   console.log(saturdayFun("bake"));
}


const mondayWork = function(activity = "go to the office"){
return 'This monday,i will ${activity}.';
console.log(mondayWork());
console.log(mondayWork("work from home"));

}



function wrapAdjective(flair = "*"){
  return function(adjective){
    return 'You are ${flair}${adjective}${flair}!';
  }
  const highlight = wrapAdjective();
console.log(highlight("awesome"));

const emphasise = wrapAdjective("||");
console.log(emphasise("cool"));
}