let children = {}
let parents = {}
let nodes = {}

const minBroadcast = data => {
  initNodes(data)
  console.log({children,parents,nodes})
}

const registerNode = node => {
  if(!(node in nodes)){
    children[node] = []
    parents[node] = []
    nodes[node] = true
  }
}

const initNodes = data => {
  children = {}
  parents = {}
  nodes = {}
  const relations = data.map(str=>str.split('->'))
  relations.forEach(([p,c])=>{
    registerNode(p)
    registerNode(c)
    parents[c].push(p)
    children[p].push(c)
  })
}

let testCases = [
  {
    "data" : [ "A->B" , "A->C" , "B->D" , "E->F" ]
  },
  // {
  //   "data" : [ "A->B" , "C->B" , "B->D" , "D->F", "E->B",  "F->G","F->H"]
  // }
]

minBroadcast(testCases[0].data)