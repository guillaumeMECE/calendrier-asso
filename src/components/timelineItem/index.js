import React from 'react';
import './style.css';
import Avatar from '@material-ui/core/Avatar';

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
            <span className="avatar" >
                <Avatar style={{ backgroundColor: data.color }}>{data.tag}</Avatar>
                {/* <img src={process.env.PUBLIC_URL + 'logo_ece.png'} style={{ maxWidth: '36px', maxHeight: '36px' }} alt="Default"></img> */}
            </span>
        </div>
    </div>
);

export default TimelineItem;