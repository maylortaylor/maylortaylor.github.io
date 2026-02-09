import Link from "next/link";
import { Metadata } from "next";
import { Download } from "lucide-react";

export const metadata: Metadata = {
  title: "CV / Resume | Matt Maylor Taylor",
  description: "Download or view the CV and resume for Matt Maylor Taylor.",
};

export default function CVPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-[#263d42] mb-8 text-center">CV / Resume</h1>

      <div className="mb-8 text-center">
        <a
          href="/Resume_2026.pdf"
          download
          className="inline-flex items-center gap-2 bg-[#80ced7] text-[#263d42] px-8 py-3 rounded-lg font-semibold hover:bg-[#5eb5bf] transition-colors"
        >
          <Download size={20} />
          Download Resume (PDF)
        </a>
      </div>

      <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg" style={{ height: "800px" }}>
        <embed
          src="/Resume_2026.pdf"
          type="application/pdf"
          width="100%"
          height="100%"
        />
      </div>

      <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-gray-700">
          If the PDF doesn't display properly in your browser, you can{" "}
          <a
            href="/Resume_2026.pdf"
            download
            className="text-[#80ced7] hover:text-[#5eb5bf] font-semibold"
          >
            download it directly
          </a>
          .
        </p>
      </div>
    </div>
  );
}
