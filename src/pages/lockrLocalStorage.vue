<template>
  <div class="lockr_warp">
    <input v-model="lockrtype" class="inputBox" placeholder="enter type">
    <input v-model="lockrval" class="inputBox" placeholder="enter val">
    <button class="btn" @click="lockrset()">set to lockr</button>
    <button class="btn" @click="lockrget()">get from lockr</button>
    <button class="btn" @click="lockrsadd()">adds a unique value to a particular set under a hash key to lockr</button>
    <button class="btn" @click="lockrsmembers()">Returns the values of a particular set under a hash key.</button>
    <button class="btn" @click="lockrclear()">use lockr clear lockrdata</button>
    <button class="btn" @click="lockrgetall()">use lockr log</button>
    <button class="btn" @click="clear()">clear all</button>
    <button class="btn" @click="log()">log</button>
  </div>
</template>
<script>
import mock from './../util/mockdata'
import Lockr from 'lockr'
export default {
  name: "lockr",
  data(){
    return{
      message:'',
      lockrData:'',
      lockrtype:'',
      lockrval:''
    }
  },
  // 获取原有数据
  computed: {
    sessGet(){
      return this.$store.getters.sess;
    }
  },
  methods: {
    lockrset(){
      var _this = this
      // 前缀，会加在所有lockr方式存储的数据头部
      // Lockr.prefix = 'lockr_';
      Lockr.set(_this.lockrtype, _this.lockrval);
    },
    lockrget(){
      var _this = this
      console.log(Lockr.get(_this.lockrtype))
    },
    lockrsadd(){
      var _this = this

      // 加入到一个对象的数组内
      Lockr.sadd(_this.lockrtype, _this.lockrval);
      Lockr.sadd(_this.lockrtype, _this.lockrval + '-shadow');
    },
    lockrsmembers() {
      var _this = this
      // 会返回key值下面的数组
      // 可以用Lockr.sismember - arguments [ key, value ]搜索数组
      console.log(Lockr.smembers(_this.lockrtype))
    },
    lockrgetall(){
      console.log(Lockr.getAll(true))
    },
    lockrclear(){
      Lockr.flush();
    },
    clear(){
      console.log('all clear!')
      console.log('---------------')
      // 使用dispatch分发可以在action的内部异步分发
      return this.$store.dispatch('clearAll');
    },
    log(){
      console.log('session:')
      console.log(sessionStorage)
      console.log('local:')
      console.log(localStorage)
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
  // width: 150px;
  height: 150px;
  font-size: 40px;
  border: none;
  outline: none;
  border-radius: 10px;
  display: block;
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
