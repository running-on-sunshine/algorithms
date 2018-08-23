// ======================================================================== // 
//                              Lattice Paths                               //
// ======================================================================== //
//                                                                          //
// Instructions:                                                            //
// -----------------------------------------------------------------------  //
// Starting in the top left corner of a 2×2 grid, and only being able to    //
// move to the right and down, there are exactly 6 routes to the bottom     //
// right corner.                                                            //
//                                                                          //
// How many such routes are there through a 20×20 grid? In an n x n grid?   //                                                                         //
// ------------------------------------------------------------------------ //

// ======================================================================== //
//                             With 'For' Loop                              //
// ======================================================================== //

let countPaths = (size) => {
    let previousDiagonal = [1];

    for (let i = 0; i < 2*size; i++) {
        let nextDiagonal = [];

        for (let j = 0; j < previousDiagonal.length + 1; j++) {
            let sum = (previousDiagonal[j-1] || 0)
            + (previousDiagonal[j] || 0);
            nextDiagonal.push(sum);
        }

        previousDiagonal = nextDiagonal;
    }

    return previousDiagonal[size];
};

// console.log(countPaths(3));
// console.log(countPaths(4));
console.log(countPaths(20));

// ========================================================================= //
//                               With Recursion                              //
// ========================================================================= //

// let countPaths = (width, height) => {
//     if (width === 0 || height === 0) {
//         return 1;
//     }
//     return countPaths(width, height - 1)
//         + countPaths(width - 1, height);
// };

// console.log(countPaths(3, 3));
// console.log(countPaths(4, 4));
// console.log(countPaths(20, 20));