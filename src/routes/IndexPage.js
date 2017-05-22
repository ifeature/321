import React, { Component } from 'react';
import { connect } from 'dva';
import { Row, Col, LocaleProvider} from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import styles from './IndexPage.css';
import MainLayout from '../components/MainLayout/MainLayout';
import Calendar from '../components/Calendar/Calendar';
import Timeline from '../components/Timeline/Timeline';

class IndexPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      bp: null,
    };
    this.resizeHandler = this.resizeHandler.bind(this);
  }
  componentDidMount() {
    this.setMedia();
    global.addEventListener('resize', this.resizeHandler);
  }
  componentWillUnmount() {
    global.removeEndEventListener('resize', this.resizeHandler);
  }
  setMedia() {
    if (global.matchMedia('(max-width: 700px)').matches) {
      this.setState({
        bp: 'mobile',
      });
    } else {
      this.setState({
        bp: 'desktop',
      });
    }
  }
  resizeHandler() {
    this.setMedia();
  }
  render() {
    return (
      <MainLayout location={this.props.location}>
        <LocaleProvider locale={enUS}>
          <div className={styles.normal}>
            <h1 className={styles.title}>JSMP Calendar</h1>
            <Row>
              <Col md={12}>
                <div className={styles.welcome} />
              </Col>
              <Col md={12}>
                <ul className={styles.list}>
                  <li>Full source code can be found</li>
                  <li><a href="https://git.epam.com/Artem_Nakhodkin/js_mentoring_kyiv_2017">here</a></li>
                </ul>
              </Col>
            </Row>
            <Row>
              <section className="calendar">
                <Calendar bp={this.state.bp} />
              </section>
            </Row>
            <Row style={{ display: this.state.bp === 'mobile' ? 'block' : 'none' }}>
              <Col md={6}>
                <Timeline />
              </Col>
            </Row>
          </div>
        </LocaleProvider>
      </MainLayout>
    );
  }
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
