class FollowSystem {
  constructor() {
    this.followersMap = new Map(); // Key: 사용자, Value: 팔로워 사용자들
    this.followingMap = new Map(); // Key: 사용자, Value: 팔로잉 사용자들
  }

  follow(from, to) {
    if (!this.followersMap.has(to)) {
      this.followersMap.set(to, new Set());
    }

    const isNewFollow = !this.followersMap.get(to).has(from);

    this.followersMap.get(to).add(from);

    if (!this.followingMap.has(from)) {
      this.followingMap.set(from, new Set());
    }
    this.followingMap.get(from).add(to);

    // console.log("followersMap : ", this.followersMap);
    // console.log("followingMap : ", this.followingMap);

    return isNewFollow;
  }

  unfollow(from, to) {
    if (this.followersMap.has(to)) {
      const isUnfollowed = this.followersMap.get(to).delete(from);

      if (isUnfollowed) {
        this.followingMap.get(from).delete(to);
      }

      return isUnfollowed;
    }

    return false;
  }

  followerCount(userId) {
    return this.followersMap.has(userId)
      ? this.followersMap.get(userId).size
      : 0;
  }

  followingCount(userId) {
    return this.followingMap.has(userId)
      ? this.followingMap.get(userId).size
      : 0;
  }

  isMutualFollowing(user1Id, user2Id) {
    if (!this.followersMap.has(user1Id) || !this.followersMap.has(user2Id)) {
      return false;
    }

    const user1Followers = this.followersMap.get(user1Id);
    const user2Followers = this.followersMap.get(user2Id);

    return user1Followers.has(user2Id) && user2Followers.has(user1Id);
  }

  commonFollowList(user1Id, user2Id) {
    if (!this.followingMap.has(user1Id) || !this.followingMap.has(user2Id)) {
      return [];
    }

    const user1 = this.followingMap.get(user1Id);
    const user2 = this.followingMap.get(user2Id);

    // console.log(user1, user2);
    // console.log("followersMap : ", this.followersMap);
    // console.log("followingMap : ", this.followingMap);

    return [...user1].filter((user) => user2.has(user));
  }
}

const system = new FollowSystem();

console.log(system.follow("A", "B")); // true
console.log(system.follow("A", "C")); // true
console.log(system.follow("C", "A")); // true
console.log(system.follow("C", "B")); // true
console.log(system.followerCount("A")); // 1
console.log(system.followingCount("A")); // 2
console.log(system.isMutualFollowing("A", "C")); // true
console.log(system.commonFollowList("A", "C")); // ['B']
console.log(system.unfollow("A", "C")); // true
console.log(system.followingCount("A")); // 1
console.log(system.isMutualFollowing("A", "C")); // false
