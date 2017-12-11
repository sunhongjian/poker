<template>
  <div class="card" :class="cardStyle">
    <span>{{name}}</span>
  </div>
</template>

<script>
export default {
  name: 'Poker',
  props: {
    // 枚举类型 1: ♣, 2: ♦, 3: ♥, 4: ♠
    type: {
      type: Number,
    },
    name: {
      type: [String, Number],
    },
    size: {
      type: String,
      default: 'normal',
    },
  },
  computed: {
    cardStyle() {
      switch (this.type) {
        case 1:
          return 'suitdiamonds';
        case 2:
          return 'suitclubs';
        case 3:
          return 'suitspades';
        case 4:
          return 'suithearts';
        default:
          return '';
      }
    },
  },
};
</script>

<style scoped lang="less">
.card {  
  position: relative;  
  margin-right: 10px;  
  width: 120px;  
  height: 100%; 
  border-radius: 10px;  
  background: #fff;  
  box-shadow: 3px 3px 7px rgba(0,0,0,0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  min-width: 100px;
  span {
    margin: 0;
    font-family: Georgia, Times New Roman, serif;
    overflow: hidden;
    font-size: 50px;
  }  
}
.suitdiamonds:before, .suitdiamonds:after {  
  content: "♦";  
  color: #ff0000;  
}  
         
.suithearts:before, .suithearts:after {  
  content: "♥";  
  color: #ff0000;  
}  
         
.suitclubs:before, .suitclubs:after {  
  content: "♣";  
  color: #000;  
}  
         
.suitspades:before, .suitspades:after {  
  content: "♠";  
  color: #000;  
} 
div[class*='suit']:before {  
  position: absolute;  
  font-size: 35px;  
  left: 5px;  
  top: 5px;  
}  
        
div[class*='suit']:after {  
  position: absolute;  
  font-size: 35px;  
  right: 5px;  
  bottom: 5px;  
}  
</style>
