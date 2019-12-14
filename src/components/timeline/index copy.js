import React from 'react';
import './style.css';

// import timelineData from './data.json';
import TimelineItem from '../timelineItem';
import axios from 'axios';

const fetchTimelineData = () => {
    return axios.get('http://localhost:3030/api/events');
}

const Timeline = async () => {
    let timelineData;
    try {
        const { data } = await fetchTimelineData();
        timelineData = data;
        console.log('timelineData: ', timelineData);
        console.log('timelineDataLength: ', timelineData.length);

        return (
            timelineData.length > 0 && (
                <div className="timeline-container">
                    {timelineData.map((data, idx) => (
                        <TimelineItem data={data} key={idx} />
                    ))}
                </div>
            ))
    } catch (error) {
        console.log('ERROR MESSAGE :', error.message);
        console.log('ERROR :', error);
    }

}
export default Timeline;