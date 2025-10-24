import React from 'react';
import { useParams } from 'react-router-dom';
import ExperienceDetail from '../components/ExperienceDetail';

const Experience = () => {
  const { id } = useParams();

  const experiences = {
    'unitedhealth': {
      id: 'unitedhealth',
      title: 'Java Full Stack Developer',
      company: 'UnitedHealth Group',
      location: 'Overland Park, KS',
      period: 'Jul 2024 - Present',
      description: 'Architected and deployed microservices with Java 11, Spring Boot and Spring Data JPA, scaling patient, billing and reporting modules to support 50,000+ patients and 2,000+ providers.',
      details: [
        'Architected and deployed microservices with Java 11, Spring Boot and Spring Data JPA, scaling patient, billing and reporting modules to support 50,000+ patients and 2,000+ providers.',
        'Designed and optimized RESTful APIs for core workflows (registration, appointments, claims), cutting response times by 40% and enabling real-time data access for clinicians.',
        'Built HIPAA-compliant security framework with Spring Security, JWT, RBAC and field-level encryption, ensuring secure storage and access of sensitive patient data.',
        'Developed Angular 17 Single Page Applications (SPAs) for patient dashboards and appointment scheduling portals using modular components, services, and dependency injection, improving user experience and responsiveness for clinicians and patients.',
        'Implemented RxJS observables, custom directives, and Angular routing to enable real-time data updates and seamless navigation across clinical workflows.',
        'Integrated Angular front-end with Spring MVC microservices, leveraging AOP for logging and transaction handling and IOC for session lifecycle management, ensuring seamless synchronization and secure data flow across modules.',
        'Implemented multithreading to efficiently handle concurrent clinical requests and parallel API calls, improving backend processing speed and overall application responsiveness by 35%.',
        'Introduced Kafka-based event-driven messaging, powering instant lab result delivery and appointment reminders that boosted patient engagement.',
        'Redesigned PostgreSQL schemas and implemented Redis caching, reducing query times and accelerating patient record retrieval during critical care.',
        'Modernized legacy monolithic modules into a microservices architecture, cutting deployment downtime from hours to minutes and improving scalability.',
        'Wrote Hibernate Criteria queries for data retrievals and have performed the ORM mappings to map java entities to database tables.',
        'Built an asynchronous message-oriented middleware (MOM) layer using JMS and enforced secure authentication with Spring Security, improving reliability and throughput of concurrent clinical transactions.',
        'Deployed services on AWS (EKS, RDS, S3) using Docker, Kubernetes and Terraform, improving scalability and reducing infrastructure costs by 15%.',
        'Automated CI/CD pipelines with Jenkins, enabling faster, more reliable releases and reducing deployment errors by 30%.',
        'Collaborated with healthcare SMEs and product owners to translate clinical workflows into technical solutions, ensuring alignment with regulatory and business needs.',
        'Integrated HL7/FHIR APIs for interoperability with third-party Electronic Health Record (EHR) systems and ensured compliance with HIPAA and PHI standards.',
        'Mentored a team of 3 junior developers, leading code reviews and pair programming sessions that raised code quality and reduced onboarding time by 30%.'
      ]
    },
    'cargill': {
      id: 'cargill',
      title: 'Java Full Stack Developer',
      company: 'Cargill',
      location: 'Wichita, KS',
      period: 'Nov 2023 - Jul 2024',
      description: 'Delivered full-stack trading modules with Java 8, Spring MVC, Hibernate and JPA, enabling desks to process 1M+ trades annually across booking, pricing, hedging and settlement.',
      details: [
        'Delivered full-stack trading modules with Java 8, Spring MVC, Hibernate and JPA, enabling desks to process 1M+ trades annually across booking, pricing, hedging and settlement.',
        'Optimized data persistence and retrieval by developing complex PL/SQL procedures, functions and queries on Oracle Database, automating trade data operations and improving end-of-day reconciliation speed by 20% across booking and settlement modules.',
        'Developed and maintained Enterprise JavaBeans (EJB) components to handle transactional backend processes, improving modularity and enabling seamless integration with trading microservices.',
        'Leveraged Spring IoC container to efficiently manage bean lifecycle and session scope, ensuring consistent state management, loose coupling and smooth dependency injection across microservices.',
        'Designed SOAP and REST APIs integrating with ICE and CME feeds, giving traders real-time pricing visibility and cutting manual data updates by 40%.',
        'Implemented versioned RESTful web services using Spring REST integrated with the Jersey framework, featuring structured response entities, exception mappers and custom error handling that improved API reliability and interoperability across distributed modules.',
        'Developed Angular 14 based risk dashboards implementing custom directives, routing, services, and reusable UI modules to deliver real-time P&L and exposure visibility that cut reporting cycles from hours to minutes and boosted trader responsiveness.',
        'Engineered IBM MQ pipelines to synchronize trade events across 5+ global hubs, reducing reconciliation delays by 30% and ensuring compliance-grade accuracy.',
        'Automated AWS infrastructure provisioning using Terraform, converting legacy manual instance setups into reusable infrastructure as-code templates and improving deployment consistency across trading environments.',
        'Elevated quality assurance with JUnit, Mockito and Selenium test suites, increasing defect detection by 45% and minimizing production issues.',
        'Involved in all phases of the Software Development Life Cycle (SDLC) using Agile methodologies, contributing to design artifacts such as use case diagrams, class diagrams and sequence diagrams.',
        'Partnered with traders, risk analysts and compliance officers to embed regulatory checks into workflows, lowering audit findings by 15%.',
        'Spearheaded workflow optimization initiatives, reducing trade data processing latency by 25% and enabling faster, more reliable risk reporting.'
      ]
    },
    'basf': {
      id: 'basf',
      title: 'Java Developer',
      company: 'BASF',
      location: 'Mumbai, India',
      period: 'Jul 2022 - Jul 2023',
      description: 'Engineered backend microservices with Java and Spring Boot to process millions of real-time events daily, enabling anomaly detection and automated safety workflows.',
      details: [
        'Engineered backend microservices with Java and Spring Boot to process millions of real-time events daily, enabling anomaly detection and automated safety workflows.',
        'Integrated ERP and supply chain systems with Spring Boot and REST APIs, automating inventory reconciliation across 5+ warehouses and improving data accuracy by 25%.',
        'Architected a microservices-based analytics platform using React, Cassandra and MySQL, developing Single Page Applications (SPAs) for real-time monitoring and performance dashboards that enhanced user experience and operational visibility.',
        'Used React JS to make webpages rendering faster using virtual DOM and took part in testing the application components using JEST, React test utils and mocked http calls.',
        'Built reusable service components using Angular.js, Node.js and Object-Oriented JavaScript integrated with HTML, CSS and jQuery, transforming static designs into interactive, responsive web interfaces that improved user engagement and cut frontend development time by 30%.',
        'Containerized and scaled services with Docker and Kubernetes (EKS) on AWS, leveraging auto-scaling groups, health probes and rolling updates to achieve 99.9% uptime during production peaks.',
        'Implemented CloudWatch dashboards, log insights and alerting for API latency and throughput metrics, reducing mean-time-to-detect (MTTD) by 40%.',
        'Automated CI/CD pipelines with Jenkins and GitHub, cutting release cycles by 50% and eliminating manual deployment errors.',
        'Collaborated with engineers and compliance officers to embed safety standards into digital workflows, reducing audit findings by 20%.',
        'Enhanced observability with centralized logging and monitoring (ELK, Prometheus, Grafana), enabling early detection of bottlenecks and anomalies.'
      ]
    },
    'jll': {
      id: 'jll',
      title: 'Software Engineer',
      company: 'JLL',
      location: 'Mumbai, India',
      period: 'Mar 2021 - Jun 2022',
      description: 'Refactored legacy Struts 1 modules to Struts 2, modernizing UI workflows and reducing defect rates by 25% through cleaner MVC separation, improved validation logic and modular code design.',
      details: [
        'Refactored legacy Struts 1 modules to Struts 2, modernizing UI workflows and reducing defect rates by 25% through cleaner MVC separation, improved validation logic and modular code design.',
        'Developed reusable service and persistence layers using Hibernate ORM and optimized JDBC interactions with Oracle DB, improving query performance and transactional reliability.',
        'Designed and integrated SOAP-based web services leveraging XML and HTTP protocols to enable seamless cross-platform data exchange and ETL integration between enterprise systems.',
        'Implemented centralized exception handling, validation and logging frameworks (Validator, Logback) to ensure consistent error tracking, debugging efficiency and operational visibility.',
        'Deployed and managed Java EE applications on Pivotal Cloud Foundry (PCF), leveraging automated buildpacks, scaling and environment configuration to streamline deployments and ensure consistent runtime behavior.',
        'Adopted Test-Driven Development (TDD) across service modules, reducing post-release defects by 30% and accelerating feature delivery through early validation and continuous feedback loops.',
        'Used Git for version control and branch management to streamline team collaboration, ensure code integrity and maintain a consistent CI/CD workflow.',
        'Configured and maintained Maven build lifecycle and POM dependencies for multi-module Java applications, integrating with Jenkins pipelines to automate build, test and deployment stages.',
        'Introduced object-oriented refactoring and design patterns (DAO, Strategy, Template Method) to improve scalability and maintainability of enterprise modules.',
        'Collaborated with business analysts and solution architects to gather requirements and deliver secure, scalable Java EE web applications using Struts 2, JSP, JSTL and JavaScript, enhancing usability and maintainability.'
      ]
    }
  };

  const experience = experiences[id];

  if (!experience) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Experience Not Found</h1>
          <p className="text-gray-400">The requested experience could not be found.</p>
        </div>
      </div>
    );
  }

  return <ExperienceDetail experience={experience} />;
};

export default Experience;