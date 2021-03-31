class ActiveRecord {
    Deleted = false;
}

class Person extends ActiveRecord {
    constructor(firstName :  string, lastName : string) {
        super()
        this.FirstName = firstName;
        this.LastName = lastName;
    }
    FirstName : string;
    LastName : string;
}

type Constructor<T ={}> = new(...args: any[]) => T;

function RecordStatus<T extends Constructor>(base : T) {
    return class extends base {
        Deleted : boolean = false;
    }
}

function Timestamp<T extends Constructor>(base : T) {
    return class extends base {
        Updated : Date = new Date();
    }
}

const ActivePerson = RecordStatus(Timestamp(Person));

let activePerson = new ActivePerson("Peter", "O'Halon");
activePerson.Deleted = true;

console.log(activePerson);