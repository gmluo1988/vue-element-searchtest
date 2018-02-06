<template>
	<div class="selectbtns">
		<el-row>
			<el-col :span="6">
				<div>
					<el-select v-model="apitype" placeholder="请选择搜索接口类型" clearable id="firstbtn">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</div>
			</el-col>
			<el-col :span="10">
				<div v-if="apitype" id="secondbtn">
					<div v-if="apitype==1">
						<TicketSearchMode :scenedata="scenedata"></TicketSearchMode>
					</div>
					<div v-if="apitype==2">
						<ActivityGongGe :scenedata="scenedata"></ActivityGongGe>
						<ActivitySearchMode :scenedata="scenedata"></ActivitySearchMode>
					</div>
					<div v-if="apitype==3">
						<AutoCompleteSearchType :scenedata="scenedata"></AutoCompleteSearchType>
					</div>
				</div>
			</el-col>
			<el-col :span="8" class="searchBtn">
				<p v-if="sourcetitle">您选择的是:<strong><font color="#409EFF">{{sourcetitle}}</font></strong></p>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import TicketSearchMode from './TicketSearchMode.vue'

	import ActivityGongGe from './ActivityGongGe.vue'
	import ActivitySearchMode from './ActivitySearchMode.vue'

	import AutoCompleteSearchType from './AutoCompleteSearchType.vue'

	export default {
		data() {
			return {
				//报文数据
				source: '',
				//    	设置接口类型
				apitype: '',
				options: [{
					value: '1',
					label: '门票接口'
				}, {
					value: '2',
					label: '玩乐接口'
				}, {
					value: '3',
					label: '联想词接口'
				}],
				scenedata: {
					ticketsearchmode: '-1',
					activitygongge: '-1',
					activitysearchmode: '-1',
					autocompletesearvhtype: '-1',
				}
			}
		},
		components: {
			TicketSearchMode,
			ActivityGongGe,
			ActivitySearchMode,
			AutoCompleteSearchType
		},
		computed: {
			sourcetitle: function() {
				if(this.apitype == 1) {
					if(this.scenedata.ticketsearchmode == 0) {
						return "门票接口/默认列表页";
					}
					if(this.scenedata.ticketsearchmode == 1) {
						return "门票接口/周边列表页";
					}
					if(this.scenedata.ticketsearchmode == 2) {
						return "门票接口/只取本地列表页";
					}
					if(this.scenedata.ticketsearchmode == 3) {
						return "门票接口/周边加本地列表页";
					}
					if(this.scenedata.ticketsearchmode == 4) {
						return "门票接口/关键字搜索列表页";
					}
					if(this.scenedata.ticketsearchmode == 5) {
						return "门票接口/附近搜索列表页";
					}
					if(this.scenedata.ticketsearchmode == 6) {
						return "门票接口/景点补偿列表页";
					}
					if(this.scenedata.ticketsearchmode == 7) {
						return "门票接口/目的地列表页";
					}
					//					if(this.scenedata.ticketsearchmode==-1){
					//						return  "门票接口";
					//					}
					else {
						return "门票接口";
					}
				} else if(this.apitype == 2) {
					var title = "玩乐接口";
					if(this.scenedata.activitygongge >= 0) {
						if(this.scenedata.activitygongge == 0) {
							title += "/默认宫格入口";
							if(this.scenedata.activitysearchmode >= 0) {
								if(this.scenedata.activitysearchmode == 0) {
									return title + "/默认搜索列表";
								}
								if(this.scenedata.activitysearchmode == 1) {
									return title + "/本地搜索列表";
								}
								if(this.scenedata.activitysearchmode == 2) {
									return title + "/周边搜索列表";
								}
								if(this.scenedata.activitysearchmode == 3) {
									return title + "/关键字搜索列表";
								}
								if(this.scenedata.activitysearchmode == 4) {
									return title + "/附近搜索列表";
								}
								if(this.scenedata.activitysearchmode == 5) {
									return title + "/目的地搜索列表";
								}
							} else {
								return title;
							}
						}
						if(this.scenedata.activitygongge == 1) {
							title += "/景点玩乐宫格入口";
							if(this.scenedata.activitysearchmode >= 0) {
								if(this.scenedata.activitysearchmode == 0) {
									return title + "/默认搜索列表";
								}
								if(this.scenedata.activitysearchmode == 1) {
									return title + "/本地搜索列表";
								}
								if(this.scenedata.activitysearchmode == 2) {
									return title + "/周边搜索列表";
								}
								if(this.scenedata.activitysearchmode == 3) {
									return title + "/关键字搜索列表";
								}
								if(this.scenedata.activitysearchmode == 4) {
									return title + "/附近搜索列表";
								}
								if(this.scenedata.activitysearchmode == 5) {
									return title + "/目的地搜索列表";
								}
							} else {
								return title;
							}
						}
						if(this.scenedata.activitygongge == 2) {
							title += "/旅游宫格入口";
							if(this.scenedata.activitysearchmode >= 0) {
								if(this.scenedata.activitysearchmode == 0) {
									return title + "/默认搜索列表";
								}
								if(this.scenedata.activitysearchmode == 1) {
									return title + "/本地搜索列表";
								}
								if(this.scenedata.activitysearchmode == 2) {
									return title + "/周边搜索列表";
								}
								if(this.scenedata.activitysearchmode == 3) {
									return title + "/关键字搜索列表";
								}
								if(this.scenedata.activitysearchmode == 4) {
									return title + "/附近搜索列表";
								}
								if(this.scenedata.activitysearchmode == 5) {
									return title + "/目的地搜索列表";
								}
							} else {
								return title;
							}
						}
						if(this.scenedata.activitygongge == 3) {
							title += "/一日游宫格入口";
							if(this.scenedata.activitysearchmode >= 0) {
								if(this.scenedata.activitysearchmode == 0) {
									return title + "/默认搜索列表";
								}
								if(this.scenedata.activitysearchmode == 1) {
									return title + "/本地搜索列表";
								}
								if(this.scenedata.activitysearchmode == 2) {
									return title + "/周边搜索列表";
								}
								if(this.scenedata.activitysearchmode == 3) {
									return title + "/关键字搜索列表";
								}
								if(this.scenedata.activitysearchmode == 4) {
									return title + "/附近搜索列表";
								}
								if(this.scenedata.activitysearchmode == 5) {
									return title + "/目的地搜索列表";
								}
							} else {
								return title;
							}
						}
						if(this.scenedata.activitygongge == 4) {
							title += "/WIFI宫格入口";
							if(this.scenedata.activitysearchmode >= 0) {
								if(this.scenedata.activitysearchmode == 0) {
									return title + "/默认搜索列表";
								}
								if(this.scenedata.activitysearchmode == 1) {
									return title + "/本地搜索列表";
								}
								if(this.scenedata.activitysearchmode == 2) {
									return title + "/周边搜索列表";
								}
								if(this.scenedata.activitysearchmode == 3) {
									return title + "/关键字搜索列表";
								}
								if(this.scenedata.activitysearchmode == 4) {
									return title + "/附近搜索列表";
								}
								if(this.scenedata.activitysearchmode == 5) {
									return title + "/目的地搜索列表";
								}
							} else {
								return title;
							}
						}
						if(this.scenedata.activitygongge == 5) {
							title += "/其他宫格入口";
							if(this.scenedata.activitysearchmode >= 0) {
								if(this.scenedata.activitysearchmode == 0) {
									return title + "/默认搜索列表";
								}
								if(this.scenedata.activitysearchmode == 1) {
									return title + "/本地搜索列表";
								}
								if(this.scenedata.activitysearchmode == 2) {
									return title + "/周边搜索列表";
								}
								if(this.scenedata.activitysearchmode == 3) {
									return title + "/关键字搜索列表";
								}
								if(this.scenedata.activitysearchmode == 4) {
									return title + "/附近搜索列表";
								}
								if(this.scenedata.activitysearchmode == 5) {
									return title + "/目的地搜索列表";
								}
							} else {
								return title;
							}
						}

					} else {
						return title;
					}

				} else if(this.apitype == 3) {
					if(this.scenedata.autocompletesearvhtype == 1) {
						return "联想词接口/地面搜索类型";
					}
					if(this.scenedata.autocompletesearvhtype == 2) {
						return "联想词接口/纯门票搜索类型";
					}
					if(this.scenedata.autocompletesearvhtype == 3) {
						return "联想词接口/纯玩乐搜索类型";
					}
					if(this.scenedata.autocompletesearvhtype == 4) {
						return "联想词接口/玩乐混排门票搜索类型";
					}
					if(this.scenedata.autocompletesearvhtype == 5) {
						return "联想词接口/只出一日游产品搜索类型";
					}
					if(this.scenedata.autocompletesearvhtype == 6) {
						return "联想词接口/只出攻略目的地且返回城市ID搜索类型";
					} else {
						return "联想词接口";
					}

				} else {
					return '';
				}

			}
		},
		methods: {

		}
	}
</script>

<style>

</style>