import { ImageWithFallback } from './figma/ImageWithFallback';
import svgPaths from "../imports/svg-q19epxfz22";
import imgBlack1 from "figma:asset/d64ee2a4591ab68413984ab0f9e4bdec2d6e4946.png";
import imgWhite1 from "figma:asset/68d6c98d0221ade2803b08fc1d7f23ad71e5d7ba.png";
import { getProjectsByPage } from '../data/projects';

interface WorkProps {
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
        <div className="font-['PP_Editorial_New:Regular',_sans-serif] leading-5 not-italic relative shrink-0 text-[#1c1c1c] text-sm text-nowrap font-[PP_Editorial_New]">
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

function SocialIcon({ icon, href }: { icon: 'dribbble' | 'instagram' | 'linkedin'; href: string }) {
  const iconColor = "#111827";
  
  const handleClick = () => {
    window.open(href, '_blank');
  };

  return (
    <div className="flex gap-2 items-start p-3 relative rounded cursor-pointer hover:bg-gray-100 transition-colors" onClick={handleClick}>
      <div className="relative shrink-0 w-5 h-5">
        {icon === 'dribbble' && (
          <div className="absolute inset-0">
            <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22">
              <path d={svgPaths.p2f0ef700} fill={iconColor} />
            </svg>
          </div>
        )}
        {icon === 'instagram' && (
          <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.pbf8fa0} fill={iconColor} />
          </svg>
        )}
        {icon === 'linkedin' && (
          <>
            <div className="absolute inset-[6.25%_75.94%_7%_4.17%]">
              <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 18">
                <path clipRule="evenodd" d={svgPaths.p23c17280} fill={iconColor} fillRule="evenodd" />
              </svg>
            </div>
            <div className="absolute inset-[31.22%_4.17%_7%_38%]">
              <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13">
                <path clipRule="evenodd" d={svgPaths.p35c5200} fill={iconColor} fillRule="evenodd" />
              </svg>
            </div>
          </>
        )}
      </div>
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

function ProjectCard({ 
  title, 
  description, 
  number, 
  image,
  projectId,
  onClick 
}: { 
  title: string; 
  description: string; 
  number: string; 
  image: string;
  projectId: string;
  onClick?: (projectId: string) => void;
}) {
  return (
    <div className="flex flex-col gap-4 cursor-pointer group w-full max-w-[562px]" onClick={() => onClick?.(projectId)}>
      <div className="h-[549px] overflow-hidden relative rounded group-hover:scale-105 transition-transform duration-300">
        <ImageWithFallback
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between font-['Satoshi_Variable:Bold',_sans-serif] font-bold text-sm text-gray-900">
          <div className="flex-1 pr-4 w-[145px]">
            <p className="leading-5 font-[Satoshi_Variable]">{title}</p>
          </div>
          <div className="text-nowrap text-right">
            <p className="leading-5 font-[Satoshi_Variable]">{number}</p>
          </div>
        </div>
        <div className="font-['Satoshi_Variable:Regular',_sans-serif] font-normal text-xs text-black">
          <p className="leading-6 font-[Satoshi_Variable]">{description}</p>
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
    <div className={`flex flex-col gap-4 w-full max-w-[562px] ${className}`}>
      <div className="flex-1 overflow-hidden relative rounded min-h-[200px]">
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

export default function Work({ onNavigate }: WorkProps) {
  const handleConnectClick = () => {
    onNavigate('contact');
  };

  const handleResumeClick = () => {
    alert('Resume download would start here!');
  };

  const handleProjectClick = (projectId: string) => {
    onNavigate('project', projectId);
  };

  const projects = getProjectsByPage('work');

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
                className="font-['Satoshi_Variable:Regular',_sans-serif] font-normal text-[#1c1c1c] cursor-pointer hover:text-[#0cf25d] transition-colors"
                onClick={() => onNavigate('home')}
              >
                Home
              </div>
              <div 
                className="font-['Satoshi_Variable:Regular',_sans-serif] font-normal text-[#1c1c1c] cursor-pointer hover:text-[#0cf25d] transition-colors"
                onClick={() => onNavigate('about')}
              >
                About Me
              </div>
              <div className="font-['Satoshi_Variable:Medium',_sans-serif] font-medium text-black cursor-pointer">
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
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 sm:pt-20 lg:pt-24">
  <div className="bg-[#f2f2f2] py-4"> 
    <div className="w-full h-[140px] sm:h-[180px] md:h-[220px] relative">
      <ImageWithFallback
         src="https://cdnb.artstation.com/p/assets/images/images/027/842/617/large/gautam-sujith-img-20200526-135553-441.jpg?1592726932"
         alt="Creative design work"
          className="w-full h-full object-cover"
       />
   </div>
  </div>
</section>

      {/* Work Section Header */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:gap-12 max-w-2xl">
            <div className="font-['Satoshi_Variable:Regular',_sans-serif] font-normal">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl text-black leading-relaxed font-[Satoshi_Variable] mb-2">
                My<span> </span>
                <span className="font-['PP_Editorial_New:Regular',_sans-serif] not-italic font-[PP_Editorial_New]">Work</span>
              </h1>
            </div>
            <div className="text-[#1c1c1c] text-xs sm:text-sm leading-relaxed">
              <p className="font-[Satoshi_Variable]">Every project is an invitation to reimagine. From digital interfaces to immersive visuals, my work reveals what happens when adaptability and vision intersect—the result is a revitalized brand narrative, crafted for relevance and resonance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 justify-items-center">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.shortDescription}
                number={project.number}
                image={project.heroImage}
                projectId={project.id}
                onClick={handleProjectClick}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left Column - Heading */}
            <div className="lg:text-right">
              <div className="font-['Satoshi_Variable:Regular',_sans-serif] font-normal text-[#7d7d7d] text-xl sm:text-2xl lg:text-3xl leading-relaxed">
                <p className="mb-0 font-[Satoshi_Variable]">
                  <span className="font-['PP_Editorial_New:Regular',_sans-serif] not-italic text-[#1c1c1c] font-[PP_Editorial_New]">Revitalize</span>
                  <span> your brand with new dimension.</span>
                </p>
                <p className="font-[Satoshi_Variable]">
                  <span>I'm a UX designer and 3D artist who </span>
                  <span className="font-['PP_Editorial_New:Regular',_sans-serif] not-italic text-[#1c1c1c] font-[PP_Editorial_New]">transforms static ideas into dynamic experiences</span>—breathing life into brands with visual storytelling that reaches beyond two dimensions.
                </p>
              </div>
            </div>
            
            {/* Right Column - Description and CTA */}
            <div className="flex flex-col gap-8">
              <div className="font-['Satoshi_Variable:Regular',_sans-serif] font-normal text-[#1c1c1c] text-xs sm:text-sm leading-relaxed">
                <p className="font-[Satoshi_Variable]">Adaptability isn't just a skill—it's my foundation. With three years immersed in diverse industries, I've honed a fast, forward-thinking approach that unearths clarity in complexity. Obstacles are catalysts, and every brand I partner with emerges with renewed energy and presence.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 items-start sm:items-center">
                <Button onClick={handleResumeClick}>My Resume</Button>
                <div className="flex gap-2">
                  <SocialIcon icon="dribbble" href="https://dribbble.com/Gautamsujith" />
                  <SocialIcon icon="instagram" href="https://www.instagram.com/gautam__sujith/" />
                  <SocialIcon icon="linkedin" href="https://www.linkedin.com/in/gautam-s-design/" />
                </div>
              </div>
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
                <h2 className="text-2xl sm:text-3xl lg:text-4xl text-black leading-relaxed font-[PP_Editorial_New]">Testimonials</h2>
              </div>
              <div className="font-['Satoshi_Variable:Regular',_sans-serif] font-normal text-xs sm:text-sm leading-relaxed">
                <p className="mb-0 font-[Satoshi_Variable]">Success is best echoed in the words of collaborators. </p>
                <p className="font-[Satoshi_Variable]">Here's how revitalization is experienced:</p>
              </div>
            </div>
            
            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 justify-items-center">
              <TestimonialCard
                name={testimonials[0].name}
                company={testimonials[0].company}
                testimonial={testimonials[0].testimonial}
                image={testimonials[0].image}
                className="h-80 sm:h-96 lg:h-[315px]"
              />
              <TestimonialCard
                name={testimonials[1].name}
                company={testimonials[1].company}
                testimonial={testimonials[1].testimonial}
                image={testimonials[1].image}
                className="h-96 sm:h-[400px] lg:h-[421px]"
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
                className="font-['Satoshi_Variable:Regular',_sans-serif] font-normal cursor-pointer hover:text-[#0cf25d] transition-colors"
                onClick={() => onNavigate('home')}
              >
                Home
              </div>
              <div 
                className="font-['Satoshi_Variable:Regular',_sans-serif] font-normal cursor-pointer hover:text-[#0cf25d] transition-colors"
                onClick={() => onNavigate('about')}
              >
                About Me
              </div>
              <div className="font-['Satoshi_Variable:Medium',_sans-serif] font-medium text-[#0cf25d]">
                Works
              </div>
            </div>

            {/* Right - Social Icons */}
            <div className="flex gap-4">
              <SocialIconFooter icon="dribbble" href="https://dribbble.com/Gautamsujith" />
              <SocialIconFooter icon="instagram" href="https://www.instagram.com/gautam__sujith/" />
              <SocialIconFooter icon="linkedin" href="https://www.linkedin.com/in/gautam-s-design/" />
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <div className="font-['Satoshi_Variable:Medium',_sans-serif] font-medium text-[#363636] text-xs">
              © 2025 Creative Portfolio. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}