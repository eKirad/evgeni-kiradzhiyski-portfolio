// React imports
import * as React from "react";

// Antd imports
import { List, Tag, Divider, Row, Col } from 'antd';

interface IProps { } 

const Resume: React.FC<IProps> = (props) => {
    const educationData = [
        {
            name: `Technical University of Munich`,
            degree: `MS in Computer Science`,
            time: `April 2019 - March 2021`
        },
        {
            name: `University of Duisburg-Essen`,
            degree: `BS in Software Engineering`,
            time: `October 2014 - February 2019`
        },
      ];

      const experienceData = [
        {
            company: `Capgemni`,
            location: `Munich, BY, Germany`,
            position: `Working Student: Software Engineer`,
            time: `April 2019 - Present`
        },
        {
            company: `Capgemni`,
            location: `Düsseldorf, NW, Germany`,
            position: `Working Student: Software Engineer`,
            time: `January 2018 - April 2019`
        },
        {
            company: `Capgemni`,
            location: `Düsseldorf, NW, Germany`,
            position: `Software Engineer Intern`,
            time: `September 2017 - December 2017`
        },
        {
            company: `Trivago N.V.`,
            location: `Düsseldorf, NW, Germany`,
            position: `Working Student: Assurance Quality Management (AQM) Testing`,
            time: `November 2016 - August 2017`
        },
      ];

      const languageSkillsData = [
        {
            language: `Bulgarian`,
            knowledgeLevel: `Native Speaker`,
        },
        {
            language: `German`,
            knowledgeLevel: `Fluent`,
        },
        {
            language: `English`,
            knowledgeLevel: `Fluent`,
        },
      ];

    return(
        <div>
            <Row>
                <Divider orientation="left">Education</Divider>
            </Row>
            <Row align="middle">
                <List style={{width: "60%", margin: "5px"}}
                    itemLayout="horizontal"
                    dataSource={educationData}
                    renderItem={item => (
                        <List.Item>
                            <Col span={18}>
                            <List.Item.Meta
                                title={<a href="https://ant.design">{item.name}</a>}
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
                            <Col span={18}>
                            <List.Item.Meta
                                title={<a href="https://ant.design">{item.position}</a>}
                                description={item.location}
                            />
                            </Col>
                            <Col span={6}>
                            <List.Item.Meta
                                title={<a href="https://ant.design">{item.company}</a>}
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
                            <Col span={18}>
                            <List.Item.Meta
                                title={<a href="https://ant.design">{item.language}</a>}
                            />
                            </Col>
                            <Col span={6}>
                            <List.Item.Meta
                                title={<a href="https://ant.design">{item.knowledgeLevel}</a>}
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