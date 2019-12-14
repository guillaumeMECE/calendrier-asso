import React from 'react';
import './style.css';

const TimelineItem = ({ data }) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag" style={{ background: data.color }}>
                {data.tag}
            </span>
            <time>{data.date}</time>
            <p>{data.text}</p>
            {/* {data.link && (
                <a
                    href={data.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {data.link.text}
                </a>
            )} */}
            <span className="colorBar" />
            <span className="circle" />
        </div>
    </div>
);

export default TimelineItem;