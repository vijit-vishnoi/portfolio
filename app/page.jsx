"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Code,
  Database,
  Server,
  Trophy,
  GraduationCap,
  MapPin,
  Calendar,
  ChevronDown,
  Star,
  Cpu,
  Layers,
  Zap,
  ArrowRight,
} from "lucide-react"

import HeroBackground from "../components/ui/HeroBackground"


export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [scrollY, setScrollY] = useState(0)

  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)
  const strengthsRef = useRef(null)
  const achievementsRef = useRef(null)
  const contactRef = useRef(null)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Determine which section is currently in view
      const sections = [
        { id: "hero", ref: null, offset: 0 },
        { id: "about", ref: aboutRef },
        { id: "skills", ref: skillsRef },
        { id: "strengths", ref: strengthsRef },
        { id: "projects", ref: projectsRef },
        { id: "achievements", ref: achievementsRef },
        { id: "contact", ref: contactRef },
      ]

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (!section.ref) continue

        const rect = section.ref.current?.getBoundingClientRect()
        if (rect && rect.top <= 100) {
          setActiveSection(section.id)
          break
        }
      }

      // If we're at the top, set hero as active
      if (window.scrollY < 100) {
        setActiveSection("hero")
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const projects = [
    {
      title: "Airline Management System",
      description: "Full-fledged Flight Booking Backend System using microservice architecture",
      technologies: ["Express", "Node.js", "MySQL", "Sequelize", "RabbitMQ", "JWT Auth"],
      highlights: [
        "Optimized database queries reducing execution time by 50%",
        "Integrated RabbitMQ reducing system downtime by 40%",
        "Implemented rate limiting (100 requests/IP/minute)",
        "CRUD functionality for flight searching and filtration",
      ],
      link: "#",
      color: "from-emerald-500 to-teal-700",
      icon: <Server className="h-6 w-6" />,
    },
    {
      title: "Twitter Application",
      description: "High-performance Twitter Backend Service with core social media functionalities",
      technologies: ["Express", "Node.js", "MongoDB", "Mongoose"],
      highlights: [
        "Reduced tweet retrieval time by 40% through indexing",
        "Real-time updates using WebSockets (30% engagement boost)",
        "Reduced server load by 35% through query optimization",
        "User authentication, tweets, likes, and comments",
      ],
      link: "#",
      color: "from-violet-500 to-purple-700",
      icon: <Layers className="h-6 w-6" />,
    },
    {
      title: "Swift Chat Engine",
      description: "Real-time chat backend with seamless bi-directional communication",
      technologies: ["Express", "Node.js", "Socket.io"],
      highlights: [
        "Latency under 100ms with event-driven architecture",
        "Handled 1,000+ simultaneous active connections",
        "99.9% message delivery success rate",
        "Private and group messaging with live updates",
      ],
      link: "#",
      color: "from-amber-500 to-orange-700",
      icon: <Zap className="h-6 w-6" />,
    },
  ]

  const skills = {
    languages: [
      { name: "C++", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "Python", level: 75 },
      { name: "C", level: 80 },
    ],
    webTech: [
      { name: "Node.js", level: 92 },
      { name: "Express", level: 88 },
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 82 },
      { name: "React.js", level: 78 },
      { name: "Socket.io", level: 90 },
      { name: "REST APIs", level: 95 },
    ],
    tools: [
      { name: "Git", level: 88 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "VS Code", level: 95 },
    ],
  }

  const strengths = [
    {
      title: "Backend Architecture",
      description: "Specialized in designing scalable, high-performance backend systems with microservice architecture",
      icon: <Server className="h-8 w-8" />,
      metrics: "50% query optimization | 40% reduced downtime",
    },
    {
      title: "Real-time Systems",
      description:
        "Expert in building low-latency real-time applications with WebSockets and event-driven architecture",
      icon: <Zap className="h-8 w-8" />,
      metrics: "<100ms latency | 1000+ concurrent connections",
    },
    {
      title: "System Optimization",
      description: "Skilled at identifying and resolving performance bottlenecks in complex distributed systems",
      icon: <Cpu className="h-8 w-8" />,
      metrics: "35% reduced server load | 99.9% uptime",
    },
  ]

  const achievements = [
    {
      title: "State Tournament Representation",
      description: "Represented district in under 14 state tournament",
      year: "2019",
      icon: <Trophy className="h-5 w-5" />,
    },
    {
      title: "College Table Tennis Vice Captain",
      description: "Led college team in Inter-IIIT and Spardha IIT-BHU events",
      year: "2024",
      icon: <Trophy className="h-5 w-5" />,
    },
    {
      title: "International Maths Olympiad",
      description: "Represented school in Second Level competition",
      year: "2018",
      icon: <Star className="h-5 w-5" />,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div
              className={`text-xl font-bold transition-colors duration-300 ${
                scrollY > 50 ? "text-gray-900" : "text-white"
              }`}
            >
              Vijit Vishnoi
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: "about", label: "About" },
                { id: "skills", label: "Skills" },
                { id: "strengths", label: "Strengths" },
                { id: "projects", label: "Projects" },
                { id: "achievements", label: "Achievements" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-all duration-300 ${
                    activeSection === item.id
                      ? scrollY > 50
                        ? "text-emerald-600 font-medium"
                        : "text-emerald-400 font-medium"
                      : scrollY > 50
                        ? "text-gray-600 hover:text-gray-900"
                        : "text-gray-200 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1a2a3a 0%, #0d1b2a 100%)' }}
    >
      {/* 1) Client‐only animated bubbles */}
      <HeroBackground />

      {/* 2) Your actual hero content */}
      <div className="relative max-w-6xl mx-auto text-center z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Vijit <span className="text-emerald-400">Vishnoi</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Computer Science & Engineering Student
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Specialized in <span className="text-emerald-400">backend systems</span>,
            <span className="text-emerald-400"> microservices</span>, and
            <span className="text-emerald-400"> real-time applications</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={() => scrollToSection('projects')}
              size="lg"
              className="bg-emerald-500 hover:bg-emerald-600 transition-all duration-300 transform hover:scale-105"
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              size="lg"
              className="border-emerald-400 text-emerald-400 hover:bg-emerald-400/10 transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com" className="text-gray-400 hover:text-emerald-400 transition-transform hover:scale-110">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-emerald-400 transition-transform hover:scale-110">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:vishnoivijit@gmail.com" className="text-gray-400 hover:text-emerald-400 transition-transform hover:scale-110">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-16 animate-bounce cursor-pointer" onClick={() => scrollToSection('about')}>
          <ChevronDown className="h-6 w-6 mx-auto text-emerald-400" />
        </div>
      </div>
    </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">About Me</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-400 to-teal-500 mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div
                className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
              >
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  I'm a passionate Computer Science student at IIIT Ranchi with a strong foundation in backend
                  development and system architecture. I specialize in building scalable, high-performance applications
                  using modern technologies and best practices.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  My experience spans across microservices, real-time systems, and database optimization. I'm
                  particularly interested in distributed systems and enjoy solving complex technical challenges.
                </p>
                <div className="flex flex-wrap gap-3 mt-8">
                  {[
                    "Backend Development",
                    "Microservices",
                    "System Architecture",
                    "Database Optimization",
                    "Real-time Systems",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium hover:bg-emerald-100 hover:text-emerald-800 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <Card className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
              <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-emerald-200">
                  <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-emerald-500 -translate-x-1.5"></div>
                  <h3 className="font-semibold text-gray-900">Bachelor of Technology</h3>
                  <p className="text-gray-600">Computer Science and Engineering</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                    <MapPin className="h-4 w-4" />
                    <span>IIIT Ranchi, Jharkhand</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <span>August 2023 – May 2027</span>
                  </div>
                  <Badge className="mt-2 bg-emerald-100 text-emerald-800 hover:bg-emerald-200">CGPA: 8.02</Badge>
                </div>

                <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-emerald-200">
                  <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-emerald-500 -translate-x-1.5"></div>
                  <h3 className="font-semibold text-gray-900">School Certificate (Class 12)</h3>
                  <p className="text-gray-600">Lady A Sighania Educational Academy</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                    <MapPin className="h-4 w-4" />
                    <span>Jhalawar, Rajasthan</span>
                  </div>
                  <Badge className="mt-2 bg-emerald-100 text-emerald-800 hover:bg-emerald-200">92.2%</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        ref={skillsRef}
        className="py-24 px-4 sm:px-6 lg:px-8"
        style={{
          background: "linear-gradient(to bottom, #f8fafc, #f1f5f9)",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">Technical Skills</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-400 to-teal-500 mt-4"></div>
          </div>

          <Tabs defaultValue="languages" className="w-full">
            <TabsList className="grid grid-cols-3 max-w-md mx-auto mb-8">
              <TabsTrigger
                value="languages"
                className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white"
              >
                Languages
              </TabsTrigger>
              <TabsTrigger
                value="webTech"
                className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white"
              >
                Web Technologies
              </TabsTrigger>
              <TabsTrigger value="tools" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
                Tools & Platforms
              </TabsTrigger>
            </TabsList>

            <TabsContent value="languages" className="mt-6">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-emerald-600" />
                    Programming Languages
                  </CardTitle>
                  <CardDescription>Languages I've worked with and my proficiency levels</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {skills.languages.map((skill, index) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">{skill.name}</span>
                          <span className="text-gray-500">{skill.level}%</span>
                        </div>
                        <Progress
                        value={skill.level}
                        className="h-2 bg-gray-200 [&>div]:bg-gradient-to-r [&>div]:from-emerald-500 [&>div]:to-teal-600"
                      />

                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="webTech" className="mt-6">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Server className="h-5 w-5 text-emerald-600" />
                    Web Technologies
                  </CardTitle>
                  <CardDescription>Web technologies and frameworks I specialize in</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {skills.webTech.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">{skill.name}</span>
                          <span className="text-gray-500">{skill.level}%</span>
                        </div>
                        <Progress
                        value={skill.level}
                        className="h-2 bg-gray-200 [&>div]:bg-gradient-to-r [&>div]:from-emerald-500 [&>div]:to-teal-600"
                      />

                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tools" className="mt-6">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-emerald-600" />
                    Tools & Platforms
                  </CardTitle>
                  <CardDescription>Development tools and platforms I'm proficient with</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {skills.tools.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">{skill.name}</span>
                          <span className="text-gray-500">{skill.level}%</span>
                        </div>
                        <Progress
                        value={skill.level}
                        className="h-2 bg-gray-200 [&>div]:bg-gradient-to-r [&>div]:from-emerald-500 [&>div]:to-teal-600"
                      />

                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* What Sets Me Apart Section */}
      <section
        id="strengths"
        ref={strengthsRef}
        className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center">What Sets Me Apart</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-400 to-teal-500 mt-4"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {strengths.map((strength, index) => (
              <div
                key={strength.title}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-emerald-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-emerald-500/10"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-6 text-white">
                  {strength.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-emerald-400">{strength.title}</h3>
                <p className="text-gray-300 mb-6">{strength.description}</p>
                <div className="text-sm font-medium text-emerald-300 bg-emerald-900/30 py-2 px-3 rounded-md inline-block">
                  {strength.metrics}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">Featured Projects</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-400 to-teal-500 mt-4"></div>
          </div>

          <div className="grid gap-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}
              >
                <div className="bg-white p-0">
                  <div className={`bg-gradient-to-r ${project.color} text-white p-8`}>
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-white/20 rounded-lg">{project.icon}</div>
                        <div>
                          <h3 className="text-2xl font-bold">{project.title}</h3>
                          <p className="mt-2 text-white/80">{project.description}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                        <ExternalLink className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} className="bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {project.highlights.map((highlight, idx) => (
                            <li key={idx} className="text-gray-600 flex items-start gap-2">
                              <div className="min-w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 mt-0.5">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12"
                                  height="12"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="3"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                              </div>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8">
                      <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white transition-all duration-300 transform group-hover:scale-105">
                        View Project
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section
        id="achievements"
        ref={achievementsRef}
        className="py-24 px-4 sm:px-6 lg:px-8"
        style={{
          background: "linear-gradient(to bottom, #f8fafc, #f1f5f9)",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">Achievements & Leadership</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-400 to-teal-500 mt-4"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group"
              >
                <div className="h-2 bg-gradient-to-r from-emerald-500 to-teal-600"></div>
                <div className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                    {achievement.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                  <Badge variant="outline" className="mb-4">
                    {achievement.year}
                  </Badge>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        ref={contactRef}
        className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-600 to-teal-700 text-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center">Let's Connect</h2>
            <div className="h-1 w-20 bg-white mt-4"></div>
          </div>

          <p className="text-lg text-emerald-100 mb-12">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
              <Mail className="h-8 w-8 text-white mx-auto mb-4" />
              <h3 className="font-semibold text-white mb-2">Email</h3>
              <p className="text-emerald-100">vishnoivijit@gmail.com</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
              <Phone className="h-8 w-8 text-white mx-auto mb-4" />
              <h3 className="font-semibold text-white mb-2">Phone</h3>
              <p className="text-emerald-100">+91 8209287464</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
              <Linkedin className="h-8 w-8 text-white mx-auto mb-4" />
              <h3 className="font-semibold text-white mb-2">LinkedIn</h3>
              <p className="text-emerald-100">Connect with me</p>
            </div>
          </div>

          <div className="mt-12">
            <Button
              size="lg"
              className="bg-white text-emerald-700 hover:bg-emerald-100 transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="h-4 w-4 mr-2" />
              Send Message
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2024 Vijit Vishnoi. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a
              href="https://github.com"
              className="text-gray-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-110"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:vishnoivijit@gmail.com"
              className="text-gray-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-110"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
