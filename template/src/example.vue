<template>
	<div @click="changeName()">
		Hello, {{name}}.
	</div>
</template>

<script>
export default {
	name : 'example',
	data() {
		return {
			name : 'world'
		};
	},
	methods : {
		changeName() {
			this.name = 'foobar';
		}
	}
};
</script>

<style lang="less" scoped>
div {
	font-weight: bold;
}
</style>