let children = {}
let parents = {}
let nodes = {}
let ancesters = {}

const minBroadcast = data => {
  initNodes(data)
  console.log({children,parents,nodes})
  generateAncesterList()
  console.log(ancesters)
  // reduceAncesterList()
}

const registerNode = node => {
  if(!(node in nodes)){
    children[node] = []
    parents[node] = []
    // ancesters[node] = []
    nodes[node] = true
  }
}

const initNodes = data => {
  children = {}
  parents = {}
  nodes = {}
  ancesters = {}
  const relations = data.map(str=>str.split('->'))
  relations.forEach(([p,c])=>{
    registerNode(p)
    registerNode(c)
    parents[c].push(p)
    children[p].push(c)
  })
}

const generateAncesterList = () => {
  let nodeSum = Object.keys(nodes).length
  console.log(nodeSum,Object.keys(ancesters).length)
  while(Object.keys(ancesters).length < nodeSum){
    const node = Object.keys(nodes).filter(node=>!(node in ancesters))[0]
    console.log('find ancestor of which is not in list'+node)
    findAncester(node)
  }
}

const findAncester = (node) => {
  const unvisitedParents = parents[node].filter(p=>!(p in ancesters))
  const visitedParents = parents[node].filter(p=>(p in ancesters))
  // console.log({node,unvisitedParents,visitedParents})
  if(!(node in ancesters)){
    ancesters[node] = [node]
  }
  visitedParents.forEach(p=>{
    ancesters[node].push(...ancesters[p])
  })
  if(unvisitedParents.length === 0){
    return ancesters[node]
  }
  unvisitedParents.forEach((p)=>{
    ancesters[node].push(...findAncester(p))
  })
  return ancesters[node]
}

let testCases = [
  {
    "data" : [ "A->B" , "A->C" , "B->D" , "E->F" ]
  },
  {
    "data" : [ "A->B" , "C->B" , "B->D" , "D->F", "E->B",  "F->G","F->H"]
  },
  {
    "data" : [ "A->B" , "C->B" , "B->D" , "D->F", "E->B",  "F->G","F->H","F->E"]
  }
]

minBroadcast(testCases[2].data)