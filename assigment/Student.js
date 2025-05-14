class Student {
    constructor(name, address, phone, course) {

        this.Name = name;
        this.Address = address;
        this.Phone = phone;
        this.Course = course;
    }

    getInfo() {
        let div = document.getElementById("app");
        let anotherDiv = document.createElement("div");
        anotherDiv.innerHTML = `
        <p><strong>Name:</strong> ${this.Name}</p>
        <p><strong>Address:</strong> ${this.Address}</p>
        <p><strong>Phone:</strong> ${this.Phone}</p>
        <p><strong>Course:</strong> ${this.Course}</p>
        <hr>
    `;

        div.appendChild(anotherDiv)
    };

}




export { Student };