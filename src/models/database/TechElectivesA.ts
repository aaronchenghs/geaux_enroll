import { Course, Department } from "../course";

// GROUP A ELECTIVES

export const EE2120 = new Course({
    name: "Circuits I",
    code: 2120,
    department: Department.EE,
    description: `An introductory course focusing on the fundamental concepts of electrical circuits. Topics include Ohm's Law, Kirchhoff's laws, and basic circuit analysis techniques.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 3,
});

export const EE2130 = new Course({
    name: "Circuits II",
    code: 2130,
    department: Department.EE,
    description: `A continuation of Circuits I, this course delves deeper into the analysis and design of electrical circuits, including AC circuit analysis, frequency response, and filters.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 3,
});

export const EE2230 = new Course({
    name: "Electronics I",
    code: 2230,
    department: Department.EE,
    description: `This course introduces the principles of electronic devices and circuits. Topics include diodes, transistors, amplifiers, and operational amplifiers.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 3,
});

export const EE2231 = new Course({
    name: "Electronics Laboratory I",
    code: 2231,
    department: Department.EE,
    description: `A hands-on laboratory course complementing Electronics I. Students will build and test electronic circuits, gaining practical skills in circuit design and analysis.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 3,
});

export const EE2741 = new Course({
    name: "Digital Logic I",
    code: 2741,
    department: Department.EE,
    description: `An introduction to digital logic and digital systems. Topics include Boolean algebra, logic gates, combinational and sequential logic.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 3,
});

export const EE2742 = new Course({
    name: "Digital Logic II",
    code: 2742,
    department: Department.EE,
    description: `This course builds upon the principles of digital logic covered in Digital Logic I. Topics include advanced digital circuit design, implementation of combinational and sequential circuits, and introduction to VHDL. Hands-on lab work is an integral part of the course.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 2,
});

export const EE2810 = new Course({
    name: "Tools in Electrical and Computer Engineering",
    code: 2810,
    department: Department.EE,
    description: `This course provides an overview of the essential tools and techniques used in electrical and computer engineering. Focus areas include software tools for design and simulation, basic programming concepts, and an introduction to hardware interfacing.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 2,
});

export const EE2950 = new Course({
    name: "Comprehensive Electrical Engineering",
    code: 2950,
    department: Department.EE,
    description: `This comprehensive course covers a wide range of topics in electrical engineering, offering an integrated overview of the field.`,
    prereqs: [],
    grade: null,
    credits: 3,
});

// Bio Engineering

export const BE2350 = new Course({
    name: "Experimental Methods for Engineers",
    code: 2350,
    department: Department.BE,
    description: `This course introduces students to experimental methods used in engineering research and practice. It covers data collection, analysis techniques, and interpretation of results, with a focus on applications in biological systems.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 3,
});

export const BE2352 = new Course({
    name: "Quantitative Biology in Engineering",
    code: 2352,
    department: Department.BE,
    description: `Focusing on the quantitative aspects of biology, this course explores mathematical models and computational methods to understand biological systems. Topics include systems biology, bioinformatics, and quantitative analysis of biological data.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 3,
});

// Chemical Engineering

export const CHE2171 = new Course({
    name: "Chemical Engineering Fundamentals: Material and Energy Balances",
    code: 2171,
    department: Department.CHE,
    description: `This course covers the core principles of material and energy balances in chemical engineering processes. It includes an introduction to the laws of thermodynamics and their application in analyzing chemical processes and systems.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 4,
});

export const CHE2172 = new Course({
    name: "Chemical Engineering Thermodynamics",
    code: 2172,
    department: Department.CHE,
    description: `Focused on thermodynamics in the context of chemical engineering, this course explores the behavior of gases, liquids, and solids, phase equilibria, chemical equilibria, and the thermodynamics of reactive systems.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 3,
});

export const CHE2176 = new Course({
    name: "Numerical Methods and Programming for Chemical Engineers",
    code: 2176,
    department: Department.CHE,
    description: `This course introduces numerical methods and programming skills specific to chemical engineering applications. It covers algorithm development, data analysis, and solving complex chemical engineering problems using computational tools.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 4,
});

// Industrial Engineering

export const IE2060 = new Course({
    name: "Computing in Industrial Engineering",
    code: 2060,
    department: Department.IE,
    description: `This course offers an introduction to computing principles and practices as applied in industrial engineering. Topics include programming fundamentals, data analysis, and the use of software tools in solving industrial engineering problems.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 3,
});

export const IE2400 = new Course({
    name: "Methods and Systems Engineering",
    code: 2400,
    department: Department.IE,
    description: `Methods and Systems Engineering provides an overview of systems design and methodologies used in industrial engineering. It covers systems modeling, optimization techniques, and the integration of human factors in system design.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 3,
});

// MATH

export const MATH2020 = new Course({
    name: "Solving Discrete Problems",
    code: 2020,
    department: Department.MATH,
    description: `This course focuses on the strategies and techniques for solving discrete mathematical problems, including logic, set theory, combinatorics, and graph theory.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 3,
});

export const MATH2025 = new Course({
    name: "Linear Algebra and Wavelets",
    code: 2025,
    department: Department.MATH,
    description: `Exploring the fundamentals of linear algebra with an introduction to wavelets, this course covers matrix theory, vector spaces, eigenvalues, and the application of wavelet theory in various domains.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 3,
});

export const MATH2030 = new Course({
    name: "Discrete Dynamical Systems",
    code: 2030,
    department: Department.MATH,
    description: `This course provides an introduction to the theory and applications of discrete dynamical systems, including stability, bifurcations, chaos, and applications in various scientific fields.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 3,
});

export const MATH2057 = new Course({
    name: "Multidimensional Calculus",
    code: 2057,
    department: Department.MATH,
    description: `Multidimensional Calculus extends the concepts of single-variable calculus to higher dimensions. Topics include partial derivatives, multiple integrals, and vector calculus.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 3,
});

export const MATH2058 = new Course({
    name: "HONORS: Multidimensional Calculus",
    code: 2058,
    department: Department.MATH,
    description: `This honors course provides an in-depth study of multidimensional calculus, emphasizing theoretical understanding and complex applications in science and engineering.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 3,
});

export const MATH2060 = new Course({
    name: "Technology Lab",
    code: 2060,
    department: Department.MATH,
    description: `Technology Lab focuses on the practical application of mathematical software and tools. It includes hands-on experience with technology used in mathematical problem solving and research.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 1,
});

export const MATH2065 = new Course({
    name: "Elementary Differential Equations",
    code: 2065,
    department: Department.MATH,
    description: `This course introduces the basic concepts and methods for solving ordinary differential equations. Applications include modeling and analysis of physical, biological, and engineering systems.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 3,
});

export const MATH2070 = new Course({
    name: "Mathematical Methods in Engineering",
    code: 2070,
    department: Department.MATH,
    description: `This course covers a range of mathematical techniques used in engineering. Topics include complex variables, Laplace transforms, Fourier series, and partial differential equations.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 4,
});

export const MATH2085 = new Course({
    name: "Linear Algebra",
    code: 2085,
    department: Department.MATH,
    description: `Linear Algebra focuses on the study of vector spaces, linear transformations, matrices, and systems of linear equations. It provides a foundation for further studies in mathematics and its applications.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 3,
});

export const MATH2090 = new Course({
    name: "Elementary Differential Equations and Linear Algebra",
    code: 2090,
    department: Department.MATH,
    description: `Combining differential equations and linear algebra, this course covers the methods of solving linear differential equations and systems of equations, along with the theory and application of linear algebra.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 4,
});

export const MATH2203 = new Course({
    name: "Measurement: Proportional and Algebraic Reasoning",
    code: 2203,
    department: Department.MATH,
    description: `This course explores the concepts of measurement, proportion, and algebraic reasoning. It emphasizes the development of problem-solving skills and the application of these concepts in real-world contexts.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 3,
});

export const MATH3002 = new Course({
    name: "Mathematics Classroom Presentations",
    code: 3002,
    department: Department.MATH,
    description: `Focusing on presentation skills, this course prepares students for effective communication of mathematical concepts. It includes the development of instructional materials and strategies for classroom teaching.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 2,
});

export const MATH3003 = new Course({
    name: "Functions & Modeling",
    code: 3003,
    department: Department.MATH,
    description: `This course covers various types of functions and their applications in modeling real-world phenomena. Topics include linear, quadratic, exponential, logarithmic, and trigonometric functions.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 3,
});

export const MATH3050 = new Course({
    name: "Interest Theory",
    code: 3050,
    department: Department.MATH,
    description: `Interest Theory provides a comprehensive study of simple and compound interest, including the measurement of interest, annuities, loans, bonds, and fundamentals of actuarial science.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 5,
});

export const MATH3355 = new Course({
    name: "Probability",
    code: 3355,
    department: Department.MATH,
    description: `This course introduces the fundamental concepts of probability theory. Topics include probability spaces, random variables, distributions, expectation, variance, and introductory stochastic processes.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 3,
});

export const MATH3903 = new Course({
    name: "Methods of Problem Solving",
    code: 3903,
    department: Department.MATH,
    description: `Methods of Problem Solving emphasizes creative and critical thinking in solving complex mathematical problems. It includes techniques in various areas of mathematics and preparation for mathematical competitions.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 2,
});

// Civil Engineering

export const CE2200 = new Course({
    name: "Fluid Mechanics",
    code: 2200,
    department: Department.CE,
    description: `Fluid Mechanics covers the principles and applications of fluid statics and dynamics. Topics include fluid properties, flow behavior, pressure distribution, and fundamental equations of fluid mechanics.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 3,
});

export const CE2250 = new Course({
    name: "Fluid Mechanics Laboratory",
    code: 2250,
    department: Department.CE,
    description: `This laboratory course complements the theoretical knowledge from Fluid Mechanics with practical experiments. It includes the study of fluid properties, flow measurements, and analysis of fluid behavior under various conditions.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 1,
});

export const CE2450 = new Course({
    name: "Statics",
    code: 2450,
    department: Department.CE,
    description: `Statics focuses on the analysis of stationary objects under the action of forces. The course covers the principles of equilibrium, structural analysis, and the mechanics of solids and fluids.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 3,
});

export const CE2451 = new Course({
    name: "Honors: Statics",
    code: 2451,
    department: Department.CE,
    description: `This honors course offers an advanced study of statics, with an emphasis on theoretical understanding and complex problem-solving. It includes deeper exploration of equilibrium and mechanics concepts.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 4,
});

export const CE2460 = new Course({
    name: "Dynamics and Vibrations",
    code: 2460,
    department: Department.CE,
    description: `Dynamics and Vibrations explores the motion of objects and the forces that cause this motion. Topics include kinematics, kinetics, and the study of vibrations in mechanical systems.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 3,
});

export const CE2461 = new Course({
    name: "Honors: Dynamics and Vibrations",
    code: 2461,
    department: Department.CE,
    description: `An honors-level course delving into dynamics and vibrations, offering an in-depth analysis of motion principles, advanced vibration theory, and applications in engineering systems.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 4,
});

export const CE2700 = new Course({
    name: "Introduction to Civil Engineering Practice",
    code: 2700,
    department: Department.CE,
    description: `This introductory course provides a broad overview of civil engineering, including its history, disciplines, professional practice, and the role of civil engineers in society and environmental sustainability.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 1,
});

// Geography

export const GEOG2010 = new Course({
    name: "Human Geography",
    code: 2010,
    department: Department.GEOG,
    description: `Human Geography explores the relationship between people and their environments, covering topics such as population, culture, urbanization, and the political organization of space. It provides a comprehensive understanding of how human activities shape and are shaped by the Earth's landscapes.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 3,
});

export const GEOG2080 = new Course({
    name: "Humans and the Environment",
    code: 2080,
    department: Department.GEOG,
    description: `This course examines the interactions between humans and their natural environment. It focuses on topics such as resource use, environmental impacts, sustainability, and the role of human behavior in environmental change and conservation efforts.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 3,
});

// Geology

export const GEOL2001 = new Course({
    name: "The Earth as a Planetary System",
    code: 2001,
    department: Department.GEOL,
    description: `This course offers an overview of Earth's structure and composition as a planetary body in the solar system. It covers topics such as plate tectonics, earth materials, surface processes, and the Earth's interior.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 3,
});

export const GEOL2002 = new Course({
    name: "Introductory Special Topics in Geosciences",
    code: 2002,
    department: Department.GEOL,
    description: `Focusing on current and evolving topics in geosciences, this course provides an introduction to specialized areas such as geophysics, geochemistry, paleontology, and environmental geology.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 3,
});

export const GEOL2020 = new Course({
    name: "Geology and the Environment",
    code: 2020,
    department: Department.GEOL,
    description: `Exploring the interplay between geology and environmental issues, this course examines topics such as natural resources, environmental impacts of geological processes, and the role of geology in environmental planning and management.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 3,
});

export const GEOL2061 = new Course({
    name: "History of the Biosphere",
    code: 2061,
    department: Department.GEOL,
    description: `This course delves into the history of life on Earth from a geological perspective. It covers the evolution of the biosphere, major extinction events, and the geological evidence for the development of life over time.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 4,
});

export const GEOL2081 = new Course({
    name: "Mineralogy",
    code: 2081,
    department: Department.GEOL,
    description: `Mineralogy focuses on the study of minerals, their properties, formation, and identification. The course includes practical lab work for hands-on experience with mineral specimens and their analysis.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 4,
});

export const GEOL2900 = new Course({
    name: "Introduction to Research in Geosciences",
    code: 2900,
    department: Department.GEOL,
    description: `This course provides an introduction to research methodologies in the field of geosciences. It covers the basics of research design, data collection and analysis, and the communication of scientific findings.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 2,
});

// Information Systems

export const ISDS3100 = new Course({
    name: "Foundations of Information Systems",
    code: 3100,
    department: Department.ISDS,
    description: `This course provides an overview of the fundamental concepts and technologies in information systems. It covers topics such as information system design, database management, and the role of information technology in business and society.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 3,
});

export const ISDS3105 = new Course({
    name: "Internet Development Tools",
    code: 3105,
    department: Department.ISDS,
    description: `Internet Development Tools focuses on the technologies and tools used for creating and managing websites and web applications. It includes HTML, CSS, JavaScript, and an introduction to server-side programming and database integration.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 3,
});

export const ISDS3120 = new Course({
    name: "Management of the IT Function",
    code: 3120,
    department: Department.ISDS,
    description: `This course focuses on the strategic and operational management of the information technology (IT) function in organizations. It covers topics such as IT governance, project management, resource allocation, and the alignment of IT with business strategies.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 3,
});

export const ISDS4010 = new Course({
    name: "Predictive Modeling and Optimization",
    code: 4010,
    department: Department.ISDS,
    description: `This course explores predictive modeling techniques and optimization strategies in decision-making. It covers data analysis, statistical models, and optimization algorithms used in business analytics.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 3,
});

export const ISDS4070 = new Course({
    name: "Special Topics in Information Systems & Decision Sciences",
    code: 4070,
    department: Department.ISDS,
    description: `Focusing on current and emerging topics in ISDS, this course varies each semester and covers advanced and specialized areas like artificial intelligence, blockchain, and big data analytics in ISDS.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 3, // Adjust as per actual credit range
});

export const ISDS4111 = new Course({
    name: "Enterprise Systems",
    code: 4111,
    department: Department.ISDS,
    description: `Enterprise Systems provides an in-depth look at large-scale software systems used in organizations. Topics include ERP systems, CRM, SCM, and how these systems support and integrate business processes.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 3,
});

export const ISDS4112 = new Course({
    name: "Data Warehousing",
    code: 4112,
    department: Department.ISDS,
    description: `This course covers the design, implementation, and management of data warehouses and data marts. It includes topics on data extraction, data cleansing, data transformation, and business intelligence.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 3,
});

export const ISDS4113 = new Course({
    name: "Management of Information Systems Projects",
    code: 4113,
    department: Department.ISDS,
    description: `Focusing on the principles and practices of managing IT projects, this course covers project planning, execution, monitoring, and control techniques, with an emphasis on software development projects.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 3,
});

export const ISDS4117 = new Course({
    name: "Management of E-Commerce and Internet Information Systems",
    code: 4117,
    department: Department.ISDS,
    description: `This course examines the management of e-commerce and internet-based information systems. Topics include web-based business models, electronic payment systems, and the strategic use of e-commerce technologies.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 3,
});

export const ISDS4118 = new Course({
    name: "Web Analytics",
    code: 4118,
    department: Department.ISDS,
    description: `Web Analytics focuses on analyzing and interpreting web data to improve online business performance. Topics include traffic analysis, user behavior, conversion optimization, and the use of analytics tools.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 3,
});

export const ISDS4119 = new Course({
    name: "Introduction to Web Analytics",
    code: 4119,
    department: Department.ISDS,
    description: `This introductory course offers an overview of web analytics, covering basic concepts, tools, and techniques used to analyze web data for business insights and decision making.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 3,
});

export const ISDS4120 = new Course({
    name: "Enterprise Architecture",
    code: 4120,
    department: Department.ISDS,
    description: `Enterprise Architecture delves into the planning and implementation of IT infrastructure in organizations. It covers frameworks, methodologies, and tools for aligning IT strategy with business objectives.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 3,
});

export const ISDS4123 = new Course({
    name: "Computer and Networking Security",
    code: 4123,
    department: Department.ISDS,
    description: `This course provides an in-depth study of the principles and practices of computer and network security. Topics include cryptography, secure systems, network defenses, and ethical and legal issues in cybersecurity.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 3,
});

export const ISDS4125 = new Course({
    name: "Analysis and Design of Information Systems",
    code: 4125,
    department: Department.ISDS,
    description: `Focusing on the systematic analysis and design of information systems, this course covers methodologies, modeling techniques, and tools for developing effective and efficient information systems.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 3,
});

export const ISDS4130 = new Course({
    name: "Cloud Computing for Business II",
    code: 4130,
    department: Department.ISDS,
    description: `Building on Cloud Computing for Business I, this course delves into advanced topics in cloud computing, including cloud service models, deployment strategies, and the impact of cloud technology on business operations.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 3,
});

export const ISDS4141 = new Course({
    name: "Introduction to Data Mining",
    code: 4141,
    department: Department.ISDS,
    description: `This course introduces the fundamental concepts and techniques of data mining. It covers topics such as data preparation, classification, clustering, association analysis, and data mining software tools.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 3,
});

export const ISDS4160 = new Course({
    name: "Sourcing in China",
    code: 4160,
    department: Department.ISDS,
    description: `Sourcing in China provides insights into the practices, challenges, and opportunities of sourcing products and services from China. It covers cultural, legal, logistical, and economic aspects of doing business in China.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 3,
});

export const ISDS4168 = new Course({
    name: "Supply Chain Management",
    code: 4168,
    department: Department.ISDS,
    description: `This course explores the principles and practices of supply chain management. Topics include supply chain strategy, design, coordination, technology, and the role of supply chain management in global business.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 3,
});

export const ISDS4180 = new Course({
    name: "Business Analysis in Practice",
    code: 4180,
    department: Department.ISDS,
    description: `Business Analysis in Practice covers the application of analytical techniques in real-world business scenarios. It includes case studies, project work, and the use of business analysis tools and software.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 3,
});

export const ISDS4244 = new Course({
    name: "Information Systems Auditing",
    code: 4244,
    department: Department.ISDS,
    description: `This course provides an overview of auditing practices for information systems. It includes topics such as audit planning, risk assessment, compliance, and the evaluation of controls in information systems.`,
    prereqs: [],
    grade: null,
    section: null,
    credits: 3,
});

export const TechElectivesA: Course[] = [
    EE2120,
    EE2130,
    EE2230,
    EE2231,
    EE2741,
    EE2742,
    EE2810,
    EE2950,
    BE2350,
    BE2352,
    CHE2171,
    CHE2172,
    CHE2176,
    IE2060,
    IE2400,
    MATH2020,
    MATH2025,
    MATH2030,
    MATH2057,
    MATH2058,
    MATH2060,
    MATH2065,
    MATH2070,
    MATH2085,
    MATH2090,
    MATH2203,
    MATH3002,
    MATH3003,
    MATH3050,
    MATH3355,
    MATH3903,
    CE2200,
    CE2250,
    CE2450,
    CE2451,
    CE2460,
    CE2461,
    CE2700,
    GEOG2010,
    GEOG2080,
    GEOL2001,
    GEOL2002,
    GEOL2020,
    GEOL2061,
    GEOL2081,
    GEOL2900,
    ISDS3100,
    ISDS3105,
    ISDS3120,
    ISDS4010,
    ISDS4070,
    ISDS4111,
    ISDS4112,
    ISDS4113,
    ISDS4117,
    ISDS4118,
    ISDS4119,
    ISDS4120,
    ISDS4123,
    ISDS4125,
    ISDS4130,
    ISDS4141,
    ISDS4160,
    ISDS4168,
    ISDS4180,
    ISDS4244
]
