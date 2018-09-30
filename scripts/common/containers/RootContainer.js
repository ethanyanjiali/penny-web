import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import Media from 'react-media';
import ProgressiveImage from 'react-progressive-image';
import { Button } from 'semantic-ui-react';
import * as messages from '../../i18n/messages';
import NavBar from '../components/NavBar';

const AppBanner = styled.div`
  position: fixed;
  bottom: 0;
  margin-bottom: 10px;
  flex: 1;
  display: flex;
  justify-content: center;
  width: 100%;
`

const mapStateToProps = state => ({
  currentEvent: state.event.currentEvent,
});

class RootContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgImgIndex: this.getRandomInt(0, 10),
      showOpenInApp: true,
    };
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  getBrowser() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/micromessenger/.test(userAgent.toLowerCase())) {
      return 'Wechat';
    }
    return 'Normal';
  }

  getMobileOperatingSystem() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(userAgent)) {
      return 'Android';
    }
    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return 'iOS';
    }
    return 'unknown';
  }

  goToApp() {
    const url = this.props.location.pathname;
    const parts = url && url.split('/') || [];
    if (parts.length > 3 && parts[1] === 'event' && parts[2] === 'e') {
      window.location.assign(`mypenny://event/${parts[3]}`);
    } else {
      window.location.assign('mypenny://home');
    }
  }

  handleOpenApp() {
    const os = this.getMobileOperatingSystem();
    const browser = this.getBrowser();
    const { intl: { formatMessage } } = this.props;

    if (os === 'iOS') {
      if (browser === 'Wechat') {
        alert(formatMessage(messages.root.misc.wechatIos));
      }

      this.goToApp();
      setTimeout(() => {
        if (document.hasFocus()) {
          const goToStore = confirm(formatMessage(messages.root.misc.appStore));
          if (goToStore) window.location = 'https://itunes.apple.com/us/app/my-penny/id1243922937?ls=1&mt=8';
        }
      }, 500);
    } else if (os === 'Android') {
      if (browser === 'Wechat') {
        alert(formatMessage(messages.root.misc.wechatAndroid));
      }

      this.goToApp();
      setTimeout(() => {
        if (document.hasFocus()) {
          const goToStore = confirm(formatMessage(messages.root.misc.playStore));
          if (goToStore) window.location = 'https://play.google.com/store/apps/details?id=co.mypenny';
        }
      }, 800);
    } else {
      alert(formatMessage(messages.root.misc.notSupported));
    }
    this.setState({
      showOpenInApp: false,
    });
  }

  renderBackground() {
    const bgImgArray = [];
    const bgImgThumbnailArray = [];
    bgImgArray.push(require('../../../assets/images/bg_1.jpg'));
    bgImgArray.push(require('../../../assets/images/bg_2.jpg'));
    bgImgArray.push(require('../../../assets/images/bg_3.jpg'));
    bgImgArray.push(require('../../../assets/images/bg_4.jpg'));
    bgImgArray.push(require('../../../assets/images/bg_5.jpg'));
    bgImgArray.push(require('../../../assets/images/bg_6.jpg'));
    bgImgArray.push(require('../../../assets/images/bg_7.jpg'));
    bgImgArray.push(require('../../../assets/images/bg_8.jpg'));
    bgImgArray.push(require('../../../assets/images/bg_9.jpg'));
    bgImgArray.push(require('../../../assets/images/bg_10.jpg'));

    bgImgThumbnailArray.push(require('../../../assets/images/bg_1_thumbnail.jpg'));
    bgImgThumbnailArray.push(require('../../../assets/images/bg_2_thumbnail.jpg'));
    bgImgThumbnailArray.push(require('../../../assets/images/bg_3_thumbnail.jpg'));
    bgImgThumbnailArray.push(require('../../../assets/images/bg_4_thumbnail.jpg'));
    bgImgThumbnailArray.push(require('../../../assets/images/bg_5_thumbnail.jpg'));
    bgImgThumbnailArray.push(require('../../../assets/images/bg_6_thumbnail.jpg'));
    bgImgThumbnailArray.push(require('../../../assets/images/bg_7_thumbnail.jpg'));
    bgImgThumbnailArray.push(require('../../../assets/images/bg_8_thumbnail.jpg'));
    bgImgThumbnailArray.push(require('../../../assets/images/bg_9_thumbnail.jpg'));
    bgImgThumbnailArray.push(require('../../../assets/images/bg_10_thumbnail.jpg'));

    const bgImg = bgImgArray[this.state.bgImgIndex];
    const bgImgThumbnail = bgImgThumbnailArray[this.state.bgImgIndex];
    const mobileImgStyle = {
      height: '100%', position: 'fixed', top: '0', left: '0',
    };
    const desktopImgStyle = {
      width: '100%', position: 'fixed', top: '0', left: '0',
    };
    const retinaImgStyle = {
      width: '100%', position: 'fixed', top: '-20%', left: '0',
    };

    if (this.props.location.pathname == '/welcome') {
      return (
        <div style={{ height: '100%' }}>
          {this.props.children}
        </div>
      );
    }
    return (
      <div style={{ height: '100%' }}>
        <Media
          query={{ maxAspectRatio: '16/10' }}
          render={() => (
            <ProgressiveImage src={bgImg} placeholder={bgImgThumbnail}>
              {image => (
                <img style={mobileImgStyle} src={image} />
              )}
            </ProgressiveImage>
          )}
        />
        <Media
          query={{ minAspectRatio: '16/10', maxAspectRatio: '21/10' }}
          render={() => (
            <ProgressiveImage src={bgImg} placeholder={bgImgThumbnail}>
              {image => (
                <img style={desktopImgStyle} src={image} />
              )}
            </ProgressiveImage>
          )}
        />
        <Media
          query={{ minAspectRatio: '21/10' }}
          render={() => (
            <ProgressiveImage src={bgImg} placeholder={bgImgThumbnail}>
              {image => (
                <img style={retinaImgStyle} src={image} />
              )}
            </ProgressiveImage>
          )}
        />
        <NavBar event={this.props.currentEvent} />
        {this.props.children}
        {this.state.showOpenInApp && (
        <Media
          query={{ maxWidth: '500px' }}
          render={() => (
            <AppBanner>
              <Button onClick={this.handleOpenApp.bind(this)} size="tiny" content="Open in App" icon="cube" labelPosition="left" color="blue" compact />
            </AppBanner>
          )}
        />
        )}
      </div>
    );
  }

  renderWechatHelper() {
    const helperImage = require('../../../assets/images/wechat.jpg');
    const helperImageAndriod = require('../../../assets/images/wechat_android.jpg');
    if (this.getMobileOperatingSystem() === 'iOS') {
      return (
        <div style={{ flex: 1 }}>
          <img
            style={{
              height: '80%', width: '80%', margin: 'auto', display: 'block', marginTop: '20px',
            }}
            src={helperImage}
          />
        </div>
      );
    }
    return (
      <div style={{ flex: 1 }}>
        <img
          style={{
            height: '80%', width: '80%', margin: 'auto', display: 'block', marginTop: '20px',
          }}
          src={helperImageAndriod}
        />
      </div>
    );
  }

  render() {
    const browser = this.getBrowser();
    const isWechat = browser === 'Wechat';
    return isWechat ? this.renderWechatHelper() : this.renderBackground();
  }
}

export default injectIntl(connect(mapStateToProps)(RootContainer));
