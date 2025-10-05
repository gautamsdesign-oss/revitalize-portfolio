import { ImageWithFallback } from './figma/ImageWithFallback';
import svgPaths from "../imports/svg-u2kbl5jn9r";
import imgBlack1 from "figma:asset/d64ee2a4591ab68413984ab0f9e4bdec2d6e4946.png";
import imgWhite1 from "figma:asset/68d6c98d0221ade2803b08fc1d7f23ad71e5d7ba.png";
import { Project } from '../data/projects';

interface ProjectDetailProps {
  project: Project;
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

function SocialIconFooter({ icon, href }: { icon: 'dribbble' | 'instagram' | 'linkedin'; href: string }) {
  const iconColorFooter = "#0CF25D";
  
  const handleClick = () => {
    window.open(href, '_blank');
  };

  return (
    <div className="box-border content-stretch flex gap-[10px] items-start p-[12px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-gray-800 transition-colors" onClick={handleClick}>
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

function ProjectImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`overflow-hidden relative rounded-[4px] ${className}`}>
      <div className="absolute bg-[#f2f2f2] inset-0" />
      <ImageWithFallback
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
}

export default function ProjectDetail({ project, onNavigate }: ProjectDetailProps) {
  const handleConnectClick = () => {
    onNavigate('contact');
  };

  const handleNextProject = () => {
    if (project.nextProject) {
      onNavigate('project', project.nextProject);
    }
  };

  const handlePrevProject = () => {
    if (project.prevProject) {
      onNavigate('project', project.prevProject);
    }
  };

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
              <div 
                className="font-['Satoshi_Variable:Regular',_sans-serif] font-normal text-[#1c1c1c] cursor-pointer hover:text-[#0cf25d] transition-colors"
                onClick={() => onNavigate('about')}
              >
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
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 sm:pt-20 lg:pt-24">
        <div className="bg-[#f2f2f2] py-16 sm:py-20 lg:py-24 xl:py-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-[400px] sm:h-[500px] lg:h-[549px] overflow-hidden relative rounded">
              <div className="absolute bg-[#f2f2f2] inset-0" />

              <ImageWithFallback
                src={project.heroImage}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Info Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:gap-12">
            {/* Project Header */}
            <div className="max-w-2xl">
              <div className="font-['Satoshi_Variable:Regular',_sans-serif] font-normal mb-2">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl text-black leading-relaxed font-[Satoshi_Variable]">
                  <span className="font-['PP_Editorial_New:Regular',_sans-serif] not-italic font-[PP_Editorial_New]">{project.title}</span>
                </h1>
              </div>
            </div>

            {/* Project Details Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              {/* Left Column - Tools */}
              <div className="space-y-6">
                <div>
                  <div className="font-['Satoshi_Variable:Bold',_sans-serif] font-bold text-sm text-gray-900 mb-1">
                    <p className="font-[Satoshi_Variable]">Tools</p>
                  </div>
                  <div className="font-['Satoshi_Variable:Regular',_sans-serif] font-normal text-xs text-black">
                    <p className="font-[Satoshi_Variable]">{project.tools.join(', ')}</p>
                  </div>
                </div>
              </div>

              {/* Right Column - Challenge & Solution */}
              <div className="space-y-6">
                <div>
                  <div className="font-['Satoshi_Variable:Bold',_sans-serif] font-bold text-sm text-gray-900 mb-2">
                    <p className="font-[Satoshi_Variable]">Challenge</p>
                  </div>
                  <div className="font-['Satoshi_Variable:Regular',_sans-serif] font-normal text-xs text-black leading-relaxed">
                    <p className="font-[Satoshi_Variable]">{project.challenge}</p>
                  </div>
                </div>

                <div>
                  <div className="font-['Satoshi_Variable:Bold',_sans-serif] font-bold text-sm text-gray-900 mb-2">
                    <p className="font-[Satoshi_Variable]">Solution</p>
                  </div>
                  <div className="font-['Satoshi_Variable:Regular',_sans-serif] font-normal text-xs text-black leading-relaxed">
                    <p className="font-[Satoshi_Variable]">{project.solution}</p>
                  </div>
                </div>

                {/* Customizable Button */}
                <div className="pt-4">
                 <a
                   className="bg-transparent border-2 border-[#0cf25d] text-[rgba(0,0,0,1)] px-6 py-3 rounded-[60px] hover:bg-[#0cf25d] hover:text-black transition-colors duration-200 font-[PP_Editorial_New] font-medium mx-[0px] m-[0px] pt-[12px] pr-[24px] pb-[10px] pl-[24px]"
                   href="https://www.behance.net/gautamsujith" 
                  target="_blank"
                   rel="noopener noreferrer"
                 >
                   View Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Images */}
      {project.images.length > 0 && (
        <section className="py-8 sm:py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {project.images.map((image, index) => (
                <ProjectImage
                  key={index}
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="h-64 sm:h-80 lg:h-[400px]"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Navigation */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {project.prevProject ? (
              <Button onClick={handlePrevProject}>← Previous Project</Button>
            ) : (
              <div></div>
            )}
            
            {project.nextProject ? (
              <Button onClick={handleNextProject}>Next Project →</Button>
            ) : (
              <div></div>
            )}
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
                className="font-['Satoshi_Variable:Medium',_sans-serif] font-medium cursor-pointer hover:text-[#0cf25d] transition-colors"
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
              <div 
                className="font-['Satoshi_Variable:Regular',_sans-serif] font-normal cursor-pointer hover:text-[#0cf25d] transition-colors"
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
            <div className="font-['Satoshi_Variable:Medium',_sans-serif] font-medium text-[#363636] text-xs">
              © 2025 Creative Portfolio. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}