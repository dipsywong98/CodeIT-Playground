const {
  minBroadcast,
  findMostConnected,
  findShortestPath
} = require("./functions");

let testCases = [
  {data:[
    "A->B,10",
    "A->C,1",
    "B->D,1",
    "C->D,100",
  ],
  sender: "A",
  recipient: "D"},
  {
    data: [
      "F->E",
      "M->P",
      "M->S",
      "P->W",
      "Q->X",
      "L->T",
      "Q->Z",
      "C->M",
      "F->R",
      "A->N",
      "H->U",
      "G->U",
      "K->Y",
      "S->D",
      "E->X",
      "V->J",
      "H->B",
      "O->I"
    ]
  },
  {
    data: [
      "P->Q",
      "D->F",
      "V->Y",
      "L->O",
      "P->T",
      "N->R",
      "H->N",
      "K->R",
      "Y->E",
      "G->U",
      "I->Z",
      "X->J",
      "S->E",
      "B->W",
      "K->C",
      "Z->R",
      "G->A",
      "M->I"
    ]
  },
  { data: ["A->B", "A->C", "B->D", "E->F"] },
  { data: ["A->B", "C->B", "B->D", "D->F", "E->B", "F->G", "F->H"] },
  { data: ["A->B", "C->B", "B->D", "D->F", "E->B", "F->G", "F->H", "F->E"] },
  { data: ["A->B", "B->C", "C->A"] },
  { data: ["A->B", "B->C", "B->D", "E->F"] },
  {
    data: ["A->B,1000", "A->C,4500", "B->D,2000", "B->C,1000", "E->F,4000"],
    sender: "A",
    recipient: "C"
  },
  { data: ["C->A", "A->B", "B->C", "E->E", "E->F", "F->G", "K->G"] },
  {
    data: [
      "X->W,3095",
      "T->T,4240",
      "R->U,3301",
      "D->J,5347",
      "B->J,6309",
      "N->X,3448",
      "Y->J,7172",
      "Y->N,5040",
      "O->F,5374",
      "S->M,254",
      "M->G,2160",
      "W->U,2675",
      "I->H,4239",
      "W->W,4957",
      "A->C,5734",
      "G->J,7035",
      "X->A,7049",
      "X->F,3969",
      "G->U,1578",
      "K->Z,6255",
      "G->V,2686",
      "X->L,9446",
      "R->G,1826",
      "R->H,8714",
      "A->X,5182",
      "T->N,27"
    ],
    sender: "T",
    recipient: "F"
  },
  {
    data: [
      "L->K,5512",
      "D->C,8947",
      "N->M,5111",
      "R->W,6276",
      "B->I,9920",
      "L->Y,1843",
      "S->A,3069",
      "Y->J,7591",
      "B->X,7281",
      "W->O,2772",
      "U->N,545",
      "M->F,1994",
      "U->P,3108",
      "A->F,8389",
      "G->M,701",
      "K->T,2339",
      "X->C,3723",
      "C->P,1795",
      "R->E,4103",
      "N->B,9999",
      "V->K,1093",
      "X->M,4679",
      "P->G,5691",
      "P->H,6799",
      "R->K,9049",
      "J->E,7154"
    ],
    sender: "P",
    recipient: "F"
  }
];

const all = () => {
  console.log("task 1");
  testCases.forEach(test => minBroadcast(test));
  console.log("task 2");
  testCases.forEach(test => findMostConnected(test));
  console.log("task 3");
  findShortestPath(testCases[5]);
};

//all()
// minBroadcast(testCases[0])
// findMostConnected(testCases[0]);
console.log(findShortestPath(testCases[0]))
