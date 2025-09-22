import Image from "next/image";
import {
  Users,
  BookOpen,
  Heart,
  TrendingUp,
  Award,
  Shield,
  Eye,
  BarChart3,
} from "lucide-react";

export default function AboutMIF() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold font-montserrat mb-6">
            About MIF
          </h1>
          <p className="text-xl lg:text-2xl font-nunito max-w-4xl mx-auto mb-12 leading-relaxed">
            To nurture knowledge and strengthen our community through faith,
            education, and social welfare, creating lasting positive change in
            the lives of those we serve.
          </p>

          {/* Impact Numbers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl lg:text-4xl font-bold mb-2">1,500+</div>
              <div className="text-lg font-nunito">Lives Touched</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl lg:text-4xl font-bold mb-2">15+</div>
              <div className="text-lg font-nunito">Projects Completed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl lg:text-4xl font-bold mb-2">11M+</div>
              <div className="text-lg font-nunito">Funds Raised</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold font-montserrat text-center mb-12 text-gray-800">
              Our Story
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
              <h3 className="text-2xl font-bold font-montserrat mb-6 text-blue-800">
                Foundation & History
              </h3>
              <p className="text-lg font-nunito text-gray-700 mb-6 leading-relaxed">
                Madarsa Tul Ishaque Farooqui was established on Friday, January
                26, 2022 (11 Jamadi us Sani 1444 AH), in memory of Hazrat Shah
                Rafi Uddin Farooqui R.A. (19 Jamadi us Sani 1164, Hyderabad
                Deccan, India) and one of his lineage Muhammad Ishaque Uddin
                Farooqui (late).
              </p>
              <p className="text-lg font-nunito text-gray-700 leading-relaxed">
                What began as an educational initiative has evolved into a
                comprehensive platform for community development. Recognizing
                the interconnected nature of social challenges, MIF expanded
                from its education-focused roots to embrace healthcare,
                microfinancing, and broader social welfare programs, creating a
                holistic approach to community empowerment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold font-montserrat text-center mb-12 text-gray-800">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6 bg-blue-50 rounded-lg hover:shadow-md transition-shadow">
              <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold font-montserrat mb-2 text-gray-800">
                Education
              </h3>
              <p className="font-nunito text-gray-600">
                Scholarships, school programs, literacy initiatives
              </p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg hover:shadow-md transition-shadow">
              <Heart className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold font-montserrat mb-2 text-gray-800">
                Healthcare
              </h3>
              <p className="font-nunito text-gray-600">
                Medical assistance, health camps, emergency support
              </p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg hover:shadow-md transition-shadow">
              <TrendingUp className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold font-montserrat mb-2 text-gray-800">
                Microfinancing
              </h3>
              <p className="font-nunito text-gray-600">
                Small business loans, entrepreneurship support
              </p>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-lg hover:shadow-md transition-shadow">
              <Users className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold font-montserrat mb-2 text-gray-800">
                Social Welfare
              </h3>
              <p className="font-nunito text-gray-600">
                Community development, emergency relief
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 lg:py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold font-montserrat text-center mb-12 text-gray-800">
            Our Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold font-montserrat mb-3 text-gray-800">
                Transparency Promise
              </h3>
              <p className="font-nunito text-gray-600">
                Every donation is tracked and reported with complete
                transparency, ensuring donors know exactly how their
                contributions create impact.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Eye className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold font-montserrat mb-3 text-gray-800">
                Beneficiary Connection
              </h3>
              <p className="font-nunito text-gray-600">
                Our unique model connects donors directly with beneficiaries,
                fostering meaningful relationships and showcasing real-world
                impact.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <BarChart3 className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold font-montserrat mb-3 text-gray-800">
                Impact Tracking
              </h3>
              <p className="font-nunito text-gray-600">
                We measure success through comprehensive tracking, regular
                updates, and detailed reporting on project outcomes and
                beneficiary progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Team */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold font-montserrat text-center mb-12 text-gray-800">
            Leadership & Team
          </h2>

          {/* Key Personnel */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold font-montserrat text-center mb-8 text-gray-700">
              Key Personnel
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-gray-600" />
                </div>
                <h4 className="text-lg font-bold font-montserrat mb-2">
                  Muhammad Ahmad
                </h4>
                <p className="font-nunito text-gray-600">Founder & Chairman</p>
                <p className="font-nunito text-sm text-gray-500 mt-2">
                  Visionary leader dedicated to community empowerment
                </p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-12 h-12 text-gray-600" />
                </div>
                <h4 className="text-lg font-bold font-montserrat mb-2">
                  Dr. Sarah Khan
                </h4>
                <p className="font-nunito text-gray-600">Executive Director</p>
                <p className="font-nunito text-sm text-gray-500 mt-2">
                  Strategic operations and program development expert
                </p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="w-12 h-12 text-gray-600" />
                </div>
                <h4 className="text-lg font-bold font-montserrat mb-2">
                  Ali Hassan
                </h4>
                <p className="font-nunito text-gray-600">Projects Manager</p>
                <p className="font-nunito text-sm text-gray-500 mt-2">
                  Field operations and beneficiary relations specialist
                </p>
              </div>
            </div>
          </div>

          {/* Board Members */}
          <div>
            <h3 className="text-2xl font-bold font-montserrat text-center mb-8 text-gray-700">
              Board Members
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[1, 2, 3, 4].map((member) => (
                <div key={member} className="text-center">
                  <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <Users className="w-8 h-8 text-gray-600" />
                  </div>
                  <h4 className="text-md font-bold font-montserrat mb-1">
                    Board Member {member}
                  </h4>
                  <p className="font-nunito text-sm text-gray-600">
                    Governance & Oversight
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories & Testimonials */}
      <section className="py-16 lg:py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold font-montserrat text-center mb-12 text-gray-800">
            Success Stories & Testimonials
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-4">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 flex items-center justify-center">
                    <Users className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-bold font-montserrat">Fatima Ahmed</h4>
                    <p className="font-nunito text-sm text-gray-600">
                      Scholarship Recipient
                    </p>
                  </div>
                </div>
                <p className="font-nunito text-gray-700 italic">
                  "Thanks to MIF's scholarship program, I was able to complete
                  my engineering degree. Today, I'm working at a tech company
                  and supporting my family. MIF didn't just change my life—they
                  changed my family's future."
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-4">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-bold font-montserrat">Ahmad Hassan</h4>
                    <p className="font-nunito text-sm text-gray-600">
                      Healthcare Beneficiary
                    </p>
                  </div>
                </div>
                <p className="font-nunito text-gray-700 italic">
                  "When my daughter needed urgent surgery, MIF's healthcare
                  program stepped in immediately. Their swift action saved my
                  daughter's life. I'm forever grateful for their compassion and
                  efficiency."
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-4">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-bold font-montserrat">Mariam Khan</h4>
                    <p className="font-nunito text-sm text-gray-600">
                      Microfinance Recipient
                    </p>
                  </div>
                </div>
                <p className="font-nunito text-gray-700 italic">
                  "The small business loan from MIF helped me start my tailoring
                  business. Now I employ three other women from our community
                  and can provide for my children's education. It's amazing how
                  one opportunity can transform everything."
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-4">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 flex items-center justify-center">
                    <Award className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-bold font-montserrat">Dr. Omar Ali</h4>
                    <p className="font-nunito text-sm text-gray-600">
                      Regular Donor
                    </p>
                  </div>
                </div>
                <p className="font-nunito text-gray-700 italic">
                  "What sets MIF apart is their transparency. I receive regular
                  updates about the students I sponsor, complete with photos and
                  progress reports. It's incredible to see the direct impact of
                  my contributions."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved - Call to Action */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-green-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold font-montserrat mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl font-nunito mb-8 max-w-2xl mx-auto">
            Join our mission to transform lives through education, healthcare,
            and community development. Your contribution, no matter the size,
            creates lasting change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold font-nunito text-lg hover:bg-gray-100 transition-colors shadow-lg">
              Donate Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold font-nunito text-lg hover:bg-white hover:text-blue-600 transition-colors">
              Learn About Projects
            </button>
          </div>
          <p className="mt-6 text-sm font-nunito opacity-90">
            🔒 All donations are secure and 100% transparent
          </p>
        </div>
      </section>
    </div>
  );
}
