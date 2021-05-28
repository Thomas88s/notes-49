const notes = [
    {
        id: 1,
        subject: "HTML",
        date: "05/25/21",
        feeling: "confident",
        timeSpent: "6 hours"
    },
    {
        id: 2,
        subject: "CSS",
        date: "05/26/21",
        feeling: "energetic",
        timeSpent: "5 hours"
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

for (const note of notes) {
    console.log(`Note ${note.id}
 ${note.date}
 I learned ${note.subject}.
 I spent ${note.timeSpent} working on it.
 I feel ${note.feeling}
 --------   `)
}
