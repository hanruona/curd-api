import React, { Component } from 'react'
import styles from './index.css';
import Echartss from "echarts-for-react"

export default class index extends Component {

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
                    <span>选择班级:</span>
                    <div className={styles.ps}>
                        <p>1703C</p>
                        <p>1703E</p>
                        <p>1703E</p>
                        <p>1703E</p>
                        <p>1703E</p>
                        <p>1703E</p>
                        <p>1703E</p>
                    </div>
                    <div className={styles.mingdan}>
                        <p>名单:</p>
                        <span>张三</span>
                        <span>张立</span>
                        <span>王强</span>
                    </div>
                    <div className={styles.postion}>
                        <p>
                            <span></span>
                        </p>
                        <span>柱形图/线图</span>
                    </div>
                </div>

                <Echartss option={option} className={styles.charts}></Echartss>
                <div className={styles.addbox}>
                    <div className={styles.addboxleft}>
                        <h4>2019-08-30</h4>
                        <h4>今日分析及解决方案</h4>
                        <h4>点击查看历史记录</h4>
                    </div>
                    <div className={styles.addboxright}>
                        <p>
                            撒的风格好的撒的风格和公司大富大贵好撒的风格好的撒的风格和公司大富大贵好撒的风格好的撒的风格和公司大富大贵好撒的风格好的撒的风格和公司大富大贵好撒的风格好的撒的风格和公司大富大贵好撒的风格好的撒的风格和公
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
