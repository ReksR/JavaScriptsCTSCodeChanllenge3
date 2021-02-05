const Mark = {
  fullName: "Mark Nichole",
  Mass: 80,
  height: 1.4,
  BMI: function() {
    this.BM = this.Mass / (this.height * this.height);
    return this.BM;
  }
};

const John = {
  fullName: "Mark Nichole",
  Mass: 90,
  height: 1.9,
  BMI: function() {
    this.BM = this.Mass / (this.height * this.height);
    return this.BM;
  }
};

if (Mark.BMI() < John.BMI()) {
  console.log("Mark is Healthy");
} else {
  console.log("john is healthy");
}

console.log(Mark, John);
