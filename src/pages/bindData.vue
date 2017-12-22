<template>
  <div class="bind_warp">
    <!-- 给 <input> 中绑定 value，然后侦听 input 或者 change 事件，在事件回调中调用 action: -->
    <input :value="message" @input="messageSave" class="inputBox" placeholder="@input">

    <input v-model="message" class="inputBox" placeholder="vmodel">

    <button class="btn" @click="log()">log</button>
  </div>
</template>
<script>
import store from "./../store";
import { mapState, mapMutations } from "vuex";
import mock from './../util/mockdata'
export default {
  name: "state",
  store,
  data(){
    return{
      message:''
    }
  },
  // computed: mapState({
  //   count: message => state.message,
  // }),
  computed: {
    messageGet(){
      return this.$store.getters.message;
    }
  },
  methods: {
    messageSave(e){
      this.$store.commit('messageSave', e.target.value)
    },
    log(){
      console.log('$store.state:')
      console.log(this.$store.state)
      console.log('---------------')
    }
  },
  mounted() {
    this.$store.commit('mockDataSave', mock)
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

.inputBox{
  outline: none;
  border: 2px solid #ffa1a5;
  height: 40px;
  width: 100%;
  margin: 40px auto;
}
</style>
