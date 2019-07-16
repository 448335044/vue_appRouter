<template>
    <div>
      <!--轮播图区域-->
      <mt-swipe :auto="4000">
        <mt-swipe-item></mt-swipe-item>
        <mt-swipe-item></mt-swipe-item>
        <mt-swipe-item></mt-swipe-item>
      </mt-swipe>
    </div>
</template>

<script>
    export default {}
</script>

<style>
.mint-swipe{
  height: 200px;
}
.mint-swipe-item:nth-child(1){
  background: url("../lib/img/01.jpg");
}
.mint-swipe-item:nth-child(2){
  background: url("../lib/img/0.jpg");
}
.mint-swipe-item:nth-child(3){
  background: url("../lib/img/01.jpg");
}
.mint-swipe-item img{
  width: 100%;
  height: 100%;
}
</style>
