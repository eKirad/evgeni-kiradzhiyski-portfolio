// React imports
import * as React from "react";

// Ant design imports
import { Timeline } from 'antd';
import { CheckCircleTwoTone, LoadingOutlined, DashboardOutlined, BugOutlined, LogoutOutlined, LaptopOutlined } from '@ant-design/icons';

interface IProps { } 

const Overview: React.FC<IProps> = (props) => {
    return(
        <div style={{padding: "10px", margin: "5px"}}>
            <Timeline>
                <Timeline.Item dot={
                    <LoadingOutlined 
                        twoToneColor="#52c41a" 
                        style={{ fontSize: '16px' }} />
                    }> 2019 (April): Started studying at TUM (MS Informatics)
                </Timeline.Item>
                <Timeline.Item dot={
                    <CheckCircleTwoTone 
                        twoToneColor="#52c41a"     
                        style={{ fontSize: '16px' }} />
                    }> 2019 (February): Graduated UDE
                </Timeline.Item>
                <Timeline.Item dot={
                    <LaptopOutlined 
                        twoToneColor="#52c41a"     
                        style={{ fontSize: '16px', color: 'green' }} />
                    }> 2018 (January): Promotion at Capgemini - Working Student: Software Engineer
                </Timeline.Item>
                <Timeline.Item dot={
                    <LaptopOutlined 
                        twoToneColor="#52c41a"     
                        style={{ fontSize: '16px', color: 'green' }} />
                    }> 2017 (September): Started internship as Software Engineer at Capgemini
                </Timeline.Item>
                <Timeline.Item dot={
                    <LogoutOutlined 
                        twoToneColor="#52c41a"     
                        style={{ fontSize: '16px', color: 'red' }} />
                    }> 2017 (August): Left Trivago N.V.
                </Timeline.Item>
                <Timeline.Item dot={
                    <BugOutlined
                        style={{ fontSize: '16px', color: 'red' }} />
                    }> 2016 (November): Got first job in the Software Engineering field - Working Student: Assurance Quality Management (AQM) Testing at Trivago N.V.
                </Timeline.Item>
                <Timeline.Item dot={
                    <DashboardOutlined 
                        twoToneColor="#52c41a" 
                        style={{ fontSize: '16px' }} />
                    }> 2014 (October): Started studying at UDE (BS Software Engineering)
                </Timeline.Item>
                <Timeline.Item dot={
                    <CheckCircleTwoTone 
                        twoToneColor="#52c41a" 
                        style={{ fontSize: '16px' }} />
                    }> 2014 (May): Graduated 
                </Timeline.Item>
                <Timeline.Item>2009: Start High school</Timeline.Item>
                <Timeline.Item>2002: Start primary school</Timeline.Item>
                <Timeline.Item>1995: Born</Timeline.Item>
            </Timeline>
        </div>
    );
}

export default Overview;