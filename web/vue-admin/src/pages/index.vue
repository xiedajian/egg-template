<!--Add "scoped" attribute to limit CSS to this component only -->
<
<style scoped lang="less">
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
        height: auto;
        min-height: 1000px;
    }
</style>

<template>
    <el-container>
        <el-header>Header</el-header>
        <el-container>

y            <el-aside width="200px" style="background-color:#545c64">

                <!-- 手风琴菜单 -->
                <el-menu :default-openeds="['1']" :collapse="isCollapse" unique-opened="true" router="true"
                         background-color="#545c64"  class="el-menu-vertical-demo"
                         text-color="#fff"
                         active-text-color="#ffd04b">

                    <el-submenu  v-for='(item, key, index) in menus' :index="index" :key="item.label">
                        <template slot="title"><i class="el-icon-message"></i>{{index}}{{item.label}}</template>
                        <el-menu-item-group>
                            <!--<template slot="title">分组一</template>-->
                            <!--<el-menu-item index="/index/banner">选项1</el-menu-item>-->
                            <el-menu-item v-for='(v, k, i) in item.child'  :index="v.path" :key="v.label">{{v.label}}</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>

                </el-menu>
            </el-aside>

            <el-main>
                <router-view/>
            </el-main>
        </el-container>
    </el-container>

</template>

<script>
    import menus from '../menu/menu.js'
	export default {
		name: 'Index',
		data() {
			return {
				isCollapse: false,       // 是否水平折叠手风琴菜单

                // 路由列表
				menus: menus
			}
		},

		methods: {
			exit() {
				window.localStorage.removeItem('userAuth');
				this.$router.push({name: 'LoginPage'})
			},
			handleScroll() { //改变元素#searchBar的top值
				let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
				let offsetTop = document.querySelector('.page').offsetTop;

				if (scrollTop > 10) {
					this.isPageHdFixed = true
				} else {
					this.isPageHdFixed = false
				}
			},
		},
		mounted() {
			if (!window.localStorage.getItem('userAuth')) {
				this.$router.push({name: 'LoginPage'})
			}
			window.addEventListener('scroll', this.handleScroll)
		}
	}
</script>
