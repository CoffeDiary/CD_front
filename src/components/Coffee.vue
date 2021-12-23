<template>
	<div>
		<h2>Coffee</h2>
		<ul class="wrap">
			<li class="item" v-for="(item, idx) in items" :key="{idx}">
				<a :href="item.link" target="_blank">
					<img :src="item.img">
					<span class="tit">종류 - {{item.name}}</span>
				</a>
				<span class="tag" v-if="item.isUpdate">N</span>
			</li>
		</ul>
	</div>
</template>
<script>
export default{
	props: {
		items: { type: Array, default: () => [] }
	},
}
</script>

<style scoped>
h2 {
	text-align: center;
}
a {
	list-style: none;
	text-decoration: none;
}
li {
	list-style: none;
}
.wrap {
	max-width: 450px;
	width: 100%;
	margin: 0 auto;		/* 요소의 네 방향 바깥 여백 설정 */
}
.item {
	position: relative;		/* 요소 박스에 대한 상대 좌표를 나타내는 2차원 좌표 */
	border-bottom: 1px solid #ebebeb;
	margin-bottom: 25px;
}
.tit {
	display: inline-block;
	font-size: 18px;
	font-weight: bold;
	color: #000;
	padding: 20px 15px;		/* 요소의 네 방향 안쪽 여백 영역을 설정함 */
}
img {
	width: 100%;
	background: #ebebeb;
	border-radius: 30px;
}

.tag {
	position: absolute;
	left: 10px;
	top: 10px;
	padding: 5px 30px;
	color: #fff;
	border-radius: 4px;
	background: #fc2332;
	font-weight: bold;
}
</style>
