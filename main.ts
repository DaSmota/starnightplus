let star: Sprite = null
let meteor: Sprite = null
scene.setBackgroundColor(12)
info.startCountdown(30)
game.onUpdateInterval(750, function () {
    meteor = sprites.createProjectileFromSide(img`
        . . . . . . . . c c c c . . . . 
        . . . . c c c c c c c c c . . . 
        . . . c f c c a a a a c a c . . 
        . . c c f f f f a a a c a a c . 
        . . c c a f f c a a f f f a a c 
        . . c c a a a a b c f f f a a c 
        . c c c c a c c b a f c a a c c 
        c a f f c c c a b b 6 b b b c c 
        c a f f f f c c c 6 b b b a a c 
        c a a c f f c a 6 6 b b b a a c 
        c c b a a a a b 6 b b a b b a . 
        . c c b b b b b b b a c c b a . 
        . . c c c b c c c b a a b c . . 
        . . . . c b a c c b b b c . . . 
        . . . . c b b a a 6 b c . . . . 
        . . . . . . b 6 6 c c . . . . . 
        `, randint(30, 80), 0)
    meteor.setPosition(0, randint(5, 115))
})
game.onUpdateInterval(500, function () {
    star = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 5 . . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . 5 5 5 5 5 5 5 5 5 . . . 
        . . . . . 5 5 5 5 5 5 5 . . . . 
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . 5 5 5 5 5 5 5 . . . . 
        . . . . . 5 5 . . . 5 5 . . . . 
        . . . . 5 5 . . . . . 5 5 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, randint(-10, -50), 0)
    star.setPosition(160, randint(5, 115))
})
