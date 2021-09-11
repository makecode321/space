controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        5 5 2 2 2 2 2 2 2 2 2 2 . . . . 
        . 5 5 5 5 5 5 5 5 5 5 2 2 . . . 
        5 5 2 2 2 2 2 2 2 2 2 2 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 200, 0)
    music.sonar.play()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 500)
    sprite.destroy()
    music.beamUp.play()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.disintegrate, 500)
    scene.cameraShake(4, 500)
    music.smallCrash.play()
})
let ennemy_ship: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
info.setLife(7)
effects.starField.startScreenEffect()
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    4 4 4 4 4 . . . . . . . . . . . 
    . . 6 6 6 6 6 6 . . . . . . . . 
    . . . 6 6 6 6 6 6 6 6 . . . . . 
    . . . a 6 8 8 8 8 8 8 8 8 . . . 
    . . a a a 6 6 6 6 6 6 6 6 6 . . 
    . . a a a 6 6 6 6 6 6 6 6 6 6 . 
    . . . a 6 8 8 8 8 8 8 8 8 6 . . 
    . . 6 6 6 6 6 6 6 6 6 6 6 . . . 
    . . 6 6 6 6 6 . . . . . . . . . 
    4 4 4 4 4 . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
game.onUpdateInterval(2000, function () {
    ennemy_ship = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . . a 2 2 5 5 . . . . . 
        . . . . a a a 2 a a . . . . . . 
        . . . . a 2 2 2 . . . . . . . . 
        . . . a a 2 2 2 . . . . . . . . 
        . . . a 2 2 2 2 . . . . . . . . 
        . . 2 2 2 2 2 2 . . . . . . . . 
        . . . a a 2 2 2 . . . . . . . . 
        . . . . a a 2 2 a a . . . . . . 
        . . . . . a a 2 2 5 5 . . . . . 
        . . . . . . . a a a . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    ennemy_ship.x = scene.screenWidth()
    ennemy_ship.vx = -21
    ennemy_ship.y = randint(10, scene.screenHeight() - 10)
})
