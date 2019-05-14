import React, { Component } from 'react';
import Header from '../../components/common/Header';
import { Button } from 'antd';
import styles from '../../styles/inviteFriends.less';

const img = require('../../../assets/images/drawIcon.png');
const rightArrow = require('../../../assets/images/back@2x.png');
const wechat = require('../../../assets/images/toWechat@2x.png');
const qrcode = require('../../../assets/images/toQRcode@2x.png');
const group = require('../../../assets/images/toGroup@2x.png');

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friendsList: [
                { avatar: img, name: '小不点', time: '2019-05-06', earn: 2 },
                { avatar: img, name: '小不点', time: '2019-05-06', earn: 2 },
                { avatar: img, name: '小不点', time: '2019-05-06', earn: 2 },
            ],
            rules: [
                '分享给好友，让好友通过连接下载注册成为新用户；',
                '新用户首次登录前3天，其每天看小说连续10分钟， 你可得2元/天，累计6元；',
                '新用户每天看小说连续20分钟，你可得0.1元奖励， 累计24元；',
                '邀请好友数量无上限，邀请越多奖励越多。',
            ]
        };
    }

    toSettingPage() {
        this.props.history.push('/settings');
    }

    toDisplayPage() {
        this.props.history.push('/display');
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
        const { friendsList, rules } = this.state;
        return  (
            <div className={styles.pageWrap}>
                <Header
                    title="邀请好友"
                    left={{
                        className: 'back',
                        click: () => this.handleLeftClick,
                        name: ''
                    }}
                    right={{
                        className: 'add',
                        click: () => this.handleRightClick,
                        name: '',
                    }}
                />
                <div className={styles.noticeBar}>
                    <img className={styles.noticeIcon} src={img} alt="" />
                    <p className={styles.noticeBarText}>碧草文印 成功邀请7位好友，可获得42元</p>
                </div>
                <div className={styles.mainContent}>
                    <section className={`${styles.section} ${styles.banner}`}>
                        <p className={styles.time}>
                            <em className={styles.bigText}>倒计时：</em>04天03时50分58秒
                        </p>
                        <div className={styles.howEarn}>
                            <p className={styles.sectionTitle}>如何得到30元?</p>
                            <button className={styles.btn_invite} onClick={() => this.handleToPage('myFriends')}>立即邀请赚现金</button>
                        </div>
                    </section>
                    <section className={`${styles.section} ${styles.friends}`}>
                        <ul className={styles.list}>
                        {
                            friendsList.map((item, index) => {
                                return (
                                    <li key={index} className={styles.item}>
                                        <img className={styles.icon} src={item.img} alt="" />
                                        <p className={styles.info}>
                                            <span className={styles.name}>{item.name}</span>
                                            <span className={styles.time}>{item.time}</span>
                                        </p>
                                        <p className={styles.money}>
                                            <span className={styles.big}>{item.earn}</span>元已到账
                                        </p>
                                    </li>
                                );
                            })
                        }
                        <p className={styles.toFriends} onClick={() => this.handleToPage('myFriends')}>
                            全部好友
                            <img className={styles.arrowIcon} src={rightArrow} alt="" />
                        </p>
                        </ul>
                    </section>
                    <section className={`${styles.section} ${styles.rule}`}>
                        <div className={styles.ruleItem}>
                            <span className={styles.num}>1</span>
                            <p className={styles.text}>分享给好友，让好友通过连接下载注册成为新用户；</p>
                        </div>
                        <div className={styles.ruleItem}>
                            <span className={styles.num}>2</span>
                            <p className={styles.text}>新用户首次登录前3天，其每天看小说连续10分钟， 你可得2元/天，累计6元；</p>
                        </div>
                        <div className={styles.ruleItem}>
                            <span className={styles.num}>3</span>
                            <p className={styles.text}>新用户每天看小说连续20分钟，你可得0.1元奖励， 累计24元；</p>
                        </div>
                        <div className={styles.ruleItem}>
                            <span className={styles.num}>4</span>
                            <p className={styles.text}>邀请好友数量无上限，邀请越多奖励越多。</p>
                        </div>
                        {/* {
                            rules.map((item, index) => {
                                return (
                                    <div key={index} className={styles.ruleItem}>
                                        <span className={styles.num}>{index+1}</span>
                                        <p className={styles.text}>{item}</p>
                                    </div>
                                );
                            })
                        } */}
                    </section>
                </div>
                <div className={styles.fixedButton}>
                    <ul className={styles.buttons}>
                        <li>
                            <div className={styles.item}>
                                <img className={styles.buttonIcon} src={wechat} alt="" />
                                <p className={styles.buttonText}>微信邀请</p>
                            </div>
                        </li>
                        <li>
                            <div className={styles.item}>
                                <img className={styles.buttonIcon} src={qrcode} alt="" />
                                <p className={styles.buttonText}>面对面邀请</p>
                            </div>
                        </li>
                        <li>
                            <div className={styles.item}>
                                <img className={styles.buttonIcon} src={group} alt="" />
                                <p className={styles.buttonText}>微信群邀请</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}