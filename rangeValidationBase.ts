class RangeValidationBase {
    constructor(private start : number, private end : number) {}
    protected RangeCheck(value : number) : boolean {
        return value >= this.start && value <= this.end;
    }
    protected GetNumber(value : string) : number {
        return new Number(value).valueOf();
    }
}