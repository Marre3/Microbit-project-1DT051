radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    if (sentClientID == false) {
        Client_ID = 1
        radio.sendNumber(Client_ID)
        sentClientID = true
    } else if (selectedWaterAmount > 0) {
        selectedWaterAmount += -1
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    if (sentClientID == false) {
        Client_ID = 2
        radio.sendNumber(Client_ID)
        sentClientID = true
    } else if (selectedWaterAmount < 25) {
        selectedWaterAmount += 1
    } else {
    	
    }
})
let Client_ID = 0
let selectedWaterAmount = 0
let sentClientID = false
sentClientID = false
radio.setGroup(137)
basic.pause(100)
radio.sendString("")
basic.pause(100)
let waterCount = 25
selectedWaterAmount = 5
basic.forever(function () {
	
})
