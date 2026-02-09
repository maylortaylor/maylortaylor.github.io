import Link from "next/link";
import Image from "next/image";
import TypedAnimation from "@/components/home/TypedAnimation";
import ParallaxImage from "@/components/home/ParallaxImage";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-[600px] bg-gradient-to-br from-[#e5eff0] via-[#a8dfe5] to-[#8dd9c7] flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#263d42] mb-6">
            Matt Maylor Taylor
          </h1>

          <div className="mb-8">
            <ParallaxImage
              src="/images/matt-headshot-1.png"
              alt="Matt Taylor"
              width={250}
              height={250}
            />
          </div>

          <div className="text-2xl md:text-3xl mb-4 text-[#263d42] font-semibold min-h-[2em]">
            <TypedAnimation />
          </div>

          <p className="text-xl text-[#263d42] mb-2">in St Petersburg, FL</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
            I have 6+ years of experience in real world work environments. I
            helped develop a SaaS start-up company for 4 years. The company grew
            from 5 employees and 12 clients to 35 employees and 100+ clients.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#263d42] mb-12">
            My Skills and Achievements
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-[#263d42] mb-4 text-[#80ced7]">
                Backend Development
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#80ced7] font-bold">•</span>
                  5+ years with SQL and MySQL databases
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#80ced7] font-bold">•</span>
                  5+ years with C#, Razor templates, and MVC framework
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#80ced7] font-bold">•</span>
                  5+ years using .NET 4.6 and 4.7
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#80ced7] font-bold">•</span>
                  2+ years with CosmosDb and .NET Core
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-[#263d42] mb-4 text-[#63c7b2]">
                Frontend Development
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#63c7b2] font-bold">•</span>
                  4+ years of AngularJS development
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#63c7b2] font-bold">•</span>
                  Expert in Javascript, Typescript, HTML, CSS/LESS
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#63c7b2] font-bold">•</span>
                  2+ years with Node, Express, and MEAN stack
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#63c7b2] font-bold">•</span>
                  1 year with PHP Laravel
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-[#263d42] mb-4">
              Standards & Patterns
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Well versed on proper RESTful standards, HTML5 standards, WCAG
              compliance standards, and C# coding patterns such as the "Visitor
              Pattern" and the "Repository Pattern"
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            I am very experienced in the Microsoft .NET environment, the
            AngularJS and Angular2+ front-end frameworks, SQL and MySql
            relational databases, Mongo and CosmosDB non-relational databases,
            and Node JS server applications.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 bg-[#80ced7] text-[#263d42] px-6 py-3 rounded-lg font-semibold hover:bg-[#5eb5bf] transition-colors"
          >
            Read more about my life
            <ChevronRight size={20} />
          </Link>
        </div>
      </section>

      {/* CSM Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center">
            <a
              href="http://bcert.me/sbyourhga"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:opacity-80 transition-opacity"
            >
              <Image
                src="/images/seal-csm.png"
                alt="CSM Seal (click to see the certificate)"
                width={250}
                height={250}
                className="rounded-full shadow-lg"
              />
            </a>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#263d42] mb-4">
              Certified Scrum Master
            </h2>
            <p className="text-gray-700 mb-4">
              I completed the Certified Scrum Master (CSM) training and
              certification, demonstrating my expertise in Agile methodologies
              and Scrum practices.
            </p>
            <a
              href="http://bcert.me/sbyourhga"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#63c7b2]2 text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#63c7b2]2-dark transition-colors"
            >
              View Certificate
              <ChevronRight size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
