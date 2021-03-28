class UnionRangeValidation extends RangeValidationBase {
    IsInRange(value : string | number) : boolean {
        if (typeof value == "number"){
            return this.RangeCheck(value);
        }
        return this.RangeCheck(this.GetNumber(value));
    }
}