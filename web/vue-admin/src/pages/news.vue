<template>
  <div class="page">
      news 设置页
      <wangeditor></wangeditor>
  </div>
</template>

<script>
	import wangeditor from '@/components/wangEditor'

export default {
  name: 'News',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
	components: {
		wangeditor
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
