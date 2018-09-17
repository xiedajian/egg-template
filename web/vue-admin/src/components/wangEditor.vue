<!-- 封装富文本编辑器 wangEditor -->
<!-- 文档：https://www.kancloud.cn/wangfupeng/wangeditor3/335782 -->

<template>
    <div class="ue-box">
        <button @click="getEditorContent">获取富文本内容</button>
        <div ref="editorElem" style="text-align:left" @change="getEditorContent"></div>
    </div>
</template>

<script>
	import WangEditor from 'wangeditor';

	export default {
		name: 'WangEditor',
		data() {
			return {
				dataInterface: {
					editorUpImgUrl: 'http://xxxx'  // 编辑器插入的图片上传地址
				},
				editor: '',
				editorContent: '',
			}
		},
		mounted() {
			// 创建编辑器
			this.editor = new WangEditor(this.$refs.editorElem)

			// 插入网络图片的校验
			this.editor.customConfig.linkImgCheck = function (src) {
				console.log(src) // 图片的链接

				return true // 返回 true 表示校验成功
				// return '验证失败' // 返回字符串，即校验失败的提示信息
			}
			// 插入网络图片的回调
			this.editor.customConfig.linkImgCallback = function (url) {
				console.log(url) // url 即插入图片的地址
			}
			// 插入链接的校验
			this.editor.customConfig.linkCheck = function (text, link) {
				console.log(text) // 插入的文字
				console.log(link) // 插入的链接

				return true // 返回 true 表示校验成功
				// return '验证失败' // 返回字符串，即校验失败的提示信息
			}
			// 点击富文本区域会触发onfocus函数执行
			this.editor.customConfig.onfocus = function () {
				console.log("onfocus")
			}
			// 如果当前有手动获取焦点的富文本并且鼠标点击富文本以外的区域，则会触发onblur函数执行
			this.editor.customConfig.onblur = function (html) {
				// html 即编辑器中的内容
				console.log('onblur', html)
			}
			// 编辑器内容发生变化
			this.editor.customConfig.onchange = function (html) {
				// html 即变化之后的内容
				console.log(html)
			}

			/**
			 * 本地上传图片
             * 1.模式一： 图片转base64
             * 2.模式二： 图片上传之后图片地址链接插入
             * 两种模式只能选一种
			 */

//			this.editor.customConfig.uploadImgShowBase64  = true

			// 配置服务器端地址
			this.editor.customConfig.uploadImgServer = 'http://127.0.0.1:7001/admin/upload'
			// 将图片大小限制为 3M
			this.editor.customConfig.uploadImgMaxSize  =  3 * 1024 * 1024
			// 限制一次最多上传 5 张图片
			this.editor.customConfig.uploadImgMaxLength = 5
			this.editor.customConfig.uploadFileName = 'yourFileName'


			this.editor.create()
		},
		methods: {
			// 获取内容
			getEditorContent() {
				this.editorContent = this.editor.txt.html()
				console.log(this.editorContent);
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .ue-box {
        /*background: #0d8ddb;*/
    }
</style>
