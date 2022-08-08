//https://leetcode.com/problems/design-parking-system/
//Easy

class ParkingSystem {
  private big: number
  private medium: number
  private small: number

  constructor(big: number, medium: number, small: number) {
    this.big = big
    this.medium = medium
    this.small = small
  }

  addCar(carType: number): boolean {
    if (carType === 1 && this.big !== 0) {
      return this.big-- > 0
    } else if (carType === 2 && this.medium !== 0) {
      return this.medium-- > 0
    } else if (carType === 3 && this.small !== 0) {
      return this.small-- > 0
    } else return false
  }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
let Parking = new ParkingSystem(1, 3, 2)
console.log(Parking.addCar(1))
console.log(Parking.addCar(2))
console.log(Parking.addCar(2))
console.log(Parking.addCar(2))
console.log(Parking.addCar(2))
console.log(Parking.addCar(3))
console.log(Parking.addCar(3))
console.log(Parking.addCar(3))
