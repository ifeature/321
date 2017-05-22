import React, { Component } from 'react';
import { Calendar } from 'antd';

import styles from './Calendar.css';

function getListData(value) {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'normal', content: 'This is usual event.' },
      ];
      break;
    case 10:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'normal', content: 'This is usual event.' },
        { type: 'error', content: 'This is error event.' },
      ];
      break;
    case 15:
      listData = [
        { type: 'warning', content: 'This is warning event' },
        { type: 'normal', content: 'This is very long usual event。。....' },
        { type: 'error', content: 'This is error event 1.' },
        { type: 'error', content: 'This is error event 2.' },
        { type: 'error', content: 'This is error event 3.' },
        { type: 'error', content: 'This is error event 4.' },
      ];
      break;
    default:
  }
  return listData || [];
}

function dateCellRender(bp, value) {
  const listData = getListData(value);
  return (
    <ul className={styles.calendar__events}>
      {
        bp === 'desktop' ? listData.map((item) => {
          return (
            <li className={styles['calendar__events-item']} key={item.content}>
              <span className={[styles[`calendar__events-data_${item.type}`], styles['calendar__events-data']].join(' ')}>●</span>
              {item.content}
            </li>
          );
        }) : (listData.length > 0 && <span>{listData.length}</span>)
      }
    </ul>
  );
}

function getMonthData(value) {
  if (value.month() === 4) {
    return 33;
  }
}

function monthCellRender(value) {
  const num = getMonthData(value);
  return num ? <div className={styles.calendar__notes}>
    <section className={styles['calendar__notes-data']}>{num}</section>
    <span>Events</span>
  </div> : null;
}

class JsmpCalendar extends Component {
  render() {
    return (
      <Calendar
        dateCellRender={dateCellRender.bind(this, this.props.bp)}
        monthCellRender={monthCellRender}
        fullscreen={this.props.bp === 'desktop'}
        mode={this.props.bp === 'desktop' ? 'month' : 'year'}
      />
    );
  }
}

export default JsmpCalendar;
