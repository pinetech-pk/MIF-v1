//src/app/affiliations/page.tsx
import {
  ExternalLink,
  CheckCircle,
  Clock,
  Shield,
  Building2,
  Globe,
  Award,
  FileText,
} from "lucide-react";

export default function AffiliationsPage() {
  // Registered/Affiliated institutions
  const registeredAffiliations = [
    {
      name: "United Nations - UN",
      logo: "/images/un-logo.png",
      website: "https://www.undp.org/",
      description: "United Nations Development Programme",
      category: "International Organization",
      icon: Globe,
    },
    {
      name: "Sindh Charities Registration & Regulation Commission",
      logo: "/images/sindh-charities.png",
      website: "https://charitycommission.sindh.gov.pk/",
      description: "Official charity registration authority for Sindh Province",
      category: "Government Regulatory Body",
      icon: Shield,
    },
    {
      name: "Joint Stock Companies, Sindh, Directorate of Industries & Commerce, Government of Sindh - Karachi",
      logo: "/images/joint-stock.png",
      website: null,
      description: "Provincial industrial and commercial regulatory authority",
      category: "Government Department",
      icon: Building2,
    },
    {
      name: "Federal Board of Revenue",
      logo: "/images/fbr-logo.png",
      website: "https://www.fbr.gov.pk/",
      description: "Pakistan's premier revenue collection agency",
      category: "Federal Government",
      icon: Award,
    },
    {
      name: "Wifaq-ul-Madaris al-Arabia, Pakistan",
      logo: "/images/wifaq-logo.png",
      website: "https://wifaqulmadaris.org/",
      description: "Federation of Islamic seminaries in Pakistan",
      category: "Educational Authority",
      icon: FileText,
    },
    {
      name: "Directorate General of Religious Education (DGRE)",
      logo: "/images/dgre-logo.png",
      website: "https://dgre.gov.pk/",
      description:
        "Ministry of Federal Education & Professional Training - Islamabad",
      category: "Federal Ministry",
      icon: Award,
    },
  ];

  // Under Registration institutions
  const underRegistration = [
    {
      name: "Economic Affairs Division, Government Of Pakistan",
      logo: "/images/ead-logo.png",
      website: "https://ngo.ead.gov.pk/",
      description: "NGO registration and coordination authority",
      category: "Federal Government",
      icon: Building2,
    },
    {
      name: "Sindh Technical Education & Vocational Training Authority (STEVTA)",
      logo: "/images/stevta-logo.png",
      website: "https://stevta.gos.pk/",
      description:
        "Technical and vocational education authority, Government of Sindh",
      category: "Educational Authority",
      icon: FileText,
    },
    {
      name: "Pakistan Centre for Philanthropy (PCP)",
      logo: "/images/pcp-logo.png",
      website: "https://www.pcp.org.pk/",
      description: "Leading organization promoting philanthropy in Pakistan",
      category: "Non-Profit Organization",
      icon: Globe,
    },
    {
      name: "Banking Partners",
      logo: "/images/banks-logo.png",
      website: null,
      description:
        "Al Ameen - United Bank Limited, BankIslami Pakistan Limited and Dubai Islamic Bank Limited",
      category: "Financial Institutions",
      icon: Building2,
    },
    {
      name: "Pakistan Single Window",
      logo: "/images/psw-logo.png",
      website: "https://www.psw.gov.pk/",
      description: "One-stop digital platform for government services",
      category: "Government Digital Platform",
      icon: Globe,
    },
  ];

  interface Affiliation {
    name: string;
    logo: string;
    website: string | null;
    description: string;
    category: string;
    icon: React.ComponentType<{ className?: string }>;
  }

  const AffiliationCard = ({
    affiliation,
    isRegistered = true,
  }: {
    affiliation: Affiliation;
    isRegistered?: boolean;
  }) => {
    const IconComponent = affiliation.icon;

    return (
      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100">
        {/* Status Badge */}
        <div className="flex items-center justify-between mb-4">
          <div
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
              isRegistered
                ? "bg-green-100 text-green-800"
                : "bg-yellow-100 text-yellow-800"
            }`}
          >
            {isRegistered ? (
              <>
                <CheckCircle className="w-3 h-3 mr-1" />
                Registered
              </>
            ) : (
              <>
                <Clock className="w-3 h-3 mr-1" />
                Under Registration
              </>
            )}
          </div>
          <div className="text-gray-400">
            <IconComponent className="w-5 h-5" />
          </div>
        </div>

        {/* Logo */}
        <div className="w-24 h-24 bg-gray-50 rounded-lg mx-auto mb-4 flex items-center justify-center border border-gray-200">
          {/* Logo placeholder - replace with actual images */}
          {/* <div className="text-gray-500 text-xs font-medium text-center">
            {affiliation.name
              .split(" ")
              .map((word: string) => word[0])
              .join("")
              .substring(0, 3)}
          </div> */}

          {/* Uncomment when you have actual images: */}
          <img
            src={affiliation.logo}
            alt={`${affiliation.name} Logo`}
            className="w-22 h-22 object-contain"
          />
        </div>

        {/* Content */}
        <div className="text-center">
          <h3 className="text-lg font-bold font-montserrat mb-2 text-gray-800 line-clamp-2">
            {affiliation.name}
          </h3>

          <div className="mb-3">
            <span className="inline-block bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full font-medium">
              {affiliation.category}
            </span>
          </div>

          <p className="text-sm font-nunito text-gray-600 mb-4 line-clamp-2">
            {affiliation.description}
          </p>

          {/* Website Link */}
          {affiliation.website ? (
            <a
              href={affiliation.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-nunito font-medium text-sm transition-colors"
            >
              Visit Website
              <ExternalLink className="ml-1 w-4 h-4" />
            </a>
          ) : (
            <span className="text-gray-500 font-nunito text-sm">
              Website Not Available
            </span>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold font-montserrat mb-6">
            Our Affiliations
          </h1>
          <p className="text-xl lg:text-2xl font-nunito max-w-4xl mx-auto leading-relaxed">
            MIF is officially registered and affiliated with leading national
            and international institutions, ensuring transparency, credibility,
            and compliance with regulatory standards.
          </p>
        </div>
      </section>

      {/* Registered Affiliations */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium mb-4">
              <CheckCircle className="w-5 h-5 mr-2" />
              Registered & Affiliated
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold font-montserrat mb-4 text-gray-800">
              Official Registrations
            </h2>
            <p className="text-lg font-nunito text-gray-600 max-w-3xl mx-auto">
              MIF is officially registered with these government and
              international bodies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {registeredAffiliations.map((affiliation, index) => (
              <AffiliationCard
                key={index}
                affiliation={affiliation}
                isRegistered={true}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Under Registration */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-medium mb-4">
              <Clock className="w-5 h-5 mr-2" />
              Under Registration
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold font-montserrat mb-4 text-gray-800">
              Upcoming Affiliations
            </h2>
            <p className="text-lg font-nunito text-gray-600 max-w-3xl mx-auto">
              We are in the process of registering with these additional
              institutions to expand our reach and impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {underRegistration.map((affiliation, index) => (
              <AffiliationCard
                key={index}
                affiliation={affiliation}
                isRegistered={false}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Transparency Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold font-montserrat mb-6 text-gray-800">
              Trust & Transparency
            </h2>
            <p className="text-lg font-nunito text-gray-700 leading-relaxed mb-8">
              Our affiliations with these prestigious institutions demonstrate
              our commitment to transparency, accountability, and regulatory
              compliance. Every donation and project is conducted under the
              oversight of these regulatory bodies, ensuring your contributions
              make the maximum impact.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold font-montserrat mb-2">
                  Verified
                </h3>
                <p className="font-nunito text-gray-600">
                  All registrations verified and up-to-date
                </p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold font-montserrat mb-2">
                  Compliant
                </h3>
                <p className="font-nunito text-gray-600">
                  Full compliance with all regulatory requirements
                </p>
              </div>
              <div className="text-center">
                <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold font-montserrat mb-2">
                  Recognized
                </h3>
                <p className="font-nunito text-gray-600">
                  Officially recognized by government bodies
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
