const returnFirstTwoDrivers = (ary) => {
  return ary.slice(0, 2)
} 

const returnLastTwoDrivers = (ary) => {
  return ary.slice(-2)
} 

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ]

function createFareMultiplier(multiplier){
  return (fare) => fare * multiplier
}

function fareDoubler(fare){
  const doubler = createFareMultiplier(2)
  return doubler(fare)
}

function fareTripler(fare){
  const doubler = createFareMultiplier(3)
  return doubler(fare)
}

function selectDifferentDrivers(ary, fun){
  return fun(ary)
}