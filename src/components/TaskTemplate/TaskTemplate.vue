<!--  -->
<template>
  <div class="body">
    <div class="content">
      <div class="item" v-for="(item, index) in contentList" :key="item.id">
        <div class="top">
          <div class="index">0{{ index + 1 }}</div>
          <div class="text">主任务01:</div>
          <div class="span">UI设计入门任务——扁平化图标设计与制作</div>
          <el-dropdown
            trigger="click"
            placement="bottom-end"
            v-if="true"
            class="dot"
          >
            <span class="el-dropdown-link">
              <Dot />
            </span>
            <el-dropdown-menu slot="dropdown">
              <div>
                <el-dropdown-item>编辑</el-dropdown-item>
              </div>
              <div>
                <el-dropdown-item>删除</el-dropdown-item>
              </div>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <el-collapse v-model="activeName1" @change="changeCollapse">
          <el-collapse-item
            v-for="(item1, index1) in item.content"
            :key="index1"
          >
            <template slot="title">
              <div class="task-desc">
                <div class="title">任务描述:</div>
                <div class="size">本任务在于考察学生的学科掌握情况</div>
              </div>
              <div class="add-task">
                <div class="add-img">
                  <img src="@/assets/image/course/ic_locking_off.svg" alt="" />
                </div>
                <div class="text" @click.stop="addTaskChild(item.id,item1.pid)">添加子任务</div>
              </div>
            </template>
            <div class="two-el-collapse-item">
              <el-collapse v-model="activeName2" @change="changeCollapse">
                <el-collapse-item
                  v-for="(item2, index2) in item1.content"
                  :key="index2"
                >
                  <template slot="title">
                    <div class="top1">
                      <div class="index">0{{ index2 + 1 }}</div>
                      <div class="text">子任务0{{ index2 + 1 }}:</div>
                      <div class="span">绘制单色图标</div>
                      <div class="dot" @click.stop>
                        <el-dropdown
                          trigger="click"
                          placement="bottom-end"
                          v-if="true"
                        >
                          <span class="el-dropdown-link">
                            <Dot />
                          </span>
                          <el-dropdown-menu slot="dropdown">
                            <div>
                              <el-dropdown-item>退出团队</el-dropdown-item>
                            </div>
                          </el-dropdown-menu>
                        </el-dropdown>
                      </div>
                    </div>
                  </template>

                  <div class="c-content">
                    <div class="type">
                      <span>任务类型:</span>
                      <el-select v-model="value" placeholder="请选择">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        >
                        </el-option>
                      </el-select>
                    </div>
                    <div class="des">
                      <div class="span">任务描述:</div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div class="goal">
                      <div class="span">任务得分:</div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div class="select">
                      <span>试卷选择:</span>
                      <div class="item">
                        <div class="img">
                          <img
                            src="@/assets/image/course/ic_class_invitation.svg"
                            alt=""
                          />
                        </div>
                        <div class="text">添加内容</div>
                      </div>
                    </div>
                    <Button name="保存" class="button" />
                  </div>
                </el-collapse-item>
              </el-collapse>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button/Button";
import Dot from "@/components/Dot/Dot";
export default {
  components: {
    Button,
    Dot,
  },
  props: {
    contentList: {
      type: Array,
      default:[
        {
          id: 0,
          content: [
            {
              pid: 0,
              content: [
                {
                  a: "",
                },
                {
                  b: "",
                },
              ],
            },
          ],
        },
        {
          id: 1,
          content: [
            {
              pid: 1,
              content: [
                {
                  a: "",
                },
              ],
            },
          ],
        },
      ],
    },
  },
  data() {
    return {
      activeName: 0,
      activeName1: 0,
      activeName2: 0,
      value: "",
      options:[],
    };
  },
  computed: {},

  mounted() {},

  methods: {
    changeCollapse(e) {
      console.log("e", e);
    },
    addTaskChild(id,pid) {
      this.$emit('addTaskChild',id,pid)
    }
  },
};
</script>
<style lang='scss' scoped>
.content {
     // width: 70%;
     margin: 0.32rem auto 0;
     .item {
         margin-top: 0.32rem;
         position: relative;
         .top {
             // position: relative;
             height: 0.8rem;
             width: 100%;
             background: #edeff3;
             opacity: 1;
             display: flex;
             align-items: center;
             .index {
                 width: 0.8rem;
                 height: 0.8rem;
                 background: #2a77ff;
                 opacity: 1;
                 font-size: 0.2rem;
                 font-weight: bold;
                 color: #ffffff;
                 text-align: center;
                 line-height: 0.8rem;
            }
             .text {
                 margin-left: 0.4rem;
                 font-size: 0.18rem;
                 font-family: Source Han Sans CN;
                 font-weight: bold;
                 line-height: 0.31rem;
                 color: #333333;
                 opacity: 1;
            }
             .span {
                 margin-left: 0.51rem;
                 font-size: 0.18rem;
                 font-family: Source Han Sans CN;
                 font-weight: bold;
                 line-height: 0.31rem;
                 color: #333333;
                 opacity: 1;
            }
             .dot {
                 position: absolute;
                 top: 0.28rem;
                 right: 0.2rem;
            }
        }
         .el-collapse-item {
             position: relative;
             .top1 {
                 height: 0.6rem;
                 background: #edeff3;
                 opacity: 1;
                 display: flex;
                 align-items: center;
                 margin-left: 1.2rem;
                 .index {
                     width: 0.6rem;
                     height: 0.6rem;
                     background: #ffbc13;
                     opacity: 1;
                     font-size: 0.2rem;
                     font-weight: bold;
                     color: #ffffff;
                     text-align: center;
                     line-height: 0.6rem;
                }
                 .text {
                     margin-left: 0.4rem;
                     font-size: 0.18rem;
                     font-family: Source Han Sans CN;
                     font-weight: bold;
                     line-height: 0.31rem;
                     color: #333333;
                     opacity: 1;
                }
                 .span {
                     margin-left: 0.51rem;
                     font-size: 0.18rem;
                     font-family: Source Han Sans CN;
                     font-weight: bold;
                     line-height: 0.31rem;
                     color: #333333;
                     opacity: 1;
                }
                 .dot {
                     position: absolute;
                     top: 0.06rem;
                     right: 0.2rem;
                }
            }
        }
         .task-desc {
             margin-left: 1.2rem;
             .title {
                 font-size: 0.16rem;
                 font-family: Source Han Sans CN;
                 font-weight: bold;
                 // line-height: 0.27rem;
                 color: #666666;
                 opacity: 1;
            }
             .size {
                 font-size: 0.16rem;
                 font-family: Source Han Sans CN;
                 font-weight: 400;
                 // line-height: 0.27rem;
                 color: #666666;
                 opacity: 1;
            }
        }
         .add-task {
             display: flex;
             align-items: center;
             font-size: 0.16rem;
             font-family: Source Han Sans CN;
             font-weight: 400;
             line-height: 0.27rem;
             color: #999999;
             opacity: 1;
             // margin-left: 8rem;
             position: absolute;
             right: 0.6rem;
             .text {
                 margin-left: 0.16rem;
            }
             img {
                 display: flex;
                 width: 0.24rem;
                 height: 0.24rem;
            }
        }
         .two-el-collapse-item {
             ::v-deep .el-collapse-item__header {
                 height: 0.6rem;
            }
             ::v-deep .el-icon-arrow-right:before {
                 left: 0.1rem;
                 bottom: 0.05rem;
            }
             ::v-deep .el-collapse-item__arrow.is-active {
                 left: 0rem;
                 top: 0.05rem;
            }
             .c-content {
                 margin: 0.3rem 0rem 0rem 2.25rem;
                 width: 7rem;
                 height: 3rem;
                 .button {
                     margin-top: 0.25rem;
                }
                 .type {
                     span {
                         margin-right: 0.3rem;
                         font-size: 0.15rem;
                    }
                }
                 .des {
                     margin-top: 0.3rem;
                     width: 8.86rem;
                     border-radius: 0.04rem;
                     display: flex;
                     .span {
                         margin-right: 0.3rem;
                         white-space: nowrap;
                         font-size: 0.15rem;
                    }
                     input {
                         width: 25vw;
                         height: 0.01rem;
                         background: #ffffff;
                         border: 0.01rem solid #e0e0e0;
                         border-radius: 0.04rem;
                         padding: 0.16rem;
                         font-size: 0.16rem;
                         color: #999999;
                         resize: none;
                    }
                }
                 .goal {
                     margin-top: 0.3rem;
                     width: 8.86rem;
                     border-radius: 0.04rem;
                     display: flex;
                     .span {
                         margin-right: 0.3rem;
                         font-size: 0.15rem;
                    }
                     input {
                         width: 100%;
                         height: 0.01rem;
                         background: #ffffff;
                         border: 0.01rem solid #e0e0e0;
                         border-radius: 0.04rem;
                         padding: 0.16rem;
                         font-size: 0.16rem;
                         color: #999999;
                         resize: none;
                    }
                }
                 .select {
                     display: flex;
                     align-items: center;
                     span {
                         font-size: 0.15rem;
                         margin-right: 0.3rem;
                    }
                     .item {
                         cursor: pointer;
                         width: 1.54rem;
                         height: 0.44rem;
                         border: 0.01rem solid #e0e0e0;
                         opacity: 1;
                         opacity: 1;
                         display: flex;
                         align-items: center;
                         justify-content: center;
                         .img {
                             display: flex;
                             align-items: center;
                             img {
                                 width: 0.2rem;
                                 height: 0.2rem;
                            }
                        }
                         .text {
                             line-height: 0.44rem;
                             font-size: 0.14rem;
                             color: #666666;
                             margin-left: 0.1rem;
                        }
                    }
                }
            }
        }
         ::v-deep .el-collapse-item__header {
             display: flex;
             align-items: center;
             height: 0.9rem;
             line-height: 0.3rem;
             background: #edeff3;
             color: #303133;
             cursor: pointer;
             border-bottom: 0.01rem solid #ebeef5;
             font-size: 0.13rem;
             font-weight: 500;
             transition: border-bottom-color 0.3s;
             outline: 0;
             position: relative;
             background-image: url(../../assets/image/course/right.svg);
             background-repeat: no-repeat;
             background-position: 0.1rem;
             background-size: 0.5rem;
        }
         ::v-deep .el-collapse-item__header.is-active {
             border-bottom-color: transparent;
             background-image: url(../../assets/image/course/bottom.svg);
        }
         ::v-deep .el-icon-arrow-right:before {
             content: none;
             border: none;
        }
         ::v-deep .el-collapse-item__arrow.is-active {
             content: none;
        }
         ::v-deep .el-icon-arrow-right:before {
             content: none;
             border: none;
        }
         ::v-deep .el-collapse-item__arrow.is-active {
             content: none;
        }
    }
}
 
</style>