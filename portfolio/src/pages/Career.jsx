import React from 'react';
import TimelineItem from '../components/TimelineItem';

const Career = () => {
  return (
    <main className="relative items-center box-border caret-transparent flex flex-col isolate justify-center min-h-[1000px] w-full overflow-hidden pt-[200px] pb-8 px-4 md:pt-[130px] md:px-8 before:accent-auto before:bg-[radial-gradient(rgba(192,132,252,0.3),rgba(167,139,250,0.1),rgba(0,0,0,0))] before:box-border before:caret-transparent before:text-neutral-950 before:block before:blur-3xl before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:-z-10 before:border-separate before:inset-0 before:font-geistsans_fb8f2c">
      <div className="items-center box-border caret-transparent flex basis-[0%] flex-col grow px-4">
        <section className="box-border caret-transparent flex flex-col max-w-screen-xl gap-y-4 w-full mx-auto pb-24 scroll-mt-24 md:max-w-screen-lg">
          <section className="relative box-border caret-transparent w-full overflow-hidden px-2 py-12 md:px-0">
            <div className="items-center box-border caret-transparent gap-x-4 flex justify-center mb-6 md:justify-start">
              <img
                src="https://c.animaapp.com/mgxl2czwGGe9ho/assets/icon-2.svg"
                alt="Icon"
                className="text-white box-border caret-transparent h-7 w-7"
              />
              <h2 className="text-white text-4xl font-bold box-border tracking-[-0.9px] leading-10 text-pretty">
                Career &amp; Works
              </h2>
            </div>
            <ol className="box-border caret-transparent flex flex-col list-none gap-y-12 ml-[11.5px] mt-12 pl-0">
              <TimelineItem
                company="DEV Community"
                workType="Remote"
                position="DevOps Engineer"
                period="Aug, 2023 — Present"
                responsibilities={[
                  "Published technical blogs on DevOps, cloud platforms, and industry best practices.",
                  "Engaged with the tech community through informative and practical content.",
                  "Focused on delivering value through real-world insights and tutorials.",
                ]}
                link="https://dev.to/notharshhaa"
                isFirst={true}
              />
              <TimelineItem
                company="Hashnode"
                workType="Remote"
                position="DevOps Engineer"
                period="Mar, 2022 — Present"
                responsibilities={[
                  "Authored blogs on DevOps, cloud computing, and automation.",
                  "Shared technical insights and best practices with the developer community.",
                  "Contributed to knowledge sharing and community growth through consistent blogging.",
                ]}
                link="https://hashnode.com/@prodevopsguy"
              />
              <TimelineItem
                company="Tata Consultancy Services"
                workType="Hybrid"
                position="DevOps Engineer"
                period="Mar, 2023 — Present"
                responsibilities={[
                  "Designed, implemented, and maintained CI/CD pipelines to automate build, test, and deployment processes.",
                  "Ensured fast and reliable application delivery through streamlined DevOps practices.",
                  "Deployed applications to AWS and Azure via automated pipelines.",
                  "Reduced manual intervention and improved deployment consistency.",
                ]}
                link="https://www.tcs.com/"
              />
              <TimelineItem
                company="IBM"
                workType="Remote"
                position="Cloud DevOps Engineer"
                period="Dec, 2021 — Feb, 2023"
                responsibilities={[
                  "Provisioned AWS resources using Terraform with Infrastructure-as-Code (IaC) practices.",
                  "Managed and containerized microservices using Docker.",
                  "Optimized Docker images and uploaded to AWS ECR.",
                  "Integrated containers with Kubernetes for scalable deployments.",
                ]}
                link="https://www.ibm.com/"
              />
              <TimelineItem
                company="JNTUH"
                workType="OnCampus"
                position="Bachelor of Technology"
                period="Jul, 2015 — Jun, 2020"
                responsibilities={[
                  "Graduated with a B.Tech degree, gaining a strong foundation in engineering and problem-solving.",
                ]}
                link="https://jntuh.ac.in/"
              />
            </ol>
          </section>
        </section>
      </div>
    </main>
  );
};

export default Career;