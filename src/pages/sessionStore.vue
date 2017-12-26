<template>
  <div class="sess_warp">
    <input v-model="sess" class="inputBox" placeholder="enter something">
    <button class="btn" @click="saveToSession()">save</button>
    <button class="btn" @click="clear()">clear</button>
    <button class="btn" @click="log()">log</button>
    <button class="btn" @click="logSession()">logSession</button>
  </div>
</template>
<script>
import mock from './../util/mockdata'
export default {
  name: "sess",
  data(){
    return{
      message:'',
      sess:''
    }
  },
  // computed: mapState({
  //   count: message => state.message,
  // }),
  // 获取原有数据
  computed: {
    sessGet(){
      return this.$store.getters.sess;
    }
  },
  methods: {
    sessSave(e){
      // 直接分发 mutation 必须同步执行
      this.$store.dispatch('sessSave', e)
    },
    saveToSession(){
      this.sessSave(this.sess)
    },
    clear(){
      // 使用dispatch分发可以在action的内部异步分发
      return this.$store.dispatch('sessClear','sess');
    },
    logSession(){
      console.log('session:')
      console.log(window.sessionStorage.getItem("sess"))
      console.log('---------------')
    },
    log(){
      console.log('$store.state:')
      console.log(this.$store.state)
      console.log('---------------')
    }
  },
  mounted() {
    this.$store.dispatch('mockDataSave', mock)
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
  margin: 20px;
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
