import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Eduaction <span>&</span>
          <br /> Experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intermediate</h4>
                <h5>I.M.A</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
            Completed intermediate education in PCM with Computer Science. Achieved a score of 87.83%, 
            demonstrating strong analytical skills and a solid foundation in computer science .
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intern</h4>
                <h5>TAK Technologies</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
            Interned in the IT department, gaining hands-on experience in software development,
            system support, troubleshooting, and contributing to process improvements and team 
            collaborations.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Technolog</h4>
                <h5>DIT University</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently pursuing a Computer Science program with a CGPA of 8.01. 
              Focused on AI, with experience in full-stack development using Java and Python.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
