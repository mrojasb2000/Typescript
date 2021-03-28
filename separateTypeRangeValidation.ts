class SeparateTypeRangeValidation extends RangeValidationBase {
    IsInRangeString(value : string) : boolean {
        return this.RangeCheck(this.GetNumber(value));
    }
    IsInRangeNumber(value : number) : boolean {
        return this.RangeCheck(value);
    }

}