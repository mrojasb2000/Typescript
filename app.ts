let total : StringOrNumber = 10;
if (new UnionRangeValidationWithTypeAlias(0,100).IsInRange(total)) {
    console.log(`This value is in rabge`);
}