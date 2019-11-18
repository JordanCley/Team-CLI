class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.title = 'Employee';
        this.email = email;
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return this.title = 'Employee';
    }
}

module.exports = Employee;

// * name
//   * id
//   * title
//   * getName()
//   * getId()
//   * getEmail()
//   * getRole() // Returns 'Employee'
