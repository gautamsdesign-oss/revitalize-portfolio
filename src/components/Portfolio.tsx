import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import svgPaths from "../imports/svg-guxxg7jbhh";
import imgBlack1 from "figma:asset/d64ee2a4591ab68413984ab0f9e4bdec2d6e4946.png";
import imgWhite1 from "figma:asset/68d6c98d0221ade2803b08fc1d7f23ad71e5d7ba.png";
import { getProjectsByPage } from '../data/projects';

// Enhanced portfolio component with real content and interactivity
function PhotoSection({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex justify-center items-center">
      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
        <ImageWithFallback
          src={src}
          alt={alt}
          className="w-full h-full object-cover rounded-full"
        />
      </div>
    </div>
  );
}

function Button({ onClick, children, variant = "default" }: { onClick?: () => void; children: React.ReactNode; variant?: "default" | "primary" }) {
  const baseClasses = "h-11 relative rounded-[50px] shrink-0 cursor-pointer transition-all hover:scale-105 text-sm";
  const variantClasses = variant === "primary" 
    ? "bg-[#0cf25d] flex items-center justify-center px-5 py-3 w-auto min-w-[140px] sm:min-w-[161px]"
    : "min-w-[100px] sm:min-w-[129px]";
    
  return (
    <div className={`${baseClasses} ${variantClasses}`} onClick={onClick}>
      {variant === "default" ? (
        <>
          <div className="flex h-11 items-center justify-center px-4 py-3 relative w-full">
            <div className="font-['PP_Editorial_New:Regular',_sans-serif] leading-5 not-italic relative shrink-0 text-[#1c1c1c] text-sm text-nowrap">
              {children}
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#0cf25d] border-solid inset-0 pointer-events-none rounded-[50px]" />
        </>
      ) : (
        <div className="font-['PP_Editorial_New:Regular',_sans-serif] leading-5 not-italic relative shrink-0 text-[#1c1c1c] text-sm text-nowrap font-[PP_Editorial_New]">
          {children}
        </div>
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
    <div className="flex flex-col gap-4 cursor-pointer group w-full" onClick={() => onClick?.(projectId)}>
      <div className="h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[450px] overflow-hidden relative rounded group-hover:scale-105 transition-transform duration-300">
        <ImageWithFallback
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="font-['Satoshi_Variable:Bold',_sans-serif] font-bold text-sm text-gray-900 flex-1 pr-4">
            <p className="leading-5 font-[Satoshi_Variable]">{title}</p>
          </div>
          <div className="font-['Satoshi_Variable:Bold',_sans-serif] font-bold text-sm text-gray-900 text-nowrap text-right">
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
            <p className="leading-5 font-[PP_Editorial_New]">{company}</p>
          </div>
        </div>
        <div className="font-['Satoshi_Variable:Regular',_sans-serif] font-normal text-xs text-black">
          <p className="leading-6 font-[Satoshi_Variable]">{testimonial}</p>
        </div>
      </div>
    </div>
  );
}

interface PortfolioProps {
  onNavigate: (page: string, projectId?: string) => void;
}

function getYouTubeEmbedUrl(url: string) {
  try {
    const parsed = new URL(url);

    if (parsed.hostname.includes("youtu.be")) {
      const id = parsed.pathname.slice(1);
      return `https://www.youtube.com/embed/${id}`;
    }

    if (parsed.pathname.startsWith("/shorts/")) {
      const id = parsed.pathname.split("/shorts/")[1].split("?")[0];
      return `https://www.youtube.com/embed/${id}`;
    }

    if (parsed.hostname.includes("youtube.com")) {
      const id = parsed.searchParams.get("v");
      if (id) return `https://www.youtube.com/embed/${id}`;
    }

    return null;
  } catch {
    return null;
  }
}

export default function Portfolio({ onNavigate }: PortfolioProps) {
  const [currentSection, setCurrentSection] = useState('home');

  const handleNavClick = (section: string) => {
    setCurrentSection(section);
    // Scroll to section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeClick = () => {
    alert('Resume download would start here!');
  };

  const handleConnectClick = () => {
    onNavigate('contact');
  };

  const handleProjectClick = (projectId: string) => {
    onNavigate('project', projectId);
  };

  const projects = getProjectsByPage('home');


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

  interface BlogPost {
    id: number;
    title: string;
    summary: string;
    body: string;
    image?: string;
    video?: string;
    audioUrl?: string;
  }

  const blogData: BlogPost[] = [
  {
    id: 1,
    image: "https://cdna.artstation.com/p/assets/images/images/093/686/634/large/gautam-sujith-img-5394-2.jpg?1763231935",
    title: "Story Behind the Professional Shot", 
    summary: "A crisp and clean portrait that captures confidence and professionalism. Here's how I achieved it...",
    body: "The professional headshot was taken using an Apple Iphone 16 Pro, with a lens of 16mm focal length, providing a natural perspective and slight wide-angle view. The aperture was set to f/2.8, allowing for a balanced depth of field that keeps the subject sharp while softly blurring the background. The ISO was kept 160 to ensure minimal noise, and the shutter speed was set to 1/50s to capture a clear image in the well-lit indoor environment. Post-processing was done using Snapseed, where I made several adjustments to enhance the overall look of the photo. Brightness was increased by 10% to give the image a more vibrant feel, while contrast was decreased by 15% to soften the shadows and highlights. Shadows were lifted by 20% to reveal more detail in darker areas, and highlights were reduced by 10% to prevent overexposure. The curves tool was used to fine-tune the tonal range, slightly lifting the mid-tones for a more balanced exposure. Finally the image was then converted into Black and White to match the overall aesthetic. This image symbolizes professionalism and approachability, presenting the subject in a clean and confident manner. The controlled setup emphasizes clarity and poise, making it ideal for career purposes and digital profiles.",
  },
  {
    id: 2,
    image: "https://cdnb.artstation.com/p/assets/images/images/093/686/243/large/gautam-sujith-img-4718-snapseedcopy.jpg?1763230978",
    title: "An Untouched Moment - Aesthetic Shot",
    summary: "An evocative black-and-white photo featuring a white horse gently grazing amidst natural foliage....",
    body: "The shot was taken on an IPhone 15, using a 6mm focal length, providing a tighter field of view for the artistic composition. The wide f/1.6 aperture allows for a rich depth of field and seperation from the subject, foreground and the background, additionally a very fast shutter speed of 1/334s and low ISO of 32 ensures sharpness and miniaml noise in the well-lit outdoor setting. Post-processing was done using Snapseed, where the image was converted to black and white to enhance the timeless feel. Adjustments were made to brightness (+15%) and contrast (-30%) to create a balanced exposure, while shadows were increased (+25%) to reveal more detail in the darker areas. Highlights were decreased (-20%) to prevent overexposure in the lighter parts of the image. The curves tool was used to fine-tune the tonal range, slightly lifting the mid-tones and reducing the high tones for a softer look. Finally, a subtle vignette effect was applied to draw focus towards the center of the composition. This image captures tranquility and poetic beauty in nature, focusing on a white horse as the central subject. The composition and use of light evoke a sense of calm and introspection, inviting viewers to appreciate simple moments and visual storytelling.",
  },
  {
    id: 3,
    image: "https://cdnb.artstation.com/p/assets/images/images/093/689/913/large/gautam-sujith-img-4810-snapseedcopy.jpg?1763242519",
    title: "Creativity After Hours - Passion Shot",
    summary: "Focused late-night work at a digital art workstation, reflecting dedication and creativity...",
    body: "The shot was captured on an Apple Iphone 15, using a 6mm focal length, the image utilized an f/1.6 aperture for a shallow depth of field and better performance in low light environments. The ISO was set to 2000, allowing for decent exposure in the dimly lit workspace, while the shutter speed was set to 1/15s which preserved the ambient screen light and fine details. The photo was then taken into Snapseed for post-processing, where adjustments were made to enhance the shot; increasing brightness by 10%, and shadows by 20%, where as decreasing contrast by 40%, ambience by 20%, and highlights by 50% to achieve the desired aesthetic. Additionnally, tweaks to the curve was made to further refine the shot, reducing the high tones, and implementing a slight fade to give it a softer look. This image reflects dedication and creativity, showing the subject immersed in digital art and 3D modeling surrounded by glowing screens. It encapsulates the energy and focus of late-night artistic pursuits, representing a passion for technology and continuous learning.",
  },
  {
    id: 4,
    image: "https://cdna.artstation.com/p/assets/images/images/096/607/650/large/gautam-sujith-goal-no-6-clean-water-and-sanitation-page-0001.jpg?1771845498",
    title: "Still Waters, Dark Shadows = Goal No. 6 - Clean Water and Sanitation",
    summary: "A visual representation of the United Nations Sustainable Development Goal 6, focusing on clean water and sanitation...",
    body: "An interactive light installation built around a two-tiered basin of water. The lower level holds orange acrylic fish shapes representing aquatic life, while the upper level features green industrial waste forms — together casting layered shadows of life and pollution onto a nearby wall. As viewers reach toward the projected scene, they discover that touching the fish means touching the debris too. When their full silhouette falls on the wall, their shadow merges with the green pollution — making them not a witness, but a part of it.",
  },
  {
    id: 5,
    video: "https://www.youtube.com/watch?v=xk09-iKGeG0",  
    title: "Beyond the Lens - Videography Short film",
    summary: "Its about the small things in life, stepping away from the chaos and from your daily routine and being able to reshape the atmosphere with ordinary moments.",
    body: "The short film is based around a single break from all the chaos, the work you have around you. The first half of the film is shot on an iPhone 15, in cinematic mode 24fps and in 4k, in static and slow-slider shots at eye level, an overhead shot and multiple shots focusing on my workspace which includes tight b-rolls of my hands, objects and screen details. The second half of the film is shot on an iPhone 16 Pro for the after-glasses POV shots, which allows us to take advantage of the higher quality main camera to move closer to the action without losing details. The lighting is captured from natural soft light from the window which maintains the soft glow and avoids harsh contrasts, additionally, the exposure was set so highlights were controlled while the background falls slightly darker. As for the movement, it was limited to reducing tilts, and pushes; keeping every camera movement to be based on an action rather than calling attention to it. The soundtrack is calm, yet upbeat, intentionally keeping the track's sound low as the mood is dull and hectic, but as soon as the actor wears the glasses, the music is vibrant, lively and keeps you engaged, showing how the small moments throughout your life, taking a break can make it easy.",
  },
  {
    id: 6,
    video: "https://www.youtube.com/watch?v=w9LgBieQI3M",  
    title: "Sound Exploration - Audio Breakdown of Deck of Sounds",
    summary: "Exploring Audacity, and use of professional sound equipment to create a soundscape that complements the visual storytelling of my work.",
    body: "This entry is audio-first. In this recording, I walk through lighting, composition, and post-processing decisions behind the professional headshot.",
  },
  {
    id: 7,
    image: "https://cdna.artstation.com/p/assets/images/images/097/541/288/large/gautam-sujith-frame-1.jpg?1774470909",
    title: "Laser Cutting Experiment - Jail for your phone",
    summary: "An experimental laser cutting project exploring the relationship between technology and personal device.",
    body: "A laser-cut enclosure designed to hold a smartphone, exploring the intersection of technology and personal ownership. This is to explore how we interact with our mobile devices, and how they claim a huge part of our days; as a distraction.",
  },
  {
    id: 8,
    video: "https://www.youtube.com/watch?v=WQfzpuWdrJM",  
    title: "Sound Exploration - Audio Breakdown of Deck of Sounds",
    summary: "A short, honest reflection on how rule based art, sound, algorithmic music, and critical design have shaped my learning journey in this interactive media module.",
    body: "A short reflection on my learning journey so far in this module, focusing on how simple rules, sound work, and algorithmic tools changed the way I think about interaction and systems. I touch on rule based games, interactive storyboarding with the UN goals, deep listening and sound editing in Audacity, and designing a critical laser cut phone stand that questions everyday phone use.",
  },
  {
    id: 9,
    video: "https://youtube.com/shorts/Ic2DGUpDftA?feature=share",  
    title: "Cuboid — Interactive Climate Installation",
    summary: "An interactive modular sculpture that makes the invisible consequences of environmental disruption tangible through real-time audio-visual feedback — driven by audience interaction with four interconnected physical objects.",
    body: "Cuboid is a physical computing installation developed in response to UN Sustainable Development Goal 13 — Climate Action. The work comprises four laser-cut cuboids, each representing an environmental system — land, air, water, and energy — wired together into a shared electrical circuit using copper-tape contact points and resistor networks. As audience members handle, rearrange, or remove individual cuboids, the resistance of the network shifts, producing voltage fluctuations that an Arduino reads in real time. This signal is transmitted to TouchDesigner, where it drives a generative audio-visual environment: a feedback-loop-based visual system built from edge detection, displacement, and pixelation nodes that progressively degrades across four stages — from a calm, blue-green equilibrium to a fragmented, red-saturated collapse — while an audio oscillator simultaneously shifts in pitch and dissonance. The interaction mirrors the sensitivity of real ecological systems: small, seemingly isolated actions compound and cascade, making the feedback loop principle not just visible, but physically felt.",
  },

];

const [openBlog, setOpenBlog] = useState(null); 

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
                onClick={() => handleNavClick('home')}
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
              <div className="h-6 w-6 cursor-pointer" onClick={() => handleNavClick('home')}>
                <img alt="Logo" className="h-[32px] w-[32px] object-contain" src={imgBlack1} />
              </div>
            </div>

            {/* Right CTA */}
            <div className="flex items-center">
              <Button variant="primary" onClick={handleConnectClick}>Let's Connect</Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              {/* You can add a mobile menu button here if needed */}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 sm:pt-20 lg:pt-24">
        <div className="w-full h-[400px] bg-[#f2f2f2] relative">
           <img
           src="https://cdna.artstation.com/p/assets/images/images/027/842/670/large/gautam-sujith-img-20200614-135146-396.jpg?1592727249"
           alt="3D Art Background"
           className="w-full h-full object-cover"
           style={{ borderRadius: 0 }} // remove any rounding
           />
        </div>
      </section>

      {/* About Section */}
      <section className="flex justify-center w-full py-16 sm:py-20 lg:py-24 mx-[0px] my-[-10px]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col items-center gap-8 lg:gap-12">
            {/* Main Heading */}
            <div className="max-w-3xl flex flex-col gap-1">
              <h1 className="font-['Satoshi_Variable:Regular'] font-normal text-[#7d7d7d] sm:text-3xl lg:text-4xl xl:text-5xl leading-[1.2] text-right text-[30px] font-[Satoshi_Variable] m-[0px]">
                <span className="font-['PP_Editorial_New:Regular',_sans-serif] not-italic text-[#1c1c1c] font-[PP_Editorial_New] text-[30px]">Revitalize</span>
                <span className="text-[30px]"> your brand with new dimension.</span>
              </h1>
              <p className="font-['Satoshi_Variable:Regular'] font-normal text-[#7d7d7d] text-lg sm:text-xl lg:text-2xl xl:text-3xl leading-[1.4] font-[Satoshi_Variable] text-right mt-[0px] mr-[0px] mb-[-38px] ml-[0px]">
                <span className="font-[Satoshi_Variable]">I'm a UX designer and 3D artist who </span>
                <span className="font-['PP_Editorial_New:Regular',_sans-serif] not-italic text-[#1c1c1c] font-[PP_Editorial_New]">transforms static ideas into dynamic experiences</span>—breathing life into brands with visual storytelling that reaches beyond two dimensions.
              </p>
            </div>
            
            {/* Description and CTA */}
            <div className="max-w-2xl flex flex-col gap-4 items-start">
              <div className="font-['Satoshi_Variable:Regular'] font-normal text-[#1c1c1c] text-sm lg:text-base leading-relaxed text-center">
                <p className="font-[Satoshi_Variable] text-left">Adaptability isn't just a skill—it's my foundation. With three years immersed in diverse industries, I've honed a fast, forward-thinking approach that unearths clarity in complexity. Obstacles are catalysts, and every brand I partner with emerges with renewed energy and presence.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 items-center">
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

      {/* Works Section */}
      <section id="works" className="py-16 sm:py-20 lg:py-24 px-[0px] py-[146px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:gap-12 my-[-14px] my-[-35px] mx-[0px]">
            {/* Section Header */}
            <div className="max-w-2xl">
              <div className="font-['Satoshi_Variable:Regular',_sans-serif] font-normal mb-2">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl text-black leading-relaxed font-[Satoshi_Variable] my-[-14px] mx-[0px] my-[-18px]">
                  My<span> </span>
                  <span className="font-['PP_Editorial_New:Regular',_sans-serif] not-italic font-[PP_Editorial_New]">Work</span>
                </h2>
              </div>
              <div className="text-[#1c1c1c] text-xs sm:text-sm leading-relaxed">
                <p className="font-[Satoshi_Variable]">Every project is an invitation to reimagine. From digital interfaces to immersive visuals, my work reveals what happens when adaptability and vision intersect—the result is a revitalized brand narrative, crafted for relevance and resonance.</p>
              </div>
            </div>
            
            {/* Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
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
        </div>
      </section>

        {/* Blog Section */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="max-w-2xl mb-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-black leading-relaxed font-[PP_Editorial_New] mt-[0px] mr-[0px] mb-[-18px] ml-[0px]">Blog</h2>
              <p className="text-[#1c1c1c] text-xs sm:text-sm leading-relaxed mb-4 font-[Satoshi_Variable]">
                Notes from my desk—curiosities, experiments, and the odd creative detour. Not just what I make, but how I think.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {blogData.map((post) => (
                <div
                  key={post.id}
                  className="bg-white shadow rounded p-6 flex flex-col gap-2 min-h-[240px] cursor-pointer hover:shadow-lg transition"
                  onClick={() => setOpenBlog(post)}
                >
                  <div className="h-52 w-full overflow-hidden rounded mb-2">
                    {post.video ? (
                      <div className="w-full h-full">
                        <iframe
                          src={getYouTubeEmbedUrl(post.video) || ""}
                          title={post.title}
                          className="w-full h-full"
                          style={{ border: 0 }}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      </div>
                    ) : (
                      <ImageWithFallback
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="font-bold text-sm text-black">
                    <h3>{post.title}</h3>
                  </div>
                        <div className="font-normal text-xs text-black">
                        <p>{post.summary}</p>
                        {post.audioUrl && (
                          <audio controls className="mt-2 w-full">
                            <source src={post.audioUrl} type="audio/wav" />
                            Your browser does not support the audio element.
                          </audio>
                        )}
                      </div>
                </div>
              ))}
            </div>
          </div>
        </section>

          {/* Modal */}
        {openBlog && (
            <div
              style={{
                position: 'fixed',
                inset: 0,
                zIndex: 9999,
                background: 'rgba(0,0,0,0.8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onClick={() => setOpenBlog(null)}
            >
              <div
                className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto relative mx-auto"
                onClick={e => e.stopPropagation()}
              >
                <button
                  className="absolute top-3 right-3 text-2xl font-bold text-gray-600 hover:text-black"
                  onClick={() => setOpenBlog(null)}
                  aria-label="Close"
                >
                  &times;
                </button>
                <div className="h-48 w-full overflow-hidden rounded-t-3xl">
                    {openBlog.video ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${new URL(openBlog.video).searchParams.get("v")}`}
                        title={openBlog.title}
                        className="w-[1280px] h-[720px]"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    ) : (
                      <img
                        src={openBlog.image}
                        alt={openBlog.title}
                        className="w-[1280px] h-[720px] object-cover"
                      />
                    )}
                  </div>
                <div className="p-12">
                  <h2 className="text-xl font-bold mb-4">{openBlog.title}</h2>
                  <p className="text-sm text-black whitespace-pre-line">{openBlog.body}</p>
                </div>
              </div>
            </div>
          )}

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:gap-12">
            {/* Section Header */}
            <div className="max-w-2xl mx-[0px] m-[0px]">
              <div className="font-['PP_Editorial_New:Regular',_sans-serif] not-italic mb-2">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl text-black leading-relaxed font-[PP_Editorial_New] mt-[0px] mr-[0px] mb-[-18px] ml-[0px]">Testimonials</h2>
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
      <footer id="contact" className="bg-[#1c1c1c] py-16 sm:py-20 lg:py-24 relative overflow-hidden">
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
                onClick={() => handleNavClick('home')}
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