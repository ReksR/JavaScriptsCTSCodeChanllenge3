
function Tips(amountPaid) {
var tip;
  if (amountPaid < 50) {
     tip = amountPaid * 0.2
    } else if (amountPaid>=50 && amountPaid<=200) {
      tip = amountPaid * 0.15
          }
    else {
      tip = amountPaid * 0.10
    }
return tip
}

var paid = [ 124, 48, 268]
var percen =
 [Tips(paid[0]),Tips(paid[1]),Tips(paid[2])]

var totalPaid = [ paid[0] + percen[0] ,
paid[1] + percen[1] ,
paid[2] + percen[2] ]

console.log(percen)
console.log(totalPaid)