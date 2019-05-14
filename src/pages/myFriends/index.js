import React, { Component } from 'react';
import Header from '../../components/common/Header';
import styles from '../../styles/myFriends.less';

const back = require('../../../assets/images/back_white@2x.png');
const img = require('../../../assets/images/drawIcon.png');

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleToPage(pageName) {
      this.props.history.push(`/${pageName}`);
    }

    handleLeftClick() {
        alert('click left');
    }

    handleRightClick() {
        alert('click right');
    }

    render() {
        return  (
            <div className={styles.pageWrap}>
                <Header
                    title="我的好友"
                    left={{
                        className: 'back',
                        click: () => this.handleLeftClick,
                        name: ''
                    }}
                    right={{
                        className: 'add',
                        click: () => this.handleRightClick,
                        name: '收益明细',
                    }}
                />
                <section className={styles.earn}>
                  <div className={styles.earnTop}>
                    <div>
                      <p className={styles.text}>已到账收益(元)</p>
                      <p className={styles.num}>2.66</p>
                    </div>
                    <div>
                      <p className={styles.text}>待发收益(元)</p>
                      <p className={styles.num}>27.44</p>
                    </div>
                  </div>
                  <p className={styles.earnBottom}>
                    <span className={styles.text}>可提现：<a className={styles.big}>1.30</a></span>
                    <span className={styles.toWithDraw} onClick={() => this.handleToPage('withDraw')}>
                      立即提现
                      <img className={styles.back} src={back} /></span>
                  </p>
                </section>
                <section className={styles.friends}>
                  <p className={styles.title}>我邀请的好友<a className={styles.big}>6</a></p>
                  <ul className={styles.list}>
                    <li className={styles.item}>
                      <div className={styles.top}>
                        <img className={styles.avatar} src={img} />
                        <p className={styles.info}>
                          <span className={styles.name}>小不点</span>
                          <span className={styles.time}>2019-05-06</span>
                        </p>
                      </div>
                      <div className={styles.middle}>
                        <div className={styles.progress}>
                          <div className={styles.progressBar}>
                            <div className={styles.percent}>已到账2.66元</div>
                          </div>
                        </div>
                        <p className={styles.num}><a className={styles.big}>30</a>元</p>
                      </div>
                      <div className={styles.bottom}>
                        <p className={styles.desc}>
                          <span className={styles.title}>今日奖励</span>
                          <span className={styles.text}>好友今日已看小说，收益到账中， 看的越久你可得奖励越多</span>
                        </p>
                        <p className={styles.notice}>
                          <button className={styles.btn}>提醒TA</button>
                        </p>
                      </div>
                    </li>
                    <li className={styles.item}>
                      <div className={styles.top}>
                        <img className={styles.avatar} src={img} />
                        <p className={styles.info}>
                          <span className={styles.name}>小不点</span>
                          <span className={styles.time}>2019-05-06</span>
                        </p>
                      </div>
                      <div className={styles.middle}>
                        <div className={styles.progress}>
                          <div className={styles.progressBar}>
                            <div className={styles.percent}>已到账2.66元</div>
                          </div>
                        </div>
                        <p className={styles.num}><a className={styles.big}>30</a>元</p>
                      </div>
                      <div className={styles.bottom}>
                        <p className={styles.desc}>
                          <span className={styles.title}>今日奖励</span>
                          <span className={styles.text}>好友今日已看小说，收益到账中， 看的越久你可得奖励越多</span>
                        </p>
                        <p className={styles.notice}>
                          <button className={styles.btn}>提醒TA</button>
                        </p>
                      </div>
                    </li>
                  </ul>
                </section>
            </div>
        )
    }
}