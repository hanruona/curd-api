import React, { Component } from 'react'
import styles from './index.css';
export default class index extends Component {
    state = {
        flag: false,
        editmack: false,
        delmack: false
    }
    showList = () => {
        this.setState({
            flag: !this.state.flag
        })
    }
    edit() {
        this.setState({
            editmack: true
        })
    }
    del() {
        this.setState({
            delmack: true
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
                <div className={styles.statisticalList}>
                    {this.state.flag ? <div className={styles.show}>
                        <p>学生1</p>
                        <p>学生1</p>
                        <p>学生1</p>
                        <p>学生1</p>
                        <p>学生1</p>
                        <p>学生1</p>
                        <p>学生1</p>
                    </div> : null}
                    <table className={styles.topLeft}>
                        <tbody>
                            <tr className={styles.titletr}>
                                <td width="100px">序号</td>
                                <td width="150px">日期</td>
                                <td width="150px">理论</td>
                                <td width="200px">技能</td>
                                <td width="498px">分析和解决</td>
                                <td width="100px">是否周考</td>
                                <td width="200px">操作</td>
                            </tr>
                            <tr>
                                <td width="100px">1</td>
                                <td width="150px">11-03-2017</td>
                                <td width="150px">89</td>
                                <td width="200px">Type-Script</td>
                                <td width="498px">上岛咖啡SD卡了父母了空地上快三年的快速</td>
                                <td width="100px">否</td>
                                <td width="200px">
                                    <span onClick={this.edit.bind(this)}>编辑</span>、
                                <span onClick={this.del.bind(this)}>删除</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {this.state.editmack ? <div className={styles.editMack}>
                    <div className={styles.editBox}>
                        <div className={styles.edittitle}>
                            <span>编辑内容</span>
                            <span onClick={() => {
                                this.setState({
                                    editmack: false
                                })
                            }}>x</span>
                        </div>
                        <div className={styles.lilun}>
                            <p>
                                <span>理论</span>
                                <input type="text" placeholder="0-100之间数字" />
                            </p>
                        </div>
                        <div className={styles.jineng}>
                            <p>
                                <span>技能</span>
                                <input type="text" placeholder="0-100之间数字" />
                            </p>
                        </div>
                        <div className={styles.examination}>
                            <p>
                                <input type="checkbox" />
                                <span>日考</span>
                            </p>
                            <p>
                                <input type="checkbox" />
                                <span>周考</span>
                            </p>
                        </div>
                        <div className={styles.analysis}>
                            <span>分析解决方案</span>
                            <input type="text" />
                        </div>
                        <div className={styles.button}>
                            <button onClick={() => {
                                this.setState({
                                    editmack: false
                                })
                            }}>取消</button>
                            <button>确定</button>
                        </div>
                    </div>
                </div> : null}
                {this.state.delmack ? <div className={styles.delmack}>
                    <div className={styles.delbox}>
                        <div className={styles.deltitle}>
                            <img src="/1.png" />
                            <span>你确定删除吗？</span>
                        </div>
                        <div className={styles.button}>
                            <button onClick={() => {
                                this.setState({
                                    delmack: false
                                })
                            }}>取消</button>
                            <button>确定</button>
                        </div>
                    </div>
                </div> : null}
            </div>
        )
    }
}

