import { ImageWithFallback } from './figma/ImageWithFallback';
import svgPaths from "../imports/svg-u2kbl5jn9r";
import imgBlack1 from "figma:asset/d64ee2a4591ab68413984ab0f9e4bdec2d6e4946.png";
import imgWhite1 from "figma:asset/68d6c98d0221ade2803b08fc1d7f23ad71e5d7ba.png";
import { Project } from '../data/projects';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { likeProject, addComment } from '../features/projectDetail/projectdetailsSlice';

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

const likes = useSelector((state: RootState) => state.projectDetail.likes[project.id] || 0);
const comments = useSelector((state: RootState) => state.projectDetail.comments[project.id] || []);
const dispatch = useDispatch();

const handleLike = () => dispatch(likeProject(project.id));
const handleAddComment = (e: React.FormEvent) => {
  e.preventDefault();
  // @ts-ignore
  const comment = e.currentTarget.comment.value;
  if (comment) {
    dispatch(addComment({ id: project.id, comment }));
    // @ts-ignore
    e.currentTarget.reset();
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
                <div className="space-y-5 mb-6">

              <div className="flex flex-row items-center gap-4 mb-4 w-full">
              {/* Like button - left */}
             <button
                onClick={handleLike}
                className="flex items-center bg-white border border-[#0cf25d] text-black font-bold px-6 py-3 rounded-full hover:bg-[#0cf25d] hover:text-black transition min-w-[110px] shadow-sm justify-center"
                style={{ lineHeight: "1.5" }}
                title="Like this project"
              >
                <span className="flex flex-row items-center gap-2">
                  <svg width="22" height="22" fill="#262626" viewBox="0 0 24 24">
                    <path d="M2 20H6V9H2V20ZM22 11.5C22 10.12 20.88 9 19.5 9H14.87L15.7 4.94L15.72 4.7C15.72 4.22 15.54 3.77 15.23 3.44L14.54 2.75C14.15 2.36 13.57 2.22 13.11 2.41C12.65 2.61 12.36 3.05 12.4 3.54L12.72 7.11C12.81 8.11 11.99 9 11 9H7V20H19.5C20.88 20 22 18.88 22 17.5V13.5C22 12.67 21.46 12 20.7 11.83C21.49 11.7 22 11.18 22 11.5Z"/>
                  </svg>
                  <span className="font-black text-lg">Like</span>
                  <span className="font-extrabold text-[#262626] text-lg">{likes}</span>
                </span>
              </button>

              {/* Comment form - right */}
              <form
                onSubmit={handleAddComment}
                className="flex flex-row gap-2 flex-1"
              >
                <input
                  name="comment"
                  className="flex-1 rounded-full border border-gray-200 px-4 py-3 bg-white text-sm shadow-sm focus:outline-none focus:border-[#0cf25d] transition"
                  placeholder="Add a comment…"
                  required
                />
                <button
                  type="submit"
                  className="flex items-center gap-1 px-5 py-3 bg-[#0cf25d] text-black font-bold rounded-full hover:bg-[#26fc75] transition"
                >
                  <svg width="20" height="20" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M7 8h10M7 12h6"/><rect x="3" y="3" width="18" height="18" rx="3"/>
                  </svg>
                  Post
                </button>
              </form>
            </div>

              {/* Modern Comment List */}
              <div className="space-y-4 mt-2">
                {comments.length > 0 && (
                  <div className="font-semibold text-xs text-gray-400 mb-1">Comments</div>
                )}
                <ul className="space-y-3">
                  {comments.map((c, i) => (
                    <li key={i} className="flex items-start gap-3">
                      {/* Avatar */}
                      <div className="flex-none rounded-full bg-[#eafcf2] text-[#0cf25d] w-8 h-8 flex items-center justify-center font-bold text-lg select-none">
                        {`U`}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-sm text-black">User</span>
                          <span className="text-xs text-gray-400">just now</span>
                        </div>
                        <div className="text-sm text-[var(--foreground)]">{c}</div>
                      </div>
                    </li>
                  ))}
                </ul>
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