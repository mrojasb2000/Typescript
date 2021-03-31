//let currentUser = {user: "peter", roles : [{role:"user"}, {role:"admin"}] };
let currentUser = {user: "Mavro", roles: [{role:"user"}]};


@Role("admin")
class RestrictedClass {
    constructor() {
        console.log(`Inside the constructor`);
    }
    Validate() {
        console.log(`Validating`);
    }
}

function Role(role : string) {
    return function(constructor : Function) {
        if(!IsInRole(role)) {
            throw new Error(`The user is not authorized to access this class`);
        }
    }
}


function IsInRole(role: string) : boolean {
    return currentUser.roles.some(r => r.role === role);
}

