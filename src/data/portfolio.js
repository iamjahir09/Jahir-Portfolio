export const portfolioData = {
  name: 'Jahir Shaikh',
  degree: 'B.E. Computer Science & Engineering (AI & ML)',
  college: "Anjuman-I-Islam's Kalsekar Technical Campus, New Panvel",
  graduation: 2027,
  cgpa: 7.48,
  email: 'jahirshaikh162003@gmail.com',
  phone: '+91 7028401587',
  github: 'https://github.com/iamjahir09',
  linkedin: 'https://www.linkedin.com/in/jahir-shaikh',
  position: 'AI & ML Enthusiast',
  bio: "I'm an aspiring software developer and B.E. Computer Science & Engineering (AI & ML) student with strong foundations in Python, Core Java, SQL, OOP and Machine Learning. I enjoy building practical software systems and exploring how AI can be applied to real-world problems.",
  
  skills: [
    {
      category: '01',
      title: 'Programming',
      description: 'Core languages & paradigms',
      technologies: ['Python', 'Java', 'SQL']
    },
    {
      category: '02',
      title: 'AI / ML / Data',
      description: 'Machine learning & data science stack',
      technologies: ['Machine Learning', 'Deep Learning', 'TensorFlow/Keras', 'Scikit-learn', 'PyTorch', 'Generative AI', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'OpenCV']
    },
    {
      category: '03',
      title: 'Web & Concepts',
      description: 'Web technologies & software principles',
      technologies: ['HTML', 'CSS', 'React', 'OOP']
    },
    {
      category: '04',
      title: 'Tools',
      description: 'Development & collaboration tools',
      technologies: ['Git', 'GitHub', 'VS Code', 'Google Colab', 'Kaggle', 'SQLite']
    }
  ],

  currentlyLearning: ['PyTorch', 'Generative AI', 'Transformer-based architectures', 'Deep Learning', 'Computer Vision'],

  projects: [
    {
      id: 1,
      title: 'Lightweight Image Classifier for Edge Devices',
      image: "/projects/image.png",
      tech: ['Python', 'TensorFlow/Keras', 'CNN'],
      description: 'An end-to-end CNN image classification pipeline designed for deployment on resource-constrained edge devices.',
      metrics: {
        images: '26K+',
        classes: 10,
        originalSize: '12.6 MB',
        optimizedSize: '96 KB',
        reduction: '134×',
        imbalanceRatio: '3.36×'
      },
      achievements: [
        'Compared baseline CNN with optimized lightweight CNN',
        'Used Global Average Pooling',
        'Reduced model size by 134×',
        'Addressed class imbalance through targeted data augmentation',
        'Built reproducible preprocessing pipeline',
        'Used stratified splitting',
        'Used EarlyStopping',
        'Used ModelCheckpoint'
      ],
      github: 'https://github.com/iamjahir09/Lightweight-Image-Classifier-for-Edge-Devices',
      visual: 'cnn'
    },
    {
      id: 2,
      title: 'Movie Recommendation System',
      image: "/projects/movie.png",
      tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Streamlit'],
      description: 'A content-based movie recommendation system that recommends similar movies based on movie metadata using cosine similarity.',
      features: [
        'Content-based filtering',
        'Cosine similarity',
        'Movie metadata processing',
        'Feature engineering',
        'Data preprocessing',
        'Similarity-based recommendations',
        'Interactive Streamlit interface',
        'Movie search and selection',
        'Real-time recommendations'
      ],
      github: 'https://github.com/iamjahir09/movie-recommendation-system',
      visual: 'movie'
    },
    
        {
      id: 3,
      title: 'DocuRAG — Universal Document Intelligence Assistant',
      image: "/projects/DocuRag.png",
      tech: [
        'Python',
        'LangChain',
        'FastAPI',
        'Hugging Face',
        'Chroma',
        'BM25',
        'CrossEncoder',
        'RAG'
      ],
      description: 'A universal document intelligence assistant that enables users to upload and interact with PDF, TXT, CSV, and DOCX documents using a retrieval-augmented generation pipeline with hybrid retrieval, reranking, contextual compression, and source-aware responses.',
      features: [
        'Dynamic user document ingestion',
        'Supports PDF, TXT, CSV and DOCX files',
        'Document parsing and preprocessing',
        'Recursive text chunking',
        'BGE-small embeddings',
        'Chroma vector store',
        'Hybrid BM25 and vector retrieval',
        'MMR-based retrieval',
        'CrossEncoder reranking',
        'Contextual compression',
        'Question rewriting',
        'Chat history support',
        'Source extraction and citation',
        'LLM-powered answer generation',
        'FastAPI backend',
        'REST API endpoints for upload and chat'
      ],
      github: 'https://github.com/iamjahir09/Universal-Document-Intelligence-Assistant-RAG-.git',
      visual: 'rag'
    },
    
    {
      id: 4,
      title: 'Blyntrex — Social Media UI',
      image: "/projects/blyntrex.png",
      tech: ['React', 'Tailwind CSS', 'React Router DOM', 'LocalStorage'],
      description: 'A modern, responsive social media interface inspired by Instagram, featuring client-side authentication, interactive stories, posts feed, user profiles, suggestions, and adaptive mobile navigation.',
      features: [
        'User signup and login',
        'Client-side authentication with LocalStorage',
        'Responsive social media feed',
        'Interactive stories section',
        'Posts with like, comment, share and save actions',
        'User profile and suggestions',
        'React Router navigation',
        'Responsive desktop and mobile layouts',
        'Reusable React components',
        'Dark modern UI with Tailwind CSS'
      ],
      github: 'https://github.com/iamjahir09/React',
      visual: 'social'
    },
    
    {
      id: 5,
      title: 'CreditGuard — Loan Default Risk Prediction',
      image: "/projects/credit.png",
      tech: ['Python', 'Scikit-learn', 'Logistic Regression', 'Pandas', 'NumPy'],
      description: 'A machine learning-based loan default risk prediction system designed to assist financial institutions in evaluating loan applicants.',
      features: [
        'Data preprocessing',
        'Feature engineering',
        'Exploratory Data Analysis',
        'Logistic Regression',
        'Historical loan data',
        'Risk classification'
      ],
      riskCategories: ['Low', 'Medium', 'High'],
      github: 'https://github.com/iamjahir09/CreditGuard---Loan-Default-Risk-Prediction',
      visual: 'finance'
    },
    
        {
      id: 6,
      title: 'Skitii Health Tech — Health Monitoring System',
      image: "/projects/skti.png",
      tech: ['Next.js', 'React', 'TypeScript', 'NestJS', 'MongoDB', 'BLE'],
      description: 'A full-stack health monitoring application that integrates Bluetooth Low Energy (BLE) devices with a modern web interface for managing patients, health monitoring sessions, and real-time heart rate data.',
      features: [
        'JWT-based user authentication',
        'Patient profile management',
        'Health monitoring session management',
        'Bluetooth Low Energy (BLE) device integration',
        'Real-time heart rate data parsing',
        'Real-time device connection status',
        'Start, pause and manage monitoring sessions',
        'RESTful API architecture',
        'MongoDB data persistence',
        'Responsive Next.js interface',
        'BLE mock functionality for testing',
        'React Context API for authentication state'
      ],
      github: 'https://github.com/iamjahir09/PulseSync',
      visual: 'health'
    },
    {
      id: 7,
      title: 'Airline Reservation System',
      tech: ['Core Java', 'OOP', 'Java Collections'],
      description: 'A console-based airline reservation system built using Core Java with modular Admin and Passenger functionality.',
      features: [
        'Admin authentication',
        'Passenger authentication',
        'Flight search',
        'Ticket booking',
        'Cancellation',
        'Seat availability',
        'Fare calculation',
        'Booking history',
        'Exception handling',
        'Modular class design'
      ],
      github: 'https://github.com/iamjahir09/airline-reservation-system',
      visual: 'airline'
    }
  ],

  certifications: [
    {
      title: 'Introduction to Generative AI',
      issuer: 'Google Cloud',
      link: 'https://www.cloudskillsboost.google/'
    },
    {
      title: 'Machine Learning Crash Course',
      issuer: 'Google Developer Program',
      link: 'https://developers.google.com/profile/u/iamjahir09'
    },
    {
      title: 'AI/ML for Geodata Analysis',
      issuer: 'ISRO - Indian Institute of Remote Sensing (IIRS)',
      link: 'https://certificate.iirs.gov.in/'
    },
    {
      title: 'Generative AI with Diffusion Models',
      issuer: 'AWS Training & Certification',
      link: 'https://aws.amazon.com/training/'
    },
    {
      title: 'IBM Cloud Essentials',
      issuer: 'IBM SkillsBuild',
      link: 'https://courses.yl-ptech.skillsnetwork.site/certificates/da55e5d9fd0249c286d3ed4c9b513dfb'
    },
    {
      title: 'Microsoft Azure AI Essentials: Workloads and Machine Learning on Azure',
      issuer: 'LinkedIn Learning',
      link: 'https://www.linkedin.com/learning/'
    }
  ],

  journey: [
    { stage: 'Early Journey', description: 'Started building software projects' },
    { stage: 'Machine Learning', description: 'Began working with ML fundamentals' },
    { stage: 'Deep Learning', description: 'Exploring neural networks and computer vision' },
    { stage: 'Current', description: 'Learning PyTorch and Generative AI' },
    { stage: '2027', description: 'B.E. CSE (AI & ML) Graduation' }
  ],

  whyMe: [
    'Strong programming fundamentals',
    'Hands-on Machine Learning project experience',
    'Practical problem solving',
    'Git/GitHub workflow',
    'Quick learner',
    'Interest in real-world software products',
    'AI/ML + software engineering combination'
  ]
};