import React from 'react';
import { SkillBars } from '../portfolio';
import { Col, Container, Row } from 'reactstrap';
import Fade from 'react-reveal/Fade';
import GreetingLottie from '../components/DisplayLottie';

const Proficiency = () => {
  return (
    SkillBars && (
      <Container className="section section-lg">
        <Fade bottom duration={2000}>
          <Row>
            <Col lg="6" className="section-soft-skills">
              <h1 className="h1">Soft skills</h1>
              {SkillBars.map((skill) => {
                return (
                  <div className="progress-info" key={skill.Stack}>
                    <div className="progress-label">
                      <span>{skill.Stack}</span>
                    </div>
                    {/*<div className="progress-percentage">*/}
                    {/*<span>{skill.progressPercentage}</span>*/}
                    {/* <span>{skill.progressPercentage}%</span> */}
                    {/*</div>*/}
                    {/* <Progress
                      max="100"
                      value={skill.progressPercentage}
                      color="info"
                      role="progressbar"
                      aria-label={skill.Stack}
                    /> */}
                  </div>
                );
              })}
            </Col>
            <Col lg="6">
              <GreetingLottie animationPath="/lottie/build.json" />
            </Col>
          </Row>
        </Fade>
      </Container>
    )
  );
};

export default Proficiency;
