export class Quote {
    public showDescription:boolean;
    constructor(public name:string,  public description:string ,public author:string, public likes:number, public dislike:number){
        this.showDescription=true;

    }
    
}
