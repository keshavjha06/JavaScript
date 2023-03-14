const accountId = 14453
let accountEmail = "keshavjha@gmail.com"
var accountPassword = "987654"
accountCity = "Hyderabad"

accountEmail = "keshavjha1@gmail.com"
accountPassword = "123456"
accountCity = "pune"

/*prefer not to use var because of issue in block scope and functional scope */

console.table([accountId, accountEmail, accountPassword, accountCity])