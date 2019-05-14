import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from '../../styles/Header.less';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, fixed, border, left, right } = this.props;
    const styleClass = classNames(
      styles.NavBar,
      {
        [styles.NavBarFixed]: fixed,
        [styles.NavBarBorder]: border,
      },
    );
    return (
      <div className={styleClass}>
        <div className={styles.NavBarInner}>
          {left && <div className={`${styles.NavBarLeft} ${left.className}`} onClick={left.click} dangerouslySetInnerHTML={{__html:left.name}}></div>}
          {title && <div className={styles.NavBarCenter}>{title}</div>}
          {right && <div className={`${styles.NavBarRight} ${right.className}`} onClick={right.click} dangerouslySetInnerHTML={{__html:right.name}}></div>}
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  prefixCls: PropTypes.string,
  fixed: PropTypes.bool,
  border: PropTypes.bool,
  title: PropTypes.string,
  left: PropTypes.object, // { func, name}
  right: PropTypes.object, // { func, name}
};

export default Header;