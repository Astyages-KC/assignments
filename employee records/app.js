employees = [];

function Records(name, title, salary, status) {
    this.name = name
    this.title = title
    this.salary = salary
    this.status = "Full Time"
    }
        Records.prototype.printEmployeeForm = function () {
            console.log(this)
        }

// const employees = new Records("Name", "Job Title", "Salary", "Status")

const Bob = new Records("Bob", "V School Instructor", "$3000/hour", "Part time")
const Marc = new Records("Marc", "V School intern", "$5/hour", "Part time")
const Bill = new Records("Bill", "Windows CEO", "$1.3 million/hour", "Part time")
const Kevin = new Records("Kevin", "V School seat holder", "$0.01/hour", "Full time")

// printEmployeeForm = Records()
Marc.status = "Part time"
employees.push(marc)

console.log(Bob.printEmployeeForm())
console.log(Marc.printEmployeeForm())
console.log(Bill.printEmployeeForm())
console.log(Kevin.printEmployeeForm())