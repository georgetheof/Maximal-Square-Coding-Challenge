function MaximalSquare(strArr) {
    if (strArr.every(x => { return (x.indexOf('1') === -1)})) return '0'; //check if '1' character exists at least once
    let newArr = strArr.map(x => x.split('')); //format given array into a two dimensional array
    let maxSquare = 1;

    for (let i = 0, rows = newArr.length, cols = newArr[0].length; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (newArr[i][j] === '1') {
                let returnedSquare = findMaxSquare(newArr, i, j, 1);
                if (returnedSquare > maxSquare) maxSquare = returnedSquare;
            }
        }
    }
    
    return maxSquare*maxSquare;
}

function findMaxSquare (_2DArr, rows, cols, level) {
    if ((rows + level < _2DArr.length) && (cols + level < _2DArr[0].length)) {  
        let recurseMe = true;
        for (let i = 0; i <= level; i++) {
            if (!(_2DArr[rows + level][cols + i] === '1' &&
                  _2DArr[rows + i][cols + level] === '1')) {   //will check the square of a given element
                    recurseMe = false;                           //based on the level
            }
        }
    
        if (recurseMe) return findMaxSquare(_2DArr, rows, cols, ++level); //if the first square consists of '1'
    }                                                                       //function will recurse itself while increasing the level
    else return level;                                                      //in order to check the next bigger
}                                                                           //square from the given element

// keep this function call here 
MaximalSquare(readline());                            
