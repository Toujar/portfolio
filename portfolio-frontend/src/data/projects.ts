export interface ProjectScreenshot {
  url: string;
  caption: string;
}

export interface ProjectStat {
  label: string;
  value: string;
}

export interface Challenge {
  title: string;
  description: string;
  solution: string;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  problem: string;
  solution: string;
  image: string;
  screenshots: ProjectScreenshot[];
  technologies: string[];
  features: string[];
  architecture: string[];
  challenges: Challenge[];
  learnings: string[];
  githubUrl: string;
  liveUrl: string;
  docsUrl?: string;
  stats: ProjectStat[];
  featured: boolean;
  category: string;
}

export const projects: Project[] = [
  // ── 1. Food Delivery (unchanged) ─────────────────────────────────────────
  {
    id: 'food-delivery-app',
    title: 'Food Delivery Application',
    shortDescription: 'Full-stack food delivery platform with real-time order tracking, role-based access, and restaurant management.',
    description:
      'A production-grade full-stack food delivery application built with Spring Boot and React. The platform supports multiple user roles — Customer, Restaurant Owner, and Admin — with secure JWT-based authentication, real-time order tracking, cart management, and a comprehensive admin dashboard.',
    problem:
      'Traditional food ordering systems are fragmented: customers struggle to discover restaurants, restaurant owners lack digital tools, and admins have no unified visibility. This application addresses all three pain points in a single integrated platform.',
    solution:
      'A layered Spring Boot backend exposes a clean REST API consumed by a React frontend. Role-based access control ensures customers, restaurant owners, and admins each see only what they need. The architecture is designed to scale horizontally with Docker.',
    image: '/images/projects/food-delivery/cover.jpg',
    screenshots: [
      { url: '/images/projects/food-delivery/login.jpg',      caption: 'Login & Registration' },
      { url: '/images/projects/food-delivery/home.jpg',       caption: 'Customer Home Page' },
      { url: '/images/projects/food-delivery/cart.jpg',       caption: 'Cart & Checkout' },
      { url: '/images/projects/food-delivery/order.jpg',      caption: 'Order Tracking' },
      { url: '/images/projects/food-delivery/admin.jpg',      caption: 'Admin Dashboard' },
      { url: '/images/projects/food-delivery/restaurant.jpg', caption: 'Restaurant Management' },
    ],
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'React', 'MySQL', 'Docker', 'JWT', 'Axios', 'Tailwind CSS'],
    features: [
      'JWT-based authentication & authorisation',
      'Role-based access: Customer / Restaurant / Admin',
      'Restaurant discovery & menu browsing',
      'Add to cart & checkout flow',
      'Real-time order status tracking',
      'Restaurant owner dashboard',
      'Admin control panel',
      'Order history & profile management',
      'Input validation & global exception handling',
      'Docker containerisation',
    ],
    architecture: ['React (Vite)', 'REST API (Axios)', 'Spring Boot Controllers', 'Service Layer', 'Repository Layer (JPA)', 'MySQL Database'],
    challenges: [
      {
        title: 'Role-Based Route Protection',
        description: 'Ensuring React routes and Spring Boot endpoints both enforce role restrictions without duplication.',
        solution: 'Implemented a Spring Security filter chain with JWT claims for roles, and mirrored that in React with a ProtectedRoute HOC that reads the decoded token.',
      },
      {
        title: 'Real-Time Order Updates',
        description: 'Customers needed live order status without full-page refreshes.',
        solution: 'Used polling via React hooks with a configurable interval. The backend exposes a lightweight status endpoint that returns only the order state, minimising payload.',
      },
      {
        title: 'Database Relationship Design',
        description: 'Modelling menu items, cart, orders, and order-items with correct cascading.',
        solution: 'Designed @OneToMany / @ManyToOne JPA relationships with eager/lazy loading tuned per use case, preventing N+1 queries.',
      },
    ],
    learnings: [
      'End-to-end JWT authentication flow in Spring Security',
      'React Context API for auth state management',
      'JPA relationship mapping and performance tuning',
      'Docker multi-service networking with docker-compose',
      'Designing REST APIs that are both usable and secure',
    ],
    githubUrl: 'https://github.com/Toujar/Zwigato',
    liveUrl: '#',
    stats: [
      { label: 'REST APIs',  value: '20+' },
      { label: 'DB Tables',  value: '10'  },
      { label: 'User Roles', value: '3'   },
      { label: 'Features',   value: '25+' },
    ],
    featured: true,
    category: 'Full Stack',
  },

  // ── 2. CreatorFlow ───────────────────────────────────────────────────────
  {
    id: 'creatorflow',
    title: 'CreatorFlow – Content Approval & Publishing Platform',
    shortDescription: 'Role-based content approval workflow that eliminates credential sharing between creators and editors.',
    description:
      'CreatorFlow is a secure content collaboration platform built with Spring Boot and React. It solves the common problem of content creators sharing account credentials with editors by introducing a structured, JWT-secured workflow where editors can review, annotate, and submit content for creator approval before it is scheduled and published.',
    problem:
      'Content creators routinely hand over platform credentials to editors to upload and schedule videos, exposing accounts to unauthorised changes and security breaches. There was no safe way to delegate publishing tasks without losing control.',
    solution:
      'Introduced a role-based approval workflow — Creators, Editors, and Admins each operate within their own permission boundary. Editors submit content for review; Creators approve and schedule from a dedicated dashboard. Spring Boot APIs enforce every transition; JWT ensures only authenticated, authorised roles can act.',
    image: '/images/projects/creatorflow/cover.jpg',
    screenshots: [
      { url: '/images/projects/creatorflow/dashboard.jpg', caption: 'Creator Dashboard' },
      { url: '/images/projects/creatorflow/editor.jpg',    caption: 'Editor Review Panel' },
      { url: '/images/projects/creatorflow/approval.jpg',  caption: 'Approval Workflow' },
      { url: '/images/projects/creatorflow/schedule.jpg',  caption: 'Content Scheduling' },
      { url: '/images/projects/creatorflow/login.jpg',     caption: 'Login & Role Selection' },
    ],
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'React', 'MySQL', 'JWT', 'Axios', 'Tailwind CSS'],
    features: [
      'Role-based access: Creator / Editor / Admin',
      'Secure content submission & review queue',
      'Approval, rejection & revision workflow',
      'Content scheduling & publishing pipeline',
      'JWT authentication on every API call',
      'Audit trail for all approval actions',
      'Notification system for status changes',
      'Admin oversight & user management',
    ],
    architecture: ['React (Vite)', 'Axios + JWT', 'Spring Boot REST Controllers', 'Approval Service Layer', 'Spring Security Filter Chain', 'Repository Layer (JPA)', 'MySQL Database'],
    challenges: [
      {
        title: 'Workflow State Machine',
        description: 'Content needed to transition through DRAFT → SUBMITTED → UNDER_REVIEW → APPROVED / REJECTED → SCHEDULED → PUBLISHED without allowing invalid jumps.',
        solution: 'Modelled content status as an enum-driven state machine in the service layer. Each transition is validated before persistence, and invalid transitions return a 400 with a descriptive error.',
      },
      {
        title: 'Fine-Grained Role Enforcement',
        description: 'Editors should only see content assigned to them; Creators should only approve their own content.',
        solution: 'Combined Spring Security method-level @PreAuthorize with ownership checks in the service layer, keeping controllers thin and security logic centralised.',
      },
      {
        title: 'Preventing Credential Sharing',
        description: 'The core business problem — making shared credentials unnecessary.',
        solution: 'Every publishing action is an API call requiring a valid JWT scoped to the actor\'s role. Editors never need a creator\'s platform password.',
      },
    ],
    learnings: [
      'Designing enum-driven workflow state machines in Spring Boot',
      'Method-level security with @PreAuthorize and custom permission evaluators',
      'Structuring multi-role applications with clean service boundaries',
      'Building audit trails for regulated business workflows',
    ],
    githubUrl: 'https://github.com/Toujar/CreatorFlow',
    liveUrl: '#',
    stats: [
      { label: 'REST APIs',    value: '18+' },
      { label: 'User Roles',   value: '3'   },
      { label: 'Workflow States', value: '6' },
      { label: 'DB Tables',    value: '8'   },
    ],
    featured: true,
    category: 'Full Stack',
  },

  // ── 3. ChatGuard Enterprise ──────────────────────────────────────────────
  {
    id: 'chatguard-enterprise',
    title: 'ChatGuard Enterprise – Secure Real-Time Messaging',
    shortDescription: 'Enterprise messaging platform with a Chat Protection Engine that intercepts and verifies sensitive actions before execution.',
    description:
      'ChatGuard Enterprise is a secure real-time messaging platform built with Spring Boot WebSockets and React. At its core is the Chat Protection Engine — a middleware layer that detects high-risk messages (bulk sends, account changes, financial instructions) and holds them for secondary confirmation before delivery, preventing costly mistakes in high-stakes team conversations.',
    problem:
      'In enterprise environments, a misrouted message, an accidental bulk send, or an unverified instruction in a high-priority chat can cause significant operational and financial damage. Standard messaging apps offer no safeguard once Send is pressed.',
    solution:
      'The Chat Protection Engine analyses outgoing messages against configurable risk rules. Flagged messages enter a pending state requiring explicit confirmation. WebSocket sessions handle real-time delivery, typing indicators, and read receipts, while Spring Security + JWT protect every connection and REST endpoint.',
    image: '/images/projects/chatguard/cover.jpg',
    screenshots: [
      { url: '/images/projects/chatguard/chat.jpg',       caption: 'Real-Time Chat Interface' },
      { url: '/images/projects/chatguard/protection.jpg', caption: 'Protection Engine Alert' },
      { url: '/images/projects/chatguard/confirm.jpg',    caption: 'Action Confirmation Dialog' },
      { url: '/images/projects/chatguard/rooms.jpg',      caption: 'Chat Rooms & Channels' },
      { url: '/images/projects/chatguard/login.jpg',      caption: 'Secure Login' },
    ],
    technologies: ['Java', 'Spring Boot', 'WebSocket', 'STOMP', 'Spring Security', 'React', 'JWT', 'MySQL', 'Axios', 'Tailwind CSS'],
    features: [
      'Real-time messaging via WebSocket & STOMP',
      'Chat Protection Engine for sensitive action verification',
      'JWT authentication on WebSocket handshake',
      'Typing indicators & read receipts',
      'Private and group chat rooms',
      'Message history with pagination',
      'Configurable risk-rule definitions',
      'Role-based channel access',
    ],
    architecture: ['React (Vite)', 'WebSocket / STOMP Client', 'Spring Boot WebSocket Handler', 'Chat Protection Engine', 'Message Service', 'Spring Security', 'MySQL Database'],
    challenges: [
      {
        title: 'Authenticating WebSocket Connections',
        description: 'HTTP-based JWT filters do not automatically apply to WebSocket upgrade requests.',
        solution: 'Implemented a custom ChannelInterceptor that extracts and validates the JWT from the STOMP CONNECT frame headers before the session is established.',
      },
      {
        title: 'Chat Protection Engine Design',
        description: 'Intercepting and holding messages without blocking the real-time feel of the UI.',
        solution: 'Flagged messages are saved to a pending_messages table and an acknowledgement event is emitted back to the sender over WebSocket. Confirmed messages are then broadcast normally.',
      },
      {
        title: 'Real-Time State Sync Across Tabs',
        description: 'Read receipts and typing indicators needed to be consistent even if a user had multiple browser tabs open.',
        solution: 'Used Spring\'s SimpMessagingTemplate to broadcast presence events to all sessions associated with a user principal.',
      },
    ],
    learnings: [
      'WebSocket lifecycle management with Spring & STOMP',
      'Securing WebSocket connections with JWT at the STOMP layer',
      'Designing interceptor-based middleware for real-time applications',
      'Handling multi-session user presence in a messaging system',
    ],
    githubUrl: 'https://github.com/Toujar/ChatGaurd',
    liveUrl: '#',
    stats: [
      { label: 'REST APIs',     value: '15+' },
      { label: 'WS Events',     value: '10+' },
      { label: 'Risk Rules',    value: '8'   },
      { label: 'DB Tables',     value: '7'   },
    ],
    featured: true,
    category: 'Full Stack',
  },

  // ── 4. SmartLease Hub ────────────────────────────────────────────────────
  {
    id: 'smartlease-hub',
    title: 'SmartLease Hub – Property Rental Platform',
    shortDescription: 'Centralised rental platform connecting property owners and tenants with secure booking and request management.',
    description:
      'SmartLease Hub is a full-stack property rental platform that streamlines the entire rental lifecycle — from listing discovery to booking confirmation. Owners publish properties, set availability, and manage lease requests; Tenants search, filter, and submit rental applications; an Admin oversees the platform. All interactions are secured with JWT and role-based access control.',
    problem:
      'Renting property involves disjointed communication — listings on one platform, negotiations over email, documents via WhatsApp. Both owners and tenants lack a single place to manage the full process securely and transparently.',
    solution:
      'SmartLease Hub centralises property listings, rental requests, and lease management in one platform. Spring Boot REST APIs power every workflow; React provides a responsive, filterable search experience; role-based access control ensures owners, tenants, and admins each operate in their own secure context.',
    image: '/images/projects/smartlease/cover.jpg',
    screenshots: [
      { url: '/images/projects/smartlease/search.jpg',   caption: 'Property Search & Filters' },
      { url: '/images/projects/smartlease/listing.jpg',  caption: 'Property Listing Detail' },
      { url: '/images/projects/smartlease/booking.jpg',  caption: 'Booking Request Flow' },
      { url: '/images/projects/smartlease/owner.jpg',    caption: 'Owner Dashboard' },
      { url: '/images/projects/smartlease/tenant.jpg',   caption: 'Tenant Dashboard' },
    ],
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'React', 'MySQL', 'JWT', 'Axios', 'Tailwind CSS'],
    features: [
      'Role-based access: Owner / Tenant / Admin',
      'Property listing with images, amenities & pricing',
      'Advanced search, filter & sort',
      'Rental request submission & management',
      'Booking confirmation & lease tracking',
      'Owner and tenant dashboards',
      'Secure REST APIs for all rental workflows',
      'Input validation & global error handling',
    ],
    architecture: ['React (Vite)', 'Axios + JWT', 'Spring Boot REST Controllers', 'Rental Workflow Service', 'Spring Security', 'Repository Layer (JPA)', 'MySQL Database'],
    challenges: [
      {
        title: 'Complex Search & Filtering',
        description: 'Tenants needed to filter properties by location, price range, type, and availability simultaneously.',
        solution: 'Used Spring Data JPA Specifications to dynamically compose WHERE clauses at runtime based on the active filter combination, avoiding N separate query methods.',
      },
      {
        title: 'Concurrent Booking Requests',
        description: 'Multiple tenants could submit requests for the same property at the same time.',
        solution: 'Applied optimistic locking on the property availability field with @Version, causing concurrent conflicting requests to fail gracefully with a meaningful response.',
      },
      {
        title: 'Role-Specific Data Visibility',
        description: 'Owners should only manage their own listings; tenants should only see their own requests.',
        solution: 'Enforced ownership at the service layer — every query filters by the authenticated user\'s ID, and @PreAuthorize prevents cross-user operations at the method level.',
      },
    ],
    learnings: [
      'JPA Specifications for dynamic query composition',
      'Optimistic locking for concurrent resource management',
      'Designing multi-role dashboards with shared REST endpoints',
      'Building filterable, paginated search with Spring Data',
    ],
    githubUrl: 'https://github.com/Toujar/SmartLease-Hub',
    liveUrl: '#',
    stats: [
      { label: 'REST APIs',  value: '22+' },
      { label: 'User Roles', value: '3'   },
      { label: 'DB Tables',  value: '9'   },
      { label: 'Features',   value: '20+' },
    ],
    featured: false,
    category: 'Full Stack',
  },

  // ── 5. FinSight AI ───────────────────────────────────────────────────────
  {
    id: 'finsight-ai',
    title: 'FinSight AI – Expense Management System',
    shortDescription: 'OCR-powered expense tracker that auto-extracts bill data, categorises spending, and provides budget analytics.',
    description:
      'FinSight AI eliminates manual expense entry by integrating an OCR API to extract line-item data directly from uploaded bill images. The system automatically categorises expenses, monitors budgets in real time, and surfaces spending analytics through a clean React dashboard backed by Spring Boot APIs and a MySQL/MongoDB hybrid storage strategy.',
    problem:
      'Manual expense tracking is time-consuming and error-prone. Employees misfile categories, forget to log receipts, and teams lack real-time visibility into budget consumption — leading to overspending and compliance issues.',
    solution:
      'Users upload a photo of a bill; the OCR API extracts vendor, date, line items, and total. The categorisation engine maps extracted data to expense categories. Spring Boot APIs manage the expense lifecycle, enforce budget limits, and aggregate analytics. MongoDB stores unstructured receipt data; MySQL stores structured financial records.',
    image: '/images/projects/finsight/cover.jpg',
    screenshots: [
      { url: '/images/projects/finsight/upload.jpg',     caption: 'Bill Upload & OCR Extraction' },
      { url: '/images/projects/finsight/dashboard.jpg',  caption: 'Expense Dashboard' },
      { url: '/images/projects/finsight/analytics.jpg',  caption: 'Spending Analytics' },
      { url: '/images/projects/finsight/budget.jpg',     caption: 'Budget Monitoring' },
      { url: '/images/projects/finsight/categories.jpg', caption: 'Category Management' },
    ],
    technologies: ['Java', 'Spring Boot', 'OCR API', 'MySQL', 'MongoDB', 'Spring Data JPA', 'Spring Data MongoDB', 'React', 'JWT', 'Axios', 'Tailwind CSS'],
    features: [
      'OCR-powered bill scanning & data extraction',
      'Automatic expense categorisation engine',
      'Real-time budget monitoring & alerts',
      'Spending analytics with charts & trends',
      'Manual expense entry as fallback',
      'Secure transaction handling with JWT',
      'Category management & custom rules',
      'Export expense reports',
    ],
    architecture: ['React (Vite)', 'Axios + JWT', 'Spring Boot REST Controllers', 'OCR Integration Service', 'Categorisation Engine', 'MySQL (structured records)', 'MongoDB (raw receipt data)'],
    challenges: [
      {
        title: 'OCR Data Normalisation',
        description: 'Different bill formats from different vendors produce inconsistent OCR output — vendor names, date formats, and amount fields vary widely.',
        solution: 'Built a normalisation pipeline that applies regex patterns and fuzzy matching to standardise extracted fields before they reach the categorisation engine.',
      },
      {
        title: 'Dual Database Strategy',
        description: 'Structured financial data (amounts, categories, budgets) and unstructured receipt payloads needed different storage strategies.',
        solution: 'Used MySQL via Spring Data JPA for transactional financial records and MongoDB via Spring Data MongoDB for raw OCR payloads. A shared expense ID links the two.',
      },
      {
        title: 'Real-Time Budget Alerts',
        description: 'Users needed to be alerted the moment a budget threshold was breached, not at end-of-day.',
        solution: 'After each expense save, a budget check runs synchronously in the service layer. If a threshold is crossed, a notification record is persisted and surfaced on the next dashboard poll.',
      },
    ],
    learnings: [
      'Integrating third-party OCR APIs into a Spring Boot service pipeline',
      'Polyglot persistence with MySQL and MongoDB in the same application',
      'Building categorisation engines with rule-based and pattern-matching approaches',
      'Designing analytics endpoints that aggregate financial data efficiently',
    ],
    githubUrl: 'https://github.com/Toujar/AI-Powered-Expense-Tracker',
    liveUrl: '#',
    stats: [
      { label: 'REST APIs',   value: '20+' },
      { label: 'DB Tables',   value: '8'   },
      { label: 'Categories',  value: '15+' },
      { label: 'Features',    value: '18+' },
    ],
    featured: false,
    category: 'Full Stack',
  },
];
