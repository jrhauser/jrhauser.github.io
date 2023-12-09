import { Tab } from "@headlessui/react";
import classNames from "classnames";
import picture1 from "../images/heashot.jpg";
import picture2 from "../images/img1.jpeg";
import { useState } from "react";
import RepoCards from "./repocards";

export default function Layout() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="bg-limed-spruce-900 p-5 min-h-screen">
      <div className="flex w-25  bg-limed-spruce-600 m-5 b rounded-md shadow-lg text-xl">
        <Tab.Group
          vertical
          selectedIndex={selectedIndex}
          onChange={setSelectedIndex}
        >
          <Tab.List className="max-w-screen m-2">
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5  font-medium leading-5",
                  selected
                    ? "text-limed-spruce-600 bg-limed-spruce-200 outline-0 border-4 border-limed-spruce-900"
                    : " text-limed-spruce-50 bg-limed-spruce-600"
                )
              }
            >
              J. R. Hauser
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-lg font-medium leading-5 outline-0  ",
                  selected
                    ? "text-limed-spruce-600 bg-limed-spruce-200 border-4 border-limed-spruce-900"
                    : " text-limed-spruce-50 bg-limed-spruce-600"
                )
              }
            >
              Contact
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-lg font-medium leading-5 outline-0",
                  selected
                    ? "text-limed-spruce-600 bg-limed-spruce-200 border-4 border-limed-spruce-900"
                    : " text-limed-spruce-50 bg-limed-spruce-600"
                )
              }
            >
              Resume
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-lg font-medium leading-5 outline-0",
                  selected
                    ? "text-limed-spruce-600 bg-limed-spruce-200 border-4 border-limed-spruce-900"
                    : " text-limed-spruce-50 bg-limed-spruce-600"
                )
              }
            >
              Projects
            </Tab>
          </Tab.List>
          <div className="container bg-limed-spruce-200 text-center shadow-sm m-8 border-8 border-limed-spruce-900">
            <Tab.Panels>
              <Tab.Panel>
                <div className="container h-32 bg-limed-spruce-600">
                  <h1 className="text-8xl text-limed-spruce-50">
                    J. R. Hauser
                  </h1>
                </div>
                <div className="flex justify-center">
                  <img
                    src={picture1}
                    className="rounded-full border-8 border-limed-spruce-900 self-center grayscale m-3"
                  ></img>
                </div>
                <div className="text-8xl text-center text-limed-spruce-900 align-text-bottom m-3">
                  Hi! I'm Joe
                </div>
                <p className="text-2xl text-limed-spruce-900 m-6">
                  I am a student at WVU pursuing my Bachelors' in Computer
                  Science. I have a year of experience as a manager in food
                  service, where I honed my soft skills in dealings with both
                  customers and coworkers, and learned how to work as an
                  effective member of a team. I have experience with full stack
                  web, java, javascript and python development as well as git
                  and github. I've also dipped my toes into a wide array of
                  languages in my coursework at WVU. I am passionate about
                  problem solving and I love to learn new skills!
                </p>
                <button
                  onClick={() => setSelectedIndex(selectedIndex + 1)}
                  className="bg-limed-spruce-600 h-12 w-48 text-3xl text-limed-spruce-50 active:bg-limed-spruce-400 m-3"
                >
                  Contact
                </button>
                <button
                  onClick={() => setSelectedIndex(selectedIndex + 2)}
                  className="bg-limed-spruce-600 h-12 w-48 text-3xl text-limed-spruce-50 active:bg-limed-spruce-400 m-3"
                >
                  Resume
                </button>
                <button
                  onClick={() => setSelectedIndex(selectedIndex + 3)}
                  className="bg-limed-spruce-600 h-12 w-48 text-3xl text-limed-spruce-50 active:bg-limed-spruce-400 m-3"
                >
                  Projects
                </button>
              </Tab.Panel>
              <Tab.Panel>
                <div className="container h-32 bg-limed-spruce-600">
                  <h1 className="text-8xl text-limed-spruce-50">Contact</h1>
                </div>
                <div class="flex justify-center">
                  <img
                    src={picture2}
                    className="rounded-full border-8 h-48 border-limed-spruce-900 self-center grayscale m-3"
                  ></img>
                  <div className="text-limed-spruce-900 text-3xl m-4 text-left ">
                    <ul>
                      <li>
                        Call me:
                        <a
                          href="tel:6362938814"
                          className="no-underline hover:underline m-8"
                        >
                          636 293 8814
                        </a>
                      </li>
                      <li className="mt-3">
                        Email me: <br />
                        <div className="inline-flex">
                          <div className="text-2xl indent-5">Business -</div>
                          <a
                            href="mailto:jrhauser1127@gmail.com"
                            className="no-underline hover:underline text-2xl indent-2"
                          >
                            jrhauser1127@gmail.com
                          </a>
                        </div>
                        <br />
                        <div className="inline-flex">
                          <div className="text-2xl indent-5">School -</div>
                          <a
                            href="mailto:jrh00045@mix.wvu.edu"
                            className="no-underline hover:underline indent-2 text-2xl"
                          >
                            jrh00045@gmail.com
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedIndex(selectedIndex - 1)}
                  className="bg-limed-spruce-600 h-12 w-48 text-3xl text-limed-spruce-50 active:bg-limed-spruce-400 m-3"
                >
                  Home
                </button>
                <button
                  onClick={() => setSelectedIndex(selectedIndex + 1)}
                  className="bg-limed-spruce-600 h-12 w-48 text-3xl text-limed-spruce-50 active:bg-limed-spruce-400 m-3"
                >
                  Resume
                </button>
                <button
                  onClick={() => setSelectedIndex(selectedIndex + 2)}
                  className="bg-limed-spruce-600 h-12 w-48 text-3xl text-limed-spruce-50 active:bg-limed-spruce-400 m-3"
                >
                  Projects
                </button>
              </Tab.Panel>
              <Tab.Panel>
                <div className="container h-32 bg-limed-spruce-600">
                  <h1 className="text-8xl text-limed-spruce-50">Resume</h1>
                </div>
                <h1 className="text-6xl text-limed-spruce-900">
                  Joseph Hauser
                </h1>
                <h5 className="text-limed-spruce-900 text-xl m-3">
                  1367 Stewartstown Road, Morgantown, West Virginia
                  <br /> (636) 293 8814
                  <div className="inline"> | </div>
                  <a
                    href="https://github.com/jrhauser"
                    className=" no-underline hover:underline"
                  >
                    github
                  </a>
                  <div className="inline"> | </div>
                  <a
                    href="mailto:jrh00045@mix.wvu.edu"
                    className="no-underline hover:underline"
                  >
                    jrh00045@mix.wvu.edu
                  </a>
                </h5>
                <h6 className="text-lg text-limed-spruce-900">
                  Software Developer - seeking an entry level position
                </h6>
                <div className="container mx-auto w-3/4 text-limed-spruce-900">
                  <ul className="text-left m-3">
                    <li>
                      <i>Languages</i>: C, Java, Python, JavaScript, HTML, CSS,
                      and SQL
                    </li>
                    <li>
                      <i>Operating Systems</i>: Windows, Linux, Android
                    </li>
                    <li>
                      <i>Databases</i>: SQLite
                    </li>
                  </ul>
                </div>
                <h6 className="text-lg">EDUCATION</h6>
                <div className="container w-3/4 mx-auto">
                  <ul className="text-limed-spruce-900 text-left m-3">
                    <li>
                      <ul>
                        <li>
                          <b className="text-lg">West Virginia University</b>,
                          Morgantown, WV{" "}
                          <p className="inline float-right">
                            Anticipated Graduation: Dec 2024{" "}
                          </p>
                        </li>
                        <li>Bachelor of Science in Computer Science</li>
                        <li>
                          <b>GPA: 3.6</b>
                        </li>
                        <li>
                          <p className="-indent-3 pl-3">
                            <b>Relevant Coursework</b> <br />
                            Principles of Programming Languages, Discrete
                            Mathematics, Introduction to Computer Science and
                            Data Structures, Calculus 1 and 2, File and Data
                            Structures (in progress) and Software Development
                            (in progress).
                          </p>
                        </li>
                      </ul>
                    </li>
                    <li className="mt-2">
                      <b>Harvard's CS50x</b> - Open Courseware{" "}
                      <p className="inline float-right">Feb 2023 </p>
                      <p className="-indent-3 pl-3">
                        <b className="text-md">Relevant Coursework</b> <br />C
                        programming, Python programming, Flask, Jinja, Bootstrap
                      </p>
                    </li>
                  </ul>
                </div>
                <h6 className="text-lg">WORK HISTORY</h6>
                <div className="container w-3/4 mx-auto text-left">
                  <b className="text-lg">Jack In The Box</b>, Wentzville, MO{" "}
                  <p className="inline float-right">Feb 2019 - Feb 2020 </p>
                  <br />
                  <i>Shift Leader</i>
                </div>
                <div className="container w-3/4 mx-auto text-left">
                  <b className="text-lg">West Virginia University</b>, Morgantown, WV{" "}
                  <p className="inline float-right">Aug 2023 - Dec 2020 </p>
                  <br />
                  <i>Proctor</i>
                </div>
                <h6 className="text-lg">ACTIVITES</h6>
                <div className="container w-3/4 mx-auto text-left">
                  <ul>
                    <li>
                      <b className="text-lg">Mason Dixon Canoe Cruisers</b>,
                      Harpers Ferry, WV{" "}
                      <p className="inline float-right">July 2020 - Present </p>{" "}
                      <br />
                      <i>Member</i>
                    </li>
                    <li className="mt-2">
                      <b>Personal Coding Projects</b>
                      <p className="inline float-right">2018 - Present</p>
                    </li>
                  </ul>
                </div>
                <div className="m-5">
                  <a href="resume.pdf" download="JRHAUSER.pdf">
                    <button className="bg-limed-spruce-600 h-12 w-64 text-3xl text-limed-spruce-50 active:bg-limed-spruce-400 m-3">
                      Download
                    </button>
                  </a>
                </div>
                <button
                  onClick={() => setSelectedIndex(selectedIndex - 2)}
                  className="bg-limed-spruce-600 h-12 w-48 text-3xl text-limed-spruce-50 active:bg-limed-spruce-400 m-3"
                >
                  Home
                </button>
                <button
                  onClick={() => setSelectedIndex(selectedIndex - 1)}
                  className="bg-limed-spruce-600 h-12 w-48 text-3xl text-limed-spruce-50 active:bg-limed-spruce-400 m-3"
                >
                  Contact
                </button>
                <button
                  onClick={() => setSelectedIndex(selectedIndex + 1)}
                  className="bg-limed-spruce-600 h-12 w-48 text-3xl text-limed-spruce-50 active:bg-limed-spruce-400 m-3"
                >
                  Projects
                </button>
              </Tab.Panel>
              <Tab.Panel>
                <div className="container h-32  bg-limed-spruce-600 ">
                  <h1 className="text-8xl text-limed-spruce-50">Projects</h1>
                </div>
                <h1 className="text-4xl text-limed-spruce-900">
                  Want to see what im working on?
                </h1>
                <p className="text-2xl m-4">
                  Check out my{" "}
                  <a
                    href="https://github.com/jrhauser"
                    className=" no-underline hover:underline"
                  >
                    github
                  </a>
                </p>
                <div className="text-3xl text-limed-spruce-900">
                  Here's a few highlights...
                </div>
                <RepoCards></RepoCards>
              </Tab.Panel>
            </Tab.Panels>
          </div>
        </Tab.Group>
      </div>
    </div>
  );
}
