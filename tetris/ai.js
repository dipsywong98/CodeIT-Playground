function AI(heightWeight, linesWeight, holesWeight, bumpinessWeight){
    this.heightWeight = heightWeight;
    this.linesWeight = linesWeight;
    this.holesWeight = holesWeight;
    this.bumpinessWeight = bumpinessWeight;
};

AI.prototype._best = function(grid, workingPieces, workingPieceIndex){
    var best = null;
    var bestScore = null;
    var workingPiece = workingPieces[workingPieceIndex];
    var bestRotation = 0
    for(var rotation = 0; rotation < 4; rotation++){
        var _piece = workingPiece.clone();
        for(var i = 0; i < rotation; i++){
            _piece.rotate(grid);
        }

        while(_piece.moveLeft(grid));

        while(grid.valid(_piece)){
            var _pieceSet = _piece.clone();
            while(_pieceSet.moveDown(grid));

            var _grid = grid.clone();
            _grid.addPiece(_pieceSet);

            var score = null;
            if (workingPieceIndex == (workingPieces.length - 1)) {
                score = -this.heightWeight * _grid.aggregateHeight() + this.linesWeight * _grid.lines() - this.holesWeight * _grid.holes() - this.bumpinessWeight * _grid.bumpiness();
            }else{
                score = this._best(_grid, workingPieces, workingPieceIndex + 1).score;
            }
            // console.log(score)

            if (score > bestScore || bestScore == null){
                bestScore = score;
                best = _piece.clone();
                bestRotation = rotation
            }
            
            _piece.column++;
        }
    }
    // console.log('best column',best.column)
    if(best===null)return{piece:workingPiece,score:0,rotation:0,column:0}
    return {piece:best, score:bestScore,rotation:bestRotation,column:best.column};
};

AI.prototype.best = function(grid, workingPieces){
    return this._best(grid, workingPieces, 0);
};

module.exports = AI
