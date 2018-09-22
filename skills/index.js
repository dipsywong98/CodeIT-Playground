const solve = require('./skills')

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
        offense: 5,
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
