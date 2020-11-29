import React from "react";
// import "bootstrap/dist/css/bootstrap.css";
import "./StyleSheets/Portfolio.css";

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
            {/* card 1 */}
            <div className="cardShell">
              <a href="https://bscott95.github.io/homework3/">
                <img
                  src="https://www.turing.ac.uk/sites/default/files/2018-07/enigma2.jpg"
                  className="card-img"
                  alt="enigma machine"
                />
                <div className='cardTextHolder'>
                  <h5 className="cardTitle">Password Generator</h5>
                  <p>This application generates a random password based on user-selected criteria. It features dynamically updated HTML and CSS powered by JavaScript.</p>
                  <a href="https://github.com/Bscott95/homework3">
                    <img style={{height:30, width:'auto', margin: 0}}
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
                <div className='cardTextHolder'>
                  <h5 className="cardTitle">Programing Quiz</h5>
                  <p>This application generates a random password based on user-selected criteria. It features dynamically updated HTML and CSS powered by JavaScript.
                  </p>
                  <a href="https://github.com/Bscott95/homework4">
                    <img style={{height:30, width:'auto', margin: 0}}
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
                <div className='cardTextHolder'>
                  <h5 className="cardTitle">Programing Quiz</h5>
                  <p>This application generates a random password based on user-selected criteria. It features dynamically updated HTML and CSS powered by JavaScript.
                  </p>
                  <a href="https://github.com/Bscott95/homework4">
                    <img style={{height:30, width:'auto', margin: 0}}
                      src="https://aimansoliman.files.wordpress.com/2020/02/github_owler_20180612_070358_original.png"
                      className="card-img"
                      alt="github icon"
                    />
                  </a>
                </div>
              </a>
            </div>
            <hr />
            {/* 
            <div className="card bg-dark text-white">
              <a href="https://bscott95.github.io/homework5/">
                <img
                  src="https://allaboutthehouseblog.files.wordpress.com/2013/03/180-week-at-a-glance-30min-increments.jpg?w=640"
                  className="card-img"
                  alt="Stock charts"
                />
                <div className="card-img-overlay">
                  <h5 className="card-title">Workday Planner</h5>
                </div>
              </a>
            </div>
            <div className="card bg-dark text-white">
              <a href="https://bscott95.github.io/homework6/">
                <img
                  src="https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002331/img/en/a0002331_parts_5b04ca1cbea78.jpg?20180709132356&q=80&rw=686&rh=490"
                  className="card-img"
                  alt="Pesonal Relationship"
                />
                <div className="card-img-overlay">
                  <h5 className="card-title">Weather Forecast</h5>
                </div>
              </a>
            </div>
            <div className="card bg-dark text-white">
              <a href="https://baytamo.github.io/Project1/">
                <img
                  src="https://media.timeout.com/images/105670890/630/472/image.jpg"
                  className="card-img"
                  alt="enigma machine"
                />
                <div className="card-img-overlay">
                  <h5 className="card-title">Dine Outside</h5>
                </div>
              </a>
            </div> */}
          </div>
        </section>
      </main>
    </div>
  );
}
