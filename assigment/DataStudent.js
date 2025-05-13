
    fetch("https://v-dresevic.github.io/Advanced-JavaScript-Programming/data/students.txt")
    .then(response => {
        if (response.status !== 200)
        {
            throw new Error ("Ceva nu a mers cum trebuie.")
        }
        return response.text()
    })

    .then(data => {
        console.log(data)
    })

    .catch(error => {
        console.log("Ceva nu a mers cum trebuie", error)
    })



    






