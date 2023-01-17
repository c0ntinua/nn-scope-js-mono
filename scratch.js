let dual = (r,d) => [r,d];

let dualSum = (x,y) => [x[0]+y[0],x[1]+y[1]];
let dualProduct = (x,y) => [x[1]*y[0],y[1]*x[0]];
let dualExp = (x) => [Math.exp(x[0]), Math.exp(x[1])];
let dualTanh = (x) => [Math.tanh(x[0]), x[1]*(1 - Math.tanh(x[0])**2)];


function addNode(nodesSoFar, layer) {
    let node = {sources : [], layer : layer};
    for (let i = 0; i < nodesSoFar.length; i++) {
        if (n.layer = neuron.layer - 1) neuron.sources.push()
    }
    nodesSoFar.push(node);
    return nodesSoFar;
}

function addNode(net, lay) {
    let m = {sources : [], pos : net.length, lay : lay};
    for (n in net) if (n.lay = m.lay - 1) m.sources.push(n.pos);
}

let addNode = (net, lay) => {
    let m = {sources : [], pos : net.length, lay : lay};
    for (n of net) if (n.lay == m.lay - 1) m.sources.push(n.pos);
    net.push(m);
    return net;
}
let inputsOf = (net) => {
    let inputs = [];
    for (n of net) if (n.sources.length == 0) inputs.push(n.pos);
    return inputs;
}
let outputsOf = (net) => {
    let poss = new Set([...Array(net.length).keys()]);
    for (let n of net) for (let s of n.sources) if (poss.has(s)) poss.delete(s);
    return [...poss.values()];
}