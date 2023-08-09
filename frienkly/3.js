var WeightedRandomCollection = function () {
  this.elements = [];
  this.totalWeight = 0;
};

WeightedRandomCollection.prototype.add = function (userId) {
  const existingIndex = this.elements.findIndex(
    (item) => item.userId === userId
  );
  if (existingIndex === -1) {
    this.elements.push({ userId, weight: 1 });
    this.totalWeight++;
    return true;
  } else {
    this.elements[existingIndex].weight++;
    this.totalWeight++;
    return false;
  }
};

WeightedRandomCollection.prototype.delete = function (userId) {
  const existingIndex = this.elements.findIndex(
    (item) => item.userId === userId
  );
  if (existingIndex !== -1) {
    if (this.elements[existingIndex].weight > 1) {
      this.elements[existingIndex].weight--;
    } else {
      this.elements.splice(existingIndex, 1);
      this.totalWeight--;
    }
    return true;
  }
  return false;
};

WeightedRandomCollection.prototype.pickRandom = function () {
  if (this.totalWeight === 0) return null;

  const randomIndex = Math.floor(Math.random() * this.totalWeight);
  let currentWeight = 0;
  // console.log("randomIndex >>> ", randomIndex);

  for (const { userId, weight } of this.elements) {
    currentWeight += weight;
    if (currentWeight > randomIndex) {
      return userId;
    }
  }
  return null;
};

const obj = new WeightedRandomCollection();
console.log(obj.add(1)); // true
console.log(obj.add(1)); // false
console.log(obj.add(2)); // true
console.log(obj.add(1)); // false
console.log(obj.add(2)); // false
console.log(obj.add(2)); // false
console.log(obj.delete(1)); // true
console.log(obj.delete(2)); // true
console.log(obj.delete(2)); // true
console.log(obj.delete(2)); // false
console.log(obj.pickRandom()); // 1 or null
