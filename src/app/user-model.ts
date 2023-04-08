export class UserModel {
    constructor(
        public name:string,
        public email :string,
        public phone :number,
        public courses :string,
        public address :Address
    ){
        
    }
}
export class Address {
    constructor(
        public street :string,
        public city :string,
        public state : string
    )
    {

    }
}