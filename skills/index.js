const PriorityQueue = require("js-priority-queue");
let parents = {};
let children = {};
let nodes = {};
let paths;
let availables;
let target;

const allOpenNodes = trace =>
  trace.reduce((prev, currv) => [...prev, ...children[currv]], []);

const dfs = (trace, offense, points) => {
  if (offense >= target) {
    console.log({trace,offense,points});
    paths.queue({path:trace,offense,points});
    return;
  } else {
    const opens = allOpenNodes(trace);
    // console.log({opens})
    if (opens.length === 0) {
      return;
    }
    opens.forEach(c =>{
      const newTrace = [...trace]
      if(newTrace.indexOf(c)===-1){
        newTrace.push(c)
        // console.log({newTrace})
        dfs([...trace, c], offense + nodes[c].offense, points + nodes[c].points)
      }
    }
    );
  }
  return;
};

const solve = data => {
  parents = { __beep: [] };
  children = { __beep: [] };
  nodes = {
    __beep: {
      name: "__beep",
      offense: 0,
      points: 0,
      require: null
    }
  };
  paths = new PriorityQueue({ comparator: (a, b) => a.points - b.points });
  target = data.boss.offense;
  initNodes(data.skills);
  dfs(["__beep"], 0, 0);
  return paths.peek().path.splice(1);
};

const initNodes = skills => {
  skills.forEach(skill => {
    registerNode(skill);
    const { name } = skill;
    nodes[name] = skill;
    if (skill.require) {
      parents[name].push(skill.require);
      children[skill.require].push(name);
    } else {
      parents[name].push('__beep')
      children.__beep.push(name)
    }
  });
};

const registerNode = skill => {
  const { name } = skill;
  if (!(name in nodes)) {
    nodes[name] = skill;
    children[name] = [];
    parents[name] = [];
  }
};

const testCases = [
  {
    boss: {
      name: "joker",
      offense: 11
    },
    skills: [
      {
        name: "Grapple Gun",
        offense: 5,
        points: 1,
        require: null
      },
      {
        name: "Hacking Device",
        offense: 6,
        points: 2,
        require: "Grapple Gun"
      },
      {
        name: "Remote",
        offense: 7,
        points: 3,
        require: "Hacking Device"
      },
      {
        name: "Bomb",
        offense: 20,
        points: 5,
        require: "Remote"
      },
      {
        name: "Inverted takedown",
        offense: 5,
        points: 1,
        require: null
      },
      {
        name: "Shockwave attack",
        offense: 8,
        points: 3,
        require: "Inverted takedown"
      }
    ]
  }
];

// const asyncS = async ()=>new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     console.log('hello world')
//     resolve(Math.random())
//   },1000)
// })

// const syncMain = async ()=>{
//   let x = await asyncS()
//   console.log(x)
// }

console.log(solve(testCases[0]));
