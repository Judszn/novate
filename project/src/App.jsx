import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Search,
  BookOpen,
  User,
  Home,
  Trophy,
  Clock,
  CheckCircle,
  XCircle,
} from "lucide-react";
import INTROEM from "./Database/IntroEM";
import BUSFRENCH from "./Database/BusFrench";
import BUSCOMM from "./Database/BusinessComm";

// Course registry - add your imported courses here
const COURSES = {
  "intro-em": INTROEM,
  "bus-french": BUSFRENCH,
  "bus-comm": BUSCOMM,
  // Add more courses as you import them
};

const PROGRAMS = {
  MKT: {
    name: "BSC. MARKETING",
    courses: ["intro-em", "bus-french", "bus-comm"],
    color: "bg-blue-500",
  },
  BACT: {
    name: "BSC. ACCOUNTING",
    courses: ["intro-em"],
    color: "bg-green-500",
  },
  BBAF: {
    name: "BSC. BANKING AND FINANCE",
    courses: ["intro-em"],
    color: "bg-purple-500",
  },
  ADM: {
    name: "BSC. BUSINESS ADMINISTRATION",
    courses: ["intro-em"],
    color: "bg-violet-500",
  },
  BAAF: {
    name: "BSC. ACCOUNTING AND FINANCE",
    courses: ["intro-em"],
    color: "bg-indigo-500",
  },
  BITM: {
    name: "BSC. INFORMATION TECHNOLOGY MGT",
    courses: ["intro-em"],
    color: "bg-red-500",
  },
  PBPR: {
    name: "BA. PUBLIC RELATIONS MANAGEMENT",
    courses: ["intro-em"],
    color: "bg-yellow-500",
  },
  LLB: {
    name: "BACHELOR of LAW",
    courses: ["intro-em"],
    color: "bg-black",
  },
  BASC: {
    name: "BSC. ACTUARIAL SCIENCE",
    courses: ["intro-em"],
    color: "bg-pink-500",
  },
  BRMF: {
    name: "BSC. REAL ESTATE MGT & FINANCE",
    courses: ["intro-em"],
    color: "bg-amber-500",
  },
  BBBEC: {
    name: "BSC. BUSINESS ECONOMICS",
    courses: ["intro-em"],
    color: "bg-orange-500",
  },
  BLTM: {
    name: "BSC. LOGISTICS & TRANSPORT MGT",
    courses: ["intro-em"],
    color: "bg-lime-500",
  },
  BACS: {
    name: "BA. COMMUNICATION STUDIES",
    courses: ["intro-em"],
    color: "bg-gray-500",
  },
};

export default function PrepMateApp() {
  const [currentView, setCurrentView] = useState("start");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [timeSpent, setTimeSpent] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Timer effect
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

  const handleAuthentication = (success) => {
    setIsAuthenticated(success);
    if (success) {
      setCurrentView("dashboard");
    }
  };

  const handleProgramSelect = (programId) => {
    setSelectedProgram(programId);
    setCurrentView("courses");
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
    const course = COURSES[selectedCourse];
    if (currentQuestionIndex < course.multiple_choice_questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowExplanation(false);
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
    const course = COURSES[selectedCourse];
    const correct = course.multiple_choice_questions.filter(
      (q, index) => selectedAnswers[index] === q.correct_answer
    ).length;
    return {
      correct,
      total: course.multiple_choice_questions.length,
      percentage: Math.round(
        (correct / course.multiple_choice_questions.length) * 100
      ),
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
    : [];

  // Start Screen
  if (currentView === "start") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 flex items-center justify-center p-4">
        <div className="text-center text-white">
          <div className="mb-8">
            <div className="flex items-center justify-center mb-4">
              <BookOpen className="w-16 h-16 text-blue-200" />
            </div>
            <h1 className="text-6xl font-bold mb-4">PREP MATE</h1>
            <div className="flex justify-center mb-6">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              </div>
            </div>
            <p className="text-xl mb-8 text-blue-100">
              Master your exams with confidence
            </p>
          </div>

          <button
            onClick={() => setCurrentView("auth")}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            START
          </button>
        </div>
      </div>
    );
  }

  // Authentication Screen
  if (currentView === "auth") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Authentication
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your username"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => handleAuthentication(true)}
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
              >
                Sign In
              </button>
              <button
                onClick={() => handleAuthentication(false)}
                className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition-colors"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Dashboard
  if (currentView === "dashboard") {
    return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <BookOpen className="w-8 h-8 text-blue-600 mr-3" />
                <h1 className="text-2xl font-bold text-gray-900">PREP MATE</h1>
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search courses..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <User className="w-8 h-8 text-gray-600" />
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Choose Your Program
            </h2>
            <p className="text-gray-600">
              Select a program to access your courses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(PROGRAMS).map(([programId, program]) => (
              <div
                key={programId}
                onClick={() => handleProgramSelect(programId)}
                className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow border-l-4 border-blue-500"
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`w-12 h-12 ${program.color} rounded-lg flex items-center justify-center`}
                  >
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {program.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {program.courses.length} courses available
                    </p>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>Self-paced learning</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center absolute bottom  max-w-7xl mx-auto pt-10 font-light text-sm p-20 h-24 flex item-center justify-center">
            <div>
              Powered by Novate <img src="" alt="" />
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Courses View
  if (currentView === "courses") {
    return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <button
                  onClick={() => setCurrentView("dashboard")}
                  className="mr-4 p-2 hover:bg-gray-100 rounded-lg"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <BookOpen className="w-8 h-8 text-blue-600 mr-3" />
                <h1 className="text-2xl font-bold text-gray-900">
                  {PROGRAMS[selectedProgram].name}
                </h1>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Available Courses
            </h2>
            <p className="text-gray-600">Select a course to start practicing</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((courseId) => {
              const course = COURSES[courseId];
              return (
                <div
                  key={courseId}
                  onClick={() => handleCourseSelect(courseId)}
                  className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
                >
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {course.exam_details.course_code}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {course.exam_details.course_name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {course.exam_details.university}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      {course.multiple_choice_questions.length} questions
                    </span>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
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
    const currentQuestion =
      course.multiple_choice_questions[currentQuestionIndex];
    const selectedAnswer = selectedAnswers[currentQuestionIndex];

    return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <button
                  onClick={() => setCurrentView("courses")}
                  className="mr-4 p-2 hover:bg-gray-100 rounded-lg"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div>
                  <h1 className="text-lg font-semibold text-gray-900">
                    {course.exam_details.course_code}
                  </h1>
                  <p className="text-sm text-gray-600">
                    Question {currentQuestionIndex + 1} of{" "}
                    {course.multiple_choice_questions.length}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{formatTime(timeSpent)}</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                {currentQuestion.question_text}
              </h2>

              <div className="space-y-3">
                {Object.entries(currentQuestion.options).map(
                  ([option, text]) => {
                    const isSelected = selectedAnswer === option;
                    const isCorrect = option === currentQuestion.correct_answer;
                    const showResult = showExplanation;

                    let buttonClass =
                      "w-full p-4 text-left border-2 rounded-lg transition-all ";

                    if (showResult) {
                      if (isCorrect) {
                        buttonClass +=
                          "border-green-500 bg-green-50 text-green-800";
                      } else if (isSelected && !isCorrect) {
                        buttonClass += "border-red-500 bg-red-50 text-red-800";
                      } else {
                        buttonClass +=
                          "border-gray-200 bg-gray-50 text-gray-600";
                      }
                    } else {
                      if (isSelected) {
                        buttonClass +=
                          "border-blue-500 bg-blue-50 text-blue-800";
                      } else {
                        buttonClass +=
                          "border-gray-200 hover:border-gray-300 hover:bg-gray-50";
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
                          <span className="font-semibold mr-3">{option}.</span>
                          <span>{text}</span>
                          {showResult && isCorrect && (
                            <CheckCircle className="w-5 h-5 text-green-500 ml-auto" />
                          )}
                          {showResult && isSelected && !isCorrect && (
                            <XCircle className="w-5 h-5 text-red-500 ml-auto" />
                          )}
                        </div>
                      </button>
                    );
                  }
                )}
              </div>
            </div>

            {showExplanation && (
              <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">
                  Explanation:
                </h3>
                <p className="text-blue-800">{currentQuestion.explanation}</p>
              </div>
            )}

            <div className="flex justify-between">
              <button
                onClick={handlePrevQuestion}
                disabled={currentQuestionIndex === 0}
                className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Previous
              </button>

              <button
                onClick={handleNextQuestion}
                disabled={!showExplanation}
                className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {currentQuestionIndex ===
                course.multiple_choice_questions.length - 1
                  ? "Finish"
                  : "Next"}
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Review Screen
  if (currentView === "review") {
    const score = calculateScore();
    const course = COURSES[selectedCourse];

    return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <h1 className="text-2xl font-bold text-gray-900">Quiz Results</h1>
            </div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-lg shadow-md p-8 text-center mb-8">
            <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Quiz Completed!
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              You scored {score.correct} out of {score.total} (
              {score.percentage}%)
            </p>
            <div className="flex justify-center space-x-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {score.correct}
                </div>
                <div className="text-sm text-gray-600">Correct</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">
                  {score.total - score.correct}
                </div>
                <div className="text-sm text-gray-600">Incorrect</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {formatTime(timeSpent)}
                </div>
                <div className="text-sm text-gray-600">Time Spent</div>
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <button
                onClick={handleRestart}
                className="flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Restart Quiz
              </button>
              <button
                onClick={() => setCurrentView("courses")}
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
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
