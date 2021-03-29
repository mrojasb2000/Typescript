interface IDecoratorExample {
    AnyoneCanRun(args:string) : void;
    AdminOnly(args:string) : void;
}
class NoRoleCheck implements IDecoratorExample {
    AnyoneCanRun(args: string): void {
        if(!IsInRole("user")) {
            console.log(`${currentUser.user} is not in the user role`);
            return;
        }
        console.log(args);
    }   
    AdminOnly(args: string): void {
        if(!IsInRole("admin")) {
            console.log(`${currentUser.user} is not in the admin role`);
            return;
        }
        console.log(args);
    }
}

class DecorateExampleMethodDecoration implements IDecoratorExample {
    @Role("user")
    AnyoneCanRun(args: string): void {
       console.log(args);
    }
    //@Admin
    @Role("admin")
    AdminOnly(args: string): void {
        console.log(args);
    }
}
function Role(role : string) {
    return function(target : any, propertyKey :  string | symbol, descriptor : PropertyDescriptor) {
        let originalMethod = descriptor.value;
        descriptor.value = function() {
            if (IsInRole(role)) {
                originalMethod.apply(this, arguments);
                return;
            }
            console.log(`${currentUser.user} is not in the ${role} role`)
        }
        return descriptor;
    }
}

function Admin(target: any, propertyKey :  string | symbol, descriptor : PropertyDescriptor) {
    let originalMethod = descriptor.value;
    descriptor.value = function() {
        if (IsInRole(`admin`)) {
            originalMethod.apply(this, arguments);
            return;
        }
        console.log(`${currentUser.user} is not in the admin role`)
    }
    return descriptor;
}

function IsInRole(role: string) : boolean {
    return currentUser.roles.some(r => r.role === role);
}

let currentUser = {user: "peter", roles : [{role:"user"}, {role:"admin"}] };
//let currentUser = {user: "Mavro", roles: [{role:"user"}]};
function TestDecoratorExample(decoratorMethod : IDecoratorExample) {
    console.log(`Current user ${currentUser.user}`);
    decoratorMethod.AnyoneCanRun(`Running as user`);
    decoratorMethod.AdminOnly(`Running as admin`);       
}
//TestDecoratorExample(new NoRoleCheck());
TestDecoratorExample(new DecorateExampleMethodDecoration());