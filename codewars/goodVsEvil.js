function goodVsEvil(good, evil) {
  //Determine the good races
  const goodRaces = {
    hobbits: 1,
    men: 2,
    elves: 3,
    dwarves: 3,
    eagles: 4,
    wizards: 10,
  };

  //Determine the bad races

  const evilRaces = {
    orcs: 1,
    men: 2,
    wargs: 2,
    goblins: 2,
    urukHai: 3,
    trolls: 5,
    wizards: 10,
  };

  //Define worth of each side
  ////Pick up each race and multiply by its respective parameter

  const goodWorthMultiplier = good.split(" ").map(Number);
  const evilWorthMultiplier = evil.split(" ").map(Number);

  const goodRacesWorthArray = Object.values(goodRaces);
  const goodTotalWorth = goodRacesWorthArray.map(
    (num, index) => num * goodWorthMultiplier[index]
  );
  const goodTotalWorthSum = goodTotalWorth.reduce(
    (accumulator, num) => accumulator + num,
    0
  );

  const evilRacesWorthArray = Object.values(evilRaces);
  const evilTotalWorth = evilRacesWorthArray.map(
    (num, index) => num * evilWorthMultiplier[index]
  );
  const evilTotalWorthSum = evilTotalWorth.reduce(
    (accumulator, num) => accumulator + num,
    0
  );

  ////Sum um the worth of each side

  //Fight (compare forces)
  if (goodTotalWorthSum > evilTotalWorthSum) {
    return "Battle Result: Good triumphs over Evil";
  } else if (goodTotalWorthSum < evilTotalWorthSum) {
    return "Battle Result: Evil eradicates all trace of Good";
  } else {
    return "Battle Result: No victor on this battle field";
  }
  //Returns winner (3 possible strings)
}

console.log(goodVsEvil("1 1 1 1 1 1", "1 1 1 1 1 1 1"));
