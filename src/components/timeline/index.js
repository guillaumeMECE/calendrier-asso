import React from 'react';
import './style.css';

import timelineData from './data.json';
import TimelineItem from '../timelineItem';

const Timeline = () => {
    return (
        timelineData.length > 0 && (
            <div className="timeline-container">
                {timelineData.map((data, idx) => (
                    <TimelineItem data={data} key={idx} />
                ))}
            </div>
        ))
}
export default Timeline;