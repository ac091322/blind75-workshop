/*
Input:
const shapes = [
  {type: 'SQUARE', edge:[4]},
  {type: 'TRIANGLE', edge:[3,4]},
  {type: 'CIRCLE', edge: [1] },
];

Output:
calculateArea(shapes)
  .then(res => console.log(res))
  .catch(err=>console.log(err))
// after 2s, the result would be [16,6,3.14]
*/


function calculateArea(shapesObj) {
    return new Promise((resolve, _reject) => {
        let result = [];

        for (let shape of shapesObj) {
            if (shape.type === "SQUARE") {
                result.push(shape.edge[0] ** 2);
            } else if (shape.type === "TRIANGLE") {
                result.push(shape.edge[0] * shape.edge[1] / 2);
            } else {
                result.push(shape.edge[0] * 3.14);
            }
        }

        setTimeout(() => {
            resolve(result);
        }, 2_000);
    });
}

calculateArea([
    { type: "SQUARE", edge: [4] },
    { type: "TRIANGLE", edge: [3, 4] },
    { type: "CIRCLE", edge: [1] }
])
    .then((res) => console.log(res)) // [16, 6, 3.14]
    .catch((err) => console.log(err));
