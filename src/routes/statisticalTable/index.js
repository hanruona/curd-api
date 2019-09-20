import React, { Component } from 'react'
import styles from './index.css';
export default class index extends Component {
    state = {
        flag: false
    }
    showList = () => {
        this.setState({
            flag: !this.state.flag
        })
    }
    render() {
        return (
            <div className={styles.normal}>
                <div className={styles.header}>
                    XX学生日周考试成绩统计表
                </div>
                <div className={styles.title}>
                    <div>讲师:XXX</div>
                    <div>学生:XXX</div>
                    <div className={styles.inpbox}>
                        <input onClick={this.showList} type="text" placeholder="快捷选择其他学生" />
                        <span>x</span>
                    </div>
                </div>
                {this.state.flag ? <div className={styles.show}>
                    <p>学生1</p>
                    <p>学生1</p>
                    <p>学生1</p>
                    <p>学生1</p>
                    <p>学生1</p>
                    <p>学生1</p>
                    <p>学生1</p>
                </div> : null}

                <div className={styles.statisticalList}>
                    <table className="top-left">
                        <tr className="title-tr">
                            <td width="7%">序号</td>
                            <td width="13%">日期</td>
                            <td width="10%">理论</td>
                            <td width="15%">技能</td>
                            <td width="30%">分析和解决</td>
                            <td width="10%">是否周考</td>
                            <td width="10%">操作</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>11-03-2017</td>
                            <td>89</td>
                            <td>Type-Script</td>
                            <td>上岛咖啡SD卡了父母了空地上快三年的快速的快乐飞三年了卡丁车</td>
                            <td>否</td>
                            <td>
                                <span>编辑</span>、
                                <span>删除</span>
                            </td>

                        </tr>

                    </table>
                </div>
            </div>
        )
    }
}

