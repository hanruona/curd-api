import React, { Component } from 'react'
import styles from './index.css';
import Echartss from "echarts-for-react"
export default class index extends Component {
    lookallchengji = () => {
        this.props.history.push('/statisticalTable')
    }
    render() {
        const option = {
            title: {
                text: 'XX 同学的的日考成绩统计图',
                subtext: "仅供参考",
            },
            legend: {
                data: ['技能', '理论']
            },
            tooltip: {
                trigger: 'axis',
            },
            toolbox: {
                show: true,
                feature: {
                    dataZoom: {
                        yAxisIndex: "one"
                    },
                    dataView: { readOnly: false },
                    magicType: { type: ['line', 'bar'] },
                    restore: {},
                    saveAsImage: {}
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['08-01', '08-02', '08-03', '08-04', '08-05', '08-06', '08-07', '08-09', '08-10', '08-11', '08-12', '08-13']
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value}'
                },

            },
            series: [
                {
                    name: '理论',
                    type: 'line',
                    data: [50, 45, 44, 55, 65, 69, 60, 58, 50, 49, 66, 35],
                    markPoint: {
                        data: [
                            { type: 'max', name: '最大值' },
                            { type: 'min', name: '最小值' }
                        ]
                    },
                    markLine: {
                        data: [
                            { type: 'average', name: '平均值' }
                        ]
                    }
                },
                {
                    name: '技能',
                    type: 'line',
                    data: [21, 25, 34, 25, 78, 49, 55, 58, 64, 59, 22, 35],

                    markLine: {
                        data: [
                            { type: 'average', name: '平均值' },
                            [{
                                symbol: 'none',
                                x: '90%',
                                yAxis: 'max'
                            }, {
                                symbol: 'circle',
                                label: {
                                    normal: {
                                        position: 'start',
                                        formatter: '最大值'
                                    }
                                }

                            }]
                        ]
                    }
                }
            ]
        }
        return (
            <div className={styles.normal}>
                <div className={styles.header}>
                    重点关注学生考试成绩统计图
                </div>
                <div className={styles.zdianTitle}>
                    <div>切换班级:</div>
                    <div>
                        <p>1703C</p>
                        <p>1703E</p>
                        <p>1703E</p>
                        <p>创建班级+</p>
                    </div>
                    <div className={styles.postion}>
                        <p>
                            <span></span>
                        </p>
                        <span>柱形图/线图</span>
                    </div>
                </div>
                <div className={styles.addstudents}>
                    <span>添加学生+:</span>
                    <input type="text" placeholder="输入姓名" />
                    <input type="text" placeholder="末位次数 " />
                    <input type="text" placeholder="结对子，帮扶对象" />
                    <button>添加</button>
                </div>
                {/* 新添成绩 */}
                <div className={styles.addachievement}>

                </div>
                {/* 新添分析 */}
                <div className={styles.addanalysis}></div>
                <Echartss option={option} className={styles.charts}></Echartss>
                <div className={styles.addbox}>
                    <div className={styles.chengji}>添加成绩+</div>
                    <div className={styles.fenxi}>添加分析和解决方案+</div>
                    <div className={styles.allchenji} onClick={this.lookallchengji}>查看和编辑该生所有的成绩</div>
                </div>

            </div>
        )
    }
}
