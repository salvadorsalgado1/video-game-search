module.exports = {
    publicPath: ProcessingInstruction.NODE_ENV === 'production'
    ? '/video-game-search/'
    : '/'
}