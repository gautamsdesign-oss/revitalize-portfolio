import svgPaths from "./svg-ld2u2ovrts";
import imgBlack1 from "figma:asset/d64ee2a4591ab68413984ab0f9e4bdec2d6e4946.png";
import imgWhite1 from "figma:asset/68d6c98d0221ade2803b08fc1d7f23ad71e5d7ba.png";

function Button() {
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
      <Button />
      <Frame18 />
      <div className="absolute h-[44px] left-1/2 top-0 translate-x-[-50%] w-[24px]" data-name="BLACK 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBlack1} />
      </div>
    </div>
  );
}

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
    <div className="absolute h-[549px] left-0 overflow-clip top-[110px] w-[1280px]">
      <div className="absolute bg-[#f2f2f2] h-[618px] left-1/2 translate-x-[-50%] translate-y-[-50%] w-[1280px]" style={{ top: "calc(50% + 0.5px)" }} />
      <Photograph />
    </div>
  );
}

function Frame23() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Satoshi_Variable:Regular',_'Noto_Sans:Regular',_sans-serif] font-normal gap-[32px] items-start leading-[0] text-[#1c1c1c] text-[12px] top-[703px] w-[562px]" style={{ left: "calc(37.5% + 24px)" }}>
      <div className="leading-[1.45] min-w-full relative shrink-0" style={{ width: "min-content" }}>
        <p className="mb-0">{`— designer, 3D artist, brand revitalizer. `}</p>
        <p className="mb-0"> </p>
        <p>I don’t just design for screens or build for spaces—I breathe new perspective into brands, transforming their story with dimension and purpose. With a background spanning three years and projects across industries, I’m driven by curiosity, clarity, and the belief that every brand holds untapped energy waiting to be brought to life.</p>
      </div>
      <div className="leading-[1.45] relative shrink-0 w-[702px]">
        <p className="mb-0">{`Every encounter with design is a chance to revitalize: to peel away the ordinary and reveal the pulse beneath. Adaptability fuels my practice—whether collaborating on global campaigns or pivoting to fast-changing project needs, I thrive on learning, reacting, and building in real time. `}</p>
        <p className="mb-0"> </p>
        <p>But revitalization is more than a method; it’s a mindset. I see in three dimensions, visualizing not only the immediate user journey but the full environment brands exist in. My creative process fuses strategy, empathy, and technical craft—reshaping brands so they don’t just exist, but stand out and connect.</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Satoshi_Variable:Regular',_sans-serif] font-normal gap-[2px] items-start leading-[0] left-[70px] top-[1115px] w-[562px]">
      <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[0px] text-black" style={{ width: "min-content" }}>
        <p className="leading-[1.45] text-[29px]">
          <span>{`My `}</span>
          <span className="font-['PP_Editorial_New:Regular',_sans-serif] not-italic text-[#1c1c1c]">Skills</span>
        </p>
      </div>
      <div className="relative shrink-0 text-[#1c1c1c] text-[12px] w-[415px]">
        <p className="leading-[1.45]">What I Bring to the Table:</p>
      </div>
    </div>
  );
}

function Photograph1() {
  return (
    <div className="absolute left-1/2 size-[32px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="photograph">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="photograph">
          <path d={svgPaths.p37aead00} id="Icon" stroke="var(--stroke-0, #545F71)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px overflow-clip relative rounded-[4px] shrink-0 w-full">
      <div className="absolute bg-[#f2f2f2] h-[618px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[1280px]" />
      <Photograph1 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[0] relative shrink-0 text-[14px] text-gray-900 text-nowrap w-full">
      <div className="font-['Satoshi_Variable:Regular',_sans-serif] font-normal relative shrink-0">
        <p className="leading-[20px] text-nowrap whitespace-pre">UX Design</p>
      </div>
      <div className="font-['Satoshi_Variable:Bold',_sans-serif] font-bold relative shrink-0 text-right">
        <p className="leading-[20px] text-nowrap whitespace-pre">01</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Frame8 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 size-[272px]">
      <Frame4 />
      <Frame9 />
    </div>
  );
}

function Photograph2() {
  return (
    <div className="absolute left-1/2 size-[32px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="photograph">
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
    <div className="basis-0 grow min-h-px min-w-px overflow-clip relative rounded-[4px] shrink-0 w-full">
      <div className="absolute bg-[#f2f2f2] h-[618px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[1280px]" />
      <Photograph2 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[0] relative shrink-0 text-[14px] text-gray-900 text-nowrap w-full">
      <div className="font-['Satoshi_Variable:Regular',_sans-serif] font-normal relative shrink-0">
        <p className="leading-[20px] text-nowrap whitespace-pre">{`3D Design & Rendering`}</p>
      </div>
      <div className="font-['Satoshi_Variable:Bold',_sans-serif] font-bold relative shrink-0 text-right">
        <p className="leading-[20px] text-nowrap whitespace-pre">02</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Frame12 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 size-[272px]">
      <Frame5 />
      <Frame13 />
    </div>
  );
}

function Photograph3() {
  return (
    <div className="absolute left-1/2 size-[32px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="photograph">
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
    <div className="basis-0 grow min-h-px min-w-px overflow-clip relative rounded-[4px] shrink-0 w-full">
      <div className="absolute bg-[#f2f2f2] h-[618px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[1280px]" />
      <Photograph3 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[0] relative shrink-0 text-[14px] text-gray-900 text-nowrap w-full">
      <div className="font-['Satoshi_Variable:Regular',_sans-serif] font-normal relative shrink-0">
        <p className="leading-[20px] text-nowrap whitespace-pre">Brand Identity Design</p>
      </div>
      <div className="font-['Satoshi_Variable:Bold',_sans-serif] font-bold relative shrink-0 text-right">
        <p className="leading-[20px] text-nowrap whitespace-pre">03</p>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Frame15 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 size-[272px]">
      <Frame6 />
      <Frame27 />
    </div>
  );
}

function Photograph4() {
  return (
    <div className="absolute left-1/2 size-[32px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="photograph">
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
    <div className="basis-0 grow min-h-px min-w-px overflow-clip relative rounded-[4px] shrink-0 w-full">
      <div className="absolute bg-[#f2f2f2] h-[618px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[1280px]" />
      <Photograph4 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[0] relative shrink-0 text-[14px] text-gray-900 text-nowrap w-full">
      <div className="font-['Satoshi_Variable:Regular',_sans-serif] font-normal relative shrink-0">
        <p className="leading-[20px] text-nowrap whitespace-pre">Illustrations</p>
      </div>
      <div className="font-['Satoshi_Variable:Bold',_sans-serif] font-bold relative shrink-0 text-right">
        <p className="leading-[20px] text-nowrap whitespace-pre">04</p>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Frame28 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 size-[272px]">
      <Frame7 />
      <Frame29 />
    </div>
  );
}

function Photograph5() {
  return (
    <div className="absolute left-1/2 size-[32px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="photograph">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="photograph">
          <path d={svgPaths.p37aead00} id="Icon" stroke="var(--stroke-0, #545F71)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame31() {
  return (
    <div className="basis-0 grow min-h-px min-w-px overflow-clip relative rounded-[4px] shrink-0 w-full">
      <div className="absolute bg-[#f2f2f2] h-[618px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[1280px]" />
      <Photograph5 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[0] relative shrink-0 text-[14px] text-gray-900 text-nowrap w-full">
      <div className="font-['Satoshi_Variable:Regular',_sans-serif] font-normal relative shrink-0">
        <p className="leading-[20px] text-nowrap whitespace-pre">Project Management</p>
      </div>
      <div className="font-['Satoshi_Variable:Bold',_sans-serif] font-bold relative shrink-0 text-right">
        <p className="leading-[20px] text-nowrap whitespace-pre">05</p>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Frame32 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 size-[272px]">
      <Frame31 />
      <Frame33 />
    </div>
  );
}

function Photograph6() {
  return (
    <div className="absolute left-1/2 size-[32px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="photograph">
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
      <div className="absolute bg-[#f2f2f2] h-[618px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[1280px]" />
      <Photograph6 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[0] relative shrink-0 text-[14px] text-gray-900 text-nowrap w-full">
      <div className="font-['Satoshi_Variable:Regular',_sans-serif] font-normal relative shrink-0">
        <p className="leading-[20px] text-nowrap whitespace-pre">Design Systems</p>
      </div>
      <div className="font-['Satoshi_Variable:Bold',_sans-serif] font-bold relative shrink-0 text-right">
        <p className="leading-[20px] text-nowrap whitespace-pre">06</p>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Frame35 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 size-[272px]">
      <Frame34 />
      <Frame36 />
    </div>
  );
}

function Photograph7() {
  return (
    <div className="absolute left-1/2 size-[32px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="photograph">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="photograph">
          <path d={svgPaths.p37aead00} id="Icon" stroke="var(--stroke-0, #545F71)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame38() {
  return (
    <div className="basis-0 grow min-h-px min-w-px overflow-clip relative rounded-[4px] shrink-0 w-full">
      <div className="absolute bg-[#f2f2f2] h-[618px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[1280px]" />
      <Photograph7 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[0] relative shrink-0 text-[14px] text-gray-900 text-nowrap w-full">
      <div className="font-['Satoshi_Variable:Regular',_sans-serif] font-normal relative shrink-0">
        <p className="leading-[20px] text-nowrap whitespace-pre">User Research</p>
      </div>
      <div className="font-['Satoshi_Variable:Bold',_sans-serif] font-bold relative shrink-0 text-right">
        <p className="leading-[20px] text-nowrap whitespace-pre">07</p>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Frame39 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 size-[272px]">
      <Frame38 />
      <Frame40 />
    </div>
  );
}

function Photograph8() {
  return (
    <div className="absolute left-1/2 size-[32px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="photograph">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="photograph">
          <path d={svgPaths.p37aead00} id="Icon" stroke="var(--stroke-0, #545F71)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame41() {
  return (
    <div className="basis-0 grow min-h-px min-w-px overflow-clip relative rounded-[4px] shrink-0 w-full">
      <div className="absolute bg-[#f2f2f2] h-[618px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[1280px]" />
      <Photograph8 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[0] relative shrink-0 text-[14px] text-gray-900 text-nowrap w-full">
      <div className="font-['Satoshi_Variable:Regular',_sans-serif] font-normal relative shrink-0">
        <p className="leading-[20px] text-nowrap whitespace-pre">{`Client Satisfaction `}</p>
      </div>
      <div className="font-['Satoshi_Variable:Bold',_sans-serif] font-bold relative shrink-0 text-right">
        <p className="leading-[20px] text-nowrap whitespace-pre">08</p>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Frame42 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 size-[272px]">
      <Frame41 />
      <Frame43 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="absolute content-end flex flex-wrap gap-[17px] items-end left-[70px] top-[1192px] w-[1140px]">
      <Frame26 />
      <Frame19 />
      <Frame22 />
      <Frame30 />
      <Frame21 />
      <Frame37 />
      <Frame24 />
      <Frame25 />
    </div>
  );
}

function Frame45() {
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

function Photograph9() {
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
    <div className="basis-0 grow min-h-px min-w-px overflow-clip relative rounded-[4px] shrink-0 w-full">
      <div className="absolute bg-[#f2f2f2] h-[618px] left-1/2 translate-x-[-50%] translate-y-[-50%] w-[1280px]" style={{ top: "calc(50% + 0.5px)" }} />
      <Photograph9 />
    </div>
  );
}

function Frame46() {
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

function Frame47() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start leading-[0] relative shrink-0 w-full">
      <Frame46 />
      <div className="font-['Satoshi_Variable:Regular',_sans-serif] font-normal relative shrink-0 text-[12px] text-black w-full">
        <p className="leading-[1.45]">Lorem ipsum dolor sit amet consectetur. Ullamcorper nullam ipsum eu etiam nunc eget.</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] h-[315px] items-start relative shrink-0 w-[562px]">
      <Frame2 />
      <Frame47 />
    </div>
  );
}

function Photograph10() {
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

function Frame3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px overflow-clip relative rounded-[4px] shrink-0 w-full">
      <div className="absolute bg-[#f2f2f2] h-[618px] left-1/2 translate-x-[-50%] translate-y-[-50%] w-[1280px]" style={{ top: "calc(50% + 0.5px)" }} />
      <Photograph10 />
    </div>
  );
}

function Frame48() {
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

function Frame49() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start leading-[0] relative shrink-0 w-full">
      <Frame48 />
      <div className="font-['Satoshi_Variable:Regular',_sans-serif] font-normal relative shrink-0 text-[12px] text-black w-full">
        <p className="leading-[1.45]">Lorem ipsum dolor sit amet consectetur. Ullamcorper nullam ipsum eu etiam nunc eget.</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] h-[421px] items-start relative shrink-0 w-[562px]">
      <Frame3 />
      <Frame49 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[25px] items-start left-[70px] top-[1888px] w-[1140px]">
      <Frame45 />
      <Frame16 />
    </div>
  );
}

function IconsDribbble() {
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
          <path d={svgPaths.pbf8fa0} fill="var(--fill-0, #0CF25D)" id="brand / instagram" />
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
          <path clipRule="evenodd" d={svgPaths.p23c17280} fill="var(--fill-0, #0CF25D)" fillRule="evenodd" id="Vector" />
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
          <path clipRule="evenodd" d={svgPaths.p35c5200} fill="var(--fill-0, #0CF25D)" fillRule="evenodd" id="Vector" />
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
    <div className="absolute content-stretch flex gap-[16px] items-start justify-end left-[1046px] top-[81px]" data-name="icons">
      <IconsDribbble1 />
      <IconsInstagram1 />
      <IconsLinkedin1 />
    </div>
  );
}

function Frame50() {
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

function Frame51() {
  return (
    <div className="absolute bg-[#1c1c1c] bottom-0 h-[263px] left-0 overflow-clip w-[1280px]">
      <div className="absolute h-[401px] left-[-5px] opacity-[0.02] top-[-69px] w-[220px]" data-name="WHITE  1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgWhite1} />
      </div>
      <Icons />
      <div className="absolute bottom-[48px] flex flex-col font-['Satoshi_Variable:Medium',_sans-serif] font-medium justify-center leading-[0] text-[#363636] text-[12px] text-nowrap translate-y-[50%]" style={{ left: "calc(50% - 123px)" }}>
        <p className="leading-[1.3] whitespace-pre">© 2022 Bonnie Hong. All Rights Reserved.</p>
      </div>
      <Frame50 />
    </div>
  );
}

export default function MacBookAir4() {
  return (
    <div className="bg-[#fafaff] relative size-full" data-name="MacBook Air - 4">
      <Frame20 />
      <Frame1 />
      <div className="absolute flex flex-col font-['Satoshi_Variable:Regular',_sans-serif] font-normal justify-center leading-[1.45] left-[76px] text-[#7d7d7d] text-[0px] text-[29px] text-nowrap top-[735.5px] translate-y-[-50%] whitespace-pre">
        <p className="mb-0">{`My name is `}</p>
        <p className="font-['PP_Editorial_New:Regular',_sans-serif] not-italic text-[#1c1c1c]">Gautam Sujith</p>
      </div>
      <Frame23 />
      <Frame14 />
      <Frame44 />
      <Frame17 />
      <Frame51 />
    </div>
  );
}