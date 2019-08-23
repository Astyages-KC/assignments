var eventsAtWork = ["work", "pretend to work", "party", "work", "meeting", "party", "daily grind", "work", "party"]
for (var i=0; i<9; i++) {
    if (eventsAtWork[i] === "party") {
        console.log("horray");
    }
}

var booleans = [true, true, false, true, false, false, false]
let count = 0;
for (let i=0; i < booleans.length; i++) {
    if(booleans[i]) {
        count++
    }
}
console.log(count)

var users = [
    {
        name: "frank",
        age: 18

    }
]

for (let i = 0; i < users.length; i++) {
    users[i].isAdmin = false
}
console.log(users)