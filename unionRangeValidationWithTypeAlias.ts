type StringOrNumber = string | number;
class UnionRangeValidationWithTypeAlias extends RangeValidationBase {
    IsInRange(value : StringOrNumber) : boolean {
        if (typeof value == "number"){
            return this.RangeCheck(value);
        }
        return this.RangeCheck(this.GetNumber(value));
    }
}