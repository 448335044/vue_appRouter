<template>
 <div>
  <div class="container">
    <!--顶部top-->
    <!-- <mt-header fixed title="fixed top"></mt-header>-->
    <mt-header title="玩安睡吧">
      <router-link to="/" slot="left">
        <mt-button icon="back"> < 返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <!--内容content-->
    <transition>
      <router-view></router-view>
    </transition>
    <!--底部footer-->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/message">
        <span class="mui-icon mui-icon-chat"><span class="mui-badge">0</span></span>
        <span class="mui-tab-label">消息</span>
      </router-link>
      <router-link class="mui-tab-item " to="/help">
        <span class="mui-icon mui-icon-extra mui-icon-extra-peoples"></span>
        <span class="mui-tab-label">传帮带</span>
      </router-link>

      <router-link class="mui-tab-item" to="/friend">
        <span class="mui-icon mui-icon-pengyouquan"></span>
        <span class="mui-tab-label">朋友圈</span>
      </router-link>
      <router-link class="mui-tab-item" to="/person">
        <span class="mui-icon mui-icon-person-filled"></span>
        <span class="mui-tab-label">个人中心</span>
      </router-link>
    </nav>
  </div>

 </div>
</template>

<script>

</script>

<style>
div{
  margin:0;
  padding:0
}
.container{
  overflow-x: hidden;
}
.v-enter{
  opacity: 0;
  transform:translateX(100%);
}
.v-leave-to{
  opacity: 0;
  transform:translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active{
  transition: all 0.5s ease;
}
</style>
