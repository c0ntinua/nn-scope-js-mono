let dual = (r,d) => [r,d];
let dualSum = (x,y) => [x[0]+y[0],x[1]+y[1]];
let dualProduct = (x,y) => [x[1]*y[0],y[1]*x[0]];
let dualExp = (x) => [Math.exp(x[0]), Math.exp(x[1])];
let dualTanh = (x) => [Math.tanh(x[0]), x[1]*(1 - Math.tanh(x[0])**2)];
let dualNeg = (x) => [-x[0],-x[1]];
let dualLoss = (dualFunction, dualData) => {
    let loss = dual(0,0);
    for (let datum of dualData) {
        diff = dualSum(dualFunction(datum.x), dualNeg(datum.y));
        loss = dualSum(loss, dualProduct(diff,diff));
    }
    return dualProduct(loss,dual(0.5/d.size,0));
}