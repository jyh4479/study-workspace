const getParent = (parent, a) => {
    if (parent[a] === a) return a;
    else return getParent(parent, parent[a]);
}

const find = (parent, a, b) => {
    return getParent(parent, a) === getParent(parent, b);
}

const union = (parent, a, b) => {
    const x = getParent(parent, a);
    const y = getParent(parent, b);

    if (x > y) parent[a] = b;
    else parent[b] = a;
}

const main = () => {
    const parent = [...new Array(10).keys()];

    union(parent, 0, 5);
    union(parent, 5, 3);
}

main();