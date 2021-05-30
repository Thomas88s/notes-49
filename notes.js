var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
 


const notes = [
    {
        id: 1,
        subject: "HTML",
        date: "05/25/21",
        feeling: "confident",
        timeSpent: "6 hours",
        dateCreated: "05/19/21"
    },
    {
        id: 2,
        subject: "CSS",
        date: "05/26/21",
        feeling: "energetic",
        timeSpent: "5 hours",
        dateCreated: "05/19/21"
    }
]
console.log(notes)      

const noteAboutToday = {
        id: 3,
        subject: "basic js",
        date: "05/27/21",
        feeling: "relaxed",
        timeSpent: "4 hrs",
        dateCreated: "05/19/21"
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

const searchTerm = "energetic"

for (const note of notes) {
    if (note.feeling === searchTerm) {
        console.log(note)
    }
}

const createNote = (note) =>  {
    const lastIndex = notes.length - 1
    const currentLastNote = notes[lastIndex]
    const maxId = currentLastNote.id
    const idForNewNote = maxId + 1

    note.dateCreated = dateTime
    note.id = idForNewNote
    notes.push(note)
    }

    const moreNewerNote = {
        subject: "Space Java",
        feeling: "futuristic",
        timeSpent: "years",
        dateCreated: "05/26/21052"
    }

    const newNote = {
        subject: "Testing date/time",
        feeling: "good",
        timeSpent: "1 hour",
    }
    createNote(moreNewerNote)
    createNote(newNote)
    console.log(notes)
     