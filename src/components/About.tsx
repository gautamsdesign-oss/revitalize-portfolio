import { ImageWithFallback } from './figma/ImageWithFallback';
import svgPaths from "../imports/svg-ld2u2ovrts";
import imgBlack1 from "figma:asset/d64ee2a4591ab68413984ab0f9e4bdec2d6e4946.png";
import imgWhite1 from "figma:asset/68d6c98d0221ade2803b08fc1d7f23ad71e5d7ba.png";

interface AboutProps {
  onNavigate: (page: string, projectId?: string) => void;
}

function Button({ onClick, children, variant = "default" }: { onClick?: () => void; children: React.ReactNode; variant?: "default" | "primary" }) {
  const baseClasses = "h-11 relative rounded-[50px] shrink-0 cursor-pointer transition-all hover:scale-105 text-sm";
  const variantClasses = variant === "primary" 
    ? "bg-[#0cf25d] flex items-center justify-center px-5 py-3 w-auto min-w-[140px] sm:min-w-[161px]"
    : "min-w-[100px] sm:min-w-[129px]";
    
  return (
    <div className={`${baseClasses} ${variantClasses}`} onClick={onClick}>
      {variant === "primary" ? (
        <div className="font-['PP_Editorial_New:Regular',_sans-serif] leading-5 not-italic relative shrink-0 text-[#1c1c1c] text-sm text-nowrap font-[PP_Editorial_New] p-[0px]">
          {children}
        </div>
      ) : (
        <>
          <div className="flex h-11 items-center justify-center px-4 py-3 relative w-full">
            <div className="font-['PP_Editorial_New:Regular',_sans-serif] leading-5 not-italic relative shrink-0 text-[#1c1c1c] text-sm text-nowrap">
              {children}
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#0cf25d] border-solid inset-0 pointer-events-none rounded-[50px]" />
        </>
      )}
    </div>
  );
}

function SocialIconFooter({ icon, href }: { icon: 'dribbble' | 'instagram' | 'linkedin'; href: string }) {
  const iconColorFooter = "#0CF25D";
  
  const handleClick = () => {
    window.open(href, '_blank');
  };

  return (
    <div className="flex gap-2 items-start p-3 relative rounded cursor-pointer hover:bg-gray-800 transition-colors" onClick={handleClick}>
      <div className="relative shrink-0 w-5 h-5">
        {icon === 'dribbble' && (
          <div className="absolute inset-0">
            <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22">
              <path d={svgPaths.p2f0ef700} fill={iconColorFooter} />
            </svg>
          </div>
        )}
        {icon === 'instagram' && (
          <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.pbf8fa0} fill={iconColorFooter} />
          </svg>
        )}
        {icon === 'linkedin' && (
          <>
            <div className="absolute inset-[6.25%_75.94%_7%_4.17%]">
              <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 18">
                <path clipRule="evenodd" d={svgPaths.p23c17280} fill={iconColorFooter} fillRule="evenodd" />
              </svg>
            </div>
            <div className="absolute inset-[31.22%_4.17%_7%_38%]">
              <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13">
                <path clipRule="evenodd" d={svgPaths.p35c5200} fill={iconColorFooter} fillRule="evenodd" />
              </svg>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function SkillCard({ title, number, image }: { title: string; number: string; image: string }) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="aspect-square overflow-hidden relative rounded">
        <ImageWithFallback
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between text-sm text-gray-900">
          <div className="font-['Satoshi_Variable:Regular',_sans-serif] font-normal flex-1 pr-2">
            <p className="leading-5 font-[Satoshi_Variable]">{title}</p>
          </div>
          <div className="font-['Satoshi_Variable:Bold',_sans-serif] font-bold text-right">
            <p className="leading-5 font-[Satoshi_Variable]">{number}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({ 
  name, 
  company, 
  testimonial, 
  image,
  className = ""
}: { 
  name: string; 
  company: string; 
  testimonial: string; 
  image: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-4 w-full ${className}`}>
      <div className="flex-1 overflow-hidden relative rounded">
        <ImageWithFallback
          src={image}
          alt={`${name} from ${company}`}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between font-['Satoshi_Variable:Bold',_sans-serif] font-bold text-sm text-gray-900">
          <div className="flex-1 pr-4">
            <p className="leading-5 font-[Satoshi_Variable]">{name}</p>
          </div>
          <div className="text-right">
            <p className="leading-5 font-[Satoshi_Variable]">{company}</p>
          </div>
        </div>
        <div className="font-['Satoshi_Variable:Regular',_sans-serif] font-normal text-xs text-black">
          <p className="leading-6 font-[Satoshi_Variable]">{testimonial}</p>
        </div>
      </div>
    </div>
  );
}

export default function About({ onNavigate }: AboutProps) {
  const handleConnectClick = () => {
    onNavigate('contact');
  };

  const skills = [
    {
      title: "UX Design",
      number: "01",
      image: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-0T8Wt1kCWQ1lWcAcfTSJoEvRhm93Wd.png&w=500&q=75"
    },
    {
      title: "3D Design & Rendering",
      number: "02",
      image: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-VWPgfz0LtxpokNSBaTuN9vQGzl8cfg.png&w=500&q=75"
    },
    {
      title: "Brand Identity Design",
      number: "03",
      image: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-nY3Stc1545aP21dAi1IEbYlnc4rovS.png&w=500&q=75"
    },
    {
      title: "Illustrations",
      number: "04",
      image: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-JV2hPtMsyDeQ98moDOltstrXeRtH0h.png&w=500&q=75"
    },
    {
      title: "Project Management",
      number: "05",
      image: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-ln5qjyBuSTwiqEjpl5Bj2Qin3KZ3u7.png&w=500&q=75"
    },
    {
      title: "Design Systems",
      number: "06",
      image: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-u9XseZliiHeYnbVsSjAHZAI8eYWprC.png&w=500&q=75"
    },
    {
      title: "User Research",
      number: "07",
      image: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-4r2tNFAParX1lIOupxBEg3fPYP7GuT.png&w=500&q=75"
    },
    {
      title: "Client Satisfaction",
      number: "08",
      image: "https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-UMg4jd6AGgvmPSAnqKSVg1QgrPLNPE.png&w=500&q=75"
    }
  ];

 const testimonials = [
    {
      name: "Balaji Venkatraman",
      company: "TrustGrid.Ai",
      testimonial: "Gautam's dedication to continuous improvement and his ability to translate complex user needs into elegant design solutions make him an invaluable asset.I am confident he will bring the same level of innovation, technical excellence, and professional growth mindset to his future endeavors.",
      image: "https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/hl0qdvpyx4ji8bwdz1zi"
    },
    {
      name: "Sanyam Hazare", 
      company: "Value at Void",
      testimonial: "Gautam is a talented and dependable designer who consistently delivers high-quality work. He has a strong eye for detail and a clear understanding of what makes a digital product intuitive and visually appealing.",
      image: "https://avaprotocol.org/_next/image?url=%2Fimage%2Fteam%2Fsanyam.png&w=640&q=75"
    }
  ];

  return (
    <div className="bg-[#fafaff] min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fafaff] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
            {/* Left Navigation */}
            <div className="hidden md:flex items-center space-x-8 lg:space-x-12 text-sm">
              <div 
                className="font-['Satoshi_Variable:Medium',_sans-serif] font-medium text-black cursor-pointer hover:text-[#0cf25d] transition-colors"
                onClick={() => onNavigate('home')}
              >
                Home
              </div>
              <div className="font-['Satoshi_Variable:Medium',_sans-serif] font-medium text-black cursor-pointer">
                About Me
              </div>
              <div 
                className="font-['Satoshi_Variable:Regular',_sans-serif] font-normal text-[#1c1c1c] cursor-pointer hover:text-[#0cf25d] transition-colors"
                onClick={() => onNavigate('work')}
              >
                Works
              </div>
            </div>

            {/* Center Logo */}
            <div className="flex-shrink-0">
              <div className="h-6 w-6 cursor-pointer" onClick={() => onNavigate('home')}>
                <img alt="Logo" className="h-[32px] w-[32px] object-contain" src={imgBlack1} />
              </div>
            </div>

            {/* Right CTA */}
            <div className="flex items-center">
              <Button variant="primary" onClick={handleConnectClick}>Let's Connect</Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">

            </div>
          </div>
        </div>
      </nav>

{/* Hero Section */}
<section className="pt-16 sm:pt-20 lg:pt-24">
  <div className="bg-[#f2f2f2] py-6 sm:py-8 lg:py-10 xl:py-12">
    <div className="w-full">
      <div className="w-full h-[220px] sm:h-[320px] lg:h-[400px] relative">
        <ImageWithFallback
          src="https://cdnb.artstation.com/p/assets/images/images/027/827/761/large/gautam-sujith-img-20200324-152759-331.jpg?1592669932"
          alt="Gautam Sujith professional portrait"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</section>

      {/* About Content */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left Column - Name */}
            <div className="lg:text-right">
              <div className="font-['Satoshi_Variable:Regular',_sans-serif] font-normal text-[#7d7d7d] text-xl sm:text-2xl lg:text-3xl leading-relaxed">
                <p className="mb-[-12px] font-[Satoshi_Variable] text-left p-[0px] mt-[0px] mr-[0px] ml-[0px]">My name is </p>
                <p className="font-['PP_Editorial_New:Regular',_sans-serif] not-italic text-[#1c1c1c] font-[PP_Editorial_New] text-left text-[48px]">Gautam Sujith</p>
              </div>
            </div>
            
            {/* Right Column - Description */}
            <div className="flex flex-col gap-8">
              <div className="font-['Satoshi_Variable:Regular',_sans-serif] font-normal text-[#1c1c1c] text-xs sm:text-sm leading-relaxed">
                <p className="mb-0 font-[Satoshi_Variable]">— designer, 3D artist, brand revitalizer. </p>
                <p className="mb-4"> </p>
                <p className="font-[Satoshi_Variable]">I don't just design for screens or build for spaces—I breathe new perspective into brands, transforming their story with dimension and purpose. With a background spanning three years and projects across industries, I'm driven by curiosity, clarity, and the belief that every brand holds untapped energy waiting to be brought to life.</p>
              </div>
              <div className="font-['Satoshi_Variable:Regular',_sans-serif] font-normal text-[#1c1c1c] text-xs sm:text-sm leading-relaxed">
                <p className="mb-0 font-[Satoshi_Variable]">Every encounter with design is a chance to revitalize: to peel away the ordinary and reveal the pulse beneath. Adaptability fuels my practice—whether collaborating on global campaigns or pivoting to fast-changing project needs, I thrive on learning, reacting, and building in real time. </p>
                <p className="mb-4"> </p>
                <p className="font-[Satoshi_Variable]">But revitalization is more than a method; it's a mindset. I see in three dimensions, visualizing not only the immediate user journey but the full environment brands exist in. My creative process fuses strategy, empathy, and technical craft—reshaping brands so they don't just exist, but stand out and connect.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:gap-12">
            {/* Section Header */}
            <div className="max-w-2xl m-[0px]">
              <div className="font-['Satoshi_Variable:Regular',_sans-serif] font-normal mb-2">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl text-black leading-relaxed font-[Satoshi_Variable] mx-[0px] my-[-18px]">
                  <span>My </span>
                  <span className="font-['PP_Editorial_New:Regular',_sans-serif] not-italic text-[#1c1c1c] font-[PP_Editorial_New]">Skills</span>
                </h2>
              </div>
              <div className="text-[#1c1c1c] text-xs sm:text-sm leading-relaxed">
                <p className="font-[Satoshi_Variable]">What I Bring to the Table:</p>
              </div>
            </div>
            
            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {skills.map((skill, index) => (
                <SkillCard
                  key={index}
                  title={skill.title}
                  number={skill.number}
                  image={skill.image}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:gap-12">
            {/* Section Header */}
            <div className="max-w-2xl">
              <div className="font-['PP_Editorial_New:Regular',_sans-serif] not-italic mb-2">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl text-black leading-relaxed font-[PP_Editorial_New] mx-[0px] my-[-14px]">Testimonials</h2>
              </div>
              <div className="font-['Satoshi_Variable:Regular',_sans-serif] font-normal text-xs sm:text-sm leading-relaxed">
                <p className="mb-0 font-[Satoshi_Variable]">Success is best echoed in the words of collaborators. </p>
                <p className="font-[Satoshi_Variable]">Here's how revitalization is experienced:</p>
              </div>
            </div>
            
            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              <TestimonialCard
                name={testimonials[0].name}
                company={testimonials[0].company}
                testimonial={testimonials[0].testimonial}
                image={testimonials[0].image}
                className="h-64 sm:h-80 lg:h-96"
              />
              <TestimonialCard
                name={testimonials[1].name}
                company={testimonials[1].company}
                testimonial={testimonials[1].testimonial}
                image={testimonials[1].image}
                className="h-80 sm:h-96 lg:h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1c1c1c] py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        {/* Background Logo */}
        <div className="absolute left-0 top-0 opacity-[0.02] w-48 h-full">
          <img alt="" className="w-full h-full object-cover object-center" src={imgWhite1} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            {/* Left - Navigation */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 lg:gap-12 text-sm text-white">
              <div 
                className="font-['Satoshi_Variable:Medium',_sans-serif] font-medium cursor-pointer hover:text-[#0cf25d] transition-colors font-[Satoshi_Variable]"
                onClick={() => onNavigate('home')}
              >
                Home
              </div>
              <div className="font-['Satoshi_Variable:Medium',_sans-serif] font-medium text-[#0cf25d] font-[Satoshi_Variable]">
                About Me
              </div>
              <div 
                className="font-['Satoshi_Variable:Regular',_sans-serif] font-normal cursor-pointer hover:text-[#0cf25d] transition-colors font-[Satoshi_Variable]"
                onClick={() => onNavigate('work')}
              >
                Works
              </div>
            </div>

            {/* Right - Social Icons */}
            <div className="flex gap-4">
              <SocialIconFooter icon="dribbble" href="https://dribbble.com" />
              <SocialIconFooter icon="instagram" href="https://instagram.com" />
              <SocialIconFooter icon="linkedin" href="https://linkedin.com" />
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <div className="font-['Satoshi_Variable:Medium',_sans-serif] font-medium text-[#363636] text-xs font-[Satoshi_Variable]">
              © 2025 Gautam Sujith. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}