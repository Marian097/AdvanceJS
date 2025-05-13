class Student {
            constructor(name, address, phone, course)
            {

                this.Name = name;
                this.Address = address;
                this.Phone = phone;
                this.Course = course;
            }

            getInfo(){
                return `Name: ${this.Name}, Address: ${this.Address}, Phone: ${this.Phone}, Course: ${this.Course};`
            }
        }




export {Student};