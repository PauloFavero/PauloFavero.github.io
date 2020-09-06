import React from 'react';
// import { Gitgraph } from '@gitgraph/react'
import { Gitgraph, templateExtend, TemplateName } from '@gitgraph/react';


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
    <div style={{ backgroundColor: 'white' }}>
      <Gitgraph
        options={withoutAuthor}
      >
        {
          (gitgraph) => {
            // Simulate git commands with Gitgraph API.
            const master = gitgraph.branch({
              name: "UNICAMP",
              style: {
                color: "green"
              },
              commitDefaultOptions: {
                style: {
                  message: {
                    color: "black"
                  },
                  dot: {
                    color: "green"
                  }
                }
              }
            });

            master.commit({
              subject: "Admited at the Control and Automation Engineering",
              // body: "More details about the feature…",
              // dotText: "❤️",
              tag: "2013",
              style: {
                // Specific style for this commit
                color: "green"
              },
              dot: {
                color: 'green',
              }
            });

            const ENIB = master.branch("ENIB - DD");
            ENIB.commit({
              subject: "I went to France to study engineering in a double degree program (ENIB - UNICAMP)",
              body: "More details about the feature…",
              // dotText: "❤️",
              tag: "2017",
              style: {
                // Specific style for this commit
                color: "blue"
              },
            });

            const Master = ENIB.branch("ENIB - Master");
            Master.commit("Started a Master degree in Computer Science at ENIB - 2018");

            ENIB.commit("Graduated as Mechatronics Engineer - 2019");
            Master.commit("Master Degree Completed - 2019")

            ENIB.merge(Master)

            master.merge(ENIB, "Double Degree Program Ended");

            master.commit("Expect to graduate in 1s-2021");

            master.commit({
              subject: "Add feature",
              body: "More details about the feature…",
              dotText: "❤️",
              tag: "v1.2",
              style: {
                // Specific style for this commit
                color: "green"
              },
            })

            master.commit({
              subject: "Add feature",
              body: "More details about the feature…",
              dotText: "❤️",
              tag: "v1.4",
              style: {
                // Specific style for this commit
                color: "black"
              },
            })

            // const LAMAR = master.branch("LAMAR");
            // LAMAR.commit("Mechanical Technician at the Rotatory Machines Laboratory");

            // const aFeature = LAMAR.branch("a-feature");
            // aFeature
            //   .commit("Make it work")
            //   .commit("Make it right")
            //   .commit("Make it fast");

            // LAMAR.merge(aFeature);
            // LAMAR.commit("Prepare v1");

            // master.merge(LAMAR).tag("v1.0.0");
          }
        }
      </Gitgraph>
    </div>
  );
}

export default GraphTimeline;