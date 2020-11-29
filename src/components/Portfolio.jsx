import React from "react";
// import "bootstrap/dist/css/bootstrap.css";
import "./StyleSheets/Portfolio.css";
import HypeTypeThumbnail from "./ImageAssets/HypeTypeThumbnail.png";
import READMEGenerator from "./ImageAssets/READMEGeneratorThumbnail.png";
import EmployeeDirectory from "./ImageAssets/EmployeeDirectoryThumbnail.png";
import TemplateEngine from "./ImageAssets/TemplateEngineThumbnail.png";

export default function ButtonAppBar() {
  return (
    <div>
      <main className="mainSection">
        <section className="content">
          {/* <!-- title section --> */}
          <div className="content-title">
            <h2>Portfolio</h2>
          </div>
          <hr />
          {/* <!-- main content --> */}
          <div className="cardContainer">
            {/* card 6 */}
            <div className="cardShell">
              <a href="https://hype-type.herokuapp.com/">
                <img
                  src={HypeTypeThumbnail}
                  className="card-img"
                  alt="game screenshot"
                />
                <div className="cardTextHolder">
                  <h5 className="cardTitle">HypeType</h5>
                  <p>
                    HypeType is a typing game created in React.js. Computer
                    based jobs has skyrocketed in the United States and world
                    wide. This creates a critical need for being able to type
                    accurately and quickly in order to be efficient at work.
                    Many other typing games on the internet can leave you lost
                    in a mess of complex gameplay, confusing user interfaces or
                    a slur of advertisements. HypeType provides the user with a
                    clean, easy to understand user experience, offering multiple
                    options for their typing practice. They can follow along
                    with live updates on their words per minute and accuracy.
                    They can also view their personal dashboard to view data
                    about the history of their performances.
                  </p>
                  <a href="https://github.com/berjonbatistiana/Hype-Type">
                    <img
                      style={{ height: 30, width: "auto", margin: 0 }}
                      src="https://aimansoliman.files.wordpress.com/2020/02/github_owler_20180612_070358_original.png"
                      className="card-img"
                      alt="github icon"
                    />
                  </a>
                </div>
              </a>
            </div>
            <hr />
            {/* card X */}
            <div className="cardShell">
              <a href="https://github.com/Bscott95/homework7">
                <img
                  src={READMEGenerator}
                  className="card-img"
                  alt="game screenshot"
                />
                <div className="cardTextHolder">
                  <h5 className="cardTitle">README Generator</h5>
                  <p>
                    Created a command-line application that dynamically
                    generates a README.md from a user's input. When creating an
                    open source project on GitHub, it is important to have a
                    quality README with information about the app--what is the
                    app for, how to use the app, how to install it, how to
                    report issues, and how to make contributions so that other
                    developers are more likely to use and contribute to the
                    success of the project.
                  </p>
                  <a href="https://github.com/Bscott95/homework7">
                    <img
                      style={{ height: 30, width: "auto", margin: 0 }}
                      src="https://aimansoliman.files.wordpress.com/2020/02/github_owler_20180612_070358_original.png"
                      className="card-img"
                      alt="github icon"
                    />
                  </a>
                </div>
              </a>
            </div>
            <hr />
            {/* card Z */}
            <div className="cardShell">
              <a href="https://github.com/Bscott95/Team-Profile-Generator">
                <img
                  src={TemplateEngine}
                  className="card-img"
                  alt="app screenshot"
                />
                <div className="cardTextHolder">
                  <h5 className="cardTitle">Employee Summary Template Engine</h5>
                  <p>
                  One of the most important aspects of programming is writing code that is readable, reliable, and maintainable. Oftentimes, how we design our code is just as important as the code itself. This is a Node CLI that takes in information about employees and generates an HTML webpage that displays summaries for each person.</p>
                  <a href="https://github.com/Bscott95/Team-Profile-Generator">
                    <img
                      style={{ height: 30, width: "auto", margin: 0 }}
                      src="https://aimansoliman.files.wordpress.com/2020/02/github_owler_20180612_070358_original.png"
                      className="card-img"
                      alt="github icon"
                    />
                  </a>
                </div>
              </a>
            </div>
            <hr />
            {/* card Y */}
            <div className="cardShell">
              <a href="https://peaceful-shelf-39833.herokuapp.com/">
                <img
                  src={EmployeeDirectory}
                  className="card-img"
                  alt="game screenshot"
                />
                <div className="cardTextHolder">
                  <h5 className="cardTitle">Employee Directory</h5>
                  <p>
                    Created an employee directory with React components and largely the mdbreact framework. An employee or manager would benefit greatly from being able to view non-sensitive data about other employees. It would be particularly helpful to be able to filter or search for employees by name.
                  </p>
                  <a href="https://github.com/Bscott95/employee-directory">
                    <img
                      style={{ height: 30, width: "auto", margin: 0 }}
                      src="https://aimansoliman.files.wordpress.com/2020/02/github_owler_20180612_070358_original.png"
                      className="card-img"
                      alt="github icon"
                    />
                  </a>
                </div>
              </a>
            </div>
            <hr />
            {/* card 5 */}
            <div className="cardShell">
              <a href="https://baytamo.github.io/Project1/">
                <img
                  src="https://media.timeout.com/images/105670890/630/472/image.jpg"
                  className="card-img"
                  alt="Weather charts"
                />
                <div className="cardTextHolder">
                  <h5 className="cardTitle">Dine Outside</h5>
                  <p>
                    Built an app that allows users to locate local restaurants
                    by food type or name, check if they have outdoor dining
                    available at the location, and also provide a local weather
                    forecast so one knows what to wear and can otherwise prepare
                    appropriately. Built with a group of three others.
                  </p>
                  <a href="https://github.com/baytamo/Project1">
                    <img
                      style={{ height: 30, width: "auto", margin: 0 }}
                      src="https://aimansoliman.files.wordpress.com/2020/02/github_owler_20180612_070358_original.png"
                      className="card-img"
                      alt="github icon"
                    />
                  </a>
                </div>
              </a>
            </div>
            <hr />
            {/* card 1 */}
            <div className="cardShell">
              <a href="https://bscott95.github.io/homework3/">
                <img
                  src="https://www.turing.ac.uk/sites/default/files/2018-07/enigma2.jpg"
                  className="card-img"
                  alt="enigma machine"
                />
                <div className="cardTextHolder">
                  <h5 className="cardTitle">Password Generator</h5>
                  <p>
                    This application generates a random password based on
                    user-selected criteria. It features dynamically updated HTML
                    and CSS powered by JavaScript.
                  </p>
                  <a href="https://github.com/Bscott95/homework3">
                    <img
                      style={{ height: 30, width: "auto", margin: 0 }}
                      src="https://aimansoliman.files.wordpress.com/2020/02/github_owler_20180612_070358_original.png"
                      className="card-img"
                      alt="github icon"
                    />
                  </a>
                </div>
              </a>
            </div>
            <hr />
            {/* card 2 */}
            <div className="cardShell">
              <a href="https://bscott95.github.io/homework4/">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Java-greeting-app-source-code.png/1024px-Java-greeting-app-source-code.png"
                  className="card-img"
                  alt="Code"
                />
                <div className="cardTextHolder">
                  <h5 className="cardTitle">Programing Quiz</h5>
                  <p>
                    This is a timed quiz of multiple choice questions. This app
                    runs in a browser and features dynamically updated HTML and
                    CSS powered by JavaScript. It can also be run on multiple
                    screen sizes/devices. Scoring data is stored locally. Test
                    your knowledge with the links!
                  </p>
                  <a href="https://github.com/Bscott95/homework4">
                    <img
                      style={{ height: 30, width: "auto", margin: 0 }}
                      src="https://aimansoliman.files.wordpress.com/2020/02/github_owler_20180612_070358_original.png"
                      className="card-img"
                      alt="github icon"
                    />
                  </a>
                </div>
              </a>
            </div>
            <hr />
            {/* card 3 */}
            <div className="cardShell">
              <a href="https://bscott95.github.io/homework5/">
                <img
                  src="https://allaboutthehouseblog.files.wordpress.com/2013/03/180-week-at-a-glance-30min-increments.jpg?w=640"
                  className="card-img"
                  alt="day planner"
                />
                <div className="cardTextHolder">
                  <h5 className="cardTitle">Workday Planner</h5>
                  <p>
                    Created a simple calendar application that allows the user
                    to save events for each hour of the day. This app runs in
                    the browser and features dynamically updated HTML and CSS
                    powered by jQuery/JS.
                  </p>
                  <a href="https://github.com/Bscott95/homework5">
                    <img
                      style={{ height: 30, width: "auto", margin: 0 }}
                      src="https://aimansoliman.files.wordpress.com/2020/02/github_owler_20180612_070358_original.png"
                      className="card-img"
                      alt="github icon"
                    />
                  </a>
                </div>
              </a>
            </div>
            <hr />
            {/* card 4 */}
            <div className="cardShell">
              <a href="https://bscott95.github.io/homework6/">
                <img
                  src="https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002331/img/en/a0002331_parts_5b04ca1cbea78.jpg?20180709132356&q=80&rw=686&rh=490"
                  className="card-img"
                  alt="Weather charts"
                />
                <div className="cardTextHolder">
                  <h5 className="cardTitle">Weather Forecast</h5>
                  <p>
                    Built a weather dashboard that runs in the browser and
                    features dynamically updated HTML and CSS powered by
                    JQuery/JS. Uses the OpenWeather API to retrieve weather data
                    for cities.
                  </p>
                  <a href="https://github.com/Bscott95/homework5">
                    <img
                      style={{ height: 30, width: "auto", margin: 0 }}
                      src="https://aimansoliman.files.wordpress.com/2020/02/github_owler_20180612_070358_original.png"
                      className="card-img"
                      alt="github icon"
                    />
                  </a>
                </div>
              </a>
            </div>
            <hr />

            {/* Card End */}
          </div>
        </section>
      </main>
    </div>
  );
}
