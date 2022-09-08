radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    if (sentClientID == false) {
        Client_ID = 1
        radio.sendNumber(Client_ID)
        sentClientID = true
    }
})
input.onButtonPressed(Button.B, function () {
    if (sentClientID == false) {
        Client_ID = 2
        radio.sendNumber(Client_ID)
        sentClientID = true
    }
})
let Client_ID = 0
let sentClientID = false
sentClientID = false
radio.setGroup(137)
basic.pause(100)
radio.sendString("")
basic.pause(100)
let waterCount = 25
basic.forever(function () {
	
})
