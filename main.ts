input.onSound(DetectedSound.Loud, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
    }
    basic.clearScreen()
})
input.setSoundThreshold(SoundThreshold.Loud, 43)
