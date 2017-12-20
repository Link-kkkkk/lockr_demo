<template>
  <div class="state_warp">
    <h3>{{$store.state.count}}</h3>
    <div>
        <button class="btn" @click="add()">+</button>
        <button class="btn" @click="reduce()">-</button>
        <button class="btn" @click="change()">change</button>
    </div>
  </div>
</template>
<script>
import store from "./../store";
import { mapState, mapMutations } from "vuex";

export default {
  name: "state",
  store,
  data(){
    return{
      state:null,
    }
  },
  computed: mapState({
    // 写在computed里面比较好，每一次改变都会重写一次
    count: state => state.count //把$store.state.count 注入给当前实例data，不用重新声明
  }),
  methods: {
    add() {
      this.$store.commit("add")
    },
    reduce() {
      this.$store.commit("reduce")
    },
    change(){
      console.log(this.count)
    }
  },
  mounted() {
   
  }
};
</script>
<style lang="less" scoped>
.btn {
  width: 200px;
  height: 200px;
  font-size: 40px;
  border: none;
  outline: none;
  border-radius: 20px;
  display: inline-block;
  cursor: pointer;
  background-image: linear-gradient(45deg, #ff9a9e 0%, #fad0c4 100%);
  &:active {
    background-image: linear-gradient(45deg, #ffa1a5 0%, #fad8cf 100%);
  }
}
</style>
