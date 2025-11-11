import { Icon } from '@iconify/react';
import React, { Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import { Col, Container, Row, UncontrolledTooltip } from 'reactstrap';
import DisplayLottie from '../components/DisplayLottie';
import { skillsSection } from '../portfolio';

const Skills = () => {
  return (
    skillsSection && (
      <Container className="text-center my-5 section section-lg" id="skills">
        <h1 className="h1">{skillsSection.title}</h1>
        <p className="lead">{skillsSection.subTitle}</p>
        {skillsSection.data.map((section) => {
          return (
            <Row className="my-5 align-items-center" key={section.title}>
              <Col lg="6" className="order-2 order-lg-1">
                <Fade left duration={2000}>
                  <DisplayLottie animationPath={section.lottieAnimationFile} />
                </Fade>
              </Col>
              <Col lg="6" className="order-1 order-lg-2">
                <Fade right duration={2000}>
                  <h2 className="h3 mb-2">{section.title}</h2>
                  <div className="d-flex justify-content-center flex-wrap mb-2">
                    {section.softwareSkills.map((skill) => {
                      return (
                        <Fragment key={skill.skillName}>
                          <div
                            className="icon icon-lg icon-shape shadow-sm rounded-circle m-1"
                            id={skill.skillName.replaceAll(/\s/g, '')}
                          >
                            <Icon
                              icon={skill.fontAwesomeClassName}
                              data-inline="false"
                            ></Icon>
                          </div>
                          <UncontrolledTooltip
                            delay={0}
                            placement="bottom"
                            target={skill.skillName.replaceAll(/\s/g, '')}
                          >
                            {skill.skillName}
                          </UncontrolledTooltip>
                        </Fragment>
                      );
                    })}
                  </div>
                  <div>
                    {section.skills.map((skill, index) => {
                      return (
                        <p key={`${section.title}-skill-${index}`}>{skill}</p>
                      );
                    })}
                  </div>
                </Fade>
              </Col>
            </Row>
          );
        })}
      </Container>
    )
  );
};

export default Skills;
