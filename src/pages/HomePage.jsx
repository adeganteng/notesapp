import { Button } from "@/components/ui/button";
import { CgNotes, CgPen } from "react-icons/cg";
import { FaArrowRight } from "react-icons/fa";
import { BiBrain, BiSearch, BiSync } from "react-icons/bi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <BiBrain className="text-4xl text-blue-500" />,
      title: "Simple & Fast Note-Taking",
      description:
        "Capture your thoughts instantly with our clean, distraction-free editor",
    },
    {
      icon: <BiSearch className="text-4xl text-blue-500" />,
      title: "Smart Organization",
      description:
        "Organize notes with tags, folders, and powerful search capabilities",
    },
    {
      icon: <BiSync className="text-4xl text-blue-500" />,
      title: "Cross-Platform Sync",
      description: "Access your notes anywhere - desktop, tablet, or mobile",
    },
    {
      icon: <RiSecurePaymentLine className="text-4xl text-blue-500" />,
      title: "Secure & Private",
      description:
        "Your notes are encrypted and private, just the way they should be",
    },
  ];

  return (
    <div className="px-3 md:px-16 pt-10 md:pt-16 w-full flex flex-col">
      {/* Hero */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-start">
          <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-8">
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              New
            </span>
            <p className="text-blue-600 font-medium">
              Now with Dark Mode & Offline Support!
            </p>
          </div>

          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-blue-500 to-neutral-800 bg-clip-text text-transparent">
              Capture Your Ideas,
            </span>
            <br />
            <span className="text-neutral-800">Anytime, Anywhere</span>
          </h1>

          <p className="text-neutral-600 text-lg md:text-xl mb-8 max-w-2xl">
            Experience the freedom of capturing brilliant ideas with our
            intuitive digital note-taking platform, where creativity flows
            effortlessly without any subscription or hidden costs.
          </p>

          <div className="flex max-md:flex-col-reverse items-center max-md:items-start gap-4">
            <Button
              onClick={() => navigate("/signup")}
              className="bg-blue-500 group px-8 py-6 hover:bg-blue-600 rounded-xl duration-300 text-white font-medium text-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40"
            >
              Get Started Free
              <FaArrowRight
                size={20}
                className="ml-2 group-hover:translate-x-1 duration-300"
              />
            </Button>
            <Button
              onClick={() => navigate("/demo")}
              className="bg-white group px-8 py-6 hover:bg-neutral-50 rounded-xl duration-300 text-neutral-700 font-medium text-lg border border-neutral-200"
            >
              View Demo
            </Button>
          </div>

          {/* Stats/Social Proof */}
          <div className="mt-12 grid grid-cols-3 gap-8">
            <div>
              <h4 className="text-3xl font-bold text-neutral-800">10K+</h4>
              <p className="text-neutral-600">Active Users</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-neutral-800">50K+</h4>
              <p className="text-neutral-600">Notes Created</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-neutral-800">4.9/5</h4>
              <p className="text-neutral-600">User Rating</p>
            </div>
          </div>
        </div>

        {/* Right Content - Hero Image/Illustration */}
        <div className="flex-1 relative">
          <div className="relative z-10 bg-white p-8 rounded-2xl shadow-2xl shadow-blue-500/10 border border-neutral-200/50">
            {/* Your existing icon setup with enhanced styling */}
            <div className="relative flex justify-center items-center scale-75 md:scale-105 duration-500">
              <CgNotes className="text-[200px] text-blue-500 font-extrabold animate-pulse" />
              <CgPen className="text-[120px] text-neutral-600 font-extrabold absolute right-0 animate-bounce duration-1000" />
            </div>

            {/* Preview Cards - Add some visual interest */}
            <div className="absolute -bottom-4 -right-4 bg-blue-50 p-4 rounded-lg rotate-6 shadow-lg">
              <div className="w-24 h-3 bg-blue-200 rounded-full mb-2"></div>
              <div className="w-16 h-3 bg-blue-200 rounded-full"></div>
            </div>
            <div className="absolute -top-4 -left-4 bg-neutral-50 p-4 rounded-lg -rotate-6 shadow-lg">
              <div className="w-24 h-3 bg-neutral-200 rounded-full mb-2"></div>
              <div className="w-16 h-3 bg-neutral-200 rounded-full"></div>
            </div>
          </div>

          {/* Background Decorations */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-blue-50 to-neutral-50 rounded-full blur-3xl -z-10"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-2xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-neutral-100 rounded-full blur-2xl -z-10"></div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-32 w-full">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-neutral-800">
          Why Choose Our Notes App?
        </h2>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-neutral-200 hover:border-blue-500 
                         transition-all duration-300 hover:shadow-lg group"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-neutral-800">
                {feature.title}
              </h3>
              <p className="text-neutral-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works Section */}
      <div className="mt-32 w-full">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-neutral-800">
          How It Works
        </h2>
        <div className="mt-16 flex flex-col md:flex-row gap-8 justify-center items-center">
          {[1, 2, 3].map((step) => (
            <div
              key={step}
              className="flex flex-col items-center text-center max-w-sm p-6"
            >
              <div
                className="w-12 h-12 rounded-full bg-blue-500 text-white flex 
                            items-center justify-center text-xl font-bold mb-4"
              >
                {step}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {step === 1 && "Sign Up in Seconds"}
                {step === 2 && "Create Your First Note"}
                {step === 3 && "Organize with Ease"}
              </h3>
              <p className="text-neutral-600">
                {step === 1 &&
                  "Quick and simple registration process to get you started"}
                {step === 2 &&
                  "Use our intuitive editor to capture your thoughts"}
                {step === 3 && "Tag, sort, and manage your notes efficiently"}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div
        className="mt-32 mb-16 w-full bg-gradient-to-r from-blue-500 to-blue-600 
                      rounded-xl p-12 text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          Ready to Start Taking Better Notes?
        </h2>
        <p className="text-white/90 mb-8 max-w-2xl mx-auto">
          Join thousands of users who have already transformed their note-taking
          experience. Start for free, no credit card required.
        </p>
        <Button
          onClick={() => navigate("/signup")}
          className="bg-white text-blue-500 hover:bg-blue-50 py-3 px-6 rounded-lg 
                    font-medium group"
        >
          Get Started Now{" "}
          <FaArrowRight
            size={20}
            className="inline ml-2 group-hover:translate-x-1"
          />
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
