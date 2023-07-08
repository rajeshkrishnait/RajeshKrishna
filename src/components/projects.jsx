import React, { Component } from "react";

export default class Projects extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-work" data-section="projects">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">My Work</span>
                <h2 className="colorlib-heading animate-box">
                  Recent Projects
                </h2>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <a href="https://github.com/rajeshkrishnait/Books-Catalogue-GoogleBooks-API">
                  <div
                    className="project"
                    style={{
                      backgroundImage:
                        'url("http://tejasghetia.com/wp-content/uploads/2016/01/6195941_orig.jpg")',
                    }}
                  >
                    <div className="desc">
                      <div className="con">
                        <h3>Book's Catalogue</h3>
                        <span>
                          Book's Catalogue with Api and Recommendations using
                          Machine Learning
                        </span>
                        {/* <p className="icon">
												<span><a href="#s"><i className="icon-share3" /></a></span>
												<span><a href="#s"><i className="icon-eye" /> 100</a></span>
												<span><a href="#s"><i className="icon-heart" /> 49</a></span>
											</p> */}
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInRight"
              >
                <a href="https://github.com/rajeshkrishnait/Rajesh-Portfolio">
                  <div
                    className="project"
                    style={{
                      backgroundImage:
                        'url("https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/603823eca4b46344229b30f8_portfolio_course.png")',
                    }}
                  >
                    <div className="desc">
                      <div className="con">
                        <h3>My Portfolio</h3>
                        <span>This is the site you are currently on</span>
                        {/* <p className="icon">
												<span><a href="#s"><i className="icon-share3" /></a></span>
												<span><a href="#s"><i className="icon-eye" /> 100</a></span>
												<span><a href="#s"><i className="icon-heart" /> 49</a></span>
											</p> */}
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInTop"
              >
                <a href="https://github.com/rajeshkrishnait/Books-Catalogue-Recommendation">
                  <div
                    className="project"
                    style={{
                      backgroundImage:
                        'url("https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg")',
                    }}
                  >
                    <div className="desc">
                      <div className="con">
                        <h3>Catering Services Integration System</h3>
                        <span>
                          Integrates catering services company near users.
                        </span>
                        {/* <p className="icon">
												<span><a href="#s"><i className="icon-share3" /></a></span>
												<span><a href="#s"><i className="icon-eye" /> 100</a></span>
												<span><a href="#s"><i className="icon-heart" /> 49</a></span>
											</p> */}
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
			  <a href="https://github.com/rajeshkrishnait">
								<div className="project" style={{backgroundImage: 'url(https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)'}}>
									<div className="desc">
										<div className="con">
											<h3>Github Profile</h3>
											<span>See all of my works here</span>
										</div>
									</div>
								</div></a>
							</div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
