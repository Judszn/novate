// // import React, { useState, useEffect } from "react";
// // import {
// //   ChevronLeft,
// //   ChevronRight,
// //   RotateCcw,
// //   Search,
// //   BookOpen,
// //   CircleUserRound,
// //   Trophy,
// //   Clock,
// //   CheckCircle,
// //   XCircle,
// //   Moon,
// //   Sun,
// //   Mail,
// //   Menu,
// //   X,
// // } from "lucide-react";
// // import INTROEM from "./Database/IntroEM";
// // import BUSFRENCH from "./Database/BusFrench";
// // import BUSCOMM from "./Database/BusinessComm";
// // import BUSECONS from "./Database/BusEcons";
// // import BUSSTATS from "./Database/BusStats";
// // import PROGRAMMINGFUNDAMENTALS from "./Database/ProgrammingFundamentals";
// // import INTROMGT from "./Database/IntroMGT";
// // import CRITICALTHINKING from "./Database/Logic&criticalthinking";
// // import CONSTITUTIONALLAWONE from "./Database/ConstitutionalLaw1";
// // import CONTRACTLAWONE from "./Database/ContractLaw1";
// // import LOGO from "./assets/LOGO.png";

// // // Course registry
// // const COURSES = {
// //   "intro-em": INTROEM,
// //   "bus-french": BUSFRENCH,
// //   "bus-comm": BUSCOMM,
// //   "bus-econs": BUSECONS,
// //   "bus-stats": BUSSTATS,
// //   "programming-fundamentals": PROGRAMMINGFUNDAMENTALS,
// //   "intro-management": INTROMGT,
// //   "critical-thinking": CRITICALTHINKING,
// //   "constitutional-law1": CONSTITUTIONALLAWONE,
// //   "contract-law1": CONTRACTLAWONE,
// // };

// // const PROGRAMS = {
// //   MKT: {
// //     name: "BSC. MARKETING",
// //     id: "MKT",
// //     courses: [
// //       "intro-em",
// //       "bus-french",
// //       "bus-comm",
// //       "bus-econs",
// //       "bus-stats",
// //       "intro-management",
// //       "critical-thinking",
// //     ],
// //     color: "bg-blue-500",
// //   },
// //   BACT: {
// //     name: "BSC. ACCOUNTING",
// //     id: "BACT",
// //     courses: [
// //       "intro-em",
// //       "bus-french",
// //       "bus-comm",
// //       "bus-econs",
// //       "bus-stats",
// //       "intro-management",
// //       "critical-thinking",
// //     ],
// //     color: "bg-green-500",
// //   },
// //   BBAF: {
// //     name: "BSC. BANKING AND FINANCE",
// //     id: "BBAF",
// //     courses: [
// //       "intro-em",
// //       "bus-french",
// //       "bus-comm",
// //       "bus-econs",
// //       "bus-stats",
// //       "intro-management",
// //       "critical-thinking",
// //     ],
// //     color: "bg-purple-500",
// //   },
// //   ADM: {
// //     name: "BSC. BUSINESS ADMINISTRATION",
// //     id: "ADM",
// //     courses: [
// //       "bus-econs",
// //       "intro-em",
// //       "bus-french",
// //       "bus-comm",
// //       "bus-stats",
// //       "intro-management",
// //       "critical-thinking",
// //     ],
// //     color: "bg-violet-500",
// //   },
// //   BAAF: {
// //     name: "BSC. ACCOUNTING AND FINANCE",
// //     id: "BAAF",
// //     courses: [
// //       "intro-em",
// //       "bus-french",
// //       "bus-comm",
// //       "bus-econs",
// //       "bus-stats",
// //       "intro-management",
// //       "critical-thinking",
// //     ],
// //     color: "bg-indigo-500",
// //   },
// //   BITM: {
// //     name: "BSC. INFORMATION TECHNOLOGY MGT",
// //     id: "BITM",
// //     courses: [
// //       "intro-em",
// //       "bus-french",
// //       "bus-comm",
// //       "bus-stats",
// //       "intro-management",
// //       "programming-fundamentals",
// //       "critical-thinking",
// //     ],
// //     color: "bg-red-500",
// //   },
// //   PBPR: {
// //     name: "BA. PUBLIC RELATIONS MANAGEMENT",
// //     id: "PBPR",
// //     courses: [
// //       "intro-em",
// //       "bus-french",
// //       "bus-comm",
// //       "bus-stats",
// //       "intro-management",
// //       "critical-thinking",
// //     ],
// //     color: "bg-yellow-500",
// //   },
// //   LLB: {
// //     name: "BACHELOR of LAW",
// //     id: "LLB",
// //     courses: ["constitutional-law1", "contract-law1"],
// //     color: "bg-black",
// //   },
// //   BASC: {
// //     name: "BSC. ACTUARIAL SCIENCE",
// //     id: "BASC",
// //     courses: ["intro-em"],
// //     color: "bg-pink-500",
// //   },
// //   BRMF: {
// //     name: "BSC. REAL ESTATE MGT & FINANCE",
// //     id: "BRMF",
// //     courses: ["intro-em"],
// //     color: "bg-amber-500",
// //   },
// //   BBBEC: {
// //     name: "BSC. BUSINESS ECONOMICS",
// //     id: "BBEC",
// //     courses: ["intro-em"],
// //     color: "bg-orange-500",
// //   },
// //   BLTM: {
// //     name: "BSC. LOGISTICS & TRANSPORT MGT",
// //     id: "BLTM",
// //     courses: [
// //       "intro-em",
// //       "bus-french",
// //       "bus-comm",
// //       "bus-econs",
// //       "bus-stats",
// //       "intro-management",
// //       "critical-thinking",
// //     ],
// //     color: "bg-lime-500",
// //   },
// //   BACS: {
// //     name: "BA. COMMUNICATION STUDIES",
// //     id: "BACS",
// //     courses: ["intro-em"],
// //     color: "bg-gray-500",
// //   },
// // };

// // export default function PrepMateApp() {
// //   const [currentView, setCurrentView] = useState("start");
// //   const [isAuthenticated, setIsAuthenticated] = useState(false);
// //   const [selectedProgram, setSelectedProgram] = useState("");
// //   const [selectedCourse, setSelectedCourse] = useState("");
// //   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
// //   const [selectedAnswers, setSelectedAnswers] = useState({});
// //   const [showExplanation, setShowExplanation] = useState(false);
// //   const [quizStarted, setQuizStarted] = useState(false);
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [timeSpent, setTimeSpent] = useState(0);
// //   const [quizCompleted, setQuizCompleted] = useState(false);
// //   const [questionMode, setQuestionMode] = useState("standard");
// //   const [filteredQuestions, setFilteredQuestions] = useState([]);
// //   const [isDarkTheme, setIsDarkTheme] = useState(true);
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);

// //   const shuffleArray = (array) => {
// //     const shuffled = [...array];
// //     for (let i = shuffled.length - 1; i > 0; i--) {
// //       const j = Math.floor(Math.random() * (i + 1));
// //       [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
// //     }
// //     return shuffled;
// //   };

// //   useEffect(() => {
// //     if (!selectedCourse) return;
// //     const course = COURSES[selectedCourse];
// //     const allQuestions = course.multiple_choice_questions;
// //     const shuffled = shuffleArray(allQuestions);

// //     let selected;
// //     if (questionMode === "rapid") {
// //       selected = shuffled.slice(0, 10);
// //     } else if (questionMode === "standard") {
// //       selected = shuffled.slice(0, 20);
// //     } else {
// //       selected = shuffled;
// //     }

// //     setFilteredQuestions(selected);
// //     setCurrentQuestionIndex(0);
// //     setSelectedAnswers({});
// //     setShowExplanation(false);
// //   }, [selectedCourse, questionMode]);

// //   useEffect(() => {
// //     let interval;
// //     if (quizStarted && !quizCompleted) {
// //       interval = setInterval(() => {
// //         setTimeSpent((prev) => prev + 1);
// //       }, 1000);
// //     }
// //     return () => clearInterval(interval);
// //   }, [quizStarted, quizCompleted]);

// //   const formatTime = (seconds) => {
// //     const mins = Math.floor(seconds / 60);
// //     const secs = seconds % 60;
// //     return `${mins.toString().padStart(2, "0")}:${secs
// //       .toString()
// //       .padStart(2, "0")}`;
// //   };

// //   const handleAuthentication = (success) => {
// //     setIsAuthenticated(success);
// //     if (success) {
// //       setCurrentView("dashboard");
// //     }
// //   };

// //   const handleProgramSelect = (programId) => {
// //     setSelectedProgram(programId);
// //     setCurrentView("courses");
// //     setIsMenuOpen(false);
// //   };

// //   const handleCourseSelect = (courseId) => {
// //     setSelectedCourse(courseId);
// //     setCurrentView("mcqs");
// //     setCurrentQuestionIndex(0);
// //     setSelectedAnswers({});
// //     setShowExplanation(false);
// //     setQuizStarted(false);
// //     setTimeSpent(0);
// //     setQuizCompleted(false);
// //     setIsMenuOpen(false);
// //   };

// //   const handleAnswerSelect = (answer) => {
// //     if (quizCompleted) return;

// //     if (!quizStarted) {
// //       setQuizStarted(true);
// //     }

// //     setSelectedAnswers({
// //       ...selectedAnswers,
// //       [currentQuestionIndex]: answer,
// //     });
// //     setShowExplanation(true);
// //   };

// //   const handleNextQuestion = () => {
// //     if (currentQuestionIndex < filteredQuestions.length - 1) {
// //       setCurrentQuestionIndex(currentQuestionIndex + 1);
// //       setShowExplanation(!!selectedAnswers[currentQuestionIndex + 1]);
// //     } else {
// //       setQuizCompleted(true);
// //       setCurrentView("review");
// //     }
// //   };

// //   const handlePrevQuestion = () => {
// //     if (currentQuestionIndex > 0) {
// //       setCurrentQuestionIndex(currentQuestionIndex - 1);
// //       setShowExplanation(!!selectedAnswers[currentQuestionIndex - 1]);
// //     }
// //   };

// //   const calculateScore = () => {
// //     const correct = filteredQuestions.filter(
// //       (q, index) => selectedAnswers[index] === q.correct_answer
// //     ).length;
// //     return {
// //       correct,
// //       total: filteredQuestions.length,
// //       percentage: Math.round((correct / filteredQuestions.length) * 100) || 0,
// //     };
// //   };

// //   const handleRestart = () => {
// //     setCurrentQuestionIndex(0);
// //     setSelectedAnswers({});
// //     setShowExplanation(false);
// //     setQuizStarted(false);
// //     setTimeSpent(0);
// //     setQuizCompleted(false);
// //     setCurrentView("mcqs");
// //     setIsMenuOpen(false);
// //   };

// //   const toggleTheme = () => {
// //     setIsDarkTheme(!isDarkTheme);
// //   };

// //   const toggleMenu = () => {
// //     setIsMenuOpen(!isMenuOpen);
// //   };

// //   const filteredCourses = selectedProgram
// //     ? PROGRAMS[selectedProgram].courses.filter(
// //         (courseId) =>
// //           COURSES[courseId].exam_details.course_name
// //             .toLowerCase()
// //             .includes(searchTerm.toLowerCase()) ||
// //           COURSES[courseId].exam_details.course_code
// //             .toLowerCase()
// //             .includes(searchTerm.toLowerCase())
// //       )
// //     : Object.keys(COURSES).filter(
// //         (courseId) =>
// //           COURSES[courseId].exam_details.course_name
// //             .toLowerCase()
// //             .includes(searchTerm.toLowerCase()) ||
// //           COURSES[courseId].exam_details.course_code
// //             .toLowerCase()
// //             .includes(searchTerm.toLowerCase())
// //       );

// //   const filteredPrograms = Object.entries(PROGRAMS).filter(
// //     ([programId, program]) => {
// //       const programMatches = program.name
// //         .toLowerCase()
// //         .includes(searchTerm.toLowerCase());
// //       const courseMatches = program.courses.some(
// //         (courseId) =>
// //           COURSES[courseId].exam_details.course_name
// //             .toLowerCase()
// //             .includes(searchTerm.toLowerCase()) ||
// //           COURSES[courseId].exam_details.course_code
// //             .toLowerCase()
// //             .includes(searchTerm.toLowerCase())
// //       );
// //       return programMatches || courseMatches;
// //     }
// //   );

// //   // Common Navbar Component
// //   const Navbar = ({ showBackButton = false, backView = "dashboard" }) => (
// //     <header
// //       className={`shadow-sm border-b ${
// //         isDarkTheme ? "bg-gray-800 text-white" : "bg-white text-gray-900"
// //       }`}
// //     >
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="flex justify-between items-center py-4">
// //           <div className="flex items-center">
// //             {showBackButton && (
// //               <button
// //                 onClick={() => {
// //                   setCurrentView(backView);
// //                   setIsMenuOpen(false);
// //                 }}
// //                 className={`mr-4 p-2 hover:bg-opacity-10 rounded-lg ${
// //                   isDarkTheme ? "hover:bg-gray-700" : "hover:bg-gray-100"
// //                 }`}
// //               >
// //                 <ChevronLeft className="w-5 h-5" />
// //               </button>
// //             )}
// //             <img src={LOGO} className="w-24 h-17" alt="Logo" />
// //             {currentView === "courses" && (
// //               <>
// //                 <BookOpen
// //                   className={`w-8 h-8 ml-3 ${
// //                     isDarkTheme ? "text-blue-400" : "text-blue-600"
// //                   }`}
// //                 />
// //                 <h1 className="text-2xl font-bold ml-2">
// //                   {PROGRAMS[selectedProgram].name}
// //                 </h1>
// //               </>
// //             )}
// //             {currentView === "mcqs" && (
// //               <div className="ml-4">
// //                 <h1 className="text-lg font-semibold">
// //                   {COURSES[selectedCourse].exam_details.course_code}
// //                 </h1>
// //                 <p
// //                   className={`text-sm ${
// //                     isDarkTheme ? "text-gray-300" : "text-gray-600"
// //                   }`}
// //                 >
// //                   Question {currentQuestionIndex + 1} of{" "}
// //                   {filteredQuestions.length}
// //                 </p>
// //               </div>
// //             )}
// //           </div>
// //           <div className="flex items-center space-x-4">
// //             {currentView === "mcqs" && (
// //               <>
// //                 <div
// //                   className={`flex items-center text-sm ${
// //                     isDarkTheme ? "text-gray-300" : "text-gray-600"
// //                   }`}
// //                 >
// //                   <Clock className="w-4 h-4 mr-1" />
// //                   <span>{formatTime(timeSpent)}</span>
// //                 </div>
// //                 <div
// //                   className={`flex items-center text-sm ${
// //                     isDarkTheme ? "text-gray-300" : "text-gray-600"
// //                   }`}
// //                 >
// //                   <Trophy className="w-4 h-4 mr-1" />
// //                   <span>
// //                     Score: {calculateScore().correct}/{filteredQuestions.length}{" "}
// //                     ({calculateScore().percentage}%)
// //                   </span>
// //                 </div>
// //               </>
// //             )}
// //             <div className="hidden lg:flex items-center space-x-4">
// //               <button
// //                 onClick={toggleTheme}
// //                 className={`p-2 rounded-full ${
// //                   isDarkTheme
// //                     ? "bg-gray-700 text-yellow-400"
// //                     : "bg-gray-100 text-gray-600"
// //                 } hover:bg-opacity-80 transition-colors`}
// //                 aria-label="Toggle theme"
// //               >
// //                 {isDarkTheme ? (
// //                   <Sun className="w-5 h-5" />
// //                 ) : (
// //                   <Moon className="w-5 h-5" />
// //                 )}
// //               </button>
// //               <a
// //                 href="mailto:support@prepmate.com"
// //                 className={`p-2 rounded-full ${
// //                   isDarkTheme
// //                     ? "bg-gray-700 text-blue-400"
// //                     : "bg-gray-100 text-blue-600"
// //                 } hover:bg-opacity-80 transition-colors`}
// //                 aria-label="Contact us"
// //               >
// //                 <Mail className="w-5 h-5" />
// //               </a>
// //               <div
// //                 className={`flex items-center ${
// //                   isDarkTheme ? "text-gray-300" : "text-gray-600"
// //                 }`}
// //               >
// //                 <CircleUserRound className="w-8 h-8 mr-2" />
// //                 <p>Profile</p>
// //               </div>
// //             </div>
// //             <button
// //               className="lg:hidden p-2 rounded-full hover:bg-opacity-10 transition-colors"
// //               onClick={toggleMenu}
// //               aria-label="Toggle menu"
// //             >
// //               {isMenuOpen ? (
// //                 <X
// //                   className={`w-6 h-6 ${
// //                     isDarkTheme ? "text-gray-300" : "text-gray-600"
// //                   }`}
// //                 />
// //               ) : (
// //                 <Menu
// //                   className={`w-6 h-6 ${
// //                     isDarkTheme ? "text-gray-300" : "text-gray-600"
// //                   }`}
// //                 />
// //               )}
// //             </button>
// //           </div>
// //         </div>
// //         {isMenuOpen && (
// //           <div
// //             className={`lg:hidden ${
// //               isDarkTheme ? "bg-gray-800" : "bg-white"
// //             } border-t ${
// //               isDarkTheme ? "border-gray-700" : "border-gray-200"
// //             } py-4 px-4 sm:px-6 lg:px-8`}
// //           >
// //             <div className="flex flex-col space-y-4">
// //               <button
// //                 onClick={toggleTheme}
// //                 className={`flex items-center p-2 rounded-lg ${
// //                   isDarkTheme
// //                     ? "bg-gray-700 text-yellow-400"
// //                     : "bg-gray-100 text-gray-600"
// //                 } hover:bg-opacity-80 transition-colors`}
// //               >
// //                 {isDarkTheme ? (
// //                   <Sun className="w-5 h-5 mr-2" />
// //                 ) : (
// //                   <Moon className="w-5 h-5 mr-2" />
// //                 )}
// //                 {isDarkTheme ? "Light Theme" : "Dark Theme"}
// //               </button>
// //               <a
// //                 href="mailto:support@prepmate.com"
// //                 className={`flex items-center p-2 rounded-lg ${
// //                   isDarkTheme
// //                     ? "bg-gray-700 text-blue-400"
// //                     : "bg-gray-100 text-blue-600"
// //                 } hover:bg-opacity-80 transition-colors`}
// //               >
// //                 <Mail className="w-5 h-5 mr-2" />
// //                 Contact Us
// //               </a>
// //               <div
// //                 className={`flex items-center p-2 rounded-lg ${
// //                   isDarkTheme
// //                     ? "bg-gray-700 text-gray-300"
// //                     : "bg-gray-100 text-gray-600"
// //                 } hover:bg-opacity-80 transition-colors`}
// //               >
// //                 <CircleUserRound className="w-5 h-5 mr-2" />
// //                 Profile
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </header>
// //   );

// //   // Start Screen
// //   if (currentView === "start") {
// //     return (
// //       <div
// //         className={`min-h-screen ${
// //           isDarkTheme
// //             ? "bg-gray-900 text-white"
// //             : "bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white"
// //         } flex items-center justify-center p-4`}
// //       >
// //         <div className="text-center">
// //           <div className="mb-8">
// //             <div className="flex items-center justify-center mb-4 cursor-pointer">
// //               <img
// //                 src={LOGO}
// //                 className="w-56 h-40"
// //                 alt="PrepMate Logo"
// //                 onClick={() => setCurrentView("auth")}
// //               />
// //             </div>
// //             <p className="text-xl mb-8">Prep yourself for success</p>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }

// //   // Authentication Screen
// //   if (currentView === "auth") {
// //     return (
// //       <div
// //         className={`min-h-screen ${
// //           isDarkTheme
// //             ? "bg-gray-900"
// //             : "bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800"
// //         } flex items-center justify-center p-4`}
// //       >
// //         <div
// //           className={`rounded-lg shadow-xl p-8 w-full max-w-md ${
// //             isDarkTheme ? "bg-gray-800 text-white" : "bg-white text-gray-800"
// //           }`}
// //         >
// //           <h2 className="text-2xl font-bold text-center mb-6">
// //             Authentication
// //           </h2>
// //           <div className="space-y-4">
// //             <div>
// //               <label
// //                 className={`block text-sm font-medium mb-2 ${
// //                   isDarkTheme ? "text-gray-300" : "text-gray-700"
// //                 }`}
// //               >
// //                 Username
// //               </label>
// //               <input
// //                 type="text"
// //                 className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
// //                   isDarkTheme
// //                     ? "bg-gray-700 border-gray-600 text-white"
// //                     : "bg-white border-gray-300 text-gray-800"
// //                 }`}
// //                 placeholder="Enter your username"
// //               />
// //             </div>
// //             <div>
// //               <label
// //                 className={`block text-sm font-medium mb-2 ${
// //                   isDarkTheme ? "text-gray-300" : "text-gray-700"
// //                 }`}
// //               >
// //                 Password
// //               </label>
// //               <input
// //                 type="password"
// //                 className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
// //                   isDarkTheme
// //                     ? "bg-gray-700 border-gray-600 text-white"
// //                     : "bg-white border-gray-300 text-gray-800"
// //                 }`}
// //                 placeholder="Enter your password"
// //               />
// //             </div>
// //             <div className="flex space-x-4">
// //               <button
// //                 onClick={() => handleAuthentication(true)}
// //                 className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
// //               >
// //                 Sign In
// //               </button>
// //               <button
// //                 onClick={() => handleAuthentication(false)}
// //                 className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition-colors"
// //               >
// //                 Sign Up
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }

// //   // Dashboard
// //   if (currentView === "dashboard") {
// //     return (
// //       <div
// //         className={`min-h-screen ${
// //           isDarkTheme ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
// //         }`}
// //       >
// //         <Navbar />
// //         <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
// //           <div className="mb-8">
// //             <h2 className="text-3xl font-bold mb-2">Choose Your Program</h2>
// //             <p className={isDarkTheme ? "text-gray-300" : "text-gray-600"}>
// //               Select a program to access your courses
// //             </p>
// //           </div>
// //           <div className="relative mb-6">
// //             <Search
// //               className={`w-5 h-5 absolute left-3 top-3 ${
// //                 isDarkTheme ? "text-gray-400" : "text-gray-400"
// //               }`}
// //             />
// //             <input
// //               type="text"
// //               value={searchTerm}
// //               onChange={(e) => setSearchTerm(e.target.value)}
// //               placeholder="Search programs..."
// //               className={`pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full ${
// //                 isDarkTheme
// //                   ? "bg-gray-700 border-gray-600 text-white"
// //                   : "bg-white border-gray-300 text-gray-800"
// //               }`}
// //             />
// //           </div>
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //             {filteredPrograms.map(([programId, program]) => (
// //               <div
// //                 key={programId}
// //                 onClick={() => handleProgramSelect(programId)}
// //                 className={`rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow border-l-4 border-blue-500 ${
// //                   isDarkTheme
// //                     ? "bg-gray-800 text-white"
// //                     : "bg-white text-gray-900"
// //                 }`}
// //               >
// //                 <div className="flex items-center mb-4">
// //                   <div
// //                     className={`w-12 h-12 ${program.color} rounded-lg flex items-center justify-center`}
// //                   >
// //                     <BookOpen className="w-6 h-6 text-white" />
// //                   </div>
// //                   <div className="ml-4">
// //                     <h3 className="text-lg font-semibold">{program.name}</h3>
// //                     <p
// //                       className={`text-sm ${
// //                         isDarkTheme ? "text-gray-300" : "text-gray-600"
// //                       }`}
// //                     >
// //                       {program.courses.length} courses available
// //                     </p>
// //                   </div>
// //                 </div>
// //                 <div
// //                   className={`flex items-center text-sm ${
// //                     isDarkTheme ? "text-gray-300" : "text-gray-500"
// //                   }`}
// //                 >
// //                   <Clock className="w-4 h-4 mr-1" />
// //                   <span>Self-paced learning</span>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </main>
// //       </div>
// //     );
// //   }

// //   // Courses View
// //   if (currentView === "courses") {
// //     return (
// //       <div
// //         className={`min-h-screen ${
// //           isDarkTheme ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
// //         }`}
// //       >
// //         <Navbar showBackButton={true} backView="dashboard" />
// //         <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
// //           <div className="mb-8">
// //             <h2 className="text-3xl font-bold mb-2">Available Courses</h2>
// //             <p className={isDarkTheme ? "text-gray-300" : "text-gray-600"}>
// //               Select a course to start practicing
// //             </p>
// //           </div>
// //           <div className="relative mb-6">
// //             <Search
// //               className={`w-5 h-5 absolute left-3 top-3 ${
// //                 isDarkTheme ? "text-gray-400" : "text-gray-400"
// //               }`}
// //             />
// //             <input
// //               type="text"
// //               value={searchTerm}
// //               onChange={(e) => setSearchTerm(e.target.value)}
// //               placeholder="Search courses..."
// //               className={`pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full ${
// //                 isDarkTheme
// //                   ? "bg-gray-700 border-gray-600 text-white"
// //                   : "bg-white border-gray-300 text-gray-800"
// //               }`}
// //             />
// //           </div>
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //             {filteredCourses.map((courseId) => {
// //               const course = COURSES[courseId];
// //               return (
// //                 <div
// //                   key={courseId}
// //                   onClick={() => handleCourseSelect(courseId)}
// //                   className={`rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow ${
// //                     isDarkTheme
// //                       ? "bg-gray-800 text-white"
// //                       : "bg-white text-gray-900"
// //                   }`}
// //                 >
// //                   <div className="mb-4">
// //                     <h3 className="text-lg font-semibold mb-2">
// //                       {course.exam_details.course_code}
// //                     </h3>
// //                     <p
// //                       className={`text-sm ${
// //                         isDarkTheme ? "text-gray-300" : "text-gray-600"
// //                       }`}
// //                     >
// //                       {course.exam_details.course_name}
// //                     </p>
// //                     <p
// //                       className={`text-xs ${
// //                         isDarkTheme ? "text-gray-400" : "text-gray-500"
// //                       }`}
// //                     >
// //                       {course.exam_details.university}
// //                     </p>
// //                   </div>
// //                   <div className="flex items-center justify-between">
// //                     <span
// //                       className={`text-sm ${
// //                         isDarkTheme ? "text-gray-300" : "text-gray-600"
// //                       }`}
// //                     >
// //                       {course.multiple_choice_questions.length} questions
// //                     </span>
// //                     <ChevronRight
// //                       className={`w-5 h-5 ${
// //                         isDarkTheme ? "text-gray-400" : "text-gray-400"
// //                       }`}
// //                     />
// //                   </div>
// //                 </div>
// //               );
// //             })}
// //           </div>
// //         </main>
// //       </div>
// //     );
// //   }

// //   // MCQs View
// //   if (currentView === "mcqs") {
// //     const course = COURSES[selectedCourse];
// //     const currentQuestion = filteredQuestions[currentQuestionIndex];
// //     const selectedAnswer = selectedAnswers[currentQuestionIndex];
// //     const currentScore = calculateScore();

// //     return (
// //       <div
// //         className={`min-h-screen ${
// //           isDarkTheme ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
// //         }`}
// //       >
// //         <Navbar showBackButton={true} backView="courses" />
// //         <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
// //           <div className="mb-6">
// //             <label
// //               className={`block mb-2 font-medium ${
// //                 isDarkTheme ? "text-gray-300" : "text-gray-700"
// //               }`}
// //             >
// //               Question Mode:
// //             </label>
// //             <div className="flex space-x-4">
// //               <button
// //                 onClick={() => setQuestionMode("rapid")}
// //                 className={`px-4 py-2 rounded-lg border cursor-pointer ${
// //                   questionMode === "rapid"
// //                     ? isDarkTheme
// //                       ? "bg-blue-600 text-white border-blue-500"
// //                       : "bg-blue-500 text-white border-blue-400"
// //                     : isDarkTheme
// //                     ? "bg-gray-700 text-gray-300 border-gray-600"
// //                     : "bg-white text-gray-700 border-gray-300"
// //                 }`}
// //               >
// //                 Rapid (10)
// //               </button>
// //               <button
// //                 onClick={() => setQuestionMode("standard")}
// //                 className={`px-4 py-2 rounded-lg border cursor-pointer ${
// //                   questionMode === "standard"
// //                     ? isDarkTheme
// //                       ? "bg-blue-600 text-white border-blue-500"
// //                       : "bg-blue-500 text-white border-blue-400"
// //                     : isDarkTheme
// //                     ? "bg-gray-700 text-gray-300 border-gray-600"
// //                     : "bg-white text-gray-700 border-gray-300"
// //                 }`}
// //               >
// //                 Standard (20)
// //               </button>
// //               <button
// //                 onClick={() => setQuestionMode("all")}
// //                 className={`px-4 py-2 rounded-lg border cursor-pointer ${
// //                   questionMode === "all"
// //                     ? isDarkTheme
// //                       ? "bg-blue-600 text-white border-blue-500"
// //                       : "bg-blue-500 text-white border-blue-400"
// //                     : isDarkTheme
// //                     ? "bg-gray-700 text-gray-300 border-gray-600"
// //                     : "bg-white text-gray-700 border-gray-300"
// //                 }`}
// //               >
// //                 All Questions
// //               </button>
// //             </div>
// //           </div>
// //           {currentQuestion && (
// //             <div
// //               className={`rounded-lg shadow-md p-8 ${
// //                 isDarkTheme
// //                   ? "bg-gray-800 text-white"
// //                   : "bg-white text-gray-900"
// //               }`}
// //             >
// //               <div className="mb-6">
// //                 <h2 className="text-xl font-semibold mb-4">
// //                   {currentQuestion.question_text}
// //                 </h2>
// //                 <div className="space-y-3">
// //                   {Object.entries(currentQuestion.options).map(
// //                     ([option, text]) => {
// //                       const isSelected = selectedAnswer === option;
// //                       const isCorrect =
// //                         option === currentQuestion.correct_answer;
// //                       const showResult = showExplanation;

// //                       let buttonClass =
// //                         "w-full p-4 text-left border-2 rounded-lg transition-all ";

// //                       if (showResult) {
// //                         if (isCorrect) {
// //                           buttonClass += isDarkTheme
// //                             ? "border-green-400 bg-green-900 text-green-300"
// //                             : "border-green-500 bg-green-50 text-green-800";
// //                         } else if (isSelected && !isCorrect) {
// //                           buttonClass += isDarkTheme
// //                             ? "border-red-400 bg-red-900 text-red-300"
// //                             : "border-red-500 bg-red-50 text-red-800";
// //                         } else {
// //                           buttonClass += isDarkTheme
// //                             ? "border-gray-600 bg-gray-700 text-gray-300"
// //                             : "border-gray-200 bg-gray-50 text-gray-600";
// //                         }
// //                       } else {
// //                         if (isSelected) {
// //                           buttonClass += isDarkTheme
// //                             ? "border-blue-400 bg-blue-900 text-blue-300"
// //                             : "border-blue-500 bg-blue-50 text-blue-800";
// //                         } else {
// //                           buttonClass += isDarkTheme
// //                             ? "border-gray-600 hover:border-gray-500 hover:bg-gray-600"
// //                             : "border-gray-200 hover:border-gray-300 hover:bg-gray-50";
// //                         }
// //                       }

// //                       return (
// //                         <button
// //                           key={option}
// //                           onClick={() => handleAnswerSelect(option)}
// //                           className={buttonClass}
// //                           disabled={showExplanation}
// //                         >
// //                           <div className="flex items-center">
// //                             <span className="font-semibold mr-3">
// //                               {option}.
// //                             </span>
// //                             <span>{text}</span>
// //                             {showResult && isCorrect && (
// //                               <CheckCircle
// //                                 className={`w-5 h-5 ml-auto ${
// //                                   isDarkTheme
// //                                     ? "text-green-400"
// //                                     : "text-green-500"
// //                                 }`}
// //                               />
// //                             )}
// //                             {showResult && isSelected && !isCorrect && (
// //                               <XCircle
// //                                 className={`w-5 h-5 ml-auto ${
// //                                   isDarkTheme ? "text-red-400" : "text-red-500"
// //                                 }`}
// //                               />
// //                             )}
// //                           </div>
// //                         </button>
// //                       );
// //                     }
// //                   )}
// //                 </div>
// //               </div>
// //               {showExplanation && (
// //                 <div
// //                   className={`mb-6 p-4 border rounded-lg ${
// //                     isDarkTheme
// //                       ? "bg-blue-900 border-blue-700 text-blue-200"
// //                       : "bg-blue-50 border-blue-200 text-blue-800"
// //                   }`}
// //                 >
// //                   <h3
// //                     className={`font-semibold mb-2 ${
// //                       isDarkTheme ? "text-blue-300" : "text-blue-900"
// //                     }`}
// //                   >
// //                     Explanation:
// //                   </h3>
// //                   <p>{currentQuestion.explanation}</p>
// //                 </div>
// //               )}
// //               <div className="flex justify-between">
// //                 <button
// //                   onClick={handlePrevQuestion}
// //                   disabled={currentQuestionIndex === 0}
// //                   className={`flex items-center px-4 py-2 rounded-lg ${
// //                     isDarkTheme
// //                       ? "bg-gray-700 text-gray-300 hover:bg-gray-600 disabled:bg-gray-800 disabled:text-gray-500"
// //                       : "bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:bg-gray-50 disabled:text-gray-400"
// //                   } disabled:opacity-50 disabled:cursor-not-allowed`}
// //                 >
// //                   <ChevronLeft className="w-4 h-4 mr-1" />
// //                   Previous
// //                 </button>
// //                 <button
// //                   onClick={handleNextQuestion}
// //                   disabled={!showExplanation}
// //                   className={`flex items-center px-4 py-2 rounded-lg ${
// //                     isDarkTheme
// //                       ? "bg-blue-600 text-white hover:bg-blue-500 disabled:bg-gray-700 disabled:text-gray-400"
// //                       : "bg-blue-500 text-white hover:bg-blue-600 disabled:bg-gray-100 disabled:text-gray-400"
// //                   } disabled:opacity-50 disabled:cursor-not-allowed`}
// //                 >
// //                   {currentQuestionIndex === filteredQuestions.length - 1
// //                     ? "Finish"
// //                     : "Next"}
// //                   <ChevronRight className="w-4 h-4 ml-1" />
// //                 </button>
// //               </div>
// //             </div>
// //           )}
// //         </main>
// //       </div>
// //     );
// //   }

// //   // Review Screen
// //   if (currentView === "review") {
// //     const score = calculateScore();

// //     return (
// //       <div
// //         className={`min-h-screen ${
// //           isDarkTheme ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
// //         }`}
// //       >
// //         <Navbar />
// //         <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
// //           <div
// //             className={`rounded-lg shadow-md p-8 text-center mb-8 ${
// //               isDarkTheme ? "bg-gray-800 text-white" : "bg-white text-gray-900"
// //             }`}
// //           >
// //             <Trophy
// //               className={`w-16 h-16 mx-auto mb-4 ${
// //                 isDarkTheme ? "text-yellow-400" : "text-yellow-500"
// //               }`}
// //             />
// //             <h2 className="text-3xl font-bold mb-2">Quiz Completed!</h2>
// //             <p
// //               className={`text-xl mb-6 ${
// //                 isDarkTheme ? "text-gray-300" : "text-gray-600"
// //               }`}
// //             >
// //               You scored {score.correct} out of {score.total} (
// //               {score.percentage}%)
// //             </p>
// //             <div className="flex justify-center space-x-4 mb-6">
// //               <div className="text-center">
// //                 <div
// //                   className={`text-2xl font-bold ${
// //                     isDarkTheme ? "text-green-400" : "text-green-600"
// //                   }`}
// //                 >
// //                   {score.correct}
// //                 </div>
// //                 <div
// //                   className={`text-sm ${
// //                     isDarkTheme ? "text-gray-300" : "text-gray-600"
// //                   }`}
// //                 >
// //                   Correct
// //                 </div>
// //               </div>
// //               <div className="text-center">
// //                 <div
// //                   className={`text-2xl font-bold ${
// //                     isDarkTheme ? "text-red-400" : "text-red-600"
// //                   }`}
// //                 >
// //                   {score.total - score.correct}
// //                 </div>
// //                 <div
// //                   className={`text-sm ${
// //                     isDarkTheme ? "text-gray-300" : "text-gray-600"
// //                   }`}
// //                 >
// //                   Incorrect
// //                 </div>
// //               </div>
// //               <div className="text-center">
// //                 <div
// //                   className={`text-2xl font-bold ${
// //                     isDarkTheme ? "text-blue-400" : "text-blue-600"
// //                   }`}
// //                 >
// //                   {formatTime(timeSpent)}
// //                 </div>
// //                 <div
// //                   className={`text-sm ${
// //                     isDarkTheme ? "text-gray-300" : "text-gray-600"
// //                   }`}
// //                 >
// //                   Time Spent
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="flex justify-center space-x-4">
// //               <button
// //                 onClick={handleRestart}
// //                 className={`flex items-center px-6 py-3 rounded-lg ${
// //                   isDarkTheme
// //                     ? "bg-blue-600 text-white hover:bg-blue-500"
// //                     : "bg-blue-500 text-white hover:bg-blue-600"
// //                 }`}
// //               >
// //                 <RotateCcw className="w-4 h-4 mr-2" />
// //                 Restart Quiz
// //               </button>
// //               <button
// //                 onClick={() => setCurrentView("courses")}
// //                 className={`px-6 py-3 rounded-lg ${
// //                   isDarkTheme
// //                     ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
// //                     : "bg-gray-100 text-gray-700 hover:bg-gray-200"
// //                 }`}
// //               >
// //                 Back to Courses
// //               </button>
// //             </div>
// //           </div>
// //         </main>
// //       </div>
// //     );
// //   }

// //   return null;
// // }

// import React, { useState, useEffect } from "react";
// import {
//   ChevronLeft,
//   ChevronRight,
//   RotateCcw,
//   Search,
//   BookOpen,
//   CircleUserRound,
//   Trophy,
//   Clock,
//   CheckCircle,
//   XCircle,
//   Moon,
//   Sun,
//   Mail,
//   Menu,
//   X,
// } from "lucide-react";
// import INTROEM from "./Database/IntroEM";
// import BUSFRENCH from "./Database/BusFrench";
// import BUSCOMM from "./Database/BusinessComm";
// import BUSECONS from "./Database/BusEcons";
// import BUSSTATS from "./Database/BusStats";
// import PROGRAMMINGFUNDAMENTALS from "./Database/ProgrammingFundamentals";
// import INTROMGT from "./Database/IntroMGT";
// import CRITICALTHINKING from "./Database/Logic&criticalthinking";
// import CONSTITUTIONALLAWONE from "./Database/ConstitutionalLaw1";
// import CONTRACTLAWONE from "./Database/ContractLaw1";
// import LOGO from "./assets/LOGO.png";

// // Course registry
// const COURSES = {
//   "intro-em": INTROEM,
//   "bus-french": BUSFRENCH,
//   "bus-comm": BUSCOMM,
//   "bus-econs": BUSECONS,
//   "bus-stats": BUSSTATS,
//   "programming-fundamentals": PROGRAMMINGFUNDAMENTALS,
//   "intro-management": INTROMGT,
//   "critical-thinking": CRITICALTHINKING,
//   "constitutional-law1": CONSTITUTIONALLAWONE,
//   "contract-law1": CONTRACTLAWONE,
// };

// const PROGRAMS = {
//   MKT: {
//     name: "BSC. MARKETING",
//     id: "MKT",
//     courses: [
//       "intro-em",
//       "bus-french",
//       "bus-comm",
//       "bus-econs",
//       "bus-stats",
//       "intro-management",
//       "critical-thinking",
//     ],
//     color: "bg-blue-500",
//   },
//   BACT: {
//     name: "BSC. ACCOUNTING",
//     id: "BACT",
//     courses: [
//       "intro-em",
//       "bus-french",
//       "bus-comm",
//       "bus-econs",
//       "bus-stats",
//       "intro-management",
//       "critical-thinking",
//     ],
//     color: "bg-green-500",
//   },
//   BBAF: {
//     name: "BSC. BANKING AND FINANCE",
//     id: "BBAF",
//     courses: [
//       "intro-em",
//       "bus-french",
//       "bus-comm",
//       "bus-econs",
//       "bus-stats",
//       "intro-management",
//       "critical-thinking",
//     ],
//     color: "bg-purple-500",
//   },
//   ADM: {
//     name: "BSC. BUSINESS ADMINISTRATION",
//     id: "ADM",
//     courses: [
//       "bus-econs",
//       "intro-em",
//       "bus-french",
//       "bus-comm",
//       "bus-stats",
//       "intro-management",
//       "critical-thinking",
//     ],
//     color: "bg-violet-500",
//   },
//   BAAF: {
//     name: "BSC. ACCOUNTING AND FINANCE",
//     id: "BAAF",
//     courses: [
//       "intro-em",
//       "bus-french",
//       "bus-comm",
//       "bus-econs",
//       "bus-stats",
//       "intro-management",
//       "critical-thinking",
//     ],
//     color: "bg-indigo-500",
//   },
//   BITM: {
//     name: "BSC. INFORMATION TECHNOLOGY MGT",
//     id: "BITM",
//     courses: [
//       "intro-em",
//       "bus-french",
//       "bus-comm",
//       "bus-stats",
//       "intro-management",
//       "programming-fundamentals",
//       "critical-thinking",
//     ],
//     color: "bg-red-500",
//   },
//   PBPR: {
//     name: "BA. PUBLIC RELATIONS MANAGEMENT",
//     id: "PBPR",
//     courses: [
//       "intro-em",
//       "bus-french",
//       "bus-comm",
//       "bus-stats",
//       "intro-management",
//       "critical-thinking",
//     ],
//     color: "bg-yellow-500",
//   },
//   LLB: {
//     name: "BACHELOR of LAW",
//     id: "LLB",
//     courses: ["constitutional-law1", "contract-law1"],
//     color: "bg-black",
//   },
//   BASC: {
//     name: "BSC. ACTUARIAL SCIENCE",
//     id: "BASC",
//     courses: ["intro-em"],
//     color: "bg-pink-500",
//   },
//   BRMF: {
//     name: "BSC. REAL ESTATE MGT & FINANCE",
//     id: "BRMF",
//     courses: ["intro-em"],
//     color: "bg-amber-500",
//   },
//   BBBEC: {
//     name: "BSC. BUSINESS ECONOMICS",
//     id: "BBEC",
//     courses: ["intro-em"],
//     color: "bg-orange-500",
//   },
//   BLTM: {
//     name: "BSC. LOGISTICS & TRANSPORT MGT",
//     id: "BLTM",
//     courses: [
//       "intro-em",
//       "bus-french",
//       "bus-comm",
//       "bus-econs",
//       "bus-stats",
//       "intro-management",
//       "critical-thinking",
//     ],
//     color: "bg-lime-500",
//   },
//   BACS: {
//     name: "BA. COMMUNICATION STUDIES",
//     id: "BACS",
//     courses: ["intro-em"],
//     color: "bg-gray-500",
//   },
// };

// export default function PrepMateApp() {
//   const [currentView, setCurrentView] = useState("start");
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [selectedProgram, setSelectedProgram] = useState("");
//   const [selectedCourse, setSelectedCourse] = useState("");
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedAnswers, setSelectedAnswers] = useState({});
//   const [showExplanation, setShowExplanation] = useState(false);
//   const [quizStarted, setQuizStarted] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [timeSpent, setTimeSpent] = useState(0);
//   const [quizCompleted, setQuizCompleted] = useState(false);
//   const [questionMode, setQuestionMode] = useState("standard");
//   const [filteredQuestions, setFilteredQuestions] = useState([]);
//   const [isDarkTheme, setIsDarkTheme] = useState(true);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const shuffleArray = (array) => {
//     const shuffled = [...array];
//     for (let i = shuffled.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
//     }
//     return shuffled;
//   };

//   useEffect(() => {
//     if (!selectedCourse) return;
//     const course = COURSES[selectedCourse];
//     const allQuestions = course.multiple_choice_questions;
//     const shuffled = shuffleArray(allQuestions);

//     let selected;
//     if (questionMode === "rapid") {
//       selected = shuffled.slice(0, 10);
//     } else if (questionMode === "standard") {
//       selected = shuffled.slice(0, 20);
//     } else {
//       selected = shuffled;
//     }

//     setFilteredQuestions(selected);
//     setCurrentQuestionIndex(0);
//     setSelectedAnswers({});
//     setShowExplanation(false);
//   }, [selectedCourse, questionMode]);

//   useEffect(() => {
//     let interval;
//     if (quizStarted && !quizCompleted) {
//       interval = setInterval(() => {
//         setTimeSpent((prev) => prev + 1);
//       }, 1000);
//     }
//     return () => clearInterval(interval);
//   }, [quizStarted, quizCompleted]);

//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins.toString().padStart(2, "0")}:${secs
//       .toString()
//       .padStart(2, "0")}`;
//   };

//   const handleAuthentication = (success) => {
//     setIsAuthenticated(success);
//     if (success) {
//       setCurrentView("dashboard");
//     }
//   };

//   const handleProgramSelect = (programId) => {
//     setSelectedProgram(programId);
//     setCurrentView("courses");
//     setIsMenuOpen(false);
//   };

//   const handleCourseSelect = (courseId) => {
//     setSelectedCourse(courseId);
//     setCurrentView("mcqs");
//     setCurrentQuestionIndex(0);
//     setSelectedAnswers({});
//     setShowExplanation(false);
//     setQuizStarted(false);
//     setTimeSpent(0);
//     setQuizCompleted(false);
//     setIsMenuOpen(false);
//   };

//   const handleAnswerSelect = (answer) => {
//     if (quizCompleted) return;

//     if (!quizStarted) {
//       setQuizStarted(true);
//     }

//     setSelectedAnswers({
//       ...selectedAnswers,
//       [currentQuestionIndex]: answer,
//     });
//     setShowExplanation(true);
//   };

//   const handleNextQuestion = () => {
//     if (currentQuestionIndex < filteredQuestions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//       setShowExplanation(!!selectedAnswers[currentQuestionIndex + 1]);
//     } else {
//       setQuizCompleted(true);
//       setCurrentView("review");
//     }
//   };

//   const handlePrevQuestion = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex(currentQuestionIndex - 1);
//       setShowExplanation(!!selectedAnswers[currentQuestionIndex - 1]);
//     }
//   };

//   const calculateScore = () => {
//     const correct = filteredQuestions.filter(
//       (q, index) => selectedAnswers[index] === q.correct_answer
//     ).length;
//     return {
//       correct,
//       total: filteredQuestions.length,
//       percentage: Math.round((correct / filteredQuestions.length) * 100) || 0,
//     };
//   };

//   const handleRestart = () => {
//     setCurrentQuestionIndex(0);
//     setSelectedAnswers({});
//     setShowExplanation(false);
//     setQuizStarted(false);
//     setTimeSpent(0);
//     setQuizCompleted(false);
//     setCurrentView("mcqs");
//     setIsMenuOpen(false);
//   };

//   const toggleTheme = () => {
//     setIsDarkTheme(!isDarkTheme);
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const filteredCourses = selectedProgram
//     ? PROGRAMS[selectedProgram].courses.filter(
//         (courseId) =>
//           COURSES[courseId].exam_details.course_name
//             .toLowerCase()
//             .includes(searchTerm.toLowerCase()) ||
//           COURSES[courseId].exam_details.course_code
//             .toLowerCase()
//             .includes(searchTerm.toLowerCase())
//       )
//     : Object.keys(COURSES).filter(
//         (courseId) =>
//           COURSES[courseId].exam_details.course_name
//             .toLowerCase()
//             .includes(searchTerm.toLowerCase()) ||
//           COURSES[courseId].exam_details.course_code
//             .toLowerCase()
//             .includes(searchTerm.toLowerCase())
//       );

//   const filteredPrograms = Object.entries(PROGRAMS).filter(
//     ([programId, program]) => {
//       const programMatches = program.name
//         .toLowerCase()
//         .includes(searchTerm.toLowerCase());
//       const courseMatches = program.courses.some(
//         (courseId) =>
//           COURSES[courseId].exam_details.course_name
//             .toLowerCase()
//             .includes(searchTerm.toLowerCase()) ||
//           COURSES[courseId].exam_details.course_code
//             .toLowerCase()
//             .includes(searchTerm.toLowerCase())
//       );
//       return programMatches || courseMatches;
//     }
//   );

//   // Loading Screen Component
//   const LoadingScreen = () => (
//     <div
//       className={`fixed inset-0 flex items-center justify-center z-50 ${
//         isDarkTheme ? "bg-gray-900 bg-opacity-80" : "bg-gray-100 bg-opacity-80"
//       }`}
//     >
//       <div
//         className={`rounded-lg p-6 ${
//           isDarkTheme ? "bg-gray-800 text-white" : "bg-white text-gray-900"
//         } shadow-xl flex flex-col items-center`}
//       >
//         <div
//           className={`animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 ${
//             isDarkTheme ? "border-blue-400" : "border-blue-500"
//           } mb-4`}
//         ></div>
//         <p className="text-lg font-semibold">Loading...</p>
//         <p
//           className={`text-sm ${
//             isDarkTheme ? "text-gray-300" : "text-gray-600"
//           }`}
//         >
//           Please wait while we fetch your content.
//         </p>
//       </div>
//     </div>
//   );

//   // Common Navbar Component
//   const Navbar = ({ showBackButton = false, backView = "dashboard" }) => (
//     <header
//       className={`shadow-sm border-b ${
//         isDarkTheme ? "bg-gray-800 text-white" : "bg-white text-gray-900"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center py-4">
//           <div className="flex items-center">
//             {showBackButton && (
//               <button
//                 onClick={() => {
//                   setCurrentView(backView);
//                   setIsMenuOpen(false);
//                 }}
//                 className={`mr-4 p-2 hover:bg-opacity-10 rounded-lg ${
//                   isDarkTheme ? "hover:bg-gray-700" : "hover:bg-gray-100"
//                 }`}
//               >
//                 <ChevronLeft className="w-5 h-5" />
//               </button>
//             )}
//             {currentView === "dashboard" && (
//               <img src={LOGO} className="w-24 h-17" alt="Logo" />
//             )}
//             {currentView === "courses" && (
//               <>
//                 <BookOpen
//                   className={`w-8 h-8 ml-3 ${
//                     isDarkTheme ? "text-blue-400" : "text-blue-600"
//                   }`}
//                 />
//                 <h1 className="text-2xl font-bold ml-2">
//                   {PROGRAMS[selectedProgram].name}
//                 </h1>
//               </>
//             )}
//             {currentView === "mcqs" && (
//               <div className="ml-4">
//                 <h1 className="text-lg font-semibold">
//                   {COURSES[selectedCourse].exam_details.course_code}
//                 </h1>
//                 <p
//                   className={`text-sm ${
//                     isDarkTheme ? "text-gray-300" : "text-gray-600"
//                   }`}
//                 >
//                   Question {currentQuestionIndex + 1} of{" "}
//                   {filteredQuestions.length}
//                 </p>
//               </div>
//             )}
//           </div>
//           <div className="flex items-center space-x-4">
//             {currentView === "mcqs" && (
//               <>
//                 <div
//                   className={`flex items-center text-sm ${
//                     isDarkTheme ? "text-gray-300" : "text-gray-600"
//                   }`}
//                 >
//                   <Clock className="w-4 h-4 mr-1" />
//                   <span>{formatTime(timeSpent)}</span>
//                 </div>
//                 <div
//                   className={`flex items-center text-sm ${
//                     isDarkTheme ? "text-gray-300" : "text-gray-600"
//                   }`}
//                 >
//                   <Trophy className="w-4 h-4 mr-1" />
//                   <span>
//                     Score: {calculateScore().correct}/{filteredQuestions.length}{" "}
//                     ({calculateScore().percentage}%)
//                   </span>
//                 </div>
//               </>
//             )}
//             <div className="hidden lg:flex items-center space-x-4">
//               <button
//                 onClick={toggleTheme}
//                 className={`p-2 rounded-full ${
//                   isDarkTheme
//                     ? "bg-gray-700 text-yellow-400"
//                     : "bg-gray-100 text-gray-600"
//                 } hover:bg-opacity-80 transition-colors`}
//                 aria-label="Toggle theme"
//               >
//                 {isDarkTheme ? (
//                   <Sun className="w-5 h-5" />
//                 ) : (
//                   <Moon className="w-5 h-5" />
//                 )}
//               </button>
//               <a
//                 href="mailto:support@prepmate.com"
//                 className={`p-2 rounded-full ${
//                   isDarkTheme
//                     ? "bg-gray-700 text-blue-400"
//                     : "bg-gray-100 text-blue-600"
//                 } hover:bg-opacity-80 transition-colors`}
//                 aria-label="Contact us"
//               >
//                 <Mail className="w-5 h-5" />
//               </a>
//               <div
//                 className={`flex items-center ${
//                   isDarkTheme ? "text-gray-300" : "text-gray-600"
//                 }`}
//               >
//                 <CircleUserRound className="w-8 h-8 mr-2" />
//                 <p>Profile</p>
//               </div>
//             </div>
//             <button
//               className="lg:hidden p-2 rounded-full hover:bg-opacity-10 transition-colors"
//               onClick={toggleMenu}
//               aria-label="Toggle menu"
//             >
//               {isMenuOpen ? (
//                 <X
//                   className={`w-6 h-6 ${
//                     isDarkTheme ? "text-gray-300" : "text-gray-600"
//                   }`}
//                 />
//               ) : (
//                 <Menu
//                   className={`w-6 h-6 ${
//                     isDarkTheme ? "text-gray-300" : "text-gray-600"
//                   }`}
//                 />
//               )}
//             </button>
//           </div>
//         </div>
//         {isMenuOpen && (
//           <div
//             className={`lg:hidden ${
//               isDarkTheme ? "bg-gray-800" : "bg-white"
//             } border-t ${
//               isDarkTheme ? "border-gray-700" : "border-gray-200"
//             } py-4 px-4 sm:px-6 lg:px-8`}
//           >
//             <div className="flex flex-col space-y-4">
//               <button
//                 onClick={toggleTheme}
//                 className={`flex items-center p-2 rounded-lg ${
//                   isDarkTheme
//                     ? "bg-gray-700 text-yellow-400"
//                     : "bg-gray-100 text-gray-600"
//                 } hover:bg-opacity-80 transition-colors`}
//               >
//                 {isDarkTheme ? (
//                   <Sun className="w-5 h-5 mr-2" />
//                 ) : (
//                   <Moon className="w-5 h-5 mr-2" />
//                 )}
//                 {isDarkTheme ? "Light Theme" : "Dark Theme"}
//               </button>
//               <a
//                 href="mailto:support@prepmate.com"
//                 className={`flex items-center p-2 rounded-lg ${
//                   isDarkTheme
//                     ? "bg-gray-700 text-blue-400"
//                     : "bg-gray-100 text-blue-600"
//                 } hover:bg-opacity-80 transition-colors`}
//               >
//                 <Mail className="w-5 h-5 mr-2" />
//                 Contact Us
//               </a>
//               <div
//                 className={`flex items-center p-2 rounded-lg ${
//                   isDarkTheme
//                     ? "bg-gray-700 text-gray-300"
//                     : "bg-gray-100 text-gray-600"
//                 } hover:bg-opacity-80 transition-colors`}
//               >
//                 <CircleUserRound className="w-5 h-5 mr-2" />
//                 Profile
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );

//   // Start Screen
//   if (currentView === "start") {
//     return (
//       <div
//         className={`min-h-screen ${
//           isDarkTheme
//             ? "bg-gray-900 text-white"
//             : "bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white"
//         } flex items-center justify-center p-4`}
//       >
//         {isLoading && <LoadingScreen />}
//         <div className="text-center">
//           <div className="mb-8">
//             <div className="flex items-center justify-center mb-4 cursor-pointer">
//               <img
//                 src={LOGO}
//                 className="w-56 h-40"
//                 alt="PrepMate Logo"
//                 onClick={() => setCurrentView("auth")}
//               />
//             </div>
//             <p className="text-xl mb-8">Prep yourself for success</p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Authentication Screen
//   if (currentView === "auth") {
//     return (
//       <div
//         className={`min-h-screen ${
//           isDarkTheme
//             ? "bg-gray-900"
//             : "bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800"
//         } flex items-center justify-center p-4`}
//       >
//         {isLoading && <LoadingScreen />}
//         <div
//           className={`rounded-lg shadow-xl p-8 w-full max-w-md ${
//             isDarkTheme ? "bg-gray-800 text-white" : "bg-white text-gray-800"
//           }`}
//         >
//           <h2 className="text-2xl font-bold text-center mb-6">
//             Authentication
//           </h2>
//           <div className="space-y-4">
//             <div>
//               <label
//                 className={`block text-sm font-medium mb-2 ${
//                   isDarkTheme ? "text-gray-300" : "text-gray-700"
//                 }`}
//               >
//                 Username
//               </label>
//               <input
//                 type="text"
//                 className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
//                   isDarkTheme
//                     ? "bg-gray-700 border-gray-600 text-white"
//                     : "bg-white border-gray-300 text-gray-800"
//                 }`}
//                 placeholder="Enter your username"
//               />
//             </div>
//             <div>
//               <label
//                 className={`block text-sm font-medium mb-2 ${
//                   isDarkTheme ? "text-gray-300" : "text-gray-700"
//                 }`}
//               >
//                 Password
//               </label>
//               <input
//                 type="password"
//                 className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
//                   isDarkTheme
//                     ? "bg-gray-700 border-gray-600 text-white"
//                     : "bg-white border-gray-300 text-gray-800"
//                 }`}
//                 placeholder="Enter your password"
//               />
//             </div>
//             <div className="flex space-x-4">
//               <button
//                 onClick={() => handleAuthentication(true)}
//                 className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
//               >
//                 Sign In
//               </button>
//               <button
//                 onClick={() => handleAuthentication(false)}
//                 className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition-colors"
//               >
//                 Sign Up
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Dashboard
//   if (currentView === "dashboard") {
//     return (
//       <div
//         className={`min-h-screen ${
//           isDarkTheme ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
//         }`}
//       >
//         <Navbar />
//         {isLoading && <LoadingScreen />}
//         <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//           <div className="mb-8">
//             <h2 className="text-3xl font-bold mb-2">Choose Your Program</h2>
//             <p className={isDarkTheme ? "text-gray-300" : "text-gray-600"}>
//               Select a program to access your courses
//             </p>
//           </div>
//           <div className="relative mb-6">
//             <Search
//               className={`w-5 h-5 absolute left-3 top-3 ${
//                 isDarkTheme ? "text-gray-400" : "text-gray-400"
//               }`}
//             />
//             <input
//               type="text"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               placeholder="Search programs..."
//               className={`pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full ${
//                 isDarkTheme
//                   ? "bg-gray-700 border-gray-600 text-white"
//                   : "bg-white border-gray-300 text-gray-800"
//               }`}
//             />
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredPrograms.map(([programId, program]) => (
//               <div
//                 key={programId}
//                 onClick={() => handleProgramSelect(programId)}
//                 className={`rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow border-l-4 border-blue-500 ${
//                   isDarkTheme
//                     ? "bg-gray-800 text-white"
//                     : "bg-white text-gray-900"
//                 }`}
//               >
//                 <div className="flex items-center mb-4">
//                   <div
//                     className={`w-12 h-12 ${program.color} rounded-lg flex items-center justify-center`}
//                   >
//                     <BookOpen className="w-6 h-6 text-white" />
//                   </div>
//                   <div className="ml-4">
//                     <h3 className="text-lg font-semibold">{program.name}</h3>
//                     <p
//                       className={`text-sm ${
//                         isDarkTheme ? "text-gray-300" : "text-gray-600"
//                       }`}
//                     >
//                       {program.courses.length} courses available
//                     </p>
//                   </div>
//                 </div>
//                 <div
//                   className={`flex items-center text-sm ${
//                     isDarkTheme ? "text-gray-300" : "text-gray-500"
//                   }`}
//                 >
//                   <Clock className="w-4 h-4 mr-1" />
//                   <span>Self-paced learning</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </main>
//       </div>
//     );
//   }

//   // Courses View
//   if (currentView === "courses") {
//     return (
//       <div
//         className={`min-h-screen ${
//           isDarkTheme ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
//         }`}
//       >
//         <Navbar showBackButton={true} backView="dashboard" />
//         {isLoading && <LoadingScreen />}
//         <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//           <div className="mb-8">
//             <h2 className="text-3xl font-bold mb-2">Available Courses</h2>
//             <p className={isDarkTheme ? "text-gray-300" : "text-gray-600"}>
//               Select a course to start practicing
//             </p>
//           </div>
//           <div className="relative mb-6">
//             <Search
//               className={`w-5 h-5 absolute left-3 top-3 ${
//                 isDarkTheme ? "text-gray-400" : "text-gray-400"
//               }`}
//             />
//             <input
//               type="text"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               placeholder="Search courses..."
//               className={`pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full ${
//                 isDarkTheme
//                   ? "bg-gray-700 border-gray-600 text-white"
//                   : "bg-white border-gray-300 text-gray-800"
//               }`}
//             />
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredCourses.map((courseId) => {
//               const course = COURSES[courseId];
//               return (
//                 <div
//                   key={courseId}
//                   onClick={() => handleCourseSelect(courseId)}
//                   className={`rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow ${
//                     isDarkTheme
//                       ? "bg-gray-800 text-white"
//                       : "bg-white text-gray-900"
//                   }`}
//                 >
//                   <div className="mb-4">
//                     <h3 className="text-lg font-semibold mb-2">
//                       {course.exam_details.course_code}
//                     </h3>
//                     <p
//                       className={`text-sm ${
//                         isDarkTheme ? "text-gray-300" : "text-gray-600"
//                       }`}
//                     >
//                       {course.exam_details.course_name}
//                     </p>
//                     <p
//                       className={`text-xs ${
//                         isDarkTheme ? "text-gray-400" : "text-gray-500"
//                       }`}
//                     >
//                       {course.exam_details.university}
//                     </p>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span
//                       className={`text-sm ${
//                         isDarkTheme ? "text-gray-300" : "text-gray-600"
//                       }`}
//                     >
//                       {course.multiple_choice_questions.length} questions
//                     </span>
//                     <ChevronRight
//                       className={`w-5 h-5 ${
//                         isDarkTheme ? "text-gray-400" : "text-gray-400"
//                       }`}
//                     />
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </main>
//       </div>
//     );
//   }

//   // MCQs View
//   if (currentView === "mcqs") {
//     const course = COURSES[selectedCourse];
//     const currentQuestion = filteredQuestions[currentQuestionIndex];
//     const selectedAnswer = selectedAnswers[currentQuestionIndex];
//     const currentScore = calculateScore();

//     return (
//       <div
//         className={`min-h-screen ${
//           isDarkTheme ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
//         }`}
//       >
//         <Navbar showBackButton={true} backView="courses" />
//         {isLoading && <LoadingScreen />}
//         <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//           <div className="mb-6">
//             <label
//               className={`block mb-2 font-medium ${
//                 isDarkTheme ? "text-gray-300" : "text-gray-700"
//               }`}
//             >
//               Question Mode:
//             </label>
//             <div className="flex space-x-4">
//               <button
//                 onClick={() => setQuestionMode("rapid")}
//                 className={`px-4 py-2 rounded-lg border cursor-pointer ${
//                   questionMode === "rapid"
//                     ? isDarkTheme
//                       ? "bg-blue-600 text-white border-blue-500"
//                       : "bg-blue-500 text-white border-blue-400"
//                     : isDarkTheme
//                     ? "bg-gray-700 text-gray-300 border-gray-600"
//                     : "bg-white text-gray-700 border-gray-300"
//                 }`}
//               >
//                 Rapid (10)
//               </button>
//               <button
//                 onClick={() => setQuestionMode("standard")}
//                 className={`px-4 py-2 rounded-lg border cursor-pointer ${
//                   questionMode === "standard"
//                     ? isDarkTheme
//                       ? "bg-blue-600 text-white border-blue-500"
//                       : "bg-blue-500 text-white border-blue-400"
//                     : isDarkTheme
//                     ? "bg-gray-700 text-gray-300 border-gray-600"
//                     : "bg-white text-gray-700 border-gray-300"
//                 }`}
//               >
//                 Standard (20)
//               </button>
//               <button
//                 onClick={() => setQuestionMode("all")}
//                 className={`px-4 py-2 rounded-lg border cursor-pointer ${
//                   questionMode === "all"
//                     ? isDarkTheme
//                       ? "bg-blue-600 text-white border-blue-500"
//                       : "bg-blue-500 text-white border-blue-400"
//                     : isDarkTheme
//                     ? "bg-gray-700 text-gray-300 border-gray-600"
//                     : "bg-white text-gray-700 border-gray-300"
//                 }`}
//               >
//                 All Questions
//               </button>
//             </div>
//           </div>
//           {currentQuestion && (
//             <div
//               className={`rounded-lg shadow-md p-8 ${
//                 isDarkTheme
//                   ? "bg-gray-800 text-white"
//                   : "bg-white text-gray-900"
//               }`}
//             >
//               <div className="mb-6">
//                 <h2 className="text-xl font-semibold mb-4">
//                   {currentQuestion.question_text}
//                 </h2>
//                 <div className="space-y-3">
//                   {Object.entries(currentQuestion.options).map(
//                     ([option, text]) => {
//                       const isSelected = selectedAnswer === option;
//                       const isCorrect =
//                         option === currentQuestion.correct_answer;
//                       const showResult = showExplanation;

//                       let buttonClass =
//                         "w-full p-4 text-left border-2 rounded-lg transition-all ";

//                       if (showResult) {
//                         if (isCorrect) {
//                           buttonClass += isDarkTheme
//                             ? "border-green-400 bg-green-900 text-green-300"
//                             : "border-green-500 bg-green-50 text-green-800";
//                         } else if (isSelected && !isCorrect) {
//                           buttonClass += isDarkTheme
//                             ? "border-red-400 bg-red-900 text-red-300"
//                             : "border-red-500 bg-red-50 text-red-800";
//                         } else {
//                           buttonClass += isDarkTheme
//                             ? "border-gray-600 bg-gray-700 text-gray-300"
//                             : "border-gray-200 bg-gray-50 text-gray-600";
//                         }
//                       } else {
//                         if (isSelected) {
//                           buttonClass += isDarkTheme
//                             ? "border-blue-400 bg-blue-900 text-blue-300"
//                             : "border-blue-500 bg-blue-50 text-blue-800";
//                         } else {
//                           buttonClass += isDarkTheme
//                             ? "border-gray-600 hover:border-gray-500 hover:bg-gray-600"
//                             : "border-gray-200 hover:border-gray-300 hover:bg-gray-50";
//                         }
//                       }

//                       return (
//                         <button
//                           key={option}
//                           onClick={() => handleAnswerSelect(option)}
//                           className={buttonClass}
//                           disabled={showExplanation}
//                         >
//                           <div className="flex items-center">
//                             <span className="font-semibold mr-3">
//                               {option}.
//                             </span>
//                             <span>{text}</span>
//                             {showResult && isCorrect && (
//                               <CheckCircle
//                                 className={`w-5 h-5 ml-auto ${
//                                   isDarkTheme
//                                     ? "text-green-400"
//                                     : "text-green-500"
//                                 }`}
//                               />
//                             )}
//                             {showResult && isSelected && !isCorrect && (
//                               <XCircle
//                                 className={`w-5 h-5 ml-auto ${
//                                   isDarkTheme ? "text-red-400" : "text-red-500"
//                                 }`}
//                               />
//                             )}
//                           </div>
//                         </button>
//                       );
//                     }
//                   )}
//                 </div>
//               </div>
//               {showExplanation && (
//                 <div
//                   className={`mb-6 p-4 border rounded-lg ${
//                     isDarkTheme
//                       ? "bg-blue-900 border-blue-700 text-blue-200"
//                       : "bg-blue-50 border-blue-200 text-blue-800"
//                   }`}
//                 >
//                   <h3
//                     className={`font-semibold mb-2 ${
//                       isDarkTheme ? "text-blue-300" : "text-blue-900"
//                     }`}
//                   >
//                     Explanation:
//                   </h3>
//                   <p>{currentQuestion.explanation}</p>
//                 </div>
//               )}
//               <div className="flex justify-between">
//                 <button
//                   onClick={handlePrevQuestion}
//                   disabled={currentQuestionIndex === 0}
//                   className={`flex items-center px-4 py-2 rounded-lg ${
//                     isDarkTheme
//                       ? "bg-gray-700 text-gray-300 hover:bg-gray-600 disabled:bg-gray-800 disabled:text-gray-500"
//                       : "bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:bg-gray-50 disabled:text-gray-400"
//                   } disabled:opacity-50 disabled:cursor-not-allowed`}
//                 >
//                   <ChevronLeft className="w-4 h-4 mr-1" />
//                   Previous
//                 </button>
//                 <button
//                   onClick={handleNextQuestion}
//                   disabled={!showExplanation}
//                   className={`flex items-center px-4 py-2 rounded-lg ${
//                     isDarkTheme
//                       ? "bg-blue-600 text-white hover:bg-blue-500 disabled:bg-gray-700 disabled:text-gray-400"
//                       : "bg-blue-500 text-white hover:bg-blue-600 disabled:bg-gray-100 disabled:text-gray-400"
//                   } disabled:opacity-50 disabled:cursor-not-allowed`}
//                 >
//                   {currentQuestionIndex === filteredQuestions.length - 1
//                     ? "Finish"
//                     : "Next"}
//                   <ChevronRight className="w-4 h-4 ml-1" />
//                 </button>
//               </div>
//             </div>
//           )}
//         </main>
//       </div>
//     );
//   }

//   // Review Screen
//   if (currentView === "review") {
//     const score = calculateScore();

//     return (
//       <div
//         className={`min-h-screen ${
//           isDarkTheme ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
//         }`}
//       >
//         <Navbar />
//         {isLoading && <LoadingScreen />}
//         <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//           <div
//             className={`rounded-lg shadow-md p-8 text-center mb-8 ${
//               isDarkTheme ? "bg-gray-800 text-white" : "bg-white text-gray-900"
//             }`}
//           >
//             <Trophy
//               className={`w-16 h-16 mx-auto mb-4 ${
//                 isDarkTheme ? "text-yellow-400" : "text-yellow-500"
//               }`}
//             />
//             <h2 className="text-3xl font-bold mb-2">Quiz Completed!</h2>
//             <p
//               className={`text-xl mb-6 ${
//                 isDarkTheme ? "text-gray-300" : "text-gray-600"
//               }`}
//             >
//               You scored {score.correct} out of {score.total} (
//               {score.percentage}%)
//             </p>
//             <div className="flex justify-center space-x-4 mb-6">
//               <div className="text-center">
//                 <div
//                   className={`text-2xl font-bold ${
//                     isDarkTheme ? "text-green-400" : "text-green-600"
//                   }`}
//                 >
//                   {score.correct}
//                 </div>
//                 <div
//                   className={`text-sm ${
//                     isDarkTheme ? "text-gray-300" : "text-gray-600"
//                   }`}
//                 >
//                   Correct
//                 </div>
//               </div>
//               <div className="text-center">
//                 <div
//                   className={`text-2xl font-bold ${
//                     isDarkTheme ? "text-red-400" : "text-red-600"
//                   }`}
//                 >
//                   {score.total - score.correct}
//                 </div>
//                 <div
//                   className={`text-sm ${
//                     isDarkTheme ? "text-gray-300" : "text-gray-600"
//                   }`}
//                 >
//                   Incorrect
//                 </div>
//               </div>
//               <div className="text-center">
//                 <div
//                   className={`text-2xl font-bold ${
//                     isDarkTheme ? "text-blue-400" : "text-blue-600"
//                   }`}
//                 >
//                   {formatTime(timeSpent)}
//                 </div>
//                 <div
//                   className={`text-sm ${
//                     isDarkTheme ? "text-gray-300" : "text-gray-600"
//                   }`}
//                 >
//                   Time Spent
//                 </div>
//               </div>
//             </div>
//             <div className="flex justify-center space-x-4">
//               <button
//                 onClick={handleRestart}
//                 className={`flex items-center px-6 py-3 rounded-lg ${
//                   isDarkTheme
//                     ? "bg-blue-600 text-white hover:bg-blue-500"
//                     : "bg-blue-500 text-white hover:bg-blue-600"
//                 }`}
//               >
//                 <RotateCcw className="w-4 h-4 mr-2" />
//                 Restart Quiz
//               </button>
//               <button
//                 onClick={() => setCurrentView("courses")}
//                 className={`px-6 py-3 rounded-lg ${
//                   isDarkTheme
//                     ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
//                     : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                 }`}
//               >
//                 Back to Courses
//               </button>
//             </div>
//           </div>
//         </main>
//       </div>
//     );
//   }

//   return null;
// }

import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Search,
  BookOpen,
  Trophy,
  Clock,
  CheckCircle,
  XCircle,
  Moon,
  Sun,
  Mail,
  Menu,
  X,
} from "lucide-react";
import INTROEM from "./Database/IntroEM";
import BUSFRENCH from "./Database/BusFrench";
import BUSCOMM from "./Database/BusinessComm";
import BUSECONS from "./Database/BusEcons";
import BUSSTATS from "./Database/BusStats";
import PROGRAMMINGFUNDAMENTALS from "./Database/ProgrammingFundamentals";
import INTROMGT from "./Database/IntroMGT";
import CRITICALTHINKING from "./Database/Logic&criticalthinking";
import CONSTITUTIONALLAWONE from "./Database/ConstitutionalLaw1";
import CONTRACTLAWONE from "./Database/ContractLaw1";
import LOGO from "./assets/LOGO.png";

// Course registry
const COURSES = {
  "intro-em": INTROEM,
  "bus-french": BUSFRENCH,
  "bus-comm": BUSCOMM,
  "bus-econs": BUSECONS,
  "bus-stats": BUSSTATS,
  "programming-fundamentals": PROGRAMMINGFUNDAMENTALS,
  "intro-management": INTROMGT,
  "critical-thinking": CRITICALTHINKING,
  "constitutional-law1": CONSTITUTIONALLAWONE,
  "contract-law1": CONTRACTLAWONE,
};

const PROGRAMS = {
  MKT: {
    name: "BSC. MARKETING",
    id: "MKT",
    courses: [
      "intro-em",
      "bus-french",
      "bus-comm",
      "bus-econs",
      "bus-stats",
      "intro-management",
      "critical-thinking",
    ],
    color: "bg-blue-500",
  },
  BACT: {
    name: "BSC. ACCOUNTING",
    id: "BACT",
    courses: [
      "intro-em",
      "bus-french",
      "bus-comm",
      "bus-econs",
      "bus-stats",
      "intro-management",
      "critical-thinking",
    ],
    color: "bg-green-500",
  },
  BBAF: {
    name: "BSC. BANKING AND FINANCE",
    id: "BBAF",
    courses: [
      "intro-em",
      "bus-french",
      "bus-comm",
      "bus-econs",
      "bus-stats",
      "intro-management",
      "critical-thinking",
    ],
    color: "bg-purple-500",
  },
  ADM: {
    name: "BSC. BUSINESS ADMINISTRATION",
    id: "ADM",
    courses: [
      "bus-econs",
      "intro-em",
      "bus-french",
      "bus-comm",
      "bus-stats",
      "intro-management",
      "critical-thinking",
    ],
    color: "bg-violet-500",
  },
  BAAF: {
    name: "BSC. ACCOUNTING AND FINANCE",
    id: "BAAF",
    courses: [
      "intro-em",
      "bus-french",
      "bus-comm",
      "bus-econs",
      "bus-stats",
      "intro-management",
      "critical-thinking",
    ],
    color: "bg-indigo-500",
  },
  BITM: {
    name: "BSC. INFORMATION TECHNOLOGY MGT",
    id: "BITM",
    courses: [
      "intro-em",
      "bus-french",
      "bus-comm",
      "bus-stats",
      "intro-management",
      "programming-fundamentals",
      "critical-thinking",
    ],
    color: "bg-red-500",
  },
  PBPR: {
    name: "BA. PUBLIC RELATIONS MANAGEMENT",
    id: "PBPR",
    courses: [
      "intro-em",
      "bus-french",
      "bus-comm",
      "bus-stats",
      "intro-management",
      "critical-thinking",
    ],
    color: "bg-yellow-500",
  },
  LLB: {
    name: "BACHELOR of LAW",
    id: "LLB",
    courses: ["constitutional-law1", "contract-law1"],
    color: "bg-black",
  },
  BASC: {
    name: "BSC. ACTUARIAL SCIENCE",
    id: "BASC",
    courses: ["intro-em"],
    color: "bg-pink-500",
  },
  BRMF: {
    name: "BSC. REAL ESTATE MGT & FINANCE",
    id: "BRMF",
    courses: ["intro-em"],
    color: "bg-amber-500",
  },
  BBBEC: {
    name: "BSC. BUSINESS ECONOMICS",
    id: "BBEC",
    courses: ["intro-em"],
    color: "bg-orange-500",
  },
  BLTM: {
    name: "BSC. LOGISTICS & TRANSPORT MGT",
    id: "BLTM",
    courses: [
      "intro-em",
      "bus-french",
      "bus-comm",
      "bus-econs",
      "bus-stats",
      "intro-management",
      "critical-thinking",
    ],
    color: "bg-lime-500",
  },
  BACS: {
    name: "BA. COMMUNICATION STUDIES",
    id: "BACS",
    courses: ["intro-em"],
    color: "bg-gray-500",
  },
};

export default function PrepMateApp() {
  const [currentView, setCurrentView] = useState("start");
  const [selectedProgram, setSelectedProgram] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [timeSpent, setTimeSpent] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [questionMode, setQuestionMode] = useState("standard");
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    return localStorage.getItem("theme") === "light" ? false : true;
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Initialize Fathom Analytics
  useEffect(() => {
    const loadFathom = () => {
      setIsLoading(true);
      const script = document.createElement("script");
      script.src = "https://cdn.usefathom.com/script.js";
      script.setAttribute("data-site", "YOUR_FATHOM_SITE_ID"); // Replace with your Fathom site ID
      script.async = true;
      script.onload = () => setIsLoading(false);
      script.onerror = () => {
        setIsLoading(false);
        setError("Failed to load analytics. Please try again later.");
      };
      document.head.appendChild(script);
      return () => document.head.removeChild(script);
    };

    // Timeout to prevent infinite loading
    const timeout = setTimeout(() => {
      if (isLoading) {
        setIsLoading(false);
        setError("Analytics loading timed out. Please refresh the page.");
      }
    }, 10000); // 10 seconds timeout

    loadFathom();
    return () => clearTimeout(timeout);
  }, []);

  // Persist theme preference
  useEffect(() => {
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);

  // Shuffle questions for quiz
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    if (!selectedCourse) return;
    const course = COURSES[selectedCourse];
    const allQuestions = course.multiple_choice_questions;
    const shuffled = shuffleArray(allQuestions);

    let selected;
    if (questionMode === "rapid") {
      selected = shuffled.slice(0, 10);
    } else if (questionMode === "standard") {
      selected = shuffled.slice(0, 20);
    } else {
      selected = shuffled;
    }

    setFilteredQuestions(selected);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowExplanation(false);
  }, [selectedCourse, questionMode]);

  // Timer for quiz
  useEffect(() => {
    let interval;
    if (quizStarted && !quizCompleted) {
      interval = setInterval(() => {
        setTimeSpent((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [quizStarted, quizCompleted]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handleProgramSelect = (programId) => {
    setSelectedProgram(programId);
    setCurrentView("courses");
    setSearchTerm(""); // Clear search term on navigation
    setIsMenuOpen(false);
  };

  const handleCourseSelect = (courseId) => {
    setSelectedCourse(courseId);
    setCurrentView("mcqs");
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowExplanation(false);
    setQuizStarted(false);
    setTimeSpent(0);
    setQuizCompleted(false);
    setSearchTerm(""); // Clear search term on navigation
    setIsMenuOpen(false);
  };

  const handleAnswerSelect = (answer) => {
    if (quizCompleted) return;

    if (!quizStarted) {
      setQuizStarted(true);
    }

    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: answer,
    });
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowExplanation(!!selectedAnswers[currentQuestionIndex + 1]);
    } else {
      setQuizCompleted(true);
      setCurrentView("review");
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setShowExplanation(!!selectedAnswers[currentQuestionIndex - 1]);
    }
  };

  const calculateScore = () => {
    const correct = filteredQuestions.filter(
      (q, index) => selectedAnswers[index] === q.correct_answer
    ).length;
    return {
      correct,
      total: filteredQuestions.length,
      percentage: Math.round((correct / filteredQuestions.length) * 100) || 0,
    };
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowExplanation(false);
    setQuizStarted(false);
    setTimeSpent(0);
    setQuizCompleted(false);
    setCurrentView("mcqs");
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const filteredCourses = selectedProgram
    ? PROGRAMS[selectedProgram].courses.filter(
        (courseId) =>
          COURSES[courseId].exam_details.course_name
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          COURSES[courseId].exam_details.course_code
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
      )
    : Object.keys(COURSES).filter(
        (courseId) =>
          COURSES[courseId].exam_details.course_name
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          COURSES[courseId].exam_details.course_code
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
      );

  const filteredPrograms = Object.entries(PROGRAMS).filter(
    ([programId, program]) => {
      const programMatches = program.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const courseMatches = program.courses.some(
        (courseId) =>
          COURSES[courseId].exam_details.course_name
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          COURSES[courseId].exam_details.course_code
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
      );
      return programMatches || courseMatches;
    }
  );

  // Loading Screen Component
  const LoadingScreen = () => (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isDarkTheme ? "bg-gray-900 bg-opacity-80" : "bg-gray-100 bg-opacity-80"
      }`}
    >
      <div
        className={`rounded-lg p-6 ${
          isDarkTheme ? "bg-gray-800 text-white" : "bg-white text-gray-900"
        } shadow-xl flex flex-col items-center`}
      >
        <div
          className={`animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 ${
            isDarkTheme ? "border-blue-400" : "border-blue-500"
          } mb-4`}
        ></div>
        <p className="text-lg font-semibold">Loading...</p>
        <p
          className={`text-sm ${
            isDarkTheme ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Please wait while we fetch your content.
        </p>
        {error && (
          <p
            className={`text-sm mt-2 ${
              isDarkTheme ? "text-red-400" : "text-red-600"
            }`}
          >
            {error}
          </p>
        )}
      </div>
    </div>
  );

  // Common Navbar Component
  const Navbar = ({ showBackButton = false, backView = "dashboard" }) => (
    <header
      className={`shadow-sm border-b ${
        isDarkTheme ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            {showBackButton && (
              <button
                onClick={() => {
                  setCurrentView(backView);
                  setSearchTerm(""); // Clear search term on back navigation
                  setIsMenuOpen(false);
                }}
                className={`mr-4 p-2 hover:bg-opacity-10 rounded-lg ${
                  isDarkTheme ? "hover:bg-gray-700" : "hover:bg-gray-100"
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}
            {currentView === "dashboard" && (
              <img src={LOGO} className="w-24 h-17" alt="Logo" />
            )}
            {currentView === "courses" && (
              <>
                <BookOpen
                  className={`w-8 h-8 ml-3 ${
                    isDarkTheme ? "text-blue-400" : "text-blue-600"
                  }`}
                />
                <h1 className="text-2xl font-bold ml-2">
                  {PROGRAMS[selectedProgram].name}
                </h1>
              </>
            )}
            {currentView === "mcqs" && (
              <div className="ml-4">
                <h1 className="text-lg font-semibold">
                  {COURSES[selectedCourse].exam_details.course_code}
                </h1>
                <p
                  className={`text-sm ${
                    isDarkTheme ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Question {currentQuestionIndex + 1} of{" "}
                  {filteredQuestions.length}
                </p>
              </div>
            )}
          </div>
          <div className="flex items-center space-x-4">
            {currentView === "mcqs" && (
              <>
                <div
                  className={`flex items-center text-sm ${
                    isDarkTheme ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{formatTime(timeSpent)}</span>
                </div>
                <div
                  className={`flex items-center text-sm ${
                    isDarkTheme ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  <Trophy className="w-4 h-4 mr-1" />
                  <span>
                    Score: {calculateScore().correct}/{filteredQuestions.length}{" "}
                    ({calculateScore().percentage}%)
                  </span>
                </div>
              </>
            )}
            <div className="hidden lg:flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full ${
                  isDarkTheme
                    ? "bg-gray-700 text-yellow-400"
                    : "bg-gray-100 text-gray-600"
                } hover:bg-opacity-80 transition-colors`}
                aria-label="Toggle theme"
              >
                {isDarkTheme ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
              <a
                href="mailto:support@prepmate.com"
                className={`p-2 rounded-full ${
                  isDarkTheme
                    ? "bg-gray-700 text-blue-400"
                    : "bg-gray-100 text-blue-600"
                } hover:bg-opacity-80 transition-colors`}
                aria-label="Contact us"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <button
              className="lg:hidden p-2 rounded-full hover:bg-opacity-10 transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X
                  className={`w-6 h-6 ${
                    isDarkTheme ? "text-gray-300" : "text-gray-600"
                  }`}
                />
              ) : (
                <Menu
                  className={`w-6 h-6 ${
                    isDarkTheme ? "text-gray-300" : "text-gray-600"
                  }`}
                />
              )}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div
            className={`lg:hidden ${
              isDarkTheme ? "bg-gray-800" : "bg-white"
            } border-t ${
              isDarkTheme ? "border-gray-700" : "border-gray-200"
            } py-4 px-4 sm:px-6 lg:px-8`}
          >
            <div className="flex flex-col space-y-4">
              <button
                onClick={toggleTheme}
                className={`flex items-center p-2 rounded-lg ${
                  isDarkTheme
                    ? "bg-gray-700 text-yellow-400"
                    : "bg-gray-100 text-gray-600"
                } hover:bg-opacity-80 transition-colors`}
              >
                {isDarkTheme ? (
                  <Sun className="w-5 h-5 mr-2" />
                ) : (
                  <Moon className="w-5 h-5 mr-2" />
                )}
                {isDarkTheme ? "Light Theme" : "Dark Theme"}
              </button>
              <a
                href="mailto:support@prepmate.com"
                className={`flex items-center p-2 rounded-lg ${
                  isDarkTheme
                    ? "bg-gray-700 text-blue-400"
                    : "bg-gray-100 text-blue-600"
                } hover:bg-opacity-80 transition-colors`}
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );

  // Start Screen
  if (currentView === "start") {
    return (
      <div
        className={`min-h-screen ${
          isDarkTheme
            ? "bg-gray-900 text-white"
            : "bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white"
        } flex items-center justify-center p-4`}
      >
        {isLoading && <LoadingScreen />}
        <div className="text-center">
          <div className="mb-8">
            <div className="flex items-center justify-center mb-4 cursor-pointer">
              <img
                src={LOGO}
                className="w-56 h-40"
                alt="PrepMate Logo"
                onClick={() => setCurrentView("dashboard")} // Navigate to dashboard
              />
            </div>
            <p className="text-xl mb-8">Prep yourself for success</p>
          </div>
        </div>
      </div>
    );
  }

  // Dashboard
  if (currentView === "dashboard") {
    return (
      <div
        className={`min-h-screen ${
          isDarkTheme ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
        }`}
      >
        <Navbar />
        {isLoading && <LoadingScreen />}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Choose Your Program</h2>
            <p className={isDarkTheme ? "text-gray-300" : "text-gray-600"}>
              Select a program to access your courses
            </p>
          </div>
          <div className="relative mb-6">
            <Search
              className={`w-5 h-5 absolute left-3 top-3 ${
                isDarkTheme ? "text-gray-400" : "text-gray-400"
              }`}
            />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search programs..."
              className={`pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full ${
                isDarkTheme
                  ? "bg-gray-700 border-gray-600 text-white"
                  : "bg-white border-gray-300 text-gray-800"
              }`}
            />
          </div>
          {filteredPrograms.length === 0 && (
            <p
              className={`text-center ${
                isDarkTheme ? "text-gray-300" : "text-gray-600"
              }`}
            >
              No programs found.
            </p>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map(([programId, program]) => (
              <div
                key={programId}
                onClick={() => handleProgramSelect(programId)}
                className={`rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow border-l-4 border-blue-500 ${
                  isDarkTheme
                    ? "bg-gray-800 text-white"
                    : "bg-white text-gray-900"
                }`}
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`w-12 h-12 ${program.color} rounded-lg flex items-center justify-center`}
                  >
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">{program.name}</h3>
                    <p
                      className={`text-sm ${
                        isDarkTheme ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {program.courses.length} courses available
                    </p>
                  </div>
                </div>
                <div
                  className={`flex items-center text-sm ${
                    isDarkTheme ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  <Clock className="w-4 h-4 mr-1" />
                  <span>Self-paced learning</span>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    );
  }

  // Courses View
  if (currentView === "courses") {
    return (
      <div
        className={`min-h-screen ${
          isDarkTheme ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
        }`}
      >
        <Navbar showBackButton={true} backView="dashboard" />
        {isLoading && <LoadingScreen />}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Available Courses</h2>
            <p className={isDarkTheme ? "text-gray-300" : "text-gray-600"}>
              Select a course to start practicing
            </p>
          </div>
          <div className="relative mb-6">
            <Search
              className={`w-5 h-5 absolute left-3 top-3 ${
                isDarkTheme ? "text-gray-400" : "text-gray-400"
              }`}
            />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search courses..."
              className={`pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full ${
                isDarkTheme
                  ? "bg-gray-700 border-gray-600 text-white"
                  : "bg-white border-gray-300 text-gray-800"
              }`}
            />
          </div>
          {filteredCourses.length === 0 && (
            <p
              className={`text-center ${
                isDarkTheme ? "text-gray-300" : "text-gray-600"
              }`}
            >
              No courses found.
            </p>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((courseId) => {
              const course = COURSES[courseId];
              return (
                <div
                  key={courseId}
                  onClick={() => handleCourseSelect(courseId)}
                  className={`rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow ${
                    isDarkTheme
                      ? "bg-gray-800 text-white"
                      : "bg-white text-gray-900"
                  }`}
                >
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">
                      {course.exam_details.course_code}
                    </h3>
                    <p
                      className={`text-sm ${
                        isDarkTheme ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {course.exam_details.course_name}
                    </p>
                    <p
                      className={`text-xs ${
                        isDarkTheme ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {course.exam_details.university}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-sm ${
                        isDarkTheme ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {course.multiple_choice_questions.length} questions
                    </span>
                    <ChevronRight
                      className={`w-5 h-5 ${
                        isDarkTheme ? "text-gray-400" : "text-gray-400"
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    );
  }

  // MCQs View
  if (currentView === "mcqs") {
    const course = COURSES[selectedCourse];
    const currentQuestion = filteredQuestions[currentQuestionIndex];
    const selectedAnswer = selectedAnswers[currentQuestionIndex];
    const currentScore = calculateScore();

    return (
      <div
        className={`min-h-screen ${
          isDarkTheme ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
        }`}
      >
        <Navbar showBackButton={true} backView="courses" />
        {isLoading && <LoadingScreen />}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6">
            <label
              className={`block mb-2 font-medium ${
                isDarkTheme ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Question Mode:
            </label>
            <div className="flex space-x-4">
              <button
                onClick={() => setQuestionMode("rapid")}
                className={`px-4 py-2 rounded-lg border cursor-pointer ${
                  questionMode === "rapid"
                    ? isDarkTheme
                      ? "bg-blue-600 text-white border-blue-500"
                      : "bg-blue-500 text-white border-blue-400"
                    : isDarkTheme
                    ? "bg-gray-700 text-gray-300 border-gray-600"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
              >
                Rapid (10)
              </button>
              <button
                onClick={() => setQuestionMode("standard")}
                className={`px-4 py-2 rounded-lg border cursor-pointer ${
                  questionMode === "standard"
                    ? isDarkTheme
                      ? "bg-blue-600 text-white border-blue-500"
                      : "bg-blue-500 text-white border-blue-400"
                    : isDarkTheme
                    ? "bg-gray-700 text-gray-300 border-gray-600"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
              >
                Standard (20)
              </button>
              <button
                onClick={() => setQuestionMode("all")}
                className={`px-4 py-2 rounded-lg border cursor-pointer ${
                  questionMode === "all"
                    ? isDarkTheme
                      ? "bg-blue-600 text-white border-blue-500"
                      : "bg-blue-500 text-white border-blue-400"
                    : isDarkTheme
                    ? "bg-gray-700 text-gray-300 border-gray-600"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
              >
                All Questions
              </button>
            </div>
          </div>
          {currentQuestion && (
            <div
              className={`rounded-lg shadow-md p-8 ${
                isDarkTheme
                  ? "bg-gray-800 text-white"
                  : "bg-white text-gray-900"
              }`}
            >
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4">
                  {currentQuestion.question_text}
                </h2>
                <div className="space-y-3">
                  {Object.entries(currentQuestion.options).map(
                    ([option, text]) => {
                      const isSelected = selectedAnswer === option;
                      const isCorrect =
                        option === currentQuestion.correct_answer;
                      const showResult = showExplanation;

                      let buttonClass =
                        "w-full p-4 text-left border-2 rounded-lg transition-all ";

                      if (showResult) {
                        if (isCorrect) {
                          buttonClass += isDarkTheme
                            ? "border-green-400 bg-green-900 text-green-300"
                            : "border-green-500 bg-green-50 text-green-800";
                        } else if (isSelected && !isCorrect) {
                          buttonClass += isDarkTheme
                            ? "border-red-400 bg-red-900 text-red-300"
                            : "border-red-500 bg-red-50 text-red-800";
                        } else {
                          buttonClass += isDarkTheme
                            ? "border-gray-600 bg-gray-700 text-gray-300"
                            : "border-gray-200 bg-gray-50 text-gray-600";
                        }
                      } else {
                        if (isSelected) {
                          buttonClass += isDarkTheme
                            ? "border-blue-400 bg-blue-900 text-blue-300"
                            : "border-blue-500 bg-blue-50 text-blue-800";
                        } else {
                          buttonClass += isDarkTheme
                            ? "border-gray-600 hover:border-gray-500 hover:bg-gray-600"
                            : "border-gray-200 hover:border-gray-300 hover:bg-gray-50";
                        }
                      }

                      return (
                        <button
                          key={option}
                          onClick={() => handleAnswerSelect(option)}
                          className={buttonClass}
                          disabled={showExplanation}
                        >
                          <div className="flex items-center">
                            <span className="font-semibold mr-3">
                              {option}.
                            </span>
                            <span>{text}</span>
                            {showResult && isCorrect && (
                              <CheckCircle
                                className={`w-5 h-5 ml-auto ${
                                  isDarkTheme
                                    ? "text-green-400"
                                    : "text-green-500"
                                }`}
                              />
                            )}
                            {showResult && isSelected && !isCorrect && (
                              <XCircle
                                className={`w-5 h-5 ml-auto ${
                                  isDarkTheme ? "text-red-400" : "text-red-500"
                                }`}
                              />
                            )}
                          </div>
                        </button>
                      );
                    }
                  )}
                </div>
              </div>
              {showExplanation && (
                <div
                  className={`mb-6 p-4 border rounded-lg ${
                    isDarkTheme
                      ? "bg-blue-900 border-blue-700 text-blue-200"
                      : "bg-blue-50 border-blue-200 text-blue-800"
                  }`}
                >
                  <h3
                    className={`font-semibold mb-2 ${
                      isDarkTheme ? "text-blue-300" : "text-blue-900"
                    }`}
                  >
                    Explanation:
                  </h3>
                  <p>{currentQuestion.explanation}</p>
                </div>
              )}
              <div className="flex justify-between">
                <button
                  onClick={handlePrevQuestion}
                  disabled={currentQuestionIndex === 0}
                  className={`flex items-center px-4 py-2 rounded-lg ${
                    isDarkTheme
                      ? "bg-gray-700 text-gray-300 hover:bg-gray-600 disabled:bg-gray-800 disabled:text-gray-500"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:bg-gray-50 disabled:text-gray-400"
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Previous
                </button>
                <button
                  onClick={handleNextQuestion}
                  disabled={!showExplanation}
                  className={`flex items-center px-4 py-2 rounded-lg ${
                    isDarkTheme
                      ? "bg-blue-600 text-white hover:bg-blue-500 disabled:bg-gray-700 disabled:text-gray-400"
                      : "bg-blue-500 text-white hover:bg-blue-600 disabled:bg-gray-100 disabled:text-gray-400"
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {currentQuestionIndex === filteredQuestions.length - 1
                    ? "Finish"
                    : "Next"}
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    );
  }

  // Review Screen
  if (currentView === "review") {
    const score = calculateScore();

    return (
      <div
        className={`min-h-screen ${
          isDarkTheme ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
        }`}
      >
        <Navbar />
        {isLoading && <LoadingScreen />}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div
            className={`rounded-lg shadow-md p-8 text-center mb-8 ${
              isDarkTheme ? "bg-gray-800 text-white" : "bg-white text-gray-900"
            }`}
          >
            <Trophy
              className={`w-16 h-16 mx-auto mb-4 ${
                isDarkTheme ? "text-yellow-400" : "text-yellow-500"
              }`}
            />
            <h2 className="text-3xl font-bold mb-2">Quiz Completed!</h2>
            <p
              className={`text-xl mb-6 ${
                isDarkTheme ? "text-gray-300" : "text-gray-600"
              }`}
            >
              You scored {score.correct} out of {score.total} (
              {score.percentage}%)
            </p>
            <div className="flex justify-center space-x-4 mb-6">
              <div className="text-center">
                <div
                  className={`text-2xl font-bold ${
                    isDarkTheme ? "text-green-400" : "text-green-600"
                  }`}
                >
                  {score.correct}
                </div>
                <div
                  className={`text-sm ${
                    isDarkTheme ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Correct
                </div>
              </div>
              <div className="text-center">
                <div
                  className={`text-2xl font-bold ${
                    isDarkTheme ? "text-red-400" : "text-red-600"
                  }`}
                >
                  {score.total - score.correct}
                </div>
                <div
                  className={`text-sm ${
                    isDarkTheme ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Incorrect
                </div>
              </div>
              <div className="text-center">
                <div
                  className={`text-2xl font-bold ${
                    isDarkTheme ? "text-blue-400" : "text-blue-600"
                  }`}
                >
                  {formatTime(timeSpent)}
                </div>
                <div
                  className={`text-sm ${
                    isDarkTheme ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Time Spent
                </div>
              </div>
            </div>
            <div className="flex justify-center space-x-4">
              <button
                onClick={handleRestart}
                className={`flex items-center px-6 py-3 rounded-lg ${
                  isDarkTheme
                    ? "bg-blue-600 text-white hover:bg-blue-500"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Restart Quiz
              </button>
              <button
                onClick={() => {
                  setCurrentView("courses");
                  setSearchTerm(""); // Clear search term on navigation
                }}
                className={`px-6 py-3 rounded-lg ${
                  isDarkTheme
                    ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Back to Courses
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return null;
}
