function sqareCircumference(square) {
    const a  = square.width
    if(!a || a <= 0) {
        return 0;
    }
    return(4*a);
}

module.exports = sqareCircumference;