"use strict";
var age = 178;
console.log(age);
var Person;
(function (Person) {
    Person["nan"] = "\u7537\u4EBA";
    Person["nv"] = "\u5973\u4EBA";
    Person["yao"] = "\u5996";
})(Person || (Person = {}));
console.log(Person.nan);
