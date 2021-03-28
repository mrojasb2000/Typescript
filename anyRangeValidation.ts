class AnyRangeValidation extends RangeValidationBase {
    IsIsRange(value : number) : boolean {
        if (typeof value === "number") {
            return this.RangeCheck(value);
        } else if (typeof value === "string") {
            return this.RangeCheck(this.GetNumber(value));
        }
        return false;
    }
}