export class User {
        userId:number;
        email:string;
        firstName:string;
        lastName:string;
        phoneNumber:string;
        address:string;
        city:string;
        state:string;
        user:User[];

    constructor(userResponse: any){
        this.userId = userResponse.userId;
        this.firstName = userResponse.firstName;
        this.lastName = userResponse.lastName;
        this.phoneNumber = userResponse.phoneNumber;
        this.address = userResponse.address;
        this.city = userResponse.city;
        this.state = userResponse.state;
    }

    // get User():any{
    //     return this.userId;
    // }

    // set User(newUser:any):{
    //     this._user = newUser;
    // }
}
