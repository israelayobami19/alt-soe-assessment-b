function validateSchema (obj, schema) {
    const schemaKeys = Object.keys(schema);

    if (Object.keys(obj).length !== schemaKeys.length) {
        return false
    }

    for (const key of schemaKeys) {
        if (!(key in obj) || typeof obj[key] !== schema[key]) {
            return false
        }
    }

    return true;
}
const schema = 
    { 
        name: 'string', 
        age: 'number', 
        isAdmin: 'boolean'
    };
console.log(validateSchema({ name: 'Ada', age: 21, isAdmin: false }, schema));
console.log(validateSchema({ name: 'Ada', age: '21'}, schema));