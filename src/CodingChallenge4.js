const Mark = {
  fullName : "Mark Nichole" ,
  Mass : 80,
  height: 1.40,
  BMI: function () {
    this.BMI = (this.Mass/(this.height*this.height))
    return this.BMI
  }
}


const John = {
  fullName : "Mark Nichole" ,
  Mass : 90,
  height: 1.90,
  BMI: function () {
    this.BMI = (this.Mass/(this.height*this.height)) 
    return this.BMI
  }
}


if (Mark.BMI()<John.BMI()){
  console.log("Mark is Healthy")
}else{
 console.log( "john is healthy")
}

console.log(Mark,John)