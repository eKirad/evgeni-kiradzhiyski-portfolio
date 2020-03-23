// React imports
import * as React from "react";

// Antd imports
import { List, Tag, Divider, Row, Col, Avatar } from 'antd';

interface IProps { } 

const Resume: React.FC<IProps> = (props) => {
    const educationData = [
        {
            name: `Technical University of Munich`,
            nameShort: `TUM`,
            degree: `MS in Computer Science`,
            time: `April 2019 - March 2021`
        },
        {
            name: `University of Duisburg-Essen`,
            nameShort: `UDE`,
            degree: `BS in Software Engineering`,
            time: `October 2014 - February 2019`
        },
      ];

      const experienceData = [
        {
            company: `Capgemni`,
            companyShort: `Cap`,
            location: `Munich, BY, Germany`,
            position: `Working Student: Software Engineer`,
            time: `April 2019 - Present`
        },
        {
            company: `Capgemni`,
            companyShort: `Cap`,
            location: `Düsseldorf, NW, Germany`,
            position: `Working Student: Software Engineer`,
            time: `January 2018 - April 2019`
        },
        {
            company: `Capgemni`,
            companyShort: `Cap`,
            location: `Düsseldorf, NW, Germany`,
            position: `Software Engineer Intern`,
            time: `September 2017 - December 2017`
        },
        {
            company: `Trivago N.V.`,
            companyShort: `Trv`,
            location: `Düsseldorf, NW, Germany`,
            position: `Working Student: Assurance Quality Management (AQM) Testing`,
            time: `November 2016 - August 2017`
        },
      ];

      const languageSkillsData = [
        {
            language: `Bulgarian`,
            languageShort: `BG`,
            knowledgeLevel: `Native Speaker`,
        },
        {
            language: `German`,
            languageShort: `DE`,
            knowledgeLevel: `Fluent`,
        },
        {
            language: `English`,
            languageShort: `EN`,
            knowledgeLevel: `Fluent`,
        },
      ];

    return(
        <div>
            <Row>
                <Divider orientation="left">Education</Divider>
            </Row>
            <Row>
                <List style={{width: "60%", margin: "5px"}}
                    itemLayout="horizontal"
                    dataSource={educationData}
                    renderItem={item => (
                        <List.Item>
                            <Col span={4}>
                                <Avatar style={{ backgroundColor: `blue`, verticalAlign: 'middle' }} size="large">
                                    {item.nameShort}
                                </Avatar>
                            </Col>
                            <Col span={14}>
                            <List.Item.Meta
                                title={item.name}
                                description={item.degree}
                            />
                            </Col>
                            <Col span={6}>
                                {item.time}
                            </Col>
                        </List.Item>
                    )}
                />
            </Row>
            <Row>
                <Divider orientation="left">Experience</Divider>
            </Row>
            <Row>
                <List style={{width: "60%", margin: "5px"}}
                    itemLayout="horizontal"
                    dataSource={experienceData}
                    renderItem={item => (
                        <List.Item>
                            <Col span={4}>
                                <Avatar style={{ backgroundColor: `orange`, verticalAlign: 'middle' }} size="large">
                                    {item.companyShort}
                                </Avatar>
                            </Col>
                            <Col span={14}>
                            <List.Item.Meta
                                title={item.position}
                                description={item.location}
                            />
                            </Col>
                            <Col span={6}>
                            <List.Item.Meta
                                title={item.company}
                                description={item.time}
                            />
                            </Col>
                        </List.Item>
                    )}
                />
            </Row>
            <Row>
                <Divider orientation="left">Language Skills</Divider>
            </Row>
            <Row>
                <List style={{width: "60%", margin: "5px"}}
                    itemLayout="horizontal"
                    dataSource={languageSkillsData}
                    renderItem={item => (
                        <List.Item>
                            <Col span={4}>
                                <Avatar style={{ backgroundColor: `orange`, verticalAlign: 'middle' }} size="large">
                                    {item.languageShort}
                                </Avatar>
                            </Col>
                            <Col span={14}>
                            <List.Item.Meta
                                title={item.language}
                            />
                            </Col>
                            <Col span={6}>
                            <List.Item.Meta
                                title={item.knowledgeLevel}
                            />
                            </Col>
                        </List.Item>
                    )}
                />
            </Row>
        </div>
    );
}

export default Resume;