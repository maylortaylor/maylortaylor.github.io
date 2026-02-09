import Link from "next/link";
import Image from "next/image";
import TypedAnimation from "@/components/home/TypedAnimation";
import ParallaxImage from "@/components/home/ParallaxImage";
import { ChevronRight, Award, Code2, Shield, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-[600px] bg-gradient-to-br from-[#e5eff0] via-[#a8dfe5] to-[#8dd9c7] flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#263d42] mb-4">
            Matt Maylor Taylor
          </h1>

          <p className="text-2xl md:text-3xl font-semibold text-[#263d42] mb-6">
            Full-Stack Software Engineer | React | .NET | Java
          </p>

          <div className="mb-8">
            <ParallaxImage
              src="/images/matt-headshot-1.png"
              alt="Matt Taylor"
              width={250}
              height={250}
            />
          </div>

          <p className="text-xl text-[#263d42] mb-8 max-w-2xl mx-auto">
            Building mission-critical systems with modern cloud infrastructure, distributed computing, and DevOps automation. Based in St Petersburg, FL.
          </p>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 bg-[#263d42] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#3a5a61] transition-colors"
          >
            View Full Career Timeline
            <ChevronRight size={20} />
          </Link>
        </div>
      </section>

      {/* Current Role Section */}
      <section className="py-16 px-4 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#80ced7] to-[#63c7b2] rounded-lg p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Polestar Defense</h2>
            <p className="text-lg mb-4 leading-relaxed">
              As <strong>Software Engineer III</strong>, I design and build full-stack applications for mission-critical systems. I lead technical initiatives spanning frontend architecture with React, backend development with .NET and Java, and database optimization. I architect scalable solutions, mentor junior developers, and establish engineering best practices across teams.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-white text-[#263d42] px-3 py-1 rounded-full text-sm font-semibold">React</span>
              <span className="bg-white text-[#263d42] px-3 py-1 rounded-full text-sm font-semibold">.NET Core</span>
              <span className="bg-white text-[#263d42] px-3 py-1 rounded-full text-sm font-semibold">Java</span>
              <span className="bg-white text-[#263d42] px-3 py-1 rounded-full text-sm font-semibold">API Design</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#263d42] mb-12">
            Core Competencies
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Frontend Development */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Code2 size={28} className="text-[#63c7b2]" />
                <h3 className="text-xl font-bold text-[#263d42]">
                  Frontend Development
                </h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#63c7b2] font-bold">•</span>
                  React and modern component architecture
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#63c7b2] font-bold">•</span>
                  TypeScript, JavaScript, HTML5, CSS/LESS
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#63c7b2] font-bold">•</span>
                  Next.js, responsive design, state management
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#63c7b2] font-bold">•</span>
                  WCAG compliance and web accessibility standards
                </li>
              </ul>
            </div>

            {/* Backend Development */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Code2 size={28} className="text-[#80ced7]" />
                <h3 className="text-xl font-bold text-[#263d42]">
                  Backend Development
                </h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#80ced7] font-bold">•</span>
                  C#, .NET Core, and Microsoft .NET ecosystem
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#80ced7] font-bold">•</span>
                  Java backend development and microservices
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#80ced7] font-bold">•</span>
                  RESTful API design and implementation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#80ced7] font-bold">•</span>
                  Design patterns: Repository, Dependency Injection, MVC
                </li>
              </ul>
            </div>

            {/* Database & Architecture */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Zap size={28} className="text-[#ccdbdc]" />
                <h3 className="text-xl font-bold text-[#263d42]">
                  Database & Architecture
                </h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#ccdbdc] font-bold">•</span>
                  SQL optimization and query performance tuning
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ccdbdc] font-bold">•</span>
                  SQL Server, MySQL, PostgreSQL, NoSQL databases
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ccdbdc] font-bold">•</span>
                  Scalable system architecture and design
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ccdbdc] font-bold">•</span>
                  Data modeling and schema optimization
                </li>
              </ul>
            </div>

            {/* Security & Compliance */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Shield size={28} className="text-[#8e6c88]" />
                <h3 className="text-xl font-bold text-[#263d42]">
                  Security & Compliance
                </h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#8e6c88] font-bold">•</span>
                  Threat assessment and vulnerability management
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8e6c88] font-bold">•</span>
                  Access control and secure authentication patterns
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8e6c88] font-bold">•</span>
                  CompTIA Security+ certified expertise
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8e6c88] font-bold">•</span>
                  Secure coding practices and compliance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#263d42] mb-12">
            Professional Certifications
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Security+ */}
            <div className="bg-gradient-to-br from-[#8e6c88] to-[#6f5469] rounded-lg p-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Award size={32} />
                <h3 className="text-2xl font-bold">CompTIA Security+</h3>
              </div>
              <p className="mb-4 leading-relaxed">
                Achieved in February 2026. Demonstrates expertise in threat assessment, vulnerability management, access control, and cryptographic implementations essential for modern security infrastructure.
              </p>
              <a
                href="https://www.credly.com/users/matt-taylor.8ec9f95b/edit#credly"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#8e6c88] px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                View Credential
                <ChevronRight size={18} />
              </a>
            </div>

            {/* CSM */}
            <div className="bg-gradient-to-br from-[#80ced7] to-[#5eb5bf] rounded-lg p-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Award size={32} />
                <h3 className="text-2xl font-bold">Certified Scrum Master</h3>
              </div>
              <p className="mb-4 leading-relaxed">
                Earned December 2018. Specializes in optimizing sprint cycles, facilitating cross-functional collaboration, and implementing Lean principles to drive team velocity.
              </p>
              <a
                href="http://bcert.me/sbyourhga"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#80ced7] px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                View Certificate
                <ChevronRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Impact */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#263d42] mb-12">
            Leadership & Impact
          </h2>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-[#263d42] mb-3">
                Technical Leadership
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Serve as technical authority on architectural decisions, API design patterns, and system optimization. Mentor junior developers and establish best practices across teams. Drive process improvements and implement solutions that accelerate product delivery and improve system reliability.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-[#263d42] mb-3">
                Cross-Functional Collaboration
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Collaborate directly with C-level stakeholders to translate business requirements into technical specifications. Work closely with product teams, customer service, and other departments to gather requirements and define business logic. Proven ability to bridge the gap between technical implementation and business objectives.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-[#263d42] mb-3">
                System Optimization
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Expertise in optimizing database queries, improving system throughput, and reducing latency across platforms. Design and implement scalable solutions for high-availability systems serving mission-critical applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#263d42] mb-6">
            Ready to learn more?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto">
            Explore my complete career timeline, professional accomplishments, and technical expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 bg-[#80ced7] text-[#263d42] px-8 py-3 rounded-lg font-semibold hover:bg-[#5eb5bf] transition-colors"
            >
              Career Timeline
              <ChevronRight size={20} />
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-2 bg-[#263d42] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#3a5a61] transition-colors"
            >
              Technical Blog
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
