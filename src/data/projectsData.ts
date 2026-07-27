import { Project } from '../types/portfolio';

export const PROJECTS: Project[] = [
  {
    id: 'agentis-matching-platform',
    sourceStatus: 'verified',
    verifiedClaims: [
      'Co-developed AI-powered platform helping clinical coordinators identify potentially relevant clinical trials',
      'Supports patient-to-trial matching workflows',
      'Evaluates possible eligibility criteria and ranks potentially relevant trials',
      'Provides explainable recommendations for coordinator review',
      'Integrated IBM watsonx.ai and ClinicalTrials.gov REST APIs'
    ],
    sourceReferences: [
      {
        sourceType: 'supplied-resume',
        sourceLabel: 'Kanishka_Yadav_Resume.pdf',
        supports: ['AGENTIS Co-Founder & AI Engineer', 'IBM watsonx.ai', 'ClinicalTrials.gov REST APIs', 'Patient profile parsing & trial matching workflows'],
        confirmedExists: true
      }
    ],
    title: 'AGENTIS',
    tagline: 'AI-powered platform helping clinical coordinators identify potentially relevant clinical trials for patients.',
    category: ['AI', 'Backend'],
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    description: 'Co-developing an AI-powered platform that helps clinical coordinators identify potentially relevant clinical trials for patients.',
    problemSolved: 'Clinical trial coordinators spend extensive time reviewing patient profiles against complex trial eligibility criteria.',
    technologies: [
      'Python',
      'IBM watsonx.ai',
      'ClinicalTrials.gov REST APIs',
      'Multi-Agent Systems',
      'Explainable AI'
    ],
    metrics: [
      { label: 'Search Workflow', value: 'Hours to Minutes' },
      { label: 'Platform Type', value: 'Multi-Agent AI' }
    ],
    architectureSummary: 'Modular multi-agent AI workflows integrate IBM watsonx.ai reasoning with ClinicalTrials.gov REST APIs for patient profile parsing, evaluating possible eligibility criteria, and ranking potentially relevant trials.',
    keyFeatures: [
      'Built modular multi-agent AI workflows',
      'Integrated IBM watsonx.ai',
      'Integrated ClinicalTrials.gov REST APIs',
      'Developed patient-profile parsing workflows',
      'Evaluated possible eligibility criteria',
      'Built ranking logic for potentially relevant trials',
      'Provided explainable recommendations for coordinator review',
      'Supported patient-to-trial matching workflows to streamline clinical search'
    ],
    challenges: [
      'Orchestrating multi-agent states and handling heterogeneous clinical trial criteria.'
    ],
    engineeringDecisions: [
      'Separated reasoning into modular agent steps rather than a single unstructured call to enable explainable recommendations.'
    ],
    tradeoffs: [
      'Multi-agent pipeline adds slight API latency but provides transparent, step-by-step reasoning for coordinator review.'
    ],
    lessonsLearned: [
      'Building explainable AI through transparent, step-by-step agent reasoning.',
      'Designing modular multi-agent workflows to handle heterogeneous trial criteria.',
      'Working with healthcare data and ClinicalTrials.gov APIs responsibly with coordinator oversight.'
    ],
    futureRoadmap: [
      'Refine profile parser components for broader patient summary formats.'
    ],
    codeSnippets: [
      {
        language: 'python',
        filename: 'agentis/workflow.py',
        code: `# Conceptual overview of multi-agent orchestration
async def evaluate_patient_trials(patient_profile: dict, trials_data: list) -> list:
    parsed_profile = await parse_patient_profile(patient_profile)
    evaluated = []
    for trial in trials_data:
        res = await evaluate_possible_eligibility(parsed_profile, trial)
        evaluated.append(res)
    return rank_and_explain(evaluated)`,
        explanation: 'Conceptual overview of the modular multi-agent trial matching pipeline supporting coordinator review.'
      }
    ]
  },
  {
    id: 'autopilot-ai',
    sourceStatus: 'verified',
    verifiedClaims: [
      'AI service advisor for independent auto repair shops',
      'Generates structured diagnostic plan from vehicle details and customer complaint',
      'Uses computer-use agent to browse supplier catalog for replacement parts',
      'Requires explicit human authorization before recording an approved order',
      'Implements schema-validated AI output, server-side price calculations, and flat-file JSON storage'
    ],
    sourceReferences: [
      {
        sourceType: 'repository-readme',
        repositoryUrl: 'https://github.com/kanishkay/computer-use',
        filePath: 'README.md',
        supports: ['AI service advisor for independent auto repair shops', 'Hackathon project scope'],
        confirmedExists: true
      },
      {
        sourceType: 'repository-file',
        repositoryUrl: 'https://github.com/kanishkay/computer-use',
        filePath: 'app/api/plan-repair/route.ts',
        symbolOrCell: 'POST /api/plan-repair',
        supports: ['Generates structured diagnostic plan from vehicle details and customer complaint'],
        confirmedExists: true
      },
      {
        sourceType: 'repository-file',
        repositoryUrl: 'https://github.com/kanishkay/computer-use',
        filePath: 'app/api/run-holo-search/route.ts',
        symbolOrCell: 'POST /api/run-holo-search',
        supports: ['Uses computer-use agent to browse supplier catalog for replacement parts'],
        confirmedExists: true
      },
      {
        sourceType: 'repository-file',
        repositoryUrl: 'https://github.com/kanishkay/computer-use',
        filePath: 'app/api/recommend/route.ts',
        symbolOrCell: 'POST /api/recommend',
        supports: ['Creates history-aware repair recommendation and server-side price calculations'],
        confirmedExists: true
      },
      {
        sourceType: 'repository-file',
        repositoryUrl: 'https://github.com/kanishkay/computer-use',
        filePath: 'app/api/orders/route.ts',
        symbolOrCell: 'POST /api/orders',
        supports: ['Requires explicit human authorization before recording an approved order'],
        confirmedExists: true
      },
      {
        sourceType: 'repository-file',
        repositoryUrl: 'https://github.com/kanishkay/computer-use',
        filePath: 'lib/store.ts',
        symbolOrCell: 'getStore() / saveStore()',
        supports: ['Flat-file JSON storage'],
        confirmedExists: true
      },
      {
        sourceType: 'repository-file',
        repositoryUrl: 'https://github.com/kanishkay/computer-use',
        filePath: 'lib/prompts.ts',
        symbolOrCell: 'DiagnosticSchema',
        supports: ['Schema-validated AI output'],
        confirmedExists: true
      }
    ],
    title: 'AutoPilot AI',
    tagline: 'Hackathon Project — AI service advisor for independent auto repair shops.',
    category: ['AI', 'Web', 'Backend'],
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    description: 'An AI service advisor for independent auto repair shops that accepts vehicle details and a customer complaint, generates a structured diagnostic plan, uses a computer-use agent to browse a live supplier catalog for replacement parts, creates a history-aware repair recommendation, and requires explicit human authorization before recording an approved order.',
    problemSolved: 'Auto repair shops need structured diagnostic planning and history-aware parts recommendations while preserving human oversight before order approval.',
    technologies: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Tailwind CSS 4',
      'NVIDIA Nemotron',
      'Holo computer-use agent',
      'NemoClaw',
      'Hermes',
      'Docker',
      'Docker Compose',
      'Flat-file JSON storage',
      'Human-in-the-loop approval',
      'Schema-validated AI output',
      'Deterministic fallbacks',
      'Cached-data fallback',
      'Server-side price calculations',
      'Mocked VIN or plate lookup',
      'CSV export',
      'Draft order staging'
    ],
    metrics: [
      { label: 'Scope', value: 'Hackathon Prototype' },
      { label: 'Control', value: 'Human-in-the-Loop Approval' }
    ],
    architectureSummary: 'Structured diagnostic planning powered by NVIDIA Nemotron paired with a Holo computer-use agent for supplier catalog navigation and explicit human authorization gates.',
    keyFeatures: [
      'Accepts vehicle details and customer complaint to generate structured diagnostic plans',
      'Uses computer-use agent to browse supplier catalog for replacement parts',
      'Creates history-aware repair recommendations',
      'Enforces explicit human authorization before recording an approved order',
      'Implements schema-validated AI output, server-side price calculations, and flat-file JSON storage',
      'Prototype Limitations: Single-shop local demo scope, no real purchasing, no authentication, cached/deterministic fallbacks, no guaranteed mechanical diagnosis'
    ],
    challenges: [
      'Ensuring computer-use browser agents stop safely before checkout without making automated purchases.'
    ],
    engineeringDecisions: [
      'Enforced human-in-the-loop authorization gates and deterministic price calculations server-side.'
    ],
    tradeoffs: [
      'Local flat-file JSON storage is limited to single-shop demo scope but enables zero-config hackathon execution.'
    ],
    lessonsLearned: [
      'Why deterministic fallbacks matter when AI models or web agents encounter unexpected API errors.',
      'Why human approval is critical before converting AI plans into recorded repair orders.',
      'Lessons from integrating computer-use browser agents safely within strict action boundaries.'
    ],
    futureRoadmap: [
      'Explore multi-shop catalog integrations.'
    ],
    githubUrl: 'https://github.com/kanishkay/computer-use'
  },
  {
    id: 'acron-repo-kb',
    sourceStatus: 'verified',
    verifiedClaims: [
      'Semantic code search and repository question answering system',
      'Tree-sitter AST parsing for source code chunking',
      'sqlite-vec C-extension integration inside SQLite for embedded vector distance calculation',
      'vector similarity search using sqlite-vec',
      'Hybrid retrieval combining vector embeddings and normalized relational queries'
    ],
    sourceReferences: [
      {
        sourceType: 'repository-file',
        repositoryUrl: 'https://github.com/kanishkay/acorn',
        filePath: 'acron/chunker.py',
        symbolOrCell: 'TreeSitterChunker',
        supports: ['Tree-sitter AST parsing for code chunking'],
        confirmedExists: true
      },
      {
        sourceType: 'repository-file',
        repositoryUrl: 'https://github.com/kanishkay/acorn',
        filePath: 'acron/vector_store.py',
        symbolOrCell: 'vec_code_chunks table / sqlite-vec',
        supports: ['sqlite-vec C-extension integration inside SQLite for embedded vector distance calculation', 'vector similarity search using sqlite-vec'],
        confirmedExists: true
      },
      {
        sourceType: 'repository-file',
        repositoryUrl: 'https://github.com/kanishkay/acorn',
        filePath: 'acron/app.py',
        symbolOrCell: 'query_repo()',
        supports: ['Hybrid retrieval RAG pipeline', 'Semantic code search and repository question answering system'],
        confirmedExists: true
      }
    ],
    title: 'Acron — AI-Powered Repository Knowledge Base',
    tagline: 'Semantic code search and repository question answering system.',
    category: ['AI', 'Backend'],
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    description: 'Acron is a semantic code search and repository question answering system built with Python, Flask, SQLite, sqlite-vec, SentenceTransformers, Tree-sitter, and OpenRouter.',
    problemSolved: 'Navigating and comprehending large codebases manually requires extensive time searching for function definitions and usage context.',
    technologies: [
      'Python',
      'Flask',
      'SQLite',
      'sqlite-vec',
      'SentenceTransformers',
      'Tree-sitter',
      'OpenRouter',
      'Vector Embeddings',
      'Retrieval-Augmented Generation',
      'Hybrid Retrieval',
      'Vector Similarity Search',
      'Normalized Relational Storage'
    ],
    metrics: [
      { label: 'Workflow Acceleration', value: 'Hours to Seconds' },
      { label: 'Vector Extension', value: 'sqlite-vec' }
    ],
    architectureSummary: 'Tree-sitter parses repository source code into AST chunks. SentenceTransformers computes vector embeddings stored in SQLite via sqlite-vec for hybrid retrieval RAG.',
    keyFeatures: [
      'Semantic code search across repository files',
      'Repository question answering with source citations',
      'Tree-sitter AST parsing for clean code chunk boundaries',
      'sqlite-vec vector extension inside SQLite for embedded similarity search',
      'Hybrid retrieval combining vector embeddings and normalized relational queries',
      'Repository-comprehension workflows reduced from hours to seconds'
    ],
    challenges: [
      'Chunking source code along syntactic AST boundaries rather than arbitrary line breaks.'
    ],
    engineeringDecisions: [
      'Used sqlite-vec C-extension inside SQLite to eliminate external vector database hosting complexity.'
    ],
    tradeoffs: [
      'Embedded SQLite vector search is lightweight and fast locally, suitable for single-repository knowledge retrieval.'
    ],
    lessonsLearned: [
      'Designing semantic retrieval specifically tailored to source code file structures.',
      'Evaluating tradeoffs in fixed-size chunking versus Tree-sitter AST syntax chunking.',
      'Why hybrid retrieval combining vector similarity with SQLite relational queries produces more accurate code search results.'
    ],
    futureRoadmap: [
      'Support multi-repository cross-referencing.'
    ],
    codeSnippets: [
      {
        language: 'python',
        filename: 'acron/vector_store.py',
        code: `import sqlite3
import sqlite_vec

def init_db(db_path: str):
    conn = sqlite3.connect(db_path)
    conn.enable_load_extension(True)
    sqlite_vec.load(conn)
    conn.enable_load_extension(False)
    conn.execute("""
        CREATE VIRTUAL TABLE IF NOT EXISTS vec_code_chunks USING vec0(
            chunk_id INTEGER PRIMARY KEY,
            embedding float[384]
        );
    """)
    return conn`,
        explanation: 'Embedded C-level vector distance calculation inside SQLite using sqlite-vec.'
      }
    ],
    githubUrl: 'https://github.com/kanishkay/acorn'
  },
  {
    id: 'contextmeter',
    sourceStatus: 'verified',
    verifiedClaims: [
      'The heuristic analysis engine uses Jaccard word-overlap similarity, priority, verification status, staleness penalties, and duplication penalties to recommend context actions.',
      'The Gemini analysis engine uses schema-validated LLM output and falls back to deterministic behavior when a request fails or returns malformed output.',
      'The replay workflow generates a response with optimized context.',
      'Deterministic evaluation tests compare the replayed response with expected scenario behavior.'
    ],
    sourceReferences: [
      {
        sourceType: 'repository-file',
        repositoryUrl: 'https://github.com/kanishkay/ContextMeter',
        filePath: 'packages/shared/src/similarity.ts',
        symbolOrCell: 'jaccardSimilarity()',
        supports: ['Uses Jaccard word-overlap similarity'],
        confirmedExists: true
      },
      {
        sourceType: 'repository-file',
        repositoryUrl: 'https://github.com/kanishkay/ContextMeter',
        filePath: 'apps/api/src/services/heuristicAnalyzer.ts',
        symbolOrCell: 'analyzeHeuristicContext()',
        supports: ['The heuristic analysis engine uses Jaccard word-overlap similarity, priority, verification status, staleness penalties, and duplication penalties to recommend context actions'],
        confirmedExists: true
      },
      {
        sourceType: 'repository-file',
        repositoryUrl: 'https://github.com/kanishkay/ContextMeter',
        filePath: 'apps/api/src/services/geminiClient.ts',
        symbolOrCell: 'analyzeContextWithGemini()',
        supports: ['The Gemini analysis engine uses schema-validated LLM output and falls back to deterministic behavior when a request fails or returns malformed output'],
        confirmedExists: true
      },
      {
        sourceType: 'repository-file',
        repositoryUrl: 'https://github.com/kanishkay/ContextMeter',
        filePath: 'packages/shared/src/evaluation.ts',
        symbolOrCell: 'evaluateReplay()',
        supports: ['The replay workflow generates a response with optimized context', 'Deterministic evaluation tests compare the replayed response with expected scenario behavior'],
        confirmedExists: true
      },
      {
        sourceType: 'repository-file',
        repositoryUrl: 'https://github.com/kanishkay/ContextMeter',
        filePath: 'packages/shared/src/fixtures.ts',
        symbolOrCell: 'SYNTHETIC_TRACE_FIXTURES',
        supports: ['Synthetic scenario test cases'],
        confirmedExists: true
      },
      {
        sourceType: 'repository-file',
        repositoryUrl: 'https://github.com/kanishkay/ContextMeter',
        filePath: 'apps/api/src/adapters/studioContract.ts',
        symbolOrCell: 'studioAdapter()',
        supports: ['Frontend contract adapter'],
        confirmedExists: true
      }
    ],
    title: 'ContextMeter',
    tagline: 'Hackathon Prototype — Observability and optimization tool for AI-agent context.',
    category: ['AI', 'Backend', 'Web'],
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    description: 'An observability and optimization tool for AI-agent context that identifies stale, duplicate, conflicting, and irrelevant context blocks, recommends whether to keep, remove, compress, or refresh them, replays the task with optimized context, and evaluates the result.',
    problemSolved: 'AI agents accumulate redundant or conflicting context during long execution loops, increasing cost and degrading reasoning accuracy.',
    technologies: [
      'TypeScript',
      'Express',
      'React',
      'Vite',
      'Gemini API',
      'Zod',
      'Docker',
      'Vercel',
      'Google Cloud Run',
      'Canned fallback engine',
      'Heuristic engine',
      'Gemini analysis engine',
      'Jaccard word-overlap similarity',
      'Priority and verification weighting',
      'Staleness and duplication penalties',
      'Failed-trace replay',
      'Deterministic evaluation'
    ],
    metrics: [
      { label: 'Scope', value: 'Hackathon Prototype' },
      { label: 'Scenarios', value: 'Three Synthetic Test Cases' }
    ],
    architectureSummary: 'Analyzes context blocks using Jaccard word-overlap similarity, staleness penalties, heuristic engine, and Gemini analysis for context compression and failed-trace replay evaluation.',
    keyFeatures: [
      'The heuristic analysis engine uses Jaccard word-overlap similarity, priority, verification status, staleness penalties, and duplication penalties to recommend context actions',
      'The Gemini analysis engine uses schema-validated LLM output and falls back to deterministic behavior when a request fails or returns malformed output',
      'The replay workflow generates a response with optimized context',
      'Deterministic evaluation tests compare the replayed response with expected scenario behavior'
    ],
    challenges: [
      'Balancing heuristic similarity checks with LLM context analysis without incurring prohibitive evaluation latency.'
    ],
    engineeringDecisions: [
      'Built multi-tier analysis with heuristic fallbacks and deterministic synthetic evaluation benchmarks.'
    ],
    tradeoffs: [
      'Prototype is focused on synthetic trace evaluation scenarios without permanent database persistence.'
    ],
    lessonsLearned: [
      'Why more context is not always better for LLM accuracy, cost, and response latency.',
      'Why observability matters when debugging complex multi-step agent reasoning loops.',
      'Combining fast heuristic algorithms with deep LLM reasoning for resilient context pruning.'
    ],
    futureRoadmap: [
      'Extend trace import adapters for live agent frameworks.'
    ],
    githubUrl: 'https://github.com/kanishkay/ContextMeter'
  },
  {
    id: 'lending-club-loan-default',
    sourceStatus: 'verified',
    verifiedClaims: [
      'Processed more than 395,000 LendingClub financial records',
      'Built deep learning classification pipeline using TensorFlow, Keras, and Scikit-learn',
      'Implemented feature engineering and preprocessing',
      'Addressed imbalanced classification in financial default data',
      'Achieved 89% validation accuracy',
      'Evaluated performance with precision, recall, confusion matrices, and classification reports'
    ],
    needsReviewClaims: [
      'Class-weighted loss function specific implementation pending cell-by-cell notebook code line inspection'
    ],
    sourceReferences: [
      {
        sourceType: 'repository-file',
        repositoryUrl: 'https://github.com/kanishkay/Lending_Club_Loan_Default_Prediction',
        filePath: 'Lending_Club_Loan_Default_Prediction.ipynb',
        symbolOrCell: 'Cells 1-25',
        supports: ['395,000+ records', 'TensorFlow, Keras, Scikit-learn', '89% validation accuracy', 'Precision, recall, confusion matrix evaluation'],
        confirmedExists: true
      }
    ],
    title: 'LendingClub Loan Default Prediction',
    tagline: 'Deep learning classification pipeline processing 395,000+ financial records.',
    category: ['Machine Learning', 'Data Science'],
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
    description: 'A machine learning classification pipeline built with TensorFlow, Keras, and Scikit-learn to analyze and predict loan default outcomes on a dataset of over 395,000 LendingClub loan records.',
    problemSolved: 'Predicting loan defaults on highly imbalanced financial datasets where non-default cases outnumber defaults.',
    technologies: [
      'Python',
      'TensorFlow',
      'Keras',
      'Scikit-learn',
      'Feature engineering',
      'Imbalanced classification'
    ],
    metrics: [
      { label: 'Dataset Size', value: '395,000+ Records' },
      { label: 'Validation Accuracy', value: '89%' }
    ],
    architectureSummary: 'Feature engineering and preprocessing pipeline feeding a TensorFlow / Keras deep neural network evaluated with precision, recall, confusion matrices, and classification reports.',
    keyFeatures: [
      'Processed more than 395,000 LendingClub records',
      'Implemented feature engineering and missing data imputation',
      'Addressed imbalanced classification in financial default data',
      'Evaluated performance with precision, recall, confusion matrices, and classification reports',
      'Achieved 89% validation accuracy'
    ],
    challenges: [
      'Handling severe class imbalance in historical financial records.'
    ],
    engineeringDecisions: [
      'Evaluated precision and recall alongside validation accuracy to penalize default misclassifications.'
    ],
    tradeoffs: [
      'Tuning decision threshold prioritized default recall over raw overall accuracy.'
    ],
    lessonsLearned: [
      'In imbalanced datasets, precision, recall, and confusion matrices provide far better evaluation than accuracy alone.'
    ],
    futureRoadmap: [
      'Explore gradient boosting ensembles as baseline comparison.'
    ],
    githubUrl: 'https://github.com/kanishkay/Lending_Club_Loan_Default_Prediction'
  },
  {
    id: 'credit-card-customer-segmentation',
    sourceStatus: 'verified',
    verifiedClaims: [
      'Applied Principal Component Analysis (PCA) reducing 17 behavioral features to 7 principal components while reducing dimensionality and retaining 94% of dataset variance',
      'Identified four distinct customer behavioral segments using K-Means clustering',
      'Provided insights for customer analytics and potential marketing and risk-analysis applications'
    ],
    needsReviewClaims: [
      'Elbow method and silhouette analysis specific visualization plots pending line-by-line notebook inspection'
    ],
    sourceReferences: [
      {
        sourceType: 'repository-file',
        repositoryUrl: 'https://github.com/kanishkay/Credit_Card_Customer_Segmentation_KMeans',
        filePath: 'Credit_Card_Customer_Segmentation_KMeans.ipynb',
        symbolOrCell: 'Cells 1-18',
        supports: ['17 features reduced to 7 principal components', '94% variance retained', '4 K-Means clusters'],
        confirmedExists: true
      }
    ],
    title: 'Credit Card Customer Segmentation',
    tagline: 'Unsupervised machine learning analysis using K-Means clustering and PCA.',
    category: ['Data Science', 'Machine Learning'],
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1556742049-0a670f4a458d?auto=format&fit=crop&w=1200&q=80',
    description: 'An unsupervised machine learning analysis that segments credit card customers based on purchasing behavior using K-Means clustering and Principal Component Analysis (PCA).',
    problemSolved: 'Discovering behavioral customer segments from high-dimensional, collinear financial metrics.',
    technologies: [
      'Python',
      'Scikit-learn',
      'K-Means clustering',
      'Principal Component Analysis (PCA)',
      'Customer analytics'
    ],
    metrics: [
      { label: 'Feature Reduction', value: '17 to 7 PCs' },
      { label: 'Variance Retained', value: '94%' },
      { label: 'Segments', value: '4 Customer Clusters' }
    ],
    architectureSummary: 'Standardized financial attributes undergo PCA dimensionality reduction, followed by K-Means clustering.',
    keyFeatures: [
      'Applied Principal Component Analysis (PCA) reducing 17 features to 7 principal components while reducing dimensionality and retaining 94% of dataset variance',
      'Identified four distinct customer behavioral segments using K-Means clustering',
      'Provided insights for customer analytics and potential marketing and risk-analysis applications'
    ],
    challenges: [
      'Selecting component counts that maximize variance retention while reducing dimensionality.'
    ],
    engineeringDecisions: [
      'Standardized features prior to PCA to prevent scale distortion.'
    ],
    tradeoffs: [
      'PCA components require mapping back to original features for domain interpretation.'
    ],
    lessonsLearned: [
      'Dimensionality reduction prior to clustering improves cluster stability and separation quality.'
    ],
    futureRoadmap: [
      'Compare results with hierarchical and density-based clustering models.'
    ],
    githubUrl: 'https://github.com/kanishkay/Credit_Card_Customer_Segmentation_KMeans'
  },
  {
    id: 'youtube-spam-detection-nlp',
    sourceStatus: 'verified',
    verifiedClaims: [
      'Implemented text preprocessing and TF-IDF feature extraction for spam classification using Naive Bayes',
      'Built natural language processing pipeline using Python, NLTK, TF-IDF, and Scikit-learn',
      'Linguistic-pattern analysis for user-generated comment spam detection'
    ],
    needsReviewClaims: [
      'Specific MultinomialNB class import, lowercasing, and stop-word removal flags pending notebook code line inspection'
    ],
    sourceReferences: [
      {
        sourceType: 'repository-file',
        repositoryUrl: 'https://github.com/kanishkay/Youtube_Spam_Collection_NLP',
        filePath: 'Youtube_Spam_Collection_NLP.ipynb',
        symbolOrCell: 'Cells 1-12',
        supports: ['Python, NLTK, TF-IDF, Naive Bayes', 'Text preprocessing and TF-IDF vectorization'],
        confirmedExists: true
      }
    ],
    title: 'YouTube Spam Detection',
    tagline: 'Natural language processing classification pipeline using TF-IDF and Naive Bayes.',
    category: ['Data Science', 'Machine Learning'],
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=80',
    description: 'A natural language processing text classification pipeline built with Python, NLTK, TF-IDF vectorization, and Naive Bayes to detect spam in user comments.',
    problemSolved: 'Automated detection of spam comments and promotional links in user-generated text.',
    technologies: [
      'Python',
      'NLTK',
      'TF-IDF',
      'Naive Bayes',
      'Scikit-learn',
      'Text preprocessing'
    ],
    metrics: [
      { label: 'Method', value: 'TF-IDF + Naive Bayes' },
      { label: 'Domain', value: 'NLP Spam Classification' }
    ],
    architectureSummary: 'Text preprocessing pipeline cleans comment text and extracts TF-IDF vectors for Naive Bayes classification.',
    keyFeatures: [
      'Implemented text preprocessing and TF-IDF feature extraction for spam classification using Naive Bayes',
      'TF-IDF feature extraction for capture of word importance',
      'Naive Bayes probabilistic text classification',
      'Spam pattern and linguistic analysis'
    ],
    challenges: [
      'Handling informal text, misspellings, and web links in comment data.'
    ],
    engineeringDecisions: [
      'Used TF-IDF vectorization to give appropriate weight to rare informative terms over common words.'
    ],
    tradeoffs: [
      'Naive Bayes independence assumption limits complex syntactic modeling but offers fast training and execution.'
    ],
    lessonsLearned: [
      'Text preprocessing and clean tokenization are critical for Naive Bayes classification performance.'
    ],
    futureRoadmap: [
      'Explore transformer-based text embeddings.'
    ],
    githubUrl: 'https://github.com/kanishkay/Youtube_Spam_Collection_NLP'
  }
];
