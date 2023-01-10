import "./App.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">
              developedbyRazin
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-white"
                />
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Razin Rangara
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Junior Developer and Tester.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md-text-2xl max-w-xl mx-auto dark:text-white">
              A broadminded and highly motivated software developer graduate and
              Software QA Tester with above 1 year in Quality Assurance and
              Software Testing experience both web-based/mobile applications.
              Becoming a successful professional and nurturing my skills and
              experience along with giving new heights to the organization's
              success is my career objective.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white">
            <a href="https://www.linkedin.com/in/razin-rangara/">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/rangararazin">
              <AiFillGithub />
            </a>
          </div>

          <div>
            <h3 className="text-3xl text-center py-3 mt-4 dark:text-white">
              EXPERIENCE
            </h3>
          </div>
          <div>
            <div className="text-left shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <h3 className="text-3xl font-medium pt-8 pb-2 ">
                Trainee Software Developer - Northcoders | Remote | Oct 2022 –
                Jan 2023
              </h3>
              <ul class="mb-2 text-xl list-disc  text-gray-900 dark:bg-white">
                <li>
                  Learnt full stack software development as a student of their
                  12-week coding boot camp
                </li>

                <li>
                  Followed industries standard practices to develop
                  application/software{" "}
                </li>
                <li>Utilized version control with git</li>
                <li>
                  Experienced functional programming development using MVC, TDD
                  and pair programming concepts
                </li>
                <li>
                  <b>Tools and Technologies:</b> JavaScript, React, React
                  Native, HTML, CSS, Node, Express, PostgresSQL, SQL, Firestore
                  NoSQL, Firebase Authentication, Firebase Storage, Jest, GIT,
                  Figma, Trello
                </li>

                <li>
                  <b>Project 1 - NC News -</b> A news website built with React
                  which has functionality like viewing articles, sorting and
                  filtering the articles, up vote them and add/delete comments.
                  Back End is built on a RESTful API for the purpose of
                  accessing application data programmatically. The intention
                  here is to mimic the building of a real world backend service
                  (such as reddit)
                  <ul>
                    <li>
                      <a href="https://zinncnews.netlify.app/">
                        - Link to Hosted Version
                      </a>{" "}
                    </li>
                    <li>
                      <a href="https://github.com/rangararazin/zin-fe-ncnews">
                        - Link to Front End
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/rangararazin/zin-be-ncnews">
                        - Link to Back End
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <b>Project 2 - FoodLife -</b> An app build on React Native
                  which finds recipes based on the user’s available ingredients
                  helping using to track, organize and manage the food they
                  already have and avoid food waste
                  <ul>
                    <li>
                      <a href="https://youtu.be/rIbf32CtNCg">- Link to Demo</a>
                    </li>
                    <li>
                      <a href=" https://github.com/rangararazin/Front-End-Food-Life">
                        - Link to Front End
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/rangararazin/Back-End-Food-Life">
                        - Link to Back End
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="text-left shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <h3 className="text-3xl font-medium pt-8 pb-2 ">
                Traffic Office Administrator - Royal Mail | Northampton | Jul
                2021 - Present
              </h3>
              <ul class="mb-2 text-xl list-disc  text-gray-900 dark:bg-white">
                <li>
                  Helping to maintain the quick, efficient and safe running of
                  Transport Office
                </li>

                <li>
                  Allocating vehicles and defect monitoring of the vehicles
                </li>
                <li>Instructing drivers with regards to their duties</li>
                <li>
                  Working with in house driver attendance, vehicle and trailer
                  tracking system which includes maintaining attendance record,
                  debriefing drivers after finish their duties
                </li>
              </ul>
            </div>

            <div className="text-left shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <h3 className="text-3xl font-medium pt-8 pb-2 ">
                Quality Assurance (Software Test Engineer) - 1Rivet | Gujarat,
                India | May 2019 - Aug 2020
              </h3>
              <ul class="mb-2 text-xl list-disc  text-gray-900 dark:bg-white">
                <li>Client requirements analysis</li>

                <li>
                  Estimate, prioritize, plan, and coordinate testing activities
                </li>
                <li>
                  Writing and executing test cases based on the requirements
                </li>
                <li>Logging/Reporting bugs</li>
                <li>Performing thorough regression testing after bug fixes</li>

                <li>
                  Working with cross functional team in an agile environment
                </li>
                <li>Mentoring junior test engineers</li>
                <li>
                  <b>Tools & Technologies:</b> Jira, Microsoft Azure DevOps Test
                  Manager, Postman/Insomnia API Client, Microsoft SQL Server, MS
                  Excel
                </li>
              </ul>
            </div>

            <div className="text-left shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <h3 className="text-3xl font-medium pt-8 pb-2 ">
                Quality Assurance Intern - 1Rivet | Gujarat, India | Dec 2018 –
                Apr 2019
              </h3>
              <ul class="mb-2 text-xl list-disc  text-gray-900 dark:bg-white">
                <li>
                  Learnt creating Test Plan, Test Scenarios & Test Cases based
                  on user requirement
                </li>

                <li>
                  Implemented types of testing which includes Functional,
                  Regression, Smoke, UAT, Exploratory testing.
                </li>
                <li>Involved at all stages of SDLC, STLC and Bug life Cycle</li>
              </ul>
            </div>

            <div className="text-left shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <h3 className="text-3xl font-medium pt-8 pb-2 ">
                Travel Consultant - Destination Travel Word | Gujarat, India |
                Apr 2017 – Nov 2018
              </h3>
              <ul class="mb-2 text-xl list-disc  text-gray-900 dark:bg-white">
                <li>
                  Organized itinerary/travels from beginning to end, including
                  booking tickets, accommodation, transportation, managing visa
                  application process, passport application process
                </li>
              </ul>
            </div>

            <div className="text-left shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <h3 className="text-3xl font-medium pt-8 pb-2 ">
                Teaching Assistant - Databank Computer Education | Gujarat,
                India | Jun 2016 - Mar 2017
              </h3>
              <ul class="mb-2 text-xl list-disc  text-gray-900 dark:bg-white">
                <li>
                  Assisted teachers in preparing the lesson materials. Helped
                  and supervised students throughout their courses
                </li>
              </ul>
            </div>

            <div className="text-left shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <h3 className="text-3xl font-medium pt-8 pb-2 ">
                Data Entry Specialist - District Industries Centre | Gujarat,
                India | Mar 2016- May 2016
              </h3>
              <ul class="mb-2 text-xl list-disc  text-gray-900 dark:bg-white">
                <li>
                  Processed and compiled the data from MS Excel into the system
                  provided by government, generated and exported data reports,
                  spreadsheets, and documents as and when needed
                </li>
              </ul>
            </div>
            <div className="text-left shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <h3 className="text-3xl font-medium pt-8 pb-2 ">
                Carer - Home | Gujarat, India | Jul 2013 - Mar 2016
              </h3>
              <ul class="mb-2 text-xl list-disc  text-gray-900 dark:bg-white">
                <li>
                  Cared for my Grandmother which included responsibilities like
                  scheduled medical appointments ,in-home caring, attending
                  medical appointments and other duties as needed
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
