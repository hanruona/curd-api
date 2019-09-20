import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
class IndexPage extends Component {
  state = {
    flag: true,
    currentIndex: 0
  }
  updataregister = () => {
    const inpData = {
      name: "hanruonan",
      pwd: "123321"
    }
    this.props.dispatch({
      type: "testlist/updataRegister",
      payload: {
        method: 'POST',
        mode: 'cors',
        headers: {
          //  传递的是标准的json字符串，后端可以正常解构出来
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          inpData
        }),
      }
    })
  }
  render() {
    return (
      <div className={styles.normal} >
        <div className={styles.header}>
          重点学生日周考成绩录入管理系统
          </div>
        <div className={styles.center}>
          <p>网站工程</p>
          <ul>
            <li className={this.state.currentIndex === 0 ? styles.active : null} onClick={() => {
              this.setState({
                flag: true,
                currentIndex: 0
              })
            }}>登录</li>
            <li className={this.state.currentIndex === 1 ? styles.active : null} onClick={() => {
              this.setState({
                flag: false,
                currentIndex: 1
              })
            }}>注册</li>
          </ul>
          {this.state.flag ? <div className={styles.inpbox}>
            <p>
              <input type="text" placeholder="妞妞号 / 电话" />
            </p>
            <p>
              <input type="text" placeholder="输入密码" />
            </p>
            <p className={styles.p}>
              <input className={styles.checkbox} type="checkbox" /><span>两周内自动登录</span>
            </p>
            <p>
              <button>登入</button>
            </p>
          </div> : <div className={styles.inpbox}>
              <p>
                <input type="text" placeholder="妞妞号 / 电话" />
              </p>
              <p>
                <input type="text" placeholder="输入密码" />
              </p>
              <p>
                <input type="text" placeholder="输入手机号" />
              </p>
              <p className={styles.p}>
                <input className={styles.checkbox} type="checkbox" /><span>我已同意并接受 * 服务条款</span>
              </p>
              <p>
                <button onClick={this.updataregister}>注册</button>
              </p>
            </div>}
        </div>
      </div >
    );
  }

}

const mapState = () => {
  return {

  }
}
export default connect(mapState)(IndexPage);
