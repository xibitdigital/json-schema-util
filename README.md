# JSON schema util
This is a utility to validate data against a JSON schema.

```
// set a json schema
const schema = {
  type: "object",
  properties: {
    testNum: {
      type: "number"
    },
    testString: {
      type: "string"
    }
  }
};
```

Validation success:
```
const data = { testNum: 1 };
const res = validate(data, schema);

console.log(res.isValid) // true
```

Validation error:
```
const data = { testNum: 'a', testString: 1 };
const res = validate(data, schema);

console.log(res.isValid) // false
console.log(res.errors)  // {isValid: false, errors: {{ value: 'a', property: 'tesnNum', message: '...'}}};

```
