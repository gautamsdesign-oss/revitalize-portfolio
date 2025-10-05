import svgPaths from "./svg-jueld1o7z3";
import imgBlack1 from "figma:asset/d64ee2a4591ab68413984ab0f9e4bdec2d6e4946.png";
import imgWhite1 from "figma:asset/68d6c98d0221ade2803b08fc1d7f23ad71e5d7ba.png";

function Photograph() {
  return (
    <div className="absolute left-1/2 size-[32px] translate-x-[-50%] translate-y-[-50%]" data-name="photograph" style={{ top: "calc(50% + 0.5px)" }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="photograph">
          <path d={svgPaths.p37aead00} id="Icon" stroke="var(--stroke-0, #545F71)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[549px] left-0 overflow-clip top-[126px] w-[1280px]">
      <div className="absolute bg-[#f2f2f2] h-[618px] left-1/2 translate-x-[-50%] translate-y-[-50%] w-[1280px]" style={{ top: "calc(50% + 0.5px)" }} />
      <Photograph />
    </div>
  );
}

function Button() {
  return (
    <div className="h-[44px] relative rounded-[50px] shrink-0 w-[129px]" data-name="Button">
      <div className="box-border content-stretch flex h-[44px] items-center justify-center overflow-clip pb-[10px] pl-[18px] pr-[20px] pt-[12px] relative w-[129px]">
        <div className="font-['PP_Editorial_New:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#1c1c1c] text-[14px] text-nowrap">
          <p className="leading-[20px] whitespace-pre">My Resume</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#0cf25d] border-solid inset-0 pointer-events-none rounded-[50px]" />
    </div>
  );
}

function IconsDribbble() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="iconsDribbble">
      <div className="absolute bottom-[-0.23%] left-0 right-0 top-[-0.05%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22">
          <g id="iconsDribbble">
            <path d={svgPaths.p2f0ef700} fill="var(--fill-0, #111827)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconsDribbble1() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-start p-[12px] relative rounded-[4px] shrink-0" data-name="iconsDribbble">
      <IconsDribbble />
    </div>
  );
}

function IconsInstagram() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="iconsInstagram">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="iconsInstagram">
          <path d={svgPaths.pbf8fa0} fill="var(--fill-0, #111827)" id="brand / instagram" />
        </g>
      </svg>
    </div>
  );
}

function IconsInstagram1() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-start p-[12px] relative rounded-[4px] shrink-0" data-name="iconsInstagram">
      <IconsInstagram />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[6.25%_75.94%_7%_4.17%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 18">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p23c17280} fill="var(--fill-0, #111827)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[31.22%_4.17%_7%_38%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p35c5200} fill="var(--fill-0, #111827)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LinkedinIcon() {
  return (
    <div className="absolute contents inset-[6.25%_4.17%_7%_4.17%]" data-name="linkedin icon">
      <Group />
      <Group1 />
    </div>
  );
}

function IconsLinkedin() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="iconsLinkedin">
      <LinkedinIcon />
    </div>
  );
}

function IconsLinkedin1() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-start p-[12px] relative rounded-[4px] shrink-0" data-name="iconsLinkedin">
      <IconsLinkedin />
    </div>
  );
}

function Icons() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0" data-name="icons">
      <IconsDribbble1 />
      <IconsInstagram1 />
      <IconsLinkedin1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0">
      <Button />
      <Icons />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[23px] items-start left-[160px] top-[187px] w-[562px]">
      <div className="font-['Satoshi_Variable:Regular',_sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#1c1c1c] text-[12px]" style={{ width: "min-content" }}>
        <p className="leading-[1.45]">Adaptability isn’t just a skill—it’s my foundation. With three years immersed in diverse industries, I’ve honed a fast, forward-thinking approach that unearths clarity in complexity. Obstacles are catalysts, and every brand I partner with emerges with renewed energy and presence.</p>
      </div>
      <Frame3 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="absolute h-[305px] top-[776px] w-[867px]" style={{ left: "calc(12.5% + 39px)" }}>
      <div className="absolute flex flex-col font-['Satoshi_Variable:Regular',_sans-serif] font-normal justify-center leading-[0] text-[#7d7d7d] text-[0px] text-right top-[84px] translate-x-[-100%] translate-y-[-50%] w-[867px]" style={{ left: "calc(50% + 433.5px)" }}>
        <p className="leading-[1.45] mb-0 text-[29px]">
          <span className="font-['PP_Editorial_New:Regular',_sans-serif] not-italic text-[#1c1c1c]">Revitalize</span>
          <span>{` your brand with new dimension.`}</span>
        </p>
        <p className="leading-[1.45] text-[29px]">
          <span>{`I’m a UX designer and 3D artist who `}</span>
          <span className="font-['PP_Editorial_New:Regular',_sans-serif] not-italic text-[#1c1c1c]">transforms static ideas into dynamic experiences</span>—breathing life into brands with visual storytelling that reaches beyond two dimensions.
        </p>
      </div>
      <Frame4 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col font-['Satoshi_Variable:Regular',_sans-serif] font-normal gap-[11px] items-start leading-[0] relative shrink-0 w-[562px]">
      <div className="flex flex-col justify-center relative shrink-0 text-[29px] text-black w-full">
        <p className="leading-[1.45]">
          My<span className="tracking-[-5px]"> </span>
          <span className="font-['PP_Editorial_New:Regular',_sans-serif] not-italic">Work</span>
        </p>
      </div>
      <div className="relative shrink-0 text-[#1c1c1c] text-[12px] w-full">
        <p className="leading-[1.45]">Every project is an invitation to reimagine. From digital interfaces to immersive visuals, my work reveals what happens when adaptability and vision intersect—the result is a revitalized brand narrative, crafted for relevance and resonance.</p>
      </div>
    </div>
  );
}

function Photograph1() {
  return (
    <div className="absolute left-1/2 size-[32px] translate-x-[-50%] translate-y-[-50%]" data-name="photograph" style={{ top: "calc(50% + 0.5px)" }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="photograph">
          <path d={svgPaths.p37aead00} id="Icon" stroke="var(--stroke-0, #545F71)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[549px] overflow-clip relative rounded-[4px] shrink-0 w-full">
      <div className="absolute bg-[#f2f2f2] h-[618px] left-1/2 translate-x-[-50%] translate-y-[-50%] w-[1280px]" style={{ top: "calc(50% + 0.5px)" }} />
      <Photograph1 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex font-['Satoshi_Variable:Bold',_sans-serif] font-bold items-center justify-between relative shrink-0 text-[14px] text-gray-900 w-full">
      <div className="relative shrink-0 w-[145px]">
        <p className="leading-[20px]">Project Name</p>
      </div>
      <div className="relative shrink-0 text-nowrap text-right">
        <p className="leading-[20px] whitespace-pre">01</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start leading-[0] relative shrink-0 w-full">
      <Frame8 />
      <div className="font-['Satoshi_Variable:Regular',_sans-serif] font-normal relative shrink-0 text-[12px] text-black w-full">
        <p className="leading-[1.45]">Lorem ipsum dolor sit amet consectetur. Ullamcorper nullam ipsum eu etiam nunc eget.</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-[562px]">
      <Frame2 />
      <Frame9 />
    </div>
  );
}

function Photograph2() {
  return (
    <div className="absolute left-1/2 size-[32px] translate-x-[-50%] translate-y-[-50%]" data-name="photograph" style={{ top: "calc(50% + 0.5px)" }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="photograph">
          <path d={svgPaths.p37aead00} id="Icon" stroke="var(--stroke-0, #545F71)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="h-[549px] overflow-clip relative rounded-[4px] shrink-0 w-full">
      <div className="absolute bg-[#f2f2f2] h-[618px] left-1/2 translate-x-[-50%] translate-y-[-50%] w-[1280px]" style={{ top: "calc(50% + 0.5px)" }} />
      <Photograph2 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex font-['Satoshi_Variable:Bold',_sans-serif] font-bold items-center justify-between relative shrink-0 text-[14px] text-gray-900 w-full">
      <div className="relative shrink-0 w-[145px]">
        <p className="leading-[20px]">Project Name</p>
      </div>
      <div className="relative shrink-0 text-nowrap text-right">
        <p className="leading-[20px] whitespace-pre">02</p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start leading-[0] relative shrink-0 w-full">
      <Frame15 />
      <div className="font-['Satoshi_Variable:Regular',_sans-serif] font-normal relative shrink-0 text-[12px] text-black w-full">
        <p className="leading-[1.45]">Lorem ipsum dolor sit amet consectetur. Ullamcorper nullam ipsum eu etiam nunc eget.</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-[562px]">
      <Frame5 />
      <Frame23 />
    </div>
  );
}

function Photograph3() {
  return (
    <div className="absolute left-1/2 size-[32px] translate-x-[-50%] translate-y-[-50%]" data-name="photograph" style={{ top: "calc(50% + 0.5px)" }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="photograph">
          <path d={svgPaths.p37aead00} id="Icon" stroke="var(--stroke-0, #545F71)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-[549px] overflow-clip relative rounded-[4px] shrink-0 w-full">
      <div className="absolute bg-[#f2f2f2] h-[618px] left-1/2 translate-x-[-50%] translate-y-[-50%] w-[1280px]" style={{ top: "calc(50% + 0.5px)" }} />
      <Photograph3 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex font-['Satoshi_Variable:Bold',_sans-serif] font-bold items-center justify-between relative shrink-0 text-[14px] text-gray-900 w-full">
      <div className="relative shrink-0 w-[145px]">
        <p className="leading-[20px]">Project Name</p>
      </div>
      <div className="relative shrink-0 text-nowrap text-right">
        <p className="leading-[20px] whitespace-pre">03</p>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start leading-[0] relative shrink-0 w-full">
      <Frame24 />
      <div className="font-['Satoshi_Variable:Regular',_sans-serif] font-normal relative shrink-0 text-[12px] text-black w-full">
        <p className="leading-[1.45]">Lorem ipsum dolor sit amet consectetur. Ullamcorper nullam ipsum eu etiam nunc eget.</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-[562px]">
      <Frame6 />
      <Frame25 />
    </div>
  );
}

function Photograph4() {
  return (
    <div className="absolute left-1/2 size-[32px] translate-x-[-50%] translate-y-[-50%]" data-name="photograph" style={{ top: "calc(50% + 0.5px)" }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="photograph">
          <path d={svgPaths.p37aead00} id="Icon" stroke="var(--stroke-0, #545F71)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="h-[549px] overflow-clip relative rounded-[4px] shrink-0 w-full">
      <div className="absolute bg-[#f2f2f2] h-[618px] left-1/2 translate-x-[-50%] translate-y-[-50%] w-[1280px]" style={{ top: "calc(50% + 0.5px)" }} />
      <Photograph4 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex font-['Satoshi_Variable:Bold',_sans-serif] font-bold items-center justify-between relative shrink-0 text-[14px] text-gray-900 w-full">
      <div className="relative shrink-0 w-[145px]">
        <p className="leading-[20px]">Project Name</p>
      </div>
      <div className="relative shrink-0 text-nowrap text-right">
        <p className="leading-[20px] whitespace-pre">04</p>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start leading-[0] relative shrink-0 w-full">
      <Frame26 />
      <div className="font-['Satoshi_Variable:Regular',_sans-serif] font-normal relative shrink-0 text-[12px] text-black w-full">
        <p className="leading-[1.45]">Lorem ipsum dolor sit amet consectetur. Ullamcorper nullam ipsum eu etiam nunc eget.</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-[562px]">
      <Frame7 />
      <Frame27 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-center flex flex-wrap gap-[16px] items-center relative shrink-0 w-full">
      <Frame10 />
      <Frame11 />
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[34px] items-start left-[70px] top-[1273px] w-[1141px]">
      <Frame14 />
      <Frame28 />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#0cf25d] box-border content-stretch flex h-[44px] items-center justify-center overflow-clip pb-[10px] pt-[14px] px-[20px] right-0 rounded-[42px] top-1/2 translate-y-[-50%] w-[161px]" data-name="Button">
      <div className="font-['PP_Editorial_New:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#1c1c1c] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Let’s Connect</p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute content-stretch flex gap-[62px] items-center leading-[0] left-0 text-[14px] text-nowrap top-[14px]">
      <div className="flex flex-col font-['Satoshi_Variable:Medium',_sans-serif] font-medium justify-center relative shrink-0 text-black">
        <p className="leading-[1.3] text-nowrap whitespace-pre">Home</p>
      </div>
      <div className="flex flex-col font-['Satoshi_Variable:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#1c1c1c]">
        <p className="leading-[1.3] text-nowrap whitespace-pre">About Me</p>
      </div>
      <div className="flex flex-col font-['Satoshi_Variable:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#1c1c1c]">
        <p className="leading-[1.3] text-nowrap whitespace-pre">Works</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute h-[44px] left-[70px] top-[44px] w-[1140px]">
      <Button1 />
      <Frame18 />
      <div className="absolute h-[44px] left-1/2 top-0 translate-x-[-50%] w-[24px]" data-name="BLACK 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBlack1} />
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] relative shrink-0 text-black w-[562px]">
      <div className="flex flex-col font-['PP_Editorial_New:Regular',_sans-serif] justify-center min-w-full not-italic relative shrink-0 text-[29px]" style={{ width: "min-content" }}>
        <p className="leading-[1.45]">Testimonials</p>
      </div>
      <div className="font-['Satoshi_Variable:Regular',_sans-serif] font-normal leading-[1.45] relative shrink-0 text-[12px] w-[415px]">
        <p className="mb-0">{`Success is best echoed in the words of collaborators. `}</p>
        <p>Here’s how revitalization is experienced:</p>
      </div>
    </div>
  );
}

function Photograph5() {
  return (
    <div className="absolute left-1/2 size-[32px] translate-x-[-50%] translate-y-[-50%]" data-name="photograph" style={{ top: "calc(50% + 0.5px)" }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="photograph">
          <path d={svgPaths.p37aead00} id="Icon" stroke="var(--stroke-0, #545F71)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame30() {
  return (
    <div className="basis-0 grow min-h-px min-w-px overflow-clip relative rounded-[4px] shrink-0 w-full">
      <div className="absolute bg-[#f2f2f2] h-[618px] left-1/2 translate-x-[-50%] translate-y-[-50%] w-[1280px]" style={{ top: "calc(50% + 0.5px)" }} />
      <Photograph5 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex font-['Satoshi_Variable:Bold',_sans-serif] font-bold items-center justify-between relative shrink-0 text-[14px] text-gray-900 text-nowrap w-full">
      <div className="relative shrink-0">
        <p className="leading-[20px] text-nowrap whitespace-pre">Name</p>
      </div>
      <div className="relative shrink-0 text-right">
        <p className="leading-[20px] text-nowrap whitespace-pre">Company</p>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start leading-[0] relative shrink-0 w-full">
      <Frame31 />
      <div className="font-['Satoshi_Variable:Regular',_sans-serif] font-normal relative shrink-0 text-[12px] text-black w-full">
        <p className="leading-[1.45]">Lorem ipsum dolor sit amet consectetur. Ullamcorper nullam ipsum eu etiam nunc eget.</p>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] h-[315px] items-start relative shrink-0 w-[562px]">
      <Frame30 />
      <Frame32 />
    </div>
  );
}

function Photograph6() {
  return (
    <div className="absolute left-1/2 size-[32px] translate-x-[-50%] translate-y-[-50%]" data-name="photograph" style={{ top: "calc(50% + 0.5px)" }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="photograph">
          <path d={svgPaths.p37aead00} id="Icon" stroke="var(--stroke-0, #545F71)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame34() {
  return (
    <div className="basis-0 grow min-h-px min-w-px overflow-clip relative rounded-[4px] shrink-0 w-full">
      <div className="absolute bg-[#f2f2f2] h-[618px] left-1/2 translate-x-[-50%] translate-y-[-50%] w-[1280px]" style={{ top: "calc(50% + 0.5px)" }} />
      <Photograph6 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex font-['Satoshi_Variable:Bold',_sans-serif] font-bold items-center justify-between relative shrink-0 text-[14px] text-gray-900 text-nowrap w-full">
      <div className="relative shrink-0">
        <p className="leading-[20px] text-nowrap whitespace-pre">Name</p>
      </div>
      <div className="relative shrink-0 text-right">
        <p className="leading-[20px] text-nowrap whitespace-pre">Company</p>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start leading-[0] relative shrink-0 w-full">
      <Frame35 />
      <div className="font-['Satoshi_Variable:Regular',_sans-serif] font-normal relative shrink-0 text-[12px] text-black w-full">
        <p className="leading-[1.45]">Lorem ipsum dolor sit amet consectetur. Ullamcorper nullam ipsum eu etiam nunc eget.</p>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] h-[421px] items-start relative shrink-0 w-[562px]">
      <Frame34 />
      <Frame36 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Frame33 />
      <Frame37 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[25px] items-start left-[70px] top-[2824px] w-[1140px]">
      <Frame29 />
      <Frame16 />
    </div>
  );
}

function IconsDribbble2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="iconsDribbble">
      <div className="absolute bottom-[-0.23%] left-0 right-0 top-[-0.05%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22">
          <g id="iconsDribbble">
            <path d={svgPaths.p2f0ef700} fill="var(--fill-0, #0CF25D)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconsDribbble3() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-start p-[12px] relative rounded-[4px] shrink-0" data-name="iconsDribbble">
      <IconsDribbble2 />
    </div>
  );
}

function IconsInstagram2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="iconsInstagram">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="iconsInstagram">
          <path d={svgPaths.pbf8fa0} fill="var(--fill-0, #0CF25D)" id="brand / instagram" />
        </g>
      </svg>
    </div>
  );
}

function IconsInstagram3() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-start p-[12px] relative rounded-[4px] shrink-0" data-name="iconsInstagram">
      <IconsInstagram2 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[6.25%_75.94%_7%_4.17%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 18">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p23c17280} fill="var(--fill-0, #0CF25D)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[31.22%_4.17%_7%_38%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p35c5200} fill="var(--fill-0, #0CF25D)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LinkedinIcon1() {
  return (
    <div className="absolute contents inset-[6.25%_4.17%_7%_4.17%]" data-name="linkedin icon">
      <Group2 />
      <Group3 />
    </div>
  );
}

function IconsLinkedin2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="iconsLinkedin">
      <LinkedinIcon1 />
    </div>
  );
}

function IconsLinkedin3() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-start p-[12px] relative rounded-[4px] shrink-0" data-name="iconsLinkedin">
      <IconsLinkedin2 />
    </div>
  );
}

function Icons1() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-start justify-end left-[1046px] top-[81px]" data-name="icons">
      <IconsDribbble3 />
      <IconsInstagram3 />
      <IconsLinkedin3 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="absolute content-stretch flex gap-[62px] items-center leading-[0] left-[70px] text-[14px] text-nowrap text-white top-[94px]">
      <div className="flex flex-col font-['Satoshi_Variable:Medium',_sans-serif] font-medium justify-center relative shrink-0">
        <p className="leading-[1.3] text-nowrap whitespace-pre">Home</p>
      </div>
      <div className="flex flex-col font-['Satoshi_Variable:Regular',_sans-serif] font-normal justify-center relative shrink-0">
        <p className="leading-[1.3] text-nowrap whitespace-pre">About Me</p>
      </div>
      <div className="flex flex-col font-['Satoshi_Variable:Regular',_sans-serif] font-normal justify-center relative shrink-0">
        <p className="leading-[1.3] text-nowrap whitespace-pre">Services</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute bg-[#1c1c1c] h-[263px] left-0 overflow-clip top-[3537px] w-[1280px]">
      <div className="absolute h-[401px] left-[-5px] opacity-[0.02] top-[-69px] w-[220px]" data-name="WHITE  1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgWhite1} />
      </div>
      <Icons1 />
      <div className="absolute bottom-[48px] flex flex-col font-['Satoshi_Variable:Medium',_sans-serif] font-medium justify-center leading-[0] text-[#363636] text-[12px] text-nowrap translate-y-[50%]" style={{ left: "calc(50% - 123px)" }}>
        <p className="leading-[1.3] whitespace-pre">© 2022 Bonnie Hong. All Rights Reserved.</p>
      </div>
      <Frame38 />
    </div>
  );
}

export default function MacBookAir1() {
  return (
    <div className="bg-[#fafaff] relative size-full" data-name="MacBook Air - 1">
      <Frame1 />
      <Frame22 />
      <Frame21 />
      <Frame20 />
      <Frame17 />
      <Frame19 />
    </div>
  );
}