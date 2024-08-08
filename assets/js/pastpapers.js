const items = [
    { heading: "Accounting and Finance (AF)", para: "Accounting and finance involve recording and analyzing financial transactions to ensure accurate records, regulatory compliance, and informed business decisions, essential for growth and financial health.", link: "https://drive.google.com/drive/folders/10yy5QCL7-XbSA1NRS5xGNGbSH2O6346a?usp=drive_link", rating: 5.0, badge: 'easy' },
    { heading: "Advanced Computer Architecture (ACA)", para: "Advanced Computer Architecture (ACA) focuses on optimizing computer systems for enhanced performance through efficient hardware and software integration. It includes parallel processing and memory hierarchy concepts.", link: "https://drive.google.com/drive/folders/1KX1qZNa2iyFnL5AWvKj_11YzYahthwAP?usp=drive_link", rating: 4.2, badge: 'medium' },
    { heading: "Advanced Database Concepts (ADC)", para: "Advanced Database Concepts cover topics like database optimization, distributed databases, data warehousing, and advanced querying techniques for efficient data management.", link: "https://drive.google.com/drive/folders/1pDnBXsX687jPGffJFxomULLYIVm5fTbh?usp=drive_link", rating: 3.9, badge: 'hard' },
    { heading: "Advanced Operating System (AOS)", para: "Advanced Operating Systems study complex topics like process synchronization, distributed systems, virtualization, and security to enhance OS efficiency and reliability.", link: "https://drive.google.com/drive/folders/1LLENdxSz6QOy7zQ_f-7yMpCgSTvkzePw?usp=drive_link", rating: 4.5, badge: 'easy' },
    { heading: "Advanced Programming (AP)", para: "Advanced Programming involves sophisticated coding techniques, algorithm optimization, and software design patterns, focusing on developing efficient, scalable, and maintainable code for complex applications and systems.", link: "https://drive.google.com/drive/folders/1ai-VVogrvQ1CxypXSWB9_UGiftjdkb8S?usp=drive_link", rating: 4.5, badge: 'medium' },
    { heading: "Advanced Software Engineering (ASE)", para: "Advanced Software Engineering covers methodologies for designing, developing, and maintaining complex software systems, emphasizing project management, quality assurance, agile practices, and advanced software architecture.", link: "https://drive.google.com/drive/folders/1kt56AcVXcZseWMCbEgzkyIhGbaIuscEo?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Advanced Stats (AS)", para: "Advanced Statistics involves the study of complex data analysis techniques, including multivariate analysis, hypothesis testing, regression models, and statistical computing, to interpret and predict data trends accurately.", link: "https://drive.google.com/drive/folders/1xp5c8ex1toXMc3fN-HLmNcrLrgVRI1ow?usp=drive_link", rating: 4.5, badge: 'easy' },
    { heading: "Applied Physics (AP)", para: "Applied Physics applies fundamental physical principles to solve practical problems in engineering and technology, focusing on areas like materials science, optics, and electromagnetism for real-world applications.", link: "https://drive.google.com/drive/folders/1RF9FNjTOc1RWKX5bKWZOBCn6JlfzeWlh?usp=drive_link", rating: 4.5, badge: 'medium' },
    { heading: "Artificial Intelligence (AI)", para: "Artificial Intelligence (AI) refers to systems or machines that simulate human intelligence to perform tasks, improve over time, and make decisions based on data analysis.", link: "https://drive.google.com/drive/folders/1hsNl5Kg9lGKouUAIVuoqmLun8_ykX5jP?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Big Data (BD)", para: "Big Data refers to large, complex datasets that traditional data processing tools can't handle. It involves capturing, storing, and analyzing massive amounts of information for insights.", link: "https://drive.google.com/drive/folders/12Aq7lDEHfQPVmN6fu5knMr9GVq1jmPh0?usp=drive_link", rating: 4.5, badge: 'easy' },
    { heading: "Brand Management (BM)", para: "Brand Management involves overseeing and influencing how a brand is perceived by consumers. It includes developing brand strategy, maintaining brand identity, and ensuring consistent messaging..", link: "https://drive.google.com/drive/folders/1cXiXMrhHzHgWu96nbjZvqZUjhqutA0UX?usp=drive_link", rating: 4.5, badge: 'medium' },
    { heading: "Business Process Engineering (BPE)", para: "Business Process Engineering involves redesigning and optimizing business processes for efficiency and effectiveness. It focuses on improving workflows, reducing costs, and enhancing organizational performance.", link: "https://drive.google.com/drive/folders/1t3QDm8GyZ5TKbvV8cg6zHhf1AayOReTW?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Calculus (Cal)", para: "Calculus is a branch of mathematics focused on limits, functions, derivatives, integrals, and infinite series. It studies change and motion, fundamental in science and engineering.", link: "https://drive.google.com/drive/folders/1lj5BROMYje3pWWsNnL-3BDJu5mLei-W0?usp=drive_link", rating: 4.5, badge: 'easy' },
    { heading: "Cloud Computing (CC)", para: "Cloud Computing delivers computing services—servers, storage, databases, networking, software—over the internet. It offers scalable resources, on-demand access, and cost efficiency.", link: "https://drive.google.com/drive/folders/1U69g2bRwySJ0zd3rWSEHevnLLGZG7xI7?usp=drive_link", rating: 4.5, badge: 'medium' },
    { heading: "COAL", para: "Computer Organization and Assembly Language involve studying computer architecture, hardware components, and low-level programming. It focuses on how computers execute instructions and manage data at the machine level.", link: "https://drive.google.com/drive/folders/1qsvT8QPkQUq8fdCUwsz7fNC6LMS9QPGV?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "COAL LAB", para: "Computer Organization and Assembly Language involve studying computer architecture, hardware components, and low-level programming. It focuses on how computers execute instructions and manage data at the machine level.", link: "https://drive.google.com/drive/folders/1z90SSSgmLP0Yz8KC0A3WFeDb514ZKoV9?usp=drive_link", rating: 4.5, badge: 'easy' },
    { heading: "Complier Construction", para: "Compiler Construction involves designing and implementing compilers, which translate high-level programming languages into machine code. It covers lexical analysis, syntax analysis, semantic analysis, optimization, and code generation.", link: "https://drive.google.com/drive/folders/1RznzW23F6w4izZLR8Th4Y-YD_U1_yKX-?usp=drive_link", rating: 4.5, badge: 'medium' },
    { heading: "Computer Architecture (CA)", para: "Computer Architecture involves the design and organization of a computer's core components, including the CPU, memory, and input/output systems. It focuses on improving performance, efficiency, and scalability.", link: "https://drive.google.com/drive/folders/1Y2Y4hGG2b2mVF0l-sNnTBIK6EaQYL7nr?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Computer Modelling Simulation (CMS)", para: "Computer Modeling and Simulation involve creating digital representations of real-world systems to analyze their behavior. It is used for predicting outcomes, testing scenarios, and solving complex problems in various fields.", link: "https://drive.google.com/drive/folders/1ilCpfdGifESH2B_cuSQuVNr-YHxsjH96?usp=drive_link", rating: 4.5, badge: 'easy' },
    { heading: "Computer Networks (CN)", para: "Computer Networks connect multiple computing devices to share resources and information. They involve protocols, hardware, and software to enable communication, data exchange, and internet connectivity.", link: "https://drive.google.com/drive/folders/14QnohwtpfTiVXRSvynBMnzUPxJ_FwBX8?usp=drive_link", rating: 4.5, badge: 'medium' },
    { heading: "Computer Networks (LAB)", para: "Computer Networks connect multiple computing devices to share resources and information. They involve protocols, hardware, and software to enable communication, data exchange, and internet connectivity.", link: "https://drive.google.com/drive/folders/14QnohwtpfTiVXRSvynBMnzUPxJ_FwBX8?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Computer Vision", para: "Computer Vision enables computers to interpret and understand visual information from the world. It involves image processing, object detection, and pattern recognition, used in applications like facial recognition and autonomous vehicles.", link: "https://drive.google.com/drive/folders/13-pk7Wh3eY-TvLKbMxBlZsCpau5waOcZ?usp=drive_link", rating: 4.5, badge: 'easy' },
    { heading: "Communication and Presentation Skills (CPS)", para: "CPS focuses on effectively conveying ideas and information through speaking and writing. It involves clear articulation, engaging delivery, and persuasive techniques to impact and influence audiences.", link: "https://drive.google.com/drive/folders/13A7W6sSLKBAA17GtLnGNLGbGcfMS33pb?usp=drive_link", rating: 4.5, badge: 'medium' },
    { heading: "Communication and Presentation Skills (LAB)", para: "CPS focuses on effectively conveying ideas and information through speaking and writing. It involves clear articulation, engaging delivery, and persuasive techniques to impact and influence audiences.", link: "https://drive.google.com/drive/folders/1A9gJZLT779Z3Jtpxg9XAtRr-XX3GzPUH?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Critical Thinking (CT)", para: "Critical Thinking (CT) involves analyzing and evaluating information or arguments to make reasoned judgments. It emphasizes questioning assumptions, identifying biases, and drawing logical conclusions based on evidence.", link: "https://drive.google.com/drive/folders/1TJV0Kd5O1yD_PyH9Hg1ikVBYrr-UFZVR?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Data Science (DS)", para: "Data Science involves extracting insights and knowledge from data using statistical, computational, and analytical methods. It encompasses data collection, processing, visualization, and predictive modeling for decision-making.", link: "https://drive.google.com/drive/folders/1fCh2Ksr7m3rzHseDTcbiW7DRm2dzfLjs?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Data Structures (DS)", para: "Data Structures are organized ways to store and manage data for efficient access and modification. Common types include arrays, linked lists, stacks, queues, and trees.", link: "https://drive.google.com/drive/folders/1dlCpyWaXQSfk6vdWgwZuROs2kE5ZYDO1?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Data Structures LAB", para: "Data Structures are organized ways to store and manage data for efficient access and modification. Common types include arrays, linked lists, stacks, queues, and trees.", link: "https://drive.google.com/drive/folders/1aK8invM2289PMX44tpfWpzwn8KUZaSzf?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Data Warehousing and Data Mining", para: "Data Warehousing stores and manages large datasets for analysis, while Data Mining involves extracting patterns and insights from these datasets using statistical and computational techniques.", link: "https://drive.google.com/drive/folders/17ljlTKD3JF3PSbsvtuSilsv1xiSKhGmH?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "DataBase(DB)", para: "A Database is an organized collection of structured data stored electronically, allowing for efficient retrieval, management, and updating of information.", link: "https://drive.google.com/drive/folders/1hL_QEWHbkgts8IDApjaWDi6i7_reLd2B?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "DataBase Lab", para: "A Database is an organized collection of structured data stored electronically, allowing for efficient retrieval, management, and updating of information.", link: "", rating: 4.5, badge: 'hard' },
    { heading: "Deep Learning (DL)", para: "Deep Learning is a subset of machine learning using neural networks with many layers. It excels in processing large datasets for tasks like image and speech recognition.", link: "https://drive.google.com/drive/folders/1u3hFrTHjz_cc0ueNihaekTNOT1F3PS3P?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Design and Aanlysis of Algorithms", para: "Design and Analysis of Algorithms involves creating efficient algorithms and evaluating their performance and correctness, focusing on time and space complexity.", link: "https://drive.google.com/drive/folders/1e6iVtvN5DZU9QBGVYLFNXbP-S1kIQHCg?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Differential Equations (Cal-II)", para: "Differential Equations (Cal-II) involve equations with functions and their derivatives, used to model dynamic systems and changes in various fields like physics, engineering, and biology.", link: "https://drive.google.com/drive/folders/1gYhc-rzMYbfXK3kmgOoRCtn9hbQexeYo?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Digital Image Processing (DIP)", para: "Digital Image Processing involves manipulating and analyzing digital images using algorithms to enhance, compress, and extract information for various applications.", link: "https://drive.google.com/drive/folders/1mlceLLaToCp6cESDd29EagkQpDhNhEXh?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Discrete Structures (DS)", para: "Discrete Structures study mathematical structures that are countable or distinct, such as graphs, sets, and logic, essential for computer science and algorithm design.", link: "https://drive.google.com/drive/folders/1LGD73frnpPudA-QUnfBybmx8M0mOCgbU?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Digital logic design (DLD)", para: "Digital Logic Design involves creating and analyzing digital circuits using logic gates, flip-flops, and other components to perform specific functions and computations in electronic systems.", link: "https://drive.google.com/drive/folders/1jeOJHLXjIYAwp_JdAdUCPPWvifbjZc8u?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Digital logic design (LAB)", para: "Digital Logic Design involves creating and analyzing digital circuits using logic gates, flip-flops, and other components to perform specific functions and computations in electronic systems.", link: "https://drive.google.com/drive/folders/1VYWKi6iW-8xeWEXvEK7sz7fAVXYAaCJv?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Ecommerce", para: "Ecommerce refers to buying and selling goods or services online. It involves various activities like online transactions, digital marketing, and customer service, facilitated through web platforms.", link: "https://drive.google.com/drive/folders/1lu-_KldTU8QRCMhESo65_R8J581-0R1m?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Enterprise Information Systems (EIS)", para: "Enterprise Information Systems are integrated software platforms that manage and streamline business processes across an organization, including functions like finance, HR, and supply chain management.", link: "https://drive.google.com/drive/folders/1zmOieUSFcss54OLFWpFAVwNy1SGgTz9P?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "English Comprehension and Composition ", para: "English Comprehension and Composition focus on understanding and analyzing written texts, as well as writing clearly and effectively. It includes skills in reading comprehension, critical thinking, and structured writing.", link: "https://drive.google.com/drive/folders/1Al19sCPDOPU2sxyUyyCWZa8_xJRscKDK?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "English Comprehension and Composition LAB ", para: "English Comprehension and Composition focus on understanding and analyzing written texts, as well as writing clearly and effectively. It includes skills in reading comprehension, critical thinking, and structured writing.", link: "https://drive.google.com/drive/folders/1LhZzW8xVj2K9jKOqpp9kiQWIlTw0TLGs?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Entrepreneurship ", para: "Entrepreneurship involves starting and managing new business ventures. It includes identifying opportunities, creating business plans, securing funding, and driving innovation to achieve success and growth.", link: "https://drive.google.com/drive/folders/1Qhi2-Pej4pzTN6hDx8tKMdhHxKvphUaU?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Environmental Sciences (ES)", para: "Environmental Sciences study the interactions between natural systems and human activities, focusing on issues like pollution, conservation, and sustainability to address environmental challenges.", link: "https://drive.google.com/drive/folders/1CzudFqbEACOK6tJwSMU6aImyge9k2DE5?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Evolutionary Computation (EC)", para: "Evolutionary Computation is a subset of artificial intelligence that uses algorithms inspired by natural evolution, such as genetic algorithms, to solve optimization problems and model complex systems.", link: "https://drive.google.com/drive/folders/1tu-iteMg-N6Nl-jzB-mWEsZjWyvGvXN6?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Expository Writing (EW)", para: "Expository Writing aims to explain or inform by presenting facts, ideas, or instructions clearly and logically. It focuses on providing a thorough understanding of a topic through detailed and objective writing.", link: "https://drive.google.com/drive/folders/16TpVcgKc25RSh7s0tYtjRrG54IUiZzVB?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Expository Writing LAB", para: "Expository Writing aims to explain or inform by presenting facts, ideas, or instructions clearly and logically. It focuses on providing a thorough understanding of a topic through detailed and objective writing.", link: "https://drive.google.com/drive/folders/1_y-nU-GjEyB-eof3PWHKhxqL5Zce0CoC?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Formal Methods (FM)", para: "Formal Methods involve using mathematical techniques to specify, develop, and verify software and systems, ensuring correctness, reliability, and security through rigorous proofs and models.", link: "https://drive.google.com/drive/folders/1hOcN2nuaq3rWZkqPox3iULbNiydkN19h?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Generative AI", para: "Generative AI refers to artificial intelligence systems that create new content, such as images, text, or music, by learning patterns from existing data. Examples include generative adversarial networks (GANs) and large language models.", link: "https://drive.google.com/drive/folders/1EsT8ANiLlELwgc6TtFUtUYUDiDKNGZ__?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Human Computer Interaction (HCI)", para: "Human-Computer Interaction (HCI) studies the design and use of computer systems by focusing on the interaction between users and technology, aiming to improve usability, user experience, and accessibility.", link: "https://drive.google.com/drive/folders/1CgT9hphxMfu5l_p73znmfkDaz1B_ciU4?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Human Resource Management (HRM)", para: "Human Resource Management (HRM) involves managing and developing an organization’s workforce. It includes recruitment, training, performance management, compensation, and ensuring compliance with labor laws and regulations.", link: "https://drive.google.com/drive/folders/1NHdtHIfLDtnMVioW7VV5S5R2rKDnr1Fe?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Introduction to Information and Communication Technology (IICT)", para: "Introduction to Information and Communication Technology (ICT) covers the basics of how information technology and communication systems work together. It includes topics like computer hardware, software, networking, data management, and the impact of ICT on society and business.", link: "https://drive.google.com/drive/folders/1tvakgzht9w2W9HRgeeggtl6AwknUiXSV?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "International Relations (IR)", para: "International Relations studies the interactions between countries, including diplomacy, conflict, trade, and international organizations. It explores how global issues and policies affect relations among states and other actors.", link: "https://drive.google.com/drive/folders/1EWyf29FjnbPDpnBa2NkFdyS_2AqrBQqy?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Intro to Data Science (IDS)", para: "Introduction to Data Science covers the basics of data analysis, including data collection, cleaning, exploration, and visualization. It introduces key concepts like statistical methods, machine learning, and tools used for analyzing data to gain insights and make data-driven decisions.", link: "https://drive.google.com/drive/folders/14nli2JqL7T1MoMuWCI9OESLpAayUs0kR?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Intro to Internet of Things (IOT)", para: "Introduction to the Internet of Things (IoT) explores the concept of interconnected devices that communicate and share data over the internet. It covers IoT architecture, sensors, data collection, and applications across various domains such as smart homes, healthcare, and industrial automation.", link: "https://drive.google.com/drive/folders/1G3HQTOkCS6g3RN78BfR0s0RUvRf809Fl?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Intro to Software Engineering(ISE)", para: "Introduction to Software Engineering (ISE) covers the fundamentals of developing software systems. It includes software development methodologies, project management, requirements analysis, design, coding, testing, and maintenance. The course aims to provide a comprehensive understanding of the software development lifecycle and best practices.", link: "https://drive.google.com/drive/folders/1EEQpBVhH7EsrqrhwHV29ufua3hQ7fv-v?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Islamic Studies", para: "Islamic Studies explores the religious, cultural, and historical aspects of Islam. It includes the study of Islamic theology, history, law, practices, and contributions to science and culture, as well as the interpretation of religious texts and traditions.", link: "https://drive.google.com/drive/folders/12nxz8g_5FyNrJAe5_KDZ99Y0p5kLY3et?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Linear Algebra(LA)", para: "Linear Algebra focuses on vector spaces, linear transformations, and matrices. It involves studying systems of linear equations, eigenvalues, eigenvectors, and applications in various fields such as engineering, computer science, and physics.", link: "https://drive.google.com/drive/folders/1uu_QRmxDWNueFv9zv8CJBjX_CpjfYEVF?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Management and Organizational Behavior", para: "Management and Organizational Behavior examines how individuals and groups interact within organizations. It includes studying leadership, motivation, team dynamics, decision-making, and organizational culture to improve effectiveness and performance in the workplace.", link: "https://drive.google.com/drive/folders/1rQKikJRLVOWcuXiLrqZvYnsSX99DoTgB?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Marketing Management", para: "Marketing Management involves planning and executing strategies to promote and sell products or services. It includes market research, product development, pricing strategies, distribution, and promotional tactics to meet customer needs and achieve business goals.", link: "https://drive.google.com/drive/folders/1MzED9N-tUU2MfdHgZVjTaG80bCoO5JC6?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Mass Communication", para: "Mass Communication studies the processes and effects of transmitting information to large audiences through various media channels, such as television, radio, newspapers, and digital platforms. It covers media theory, content creation, audience analysis, and the impact of media on society.", link: "https://drive.google.com/drive/folders/1t0fqJNEFs_jwdQwAdjjqB_d2Rs2YriOe?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Modern Politics and Government", para: "Modern Politics and Government examines contemporary political systems, structures, and processes. It includes the study of political ideologies, institutions, policy-making, governance models, and the role of political parties and public opinion in shaping government actions.", link: "https://drive.google.com/drive/folders/13n9kK9NRP6iTUlEL-ce7iG6yW2am54QY?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Multivariable Calculus (Cal-III)", para: "MVC (Multivariable Calculus) involves extending calculus concepts to functions of multiple variables. It includes topics like partial derivatives, multiple integrals, vector calculus, and applications in fields such as physics and engineering.", link: "https://drive.google.com/drive/folders/1EVUkVuMkMJN0ptxlmKUAuAAXtq2sLK0C?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Natural Language Processing (NLP)", para: "Natural Language Processing (NLP) is a branch of artificial intelligence focused on enabling computers to understand, interpret, and generate human language. It includes tasks like text analysis, language translation, sentiment analysis, and speech recognition.", link: "https://drive.google.com/drive/folders/1p85vhvrZT0vveqvKWMoz-vsPB8bnLgAU?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Network Security (NS)", para: "It involves protecting computer networks from various threats such as unauthorized access, cyberattacks, and data breaches. It includes practices like encryption, firewalls, and intrusion detection systems to ensure the confidentiality, integrity, and availability of networked data and systems.", link: "https://drive.google.com/drive/folders/1jy-4aRHSLuDAYJS0HbGDfdG-w8iQO-tz?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Numerical Computing", para: "Numerical Computing involves using algorithms and computational techniques to solve mathematical problems that are difficult to solve analytically. It focuses on approximating solutions for equations, optimization, and simulations in fields like engineering, physics, and finance.", link: "https://drive.google.com/drive/folders/1FpTQqOOL1o2pHQtdgn2OUc-_gnfCcDTE?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Object-Oriented Programming (OOP)", para: "Object-Oriented Programming (OOP) is a programming paradigm based on the concept of objects, which encapsulate data and methods. It emphasizes principles like inheritance, encapsulation, polymorphism, and abstraction to improve code reusability, scalability, and maintenance.", link: "https://drive.google.com/drive/folders/1j3BDz-eUGSKRI3XwHBqVEZaVRXP8kMTQ?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Object-Oriented Programming Lab", para: "Object-Oriented Programming (OOP) is a programming paradigm based on the concept of objects, which encapsulate data and methods. It emphasizes principles like inheritance, encapsulation, polymorphism, and abstraction to improve code reusability, scalability, and maintenance.", link: "https://drive.google.com/drive/folders/1TpmR3CcYizMao-zb0iQY8HDFuTty0JH9?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Operations Research (OR)", para: "Operations Research involves using mathematical models, statistical analysis, and optimization techniques to make better decisions and solve complex problems in areas like logistics, resource management, and strategic planning.", link: "https://drive.google.com/drive/folders/1efE3IG5HFOGCjiScLCJDjUSPvBIONzdH?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Operating Systems (OS)", para: "Operating Systems (OS) manage computer hardware and software resources, providing a platform for applications to run. Key functions include managing memory, processes, file systems, and user interfaces, and ensuring system stability and security.", link: "https://drive.google.com/drive/folders/1KrCkG5LX-u2G46dZsC-NXO94t5U-qW43?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Operating Systems LAB (OS)", para: "Operating Systems (OS) manage computer hardware and software resources, providing a platform for applications to run. Key functions include managing memory, processes, file systems, and user interfaces, and ensuring system stability and security.", link: "https://drive.google.com/drive/folders/1gaXUG6Dz8k-2rzhU368vX7qOMCE4S1T1?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Pakistan Studies", para: "Pakistan Studies explores the history, culture, geography, politics, and economy of Pakistan. It includes the study of the country's independence movement, foundational principles, and contemporary issues affecting its development and identity.", link: "https://drive.google.com/drive/folders/1Mer21IN9_BlCTH0gAkqxBc2ujFjm17au?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Parallel and Distributed Computing", para: "Parallel and Distributed Computing involves designing and implementing systems that perform computations simultaneously or across multiple computers. Parallel computing uses multiple processors to execute tasks concurrently, while distributed computing spreads tasks across a network of interconnected computers to solve large-scale problems efficiently.", link: "https://drive.google.com/drive/folders/1kGlTKvnJEOFaFYOdRz3nSLg1060u2Mvy?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Programming Fundamentals (PF)", para: "Programming Fundamentals cover the basic concepts and techniques of computer programming. This includes understanding data types, variables, control structures (like loops and conditionals), functions, and basic algorithms. It provides a foundation for writing and debugging code in various programming languages.", link: "https://drive.google.com/drive/folders/1qxjghycs0cimTGD7R4DdcepWGeWfe1Kv?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Programming Fundamentals LAB", para: "Programming Fundamentals cover the basic concepts and techniques of computer programming. This includes understanding data types, variables, control structures (like loops and conditionals), functions, and basic algorithms. It provides a foundation for writing and debugging code in various programming languages.", link: "https://drive.google.com/drive/folders/1K8_RVgrhpp2jT_RbpAKKkYRjdi1sr0Bu?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Principles of Leadership", para: "Principles of Leadership focus on key concepts and practices for effective leadership. This includes understanding leadership styles, communication skills, motivation techniques, decision-making, and team management. The goal is to inspire and guide individuals or teams to achieve organizational objectives.", link: "https://drive.google.com/drive/folders/1quBAgOaw0Jb5AfrgBz8UOPgL3NFIi_lQ?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Probability", para: "Probability is the branch of mathematics that deals with the likelihood of events occurring. It involves calculating the chance or probability of various outcomes based on known or assumed conditions, using concepts such as probability distributions, random variables, and statistical inference.", link: "https://drive.google.com/drive/folders/1a-stn1V4N-tEMQmSKu4I_vmND3Y07e4x?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Psychology", para: "Psychology is the scientific study of behavior and mental processes. It encompasses various areas, including cognitive, developmental, social, and clinical psychology, focusing on understanding how individuals think, feel, and act, and applying this knowledge to improve mental health and well-being.", link: "https://drive.google.com/drive/folders/1lwIcNNqJRQAx3xTupxI_IM6UV92RwRAc?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Quantum Computing", para: "Quantum Computing explores computing using quantum-mechanical phenomena like superposition and entanglement. It aims to solve complex problems faster than classical computers by leveraging quantum bits (qubits) to perform multiple calculations simultaneously.", link: "https://drive.google.com/drive/folders/1NReNHsHZ7mb0Q9ByGNGnu4yrEPphgXzQ?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Software Construction & Development (SCD)", para: "Software Construction & Development involves creating, building, and refining software applications. It includes coding, debugging, testing, and deploying software, as well as managing software development processes, methodologies, and tools to ensure the creation of reliable and efficient software systems.", link: "https://drive.google.com/drive/folders/1LOR2uJgV4HgLp4HsshMHnsYJZaKXWdlp?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Object-Oriented Analysis & Design (OOAD)", para: "Object-Oriented Analysis & Design (OOAD) Lab focuses on applying object-oriented principles to analyze and design software systems. It involves using tools and techniques to create models of software systems, including class diagrams, use case diagrams, and sequence diagrams, to ensure that software meets user requirements and is well-structured.", link: "https://drive.google.com/drive/folders/1CrHt09cOY3_9uu_0lZNzy_Gbt73cQCPL?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "SE Technologies", para: "Software Engineering Technologies (SE Technologies) encompass the tools, methodologies, and practices used to develop and manage software systems. This includes various development methodologies (like Agile and Scrum), tools for version control, integrated development environments (IDEs), testing frameworks, and techniques for ensuring software quality and scalability.", link: "https://drive.google.com/drive/folders/1xTIRjQsyL5Fwh774745Fgtx_vv9r51GY?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Software For Mobile Devices (SMD)", para: "Software for Mobile Devices involves developing applications and systems designed to run on mobile platforms such as smartphones and tablets. This includes mobile app development for iOS and Android, using programming languages like Swift, Kotlin, or Java, and frameworks like React Native or Flutter. It focuses on optimizing performance, user experience, and integrating with mobile-specific features like GPS and sensors.", link: "https://drive.google.com/drive/folders/1Q5GJrhQK06umI9Dsc8Bo9S86SiC63hBU?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Social Network Analysis", para: "Social Network Analysis examines the relationships and interactions within social networks. It involves mapping and analyzing the connections between individuals or groups to understand patterns, influence, and the structure of social dynamics. This analysis can reveal insights into communication flows, community structures, and key influencers.", link: "https://drive.google.com/drive/folders/1Dt7yJSQoIvVd-XL-KKnEMGoCihKO_uOK?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Sociology", para: "Sociology is the study of society and human behavior, examining how social structures, institutions, and interactions influence individuals and groups. It covers topics like culture, socialization, stratification, and social change, aiming to understand and address social issues and dynamics.", link: "https://drive.google.com/drive/folders/1pYIWSLFlzxysHNM2RySJqwanXXfSKRxy?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Software Design and Analysis", para: "Software Design and Analysis involves creating and evaluating software architectures and systems. It includes defining requirements, designing system components, creating models (like UML diagrams), and analyzing the system for efficiency, scalability, and maintainability. The goal is to ensure that the software meets user needs and is robust and adaptable.", link: "https://drive.google.com/drive/folders/1NwjkJMOs2YzkgpMrWxeHMq-FORyUw0cV?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Software Engineering", para: "Software Engineering is the systematic approach to developing, operating, and maintaining software. It encompasses the entire software development lifecycle, including requirements analysis, design, implementation, testing, deployment, and maintenance. Key principles include following methodologies (like Agile or Waterfall), managing software projects, ensuring quality, and using best practices to produce reliable and efficient software systems.", link: "https://drive.google.com/drive/folders/1ZTFrr2P-hdS5ot-L87ir17Z5pMQjZSx9?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Software Process Management and Metrics", para: "Software Process Management and Metrics involve overseeing and optimizing the software development process using quantitative measures. It includes managing development workflows, assessing productivity and quality through metrics (like defect density, cycle time, and code coverage), and implementing process improvements to enhance efficiency and effectiveness in software projects.", link: "https://drive.google.com/drive/folders/1uINjLHXK7RN9SqMGXsJx1CaopFsXbmGG?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Software Requirements Engineering", para: "Software Requirements Engineering involves gathering, analyzing, documenting, and managing software requirements. It focuses on understanding what users need from a system, defining clear and detailed requirements, and ensuring that these requirements guide the design and development process effectively. This includes techniques like interviews, surveys, and use case analysis to capture and validate user needs.", link: "https://drive.google.com/drive/folders/1a794Ov9bdzoHebNF8zi73IfkXfz-gilH?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Software Testing", para: "Software Testing involves evaluating a software application to identify defects and ensure it meets specified requirements. It includes various techniques such as unit testing, integration testing, system testing, and acceptance testing. The goal is to verify that the software functions correctly, is free of bugs, and meets quality standards before deployment.", link: "https://drive.google.com/drive/folders/1lyspdreSY94JnEH9FBpGrtia-la-HYhd?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Fundamentals of Software Project Management", para: "Fundamentals of Software Project Management involve planning, executing, and overseeing software development projects to ensure they meet goals, deadlines, and budgets. Key aspects include defining project scope, scheduling tasks, allocating resources, managing risks, and ensuring quality. Effective project management ensures that software projects are completed successfully and efficiently.", link: "https://drive.google.com/drive/folders/1IioF5c11EyNBPat4fZxDdEM44iM7X7wj?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Software Quality Assurance (SQA)", para: "Software Quality Assurance (SQA) involves ensuring that software meets quality standards throughout its development lifecycle. It includes activities like defining quality criteria, conducting reviews and audits, performing testing, and implementing processes to prevent defects. SQA aims to deliver reliable, functional, and user-friendly software.", link: "https://drive.google.com/drive/folders/1Lcxz-e2Ihz3c5cqjFdukHXMngeUSIFyL?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Software Quality Engineering (SQE)", para: "Software Quality Engineering (SQE) focuses on the technical aspects of ensuring software quality. It involves applying engineering principles to design, develop, and implement testing processes, tools, and methodologies to identify and resolve defects, enhance performance, and ensure that software meets specified requirements and standards.", link: "https://drive.google.com/drive/folders/11te--1Q3n8PcTmVIxIakObf9m-qalGS2?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Statistical Pattern Recognition and Learning", para: "Statistical Pattern Recognition and Learning involve using statistical methods and algorithms to identify patterns and make predictions based on data. It includes techniques like classification, clustering, and regression to analyze and interpret complex datasets, enabling systems to learn from data and improve decision-making over time.", link: "https://drive.google.com/drive/folders/1BHwnapjDDc-ZDoqE5_KHVFsGlU6TB0JN?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Technical & Business Writing", para: "Technical and Business Writing involves creating clear, concise, and effective documents for various professional purposes. Technical writing focuses on explaining complex information, such as user manuals and technical reports, while business writing includes crafting documents like reports, proposals, and emails to communicate effectively within and outside an organization. Both aim to convey information accurately and persuasively.", link: "https://drive.google.com/drive/folders/1gxi2dfibP56WlupT5ad67HjJs7ULpHjA?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Theory of Automata (TOA)", para: "The Theory of Automata studies abstract machines and their computational capabilities, exploring concepts like state machines, languages, and algorithms for automata processing and recognition.", link: "https://drive.google.com/drive/folders/19Xu10q0w5iCMFZP1GglP8M5NTHIcCXw2?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Theory of Programming Languages", para: "The Theory of Programming Languages examines the design, implementation, analysis, and classification of programming languages. It explores syntax, semantics, and the theory behind language constructs and their execution", link: "https://drive.google.com/drive/folders/1kOwzRLOAmrm4Y9hYlxcSZsxbLxG4SFKz?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Web Engineering", para: "Web engineering is the process of designing, building, and maintaining web applications and systems. It encompasses various skills and technologies, including programming languages, databases, user experience design, and security", link: "https://drive.google.com/drive/folders/1j_ifKY4Krcjly0MDHE3hr9g087iwkGxO?usp=drive_link", rating: 4.5, badge: 'hard' },
    { heading: "Web Programming", para: "Web programming involves creating web pages, web applications, and other online content that can be displayed in a web browser. Web programming is accomplished using a variety of programming languages, including HTML, CSS, JavaScript, PHP, Python, Ruby, and Java.", link: "https://drive.google.com/drive/folders/1Xcu8Q4GJlvcKKdyaHYXkolqJAD1n7dzv?usp=drive_link", rating: 4.5, badge: 'hard' },

];

let currentIndex = 0;

function createDivs(count) {
    const container = document.getElementById('container');
    for (let i = 0; i < count; i++) {
        if (currentIndex >= items.length) {
            document.getElementById('viewMoreBtn').disabled = true;
            return;
        }

        const div = document.createElement('div');
        div.className = 'item';

        const link = document.createElement('a');
        link.href = items[currentIndex].link;

        const heading = document.createElement('h2');
        heading.textContent = items[currentIndex].heading;
        link.appendChild(heading);

        const para = document.createElement('p');
        para.textContent = items[currentIndex].para;
        link.appendChild(para);

        div.appendChild(link);

        // Add badge
        const badge = document.createElement('div');
        badge.className = `badge ${items[currentIndex].badge}`;
        badge.textContent = items[currentIndex].badge.charAt(0).toUpperCase() + items[currentIndex].badge.slice(1);
        div.appendChild(badge);

        // Add button inside the div item
        const button = document.createElement('button');
        button.textContent = "See All";
        button.className = 'item-button';
        div.appendChild(button);

// Add rating button inside the div item
if (items[currentIndex].rating !== undefined) {
    const ratingDiv = document.createElement('div');
    ratingDiv.className = 'rating';

    const ratingButton = document.createElement('a');
    ratingButton.className = 'rating-button';
    ratingButton.href = items[currentIndex].ratingLink; // Replace with your rating link
    ratingButton.textContent = 'YouTube Playlist';
    ratingDiv.appendChild(ratingButton);

    div.appendChild(ratingDiv);
}


        container.appendChild(div);
        currentIndex++;
    }
}

function loadMoreDivs() {
    createDivs(12);
}

// Load initial 12 divs
createDivs(12);

// Function to filter items based on search input
function filterItems(searchText) {
    const container = document.getElementById('container');
    container.innerHTML = ''; // Clear existing items

    items.forEach(item => {
        // Convert heading and para to lowercase for case-insensitive search
        const headingText = item.heading.toLowerCase();
        const paraText = item.para.toLowerCase();
        const searchLower = searchText.toLowerCase();

        // Check if search text matches heading or paragraph
        if (headingText.includes(searchLower) || paraText.includes(searchLower)) {
            const div = document.createElement('div');
            div.className = 'item';

            const link = document.createElement('a');
            link.href = item.link;

            const heading = document.createElement('h2');
            heading.textContent = item.heading;
            link.appendChild(heading);

            const para = document.createElement('p');
            para.textContent = item.para;
            link.appendChild(para);

            div.appendChild(link);

            // Add badge
            const badge = document.createElement('div');
            badge.className = `badge ${item.badge}`;
            badge.textContent = item.badge.charAt(0).toUpperCase() + item.badge.slice(1);
            div.appendChild(badge);

            // Add button inside the div item
            const button = document.createElement('button');
            button.textContent = "See All";
            button.className = 'item-button';
            div.appendChild(button);

            // Add rating stars and text inside the div item
            if (item.rating !== undefined) {
                const ratingDiv = document.createElement('div');
                ratingDiv.className = 'rating';

                const stars = document.createElement('span');
                stars.className = 'stars';
                stars.innerHTML = `${'★'.repeat(Math.floor(item.rating))}${'☆'.repeat(5 - Math.floor(item.rating))}`;
                ratingDiv.appendChild(stars);

                const ratingText = document.createElement('span');
                ratingText.className = 'rating-value';
                ratingText.textContent = `${item.rating}/5`;
                ratingDiv.appendChild(ratingText);

                div.appendChild(ratingDiv);
            }

            container.appendChild(div);
        }
    });
}

// Add event listener for search bar input
document.querySelector('.search-bar input').addEventListener('input', function () {
    const searchText = this.value;
    filterItems(searchText);
});

document.addEventListener("DOMContentLoaded", function() {
    var myBtn = document.getElementById("myBtn");
    var progressCircle = document.querySelector('.progress-ring__circle');
    var radius = progressCircle.r.baseVal.value;
    var circumference = 2 * Math.PI * radius;

    progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
    progressCircle.style.strokeDashoffset = circumference;

    function setProgress(percent) {
        const offset = circumference - (percent / 100 * circumference);
        progressCircle.style.strokeDashoffset = offset;
    }

    function updateProgress() {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / scrollHeight) * 100;
        setProgress(scrollPercent);
    }

    window.onscroll = function() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            myBtn.style.display = "block";
        } else {
            myBtn.style.display = "none";
        }
        updateProgress();
    };

    myBtn.onclick = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    updateProgress();
});
