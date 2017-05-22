import React from 'react';
import { Timeline, Icon } from 'antd';

const data = {
  8: [
    { type: 'warning', content: 'This is warning event.' },
    { type: 'normal', content: 'This is usual event.' },
  ],
  10: [
    { type: 'warning', content: 'This is warning event.' },
    { type: 'normal', content: 'This is usual event.' },
    { type: 'error', content: 'This is error event.' },
  ],
  15: [
    { type: 'warning', content: 'This is warning event' },
    { type: 'normal', content: 'This is very long usual event。。....' },
    { type: 'error', content: 'This is error event 1.' },
    { type: 'error', content: 'This is error event 2.' },
    { type: 'error', content: 'This is error event 3.' },
    { type: 'error', content: 'This is error event 4.' },
  ],
};

function JsmpTimeline() {
  return (
    <Timeline>
      {
        (() => {
          return Object.keys(data).map((key) => {
            return (<Timeline.Item
              key={key} dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} color="red">
                {'2017-05-'}{key}{data[key].map((entry, id) => <p key={id}>{entry.content}</p>)}
            </Timeline.Item>);
          });
        })()
      }
    </Timeline>
  );
}

export default JsmpTimeline;
