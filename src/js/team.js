export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(player) {
    if (this.members.has(player)) {
      throw new Error('The hero was added before');
    } this.members.add(player);
  }

  addAll(...players) {
    players.forEach((player) => this.members.add(player));
  }

  toArray() {
    return Array.from(this.members);
  }
}
