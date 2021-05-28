const notes = [
    {
        id: 1,
        subject: "",
        date: "",
        feeling: "",
        timeSpent: ""
    },
    {
        id: 2,
        subject: "",
        date: "",
        feeling: "",
        timeSpent: ""
    }
]
console.log(notes)      

const noteAboutToday = {
        id: 1,
        subject: "basic js",
        date: "05/27/21",
        feeling: "relaxed",
        timeSpent: "4 hrs"
}

notes.push(noteAboutToday)

console.log(notes)