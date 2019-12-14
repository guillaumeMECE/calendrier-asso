import React, { Component } from 'react';
import TimelineItem from '../timelineItem';
import axios from 'axios';
import './style.css';



class Timeline extends Component {
    constructor(props) {
        super(props)
        this.state = {
            timelineData: []
        }
    }
    componentDidMount() {
        this.fetchTimelineData()
    }
    async fetchTimelineData() {
        try {
            const { data } = await axios.get('http://localhost:3030/api/events');
            console.log('data: ', data);
            this.setState({ timelineData: data });
        } catch (error) {
            console.log('ERROR MESSAGE :', error.message);
            console.log('ERROR :', error);
        }
    }

    render() {
        return (
            this.state.timelineData.length > 0 && (
                <div className="timeline-container">
                    {this.state.timelineData.map((data, idx) => (
                        <TimelineItem data={data} key={idx} />
                    ))}
                </div>
            ))
    }
}
export default Timeline;