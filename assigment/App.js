import { Student } from "./Student.js";



fetch("https://v-dresevic.github.io/Advanced-JavaScript-Programming/data/students.txt")
  .then(response => {
    if (response.status !== 200) {
      throw new Error("Ceva nu a mers cum trebuie.");
    }
    return response.text();
  })
  .then(text => {
    const linii = text.trim().split('\n');
    const studenti = [];

    for (let i = 0; i < linii.length; i += 4) {
      const name = linii[i]?.trim();
      const address = linii[i + 1]?.trim();
      const phone = linii[i + 2]?.trim();
      const course = linii[i + 3]?.trim();

    

      // Verificăm dacă toate câmpurile sunt prezente
      if (name && address && phone && course) {
        studenti.push({ name, address, phone, course });
        let student = new Student(name, address, phone, course)
        student.getInfo()
       }
    
    }

  })
  .catch(error => {
    console.error("Eroare la citirea fișierului:", error);
  });



    






