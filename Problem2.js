function diffObjects(oldObj, newObj) {
    const result = {
        added: {},
        removed: {},
        changed: {}
    };

    const allKeys = new set([...Object.keys(oldObj), ...Object.keys(newObj)]);

    for (const key of allKeys) {
        const hasOld = key in oldObj;
        const hasNew = key in newObj;

        if (!hasOld && hasNew) {
            result.added[key] = newObj[key];
        } else if (hasOld && !hasNew) {
            result.removed[key] = oldObj[key];
        } else if (oldObj[key] !== newObj[key]) {
            result.changed[key] = {
                old: oldObj[key],
                new: newObj[key]
            };
        }
    }

    return result;
}
console.log(diffObjects(
    {
        name: 'Setemi', role: 'Engineer', country: 'Jamaica'
    },
    { name: 'Setemi', role: 'Senior Engineer', city: 'Kingston'}
))