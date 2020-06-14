function squareArea(square) {
    const a  = square.width
    if(!a || a <= 0) {
        return 0;
    }
    return(a*a);
}

module.exports = squareArea;