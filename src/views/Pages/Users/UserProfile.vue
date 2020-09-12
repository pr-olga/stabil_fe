<template>
  <div id="user-profile">
    <div class="container">
      <div class="row">
        <div class="col-md-2 margin-top--90"><img src="../../../assets/profile_placeholder_cropped.jpg" class="rounded-circle user-profile__img" alt="Circle image">
        <p class="mt-3">
          profile-id: {{this.user.id}}<br>
          <b>playing since: </b> <br>{{this.user.created}}
        </p>
        </div>
        <div class="col-md-10">
           <h1 class="user-profile__name text-center">{{this.user.name}}</h1>
              <ul>
                <list-transition :duration="duration[0]">
                  <li class="list-group-item list-group-item-st">Amount of Games: {{this.games.length}}</li>
                 </list-transition>
                 <list-transition :duration="duration[1]">
                  <li class="list-group-item list-group-item-st">Victories: <b>{{this.victory}}</b></li>
                 </list-transition>
                <list-transition :duration="duration[2]">
                  <li class="list-group-item list-group-item-st">Lost: {{this.lost}}</li>
                 </list-transition>
                <list-transition :duration="duration[3]">
                  <li class="list-group-item list-group-item-st">Whites: {{this.whites}}</li>
                 </list-transition>
                 <list-transition :duration="duration[4]">
                  <li class="list-group-item list-group-item-st">Blacks: {{this.blacks}}</li>
                </list-transition>
                <list-transition :duration="duration[5]">
                  <div class="mt-4 text-center">
                    <button type="button" class="btn btn-outline-info mr-5">more statistics</button>
                    <button type="button" class="btn btn-outline-danger">compare</button>
                  </div>
                </list-transition>
              </ul>
              <charts :options="charOptionsBar" class="chart-box">
              </charts>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from '@/services/UserService'
import ListDurationTransition from '@/components/Animations/ListDurationTransition'
import Echarts from 'vue-echarts'
import * as echarts from 'echarts/dist/echarts.js'
import 'echarts/lib/chart/line'

export default {
  data () {
    return {
      user: [],
      games: [],
      victory: '',
      lost: '',
      whites: '',
      blacks: '',
      duration: [300, 500, 700, 900, 1000, 1100], // make the stuff dynamically
      charOptionsBar: {
        backgroundColor: '#080b30',
        title: {
          text: 'Progress',
          textStyle: {
            align: 'center',
            color: '#fff',
            fontSize: 20
          },
          top: '5%',
          left: 'center'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            lineStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0,
                  color: 'rgba(0, 255, 233,0)'
                }, {
                  offset: 0.5,
                  color: 'rgba(255, 255, 255,1)'
                }, {
                  offset: 1,
                  color: 'rgba(0, 255, 233,0)'
                }],
                global: false
              }
            }
          }
        },
        grid: {
          top: '15%',
          left: '5%',
          right: '5%',
          bottom: '15%'
        },
        xAxis: [{
          type: 'category',
          axisLine: {
            show: true
          },
          splitArea: {
            // show: true,
            color: '#f00',
            lineStyle: {
              color: '#f00'
            }
          },
          axisLabel: {
            color: '#fff'
          },
          splitLine: {
            show: false
          },
          boundaryGap: false,
          data: []
        }],
        yAxis: [{
          type: 'value',
          min: 0,
          // max: 140,
          splitNumber: 4,
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255,255,255,0.1)'
            }
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false,
            margin: 20,
            textStyle: {
              color: '#d1e6eb'

            }
          },
          axisTick: {
            show: false
          }
        }],
        series: [{
          name: '注册总量',
          type: 'line',
          // smooth: true, //是否平滑
          showAllSymbol: true,
          // symbol: 'image://./static/images/guang-circle.png',
          symbol: 'circle',
          symbolSize: 25,
          lineStyle: {
            normal: {
              color: '#6c50f3',
              shadowColor: 'rgba(0, 0, 0, .3)',
              shadowBlur: 0,
              shadowOffsetY: 5,
              shadowOffsetX: 5
            }
          },
          label: {
            show: true,
            position: 'top',
            textStyle: {
              color: '#6c50f3'
            }
          },
          itemStyle: {
            color: '#6c50f3',
            borderColor: '#fff',
            borderWidth: 3,
            shadowColor: 'rgba(0, 0, 0, .3)',
            shadowBlur: 0,
            shadowOffsetY: 2,
            shadowOffsetX: 2
          },
          tooltip: {
            show: false
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(108,80,243,0.3)'
              },
              {
                offset: 1,
                color: 'rgba(108,80,243,0)'
              }
              ], false),
              shadowColor: 'rgba(108,80,243, 0.9)',
              shadowBlur: 20
            }
          },
          data: []
        },
        {
          name: '注册总量',
          type: 'line',
          // smooth: true, //是否平滑
          showAllSymbol: true,
          // symbol: 'image://./static/images/guang-circle.png',
          symbol: 'circle',
          symbolSize: 25,
          lineStyle: {
            normal: {
              color: '#00ca95',
              shadowColor: 'rgba(0, 0, 0, .3)',
              shadowBlur: 0,
              shadowOffsetY: 5,
              shadowOffsetX: 5
            }
          },
          label: {
            show: true,
            position: 'top',
            textStyle: {
              color: '#00ca95'
            }
          },

          itemStyle: {
            color: '#00ca95',
            borderColor: '#fff',
            borderWidth: 3,
            shadowColor: 'rgba(0, 0, 0, .3)',
            shadowBlur: 0,
            shadowOffsetY: 2,
            shadowOffsetX: 2
          },
          tooltip: {
            show: false
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(0,202,149,0.3)'
              },
              {
                offset: 1,
                color: 'rgba(0,202,149,0)'
              }
              ], false),
              shadowColor: 'rgba(0,202,149, 0.9)',
              shadowBlur: 20
            }
          },
          data: []
        }
        ]
      }
    }
  },
  components: {
    listTransition: ListDurationTransition,
    charts: Echarts
  },
  beforeRouteEnter (to, from, next) {
    UserService.getUser(to.params.id).then((val) => {
      next(vm => {
        vm.user = val.data
        vm.games = vm.user.players[0]
        vm.victory = vm.games.filter((x) => x.victory != null).length
        vm.lost = vm.games.length - vm.victory
        vm.whites = vm.games.map(x => x.whites).reduce((a, b) => a + b)
        vm.blacks = vm.games.map(x => x.blacks).reduce((a, b) => a + b)
      })
    })
  },
  created () {
    UserService.getUser(this.$route.params.id).then((val) => {
      this.charOptionsBar.xAxis[0].data = val.data.players[0].map(e => e.id)
      this.charOptionsBar.series[0].data = (val.data.players[0].map(e => e.whites))
      this.charOptionsBar.series[1].data = (val.data.players[0].map(e => e.victory))
    })
  }
}
</script>

<style lang="scss" scoped>
.user-profile{
  &__name {
    font-size: 56px;
  }
  &__img {
    height: 150px;
    width: 150px;
    padding-top: 5px;
    padding-right: 5px;
    border: 1.5px solid #ff284a;
  }
}

.margin-top--90{
  margin-top: 90px;
}

.chart-box{
  padding-left: 40px;
}
.echarts {
  width: 100%;
}
</style>
