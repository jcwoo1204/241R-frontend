const ellipse = {
  width: 10,
  height: 5,
  /* TODO */
getArea() {
      return Math.PI * this.width * this.height;
  },
  getPerimeter() {
      return 2 * Math.PI * Math.sqrt((this.height ** 2 + this.width ** 2) / 2);
  },
  getEccentricity() {
      return Math.sqrt(1 - (this.height / this.width) ** 2);
  },
}
