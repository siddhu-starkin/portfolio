
import React, { useEffect, useRef, useState } from 'react';
import TimelineItem from '../components/TimelineItem';
import "./career.css";
import AnimateOnVisible from '../components/AnimateOnVisible';
const Career = () => {
  const careerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Run only once
        }
      },
      { threshold: 0.1 }
    );

    if (careerRef.current) {
      observer.observe(careerRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <main className=" relative items-center box-border caret-transparent flex flex-col isolate justify-center min-h-[1000px] w-full overflow-hidden pb-8 px-4  md:px-8 before:accent-auto before:bg-[radial-gradient(rgba(192,132,252,0.3),rgba(167,139,250,0.1),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-neutral-950 before:block before:blur-3xl before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:-z-10 before:border-separate before:inset-0 before:font-geistsans_fb8f2c">
      <div className=" items-center box-border caret-transparent flex basis-[0%] flex-col grow px-4">
        <section
  ref={careerRef}
  className={`career ${isVisible ? 'animate' : ''} box-border caret-transparent flex flex-col max-w-screen-xl gap-y-4 w-full mx-auto pb-12 scroll-mt-24 md:max-w-screen-lg`}
>
          <section className="relative box-border caret-transparent w-full overflow-hidden px-2 py-12 md:px-0">
            <div className="items-center box-border caret-transparent gap-x-4 flex justify-center mb-6 md:justify-start">
              <img
                src="https://c.animaapp.com/mgxl2czwGGe9ho/assets/icon-2.svg"
                alt="Icon"
                className="text-white box-border caret-transparent h-7 w-7"
              />
              <h2 className=" text-4xl font-bold tracking-tight leading-snug break-words font-bold bg-gradient-to-r from-white via-white/80 to-white/60 bg-clip-text text-transparent drop-shadow-sm">
                Career &amp; Works
              </h2>
            </div>
            <ol className="box-border caret-transparent flex flex-col list-none gap-y-12 ml-[11.5px] mt-12 pl-0">
              <AnimateOnVisible>
              <TimelineItem
                company="UnitedHealth Group"
                workType="Onsite"
                position="Java Full Stack Developer"
                period="Jul 2024 — Present"
                responsibilities={[
                  "Architected and deployed microservices with Java 11, Spring Boot and Spring Data JPA, scaling patient, billing and reporting modules to support 50,000+ patients and 2,000+ providers.",
                  "Designed and optimized RESTful APIs for core workflows (registration, appointments, claims), cutting response times by 40% and enabling real-time data access for clinicians.",
                  "Built HIPAA-compliant security framework with Spring Security, JWT, RBAC and field-level encryption, ensuring secure storage and access of sensitive patient data.",
                  "Developed Angular 17 Single Page Applications (SPAs) for patient dashboards and appointment scheduling portals using modular components, services, and dependency injection.",
                ]}
                link="/experience/unitedhealth"
                isFirst={true}
                showViewButton={true}
              />
              </AnimateOnVisible>
              <AnimateOnVisible>
              <TimelineItem
                company="Cargill"
                workType="Onsite"
                position="Java Full Stack Developer"
                period="Nov 2023 — Jul 2024"
                responsibilities={[
                  "Delivered full-stack trading modules with Java 8, Spring MVC, Hibernate and JPA, enabling desks to process 1M+ trades annually across booking, pricing, hedging and settlement.",
                  "Optimized data persistence and retrieval by developing complex PL/SQL procedures, functions and queries on Oracle Database, automating trade data operations and improving end-of-day reconciliation speed by 20%.",
                  "Developed and maintained Enterprise JavaBeans (EJB) components to handle transactional backend processes, improving modularity and enabling seamless integration with trading microservices.",
                  "Designed SOAP and REST APIs integrating with ICE and CME feeds, giving traders real-time pricing visibility and cutting manual data updates by 40%.",
                ]}
                link="/experience/cargill"
                showViewButton={true}
              />
              </AnimateOnVisible>
              <AnimateOnVisible>
              <TimelineItem
                company="BASF"
                workType="Onsite"
                position="Java Developer"
                period="Jul 2022 — Jul 2023"
                responsibilities={[
                  "Engineered backend microservices with Java and Spring Boot to process millions of real-time events daily, enabling anomaly detection and automated safety workflows.",
                  "Integrated ERP and supply chain systems with Spring Boot and REST APIs, automating inventory reconciliation across 5+ warehouses and improving data accuracy by 25%.",
                  "Architected a microservices-based analytics platform using React, Cassandra and MySQL, developing Single Page Applications (SPAs) for real-time monitoring and performance dashboards.",
                  "Containerized and scaled services with Docker and Kubernetes (EKS) on AWS, leveraging auto-scaling groups, health probes and rolling updates to achieve 99.9% uptime during production peaks.",
                ]}
                link="/experience/basf"
                showViewButton={true}
              />
              </AnimateOnVisible>
              <AnimateOnVisible>
              <TimelineItem
                company="JLL"
                workType="Onsite"
                position="Software Engineer"
                period="Mar 2021 — Jun 2022"
                responsibilities={[
                  "Refactored legacy Struts 1 modules to Struts 2, modernizing UI workflows and reducing defect rates by 25% through cleaner MVC separation, improved validation logic and modular code design.",
                  "Developed reusable service and persistence layers using Hibernate ORM and optimized JDBC interactions with Oracle DB, improving query performance and transactional reliability.",
                  "Designed and integrated SOAP-based web services leveraging XML and HTTP protocols to enable seamless cross-platform data exchange and ETL integration between enterprise systems.",
                  "Deployed and managed Java EE applications on Pivotal Cloud Foundry (PCF), leveraging automated buildpacks, scaling and environment configuration to streamline deployments.",
                ]}
                link="/experience/jll"
                showViewButton={true}
              /></AnimateOnVisible>
            </ol>
          </section>
        </section>
      </div>
    </main>
  );
};

export default Career;