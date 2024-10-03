import React from "react";

const Syllabus: React.FC = () => {
  return (
    <div
      id="content"
      className="ic-Layout-contentMain w-[80%] items-center justify-center"
      role="main"
    >
      <div className="ic-Action-header">
        <div className="ic-Action-header__Primary">
          <h1 className="ic-Action-header__Heading">Course Syllabus</h1>
        </div>
        <div className="ic-Action-header__Secondary">
          <a href="#" className="jump_to_today_link">
            Jump to Today
          </a>
        </div>
      </div>

      <div
        id="course_syllabus"
        style={{ marginBottom: "10px" }}
        className="user_content enhanced"
      >
        <table
          style={{ borderCollapse: "collapse", width: "88.0442%" }}
          border={1}
        >
          <tbody>
            <tr>
              <td style={{ width: "15.6282%" }}>
                <strong>Lectures</strong>
              </td>
              <td style={{ width: "84.2232%" }}>
                Unity Hall 520 from 6pm to 7pm. Last day of class will be 6pm to
                7:30pm
              </td>
            </tr>
            <tr>
              <td style={{ width: "15.6282%" }}>
                <strong>Instructor</strong>
              </td>
              <td style={{ width: "84.2232%" }}>
                Prof. Wilson Wong, PhD, MBA (he/him/his)
              </td>
            </tr>
            <tr>
              <td style={{ width: "15.6282%" }}>
                <strong>Email</strong>
              </td>
              <td style={{ width: "84.2232%" }}>
                <a href="mailto:wwong2@wpi.edu">wwong2@wpi.edu</a> (note the{" "}
                <strong>2</strong> in the email address)
              </td>
            </tr>
            <tr>
              <td style={{ width: "15.6282%" }}>
                <strong>Office</strong>
              </td>
              <td style={{ width: "84.2232%" }}>Fuller 132</td>
            </tr>
            <tr>
              <td style={{ width: "15.6282%" }}>
                <strong>Office Hours</strong>
              </td>
              <td style={{ width: "84.2232%" }}>
                T 7-7:30pm after class (Unity Hall 520)
                <br />W 4-5pm (Zoom:{" "}
                <a
                  href="https://wpi.zoom.us/j/98146843627"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  https://wpi.zoom.us/j/98146843627
                </a>
                )
                <br />
                MR 3-4pm in Fuller 132. A wait may be required if other students
                are there.
              </td>
            </tr>
            <tr>
              <td style={{ width: "15.6282%" }}>
                <strong>GLA</strong>
              </td>
              <td style={{ width: "84.2232%" }}>
                Ana Merlo Gonzalez. Office Hours: MR 4-6pm (Washburn 220)
              </td>
            </tr>
          </tbody>
        </table>

        <p>
          We are always willing and eager to answer your questions and would
          like you to master the topics covered in a timely manner. There are
          different venues for bringing questions outside the lecture hours:
        </p>
        <ol>
          <li>
            <strong>Discord Channels.</strong> Please use the course Discord
            channels as we will be monitoring those daily, plus other students
            could likely benefit from your questions and our answers. Other
            students may even be able to answer your questions.
          </li>
          <li>
            <strong>Discord DM.</strong> You may direct message me on Discord
            for personal or private matters such as illness, ADA accommodations,
            etc. Note: contacting me through Discord will result in a far faster
            response than through email!
          </li>
          <li>
            <strong>Office hours.</strong> Go to the instructor and GLA office
            hours as they are set up solely for this purpose.
          </li>
        </ol>

        <p>
          <strong>Course Description</strong>
          <br />
          This PQP will get you ready and prepared for your Wall Street FinTech
          Project in B-Term. We will focus on getting you set up and connected
          to your project sponsors so you can hit the floor running at the
          beginning of the B-Term. Since most of you will be remote to your
          project sponsor's site, you will also need to make sure you follow
          your sponsor's remote access policies 100% from a business and
          technical (Hardware and Software) perspective.
        </p>

        <p>
          <strong>Course Objectives</strong>
          <br />
          The specific topics you will learn in this PQP course include:
        </p>
        <ol>
          <li>
            Financial concepts by obtaining the Bloomberg Financial Concepts
            Certificate
          </li>
          <li>
            How to write a formal project research proposal, the MQP proposal
          </li>
          <li>
            For projects that involve software development:
            <ol>
              <li>
                The Agile Scrum methodology and its application in developing
                software for a corporate sponsor
              </li>
              <li>
                An introduction to the technology stack that you will be using
                in the MQP
              </li>
            </ol>
          </li>
          <li>
            Corporate best practices in working remotely and working in
            FinTech/Finance companies.
          </li>
        </ol>

        <p>
          <strong>Course Methodology</strong>
          <br />
          Lectures, readings, videos, and a term project will be used to present
          the relevant material to the class. The final course grade will be
          based on the following components:
        </p>

        <table
          style={{ borderCollapse: "collapse", width: "47.5011%" }}
          border={1}
        >
          <tbody>
            <tr>
              <td style={{ width: "84.3094%" }}>
                Bloomberg Videos and Certificate (5)
              </td>
              <td style={{ width: "15.542%", textAlign: "right" }}>30%</td>
            </tr>
            <tr>
              <td style={{ width: "84.3094%" }}>MQP Proposal</td>
              <td style={{ width: "15.542%", textAlign: "right" }}>35%</td>
            </tr>
            <tr>
              <td style={{ width: "84.3094%" }}>
                Project: Tech Stack Prototype Application
              </td>
              <td style={{ width: "15.542%", textAlign: "right" }}>20%</td>
            </tr>
            <tr>
              <td style={{ width: "84.3094%" }}>Individual Assignments</td>
              <td style={{ width: "15.542%", textAlign: "right" }}>10%</td>
            </tr>
            <tr>
              <td style={{ width: "84.3094%" }}>Class participation</td>
              <td style={{ width: "15.542%", textAlign: "right" }}>5%</td>
            </tr>
            <tr>
              <td style={{ width: "84.3094%" }}>
                <strong>Total</strong>
              </td>
              <td style={{ width: "15.542%", textAlign: "right" }}>
                <strong>100%</strong>
              </td>
            </tr>
          </tbody>
        </table>

        <p>
          Class participation will include participation in all the activities
          of the course, particularly class and team meeting attendance and
          participation. Each student will be asked to evaluate each team member
          at the end of the term.
        </p>
        <p>
          Check your grades on Canvas for accuracy. Discrepancies must be
          discussed with me <strong>before the end of the course</strong>.
        </p>

        <p>
          <strong>Meeting and Lecture Etiquette</strong>
          <br />
          The following rules are those used in formal company meetings and will
          be useful when you meet with company employees. We will adopt these
          rules for our lectures and your team meetings.
        </p>
        <ul>
          <li>Arrive on time.</li>
          <li>Do not leave while a meeting is in progress.</li>
          <li>
            If you must leave before a meeting is over, inform the chairperson
            in advance.
          </li>
          <li>Turn off your cell phone before the meeting begins.</li>
          <li>
            Pay full attention to the discussion. Do not work on other tasks
            unless it is part of the meeting.
          </li>
        </ul>

        <p>
          <strong>Business School Mission Statement</strong>
          <br />
          The WPI Business School develops adaptive leaders who create
          sustainable solutions, deliver globally responsible impact, and
          conduct transformative research at the intersection of business,
          technology, and people.
        </p>

        <p>
          <strong>Americans with Disabilities Act</strong>
          <br />
          Worcester Polytechnic Institute abides by Section 504 of the
          Rehabilitation Act of 1973 and the Americans with Disabilities Act of
          1990 which stipulate that no student shall be denied the benefits of
          an education solely by reason of a disability.
        </p>

        <p>
          <strong>Social Justice</strong>
          <br />I strongly believe every student deserves a chance to learn in
          an equitable and safe environment.
        </p>
      </div>

      <h2>Course Summary:</h2>
      <div id="syllabusContainer">
        <div id="syllabus_links"></div>
        <table id="syllabus" className="wiki_table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {/* You can dynamically render course summary items here */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Syllabus;
