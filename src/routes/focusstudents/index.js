import React, { Component } from 'react'
import styles from './index.css';
export default class index extends Component {
    render() {
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
            </div>
        )
    }
}
