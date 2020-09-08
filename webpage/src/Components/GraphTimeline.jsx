import React from 'react';
// import { Gitgraph } from '@gitgraph/react'
import { Gitgraph, templateExtend, TemplateName } from '@gitgraph/react';
import { Container, Row, Col } from 'react-bootstrap';


function GraphTimeline() {
  var withoutAuthor = {
    template: templateExtend(TemplateName.Metro, {
      commit: {
        message: {
          displayAuthor: false,
        },
      },
    })
  }

  return (
    <Container>
      <Row>
        <Col sm={6}>
          <Gitgraph
            options={withoutAuthor}
          >
            {
              (gitgraph) => {
                // Simulate git commands with Gitgraph API.
                const master = gitgraph.branch({
                  name: "UNICAMP",
                  style: {
                    color: "gray"
                  },
                  // commitDefaultOptions: {
                  //   style: {
                  //     message: {
                  //       color: "gray"
                  //     },
                  //     dot: {
                  //       color: "gray"
                  //     }
                  //   }
                  // }
                });

                master.commit({
                  subject: "Admited at the Control and Automation Engineering",
                  // body: "More details about the feature…",
                  // dotText: "❤️",
                  tag: "2013",
                  onMouseOver: onMouseOver,
                  // style: {
                  //   // Specific style for this commit
                  //   color: "gray"
                  // },
                  // dot: {
                  //   color: 'gray',
                  // }
                });

                const ENIB = master.branch("ENIB - DD");
                ENIB.commit({
                  subject: "Started a double degree program (ENIB - UNICAMP)",
                  // body: "More details about the feature…",
                  // dotText: "❤️",
                  tag: "2017",
                  style: {
                    // Specific style for this commit
                    // color: "blue"
                  },
                });

                const MSc = ENIB.branch("ENIB - MSc");

                MSc.commit({
                  subject: "Started a Master degree in Computer Science",
                  // body: "More details about the feature…",
                  // dotText: "❤️",
                  tag: "2018-2s",
                  style: {
                    // Specific style for this commit
                    // color: "blue"
                  },
                });

                ENIB.commit({
                  subject: "Graduated as Mechatronics Engineer",
                  // body: "More details about the feature…",
                  // dotText: "❤️",
                  tag: "2019",
                  style: {
                    // Specific style for this commit
                    // color: "blue"
                  },
                });

                MSc.commit({
                  subject: "Master Degree Completed",
                  // body: "More details about the feature…",
                  // dotText: "❤️",
                  tag: "2019-2s",
                  style: {
                    // Specific style for this commit
                    // color: "blue"
                  },
                });;

                // ENIB.merge(MSc)

                // master.merge(ENIB, "Double Degree Program Ended");

                master.commit("Expect to graduate in 1s-2021");
              }
            }
          </Gitgraph>
        </Col>
        <Col sm={6}>
          {/* <Gitgraph
            options={withoutAuthor}
          >
            {
              (gitgraph) => {
                // Simulate git commands with Gitgraph API.
                const master = gitgraph.branch({
                  name: "UNICAMP",
                  style: {
                    color: "gray"
                  },
                  // commitDefaultOptions: {
                  //   style: {
                  //     message: {
                  //       color: "gray"
                  //     },
                  //     dot: {
                  //       color: "gray"
                  //     }
                  //   }
                  // }
                });

                master.commit({
                  subject: "Admited at the Control and Automation Engineering",
                  // body: "More details about the feature…",
                  // dotText: "❤️",
                  tag: "2013",
                  onMouseOver: onMouseOver,
                  // style: {
                  //   // Specific style for this commit
                  //   color: "gray"
                  // },
                  // dot: {
                  //   color: 'gray',
                  // }
                });

                const ENIB = master.branch("ENIB - DD");
                ENIB.commit({
                  subject: "Started a double degree program (ENIB - UNICAMP)",
                  // body: "More details about the feature…",
                  // dotText: "❤️",
                  tag: "2017",
                  style: {
                    // Specific style for this commit
                    // color: "blue"
                  },
                });

                const MSc = ENIB.branch("ENIB - MSc");

                MSc.commit({
                  subject: "Started a Master degree in Computer Science",
                  // body: "More details about the feature…",
                  // dotText: "❤️",
                  tag: "2018-2s",
                  style: {
                    // Specific style for this commit
                    // color: "blue"
                  },
                });

                ENIB.commit({
                  subject: "Graduated as Mechatronics Engineer",
                  // body: "More details about the feature…",
                  // dotText: "❤️",
                  tag: "2019",
                  style: {
                    // Specific style for this commit
                    // color: "blue"
                  },
                });

                MSc.commit({
                  subject: "Master Degree Completed",
                  // body: "More details about the feature…",
                  // dotText: "❤️",
                  tag: "2019-2s",
                  style: {
                    // Specific style for this commit
                    // color: "blue"
                  },
                });;

                // ENIB.merge(MSc)

                // master.merge(ENIB, "Double Degree Program Ended");

                master.commit("Expect to graduate in 1s-2021");
              }
            }
          </Gitgraph> */}
        </Col>
      </Row>
    </Container>
  );
}

function onMouseOver() {
  console.log("onMouseOver");
}

export default GraphTimeline;