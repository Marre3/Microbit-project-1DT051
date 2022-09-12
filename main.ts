radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    if (sentClientID == false) {
        Client_ID = 1
        radio.sendNumber(Client_ID)
        sentClientID = true
        initializeWaterSelectScreen()
    } else if (selectedWaterAmount > 0) {
        selectedWaterAmount += -1
    } else {
    	
    }
})
function initializeWaterSelectScreen () {
    waterCount = 25
    selectedWaterAmount = 5
    blinkOn = true
    onWaterSelectScreen = true
}
input.onButtonPressed(Button.B, function () {
    if (sentClientID == false) {
        Client_ID = 2
        radio.sendNumber(Client_ID)
        sentClientID = true
        initializeWaterSelectScreen()
    } else if (selectedWaterAmount < 25) {
        selectedWaterAmount += 1
    } else {
    	
    }
})
input.onGesture(Gesture.Shake, function () {
    if (sentClientID) {
        radio.sendValue(convertToText(Client_ID), selectedWaterAmount)
    }
})
function updateWaterDisplay (totalWater: number, selectedWater: number) {
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            if (y * 5 + x == selectedWater - 1) {
                if (blinkOn) {
                    led.plot(x, y)
                } else {
                    led.unplot(x, y)
                }
            } else {
                if (y * 5 + x < totalWater) {
                    led.plot(x, y)
                } else {
                    led.unplot(x, y)
                }
            }
        }
    }
}
radio.onReceivedValue(function (name, value) {
    basic.showNumber(value)
})
let blinkOn = false
let waterCount = 0
let Client_ID = 0
let selectedWaterAmount = 0
let onWaterSelectScreen = false
let sentClientID = false
sentClientID = false
onWaterSelectScreen = false
radio.setGroup(137)
basic.pause(100)
radio.sendString("")
basic.pause(100)
basic.forever(function () {
    if (onWaterSelectScreen) {
        blinkOn = !(blinkOn)
        updateWaterDisplay(waterCount, selectedWaterAmount)
        basic.pause(100)
    }
})
