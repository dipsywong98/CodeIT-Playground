const {minBroadcast, findMostConnected, findShortestPath} = require('./functions')

let testCases = [
  {
    "data" : [ "A->B" , "A->C" , "B->D" , "E->F" ]
  },
  {
    "data" : [ "A->B" , "C->B" , "B->D" , "D->F", "E->B",  "F->G","F->H"]
  },
  {
    "data" : [ "A->B" , "C->B" , "B->D" , "D->F", "E->B",  "F->G","F->H","F->E"]
  },
  {
    "data" : [ "A->B", "B->C", "C->A"]
  },
  {
    "data" : [ "A->B" , "B->C" , "B->D" , "E->F" ]
  },
  {
    "data" : [ "A->B,1000" , "A->C,4500" , "B->D,2000" , "B->C,1000", "E->F,4000" ],
    "sender" : "A",
    "recipient" : "C"
  }
]

console.log('task 1')
testCases.forEach(test=>minBroadcast(test.data))
console.log('task 2')
testCases.forEach(test=>findMostConnected(test.data))
console.log('task 3')
findShortestPath(testCases[5])