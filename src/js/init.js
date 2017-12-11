class Poker {
  constructor(suit, point) {
    this.suit = suit;
    this.point = point;
    this.name = this.getPokerName();
  }
  getPokerName() {
    const point = this.point;
    switch (point) {
      case 17:
        return '大';
      case 16:
        return '小';
      case 15:
        return '2';
      case 14:
        return 'A';
      case 13:
        return 'K';
      case 12:
        return 'Q';
      case 11:
        return 'J';
      default:
        return point;
    }
  }
}

export default class Game {
  /**
   * @param {int} x 游戏人数
   * @param {int} y 使用几幅扑克
   */
  constructor(x, y) {
    this.playerCount = x;
    this.pokersCount = y;
  }
  init() {
    this.pokers = [];
    this.dealIdx = 0; // 分牌序列
    for (let i = 0; i < this.playerCount; i += 1) {
      this.pokers.push([]);
    }
    const allPokers = this.allPokers();
    this.deal(allPokers);
    return this.pokers[0];
  }
  // 分牌
  deal(allPokers) {
    const randomNum = Math.round(Math.random() * (allPokers.length - 1));
    this.pokers[this.dealIdx].push(allPokers[randomNum]);
    this.dealIdx = this.dealIdx === (this.playerCount - 1) ? 0 : this.dealIdx + 1;
    allPokers.splice(randomNum, 1);
    if (allPokers.length > 0) {
      this.deal(allPokers);
    }
  }
  // 获取全部牌
  allPokers() {
    const poker = [];
    for (let ps = 0; ps < this.pokersCount; ps += 1) {
      for (let i = 3; i <= 17; i += 1) {
        if (i <= 15) {
          // 普通牌
          let k = 0;
          while (k < 4) {
            k += 1;
            poker.push(new Poker(k, i));
          }
        } else {
          // 王牌
          poker.push(new Poker(1, i));
        }
      }
    }
    return poker;
  }
}
