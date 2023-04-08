 class Obj {
    constructor(
        public userName:string,
        public email: string,
        public countryCode:string,
        public phone:string,
        public gender :string,
        public designation:string,
        public manager:string,
        public address :{
             street :string,
                postalcode : string,
                city : string,
                state :string
       }

    )
    {

    }
}

export const myObject = new Obj("atharv","atharvkad9922@gmail.com","+91","7083387528","Male","Software Engineer trainee","VB",{street:"alandi road",postalcode:"411039",city:"pune",state:"Maharashtra"});

