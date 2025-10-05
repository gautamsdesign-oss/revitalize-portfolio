import svgPaths from "./svg-os7w96ehf4";
import imgBlack1 from "figma:asset/d64ee2a4591ab68413984ab0f9e4bdec2d6e4946.png";
import imgWhite1 from "figma:asset/68d6c98d0221ade2803b08fc1d7f23ad71e5d7ba.png";

function Button() {
  return (
    <div className="absolute h-[44px] right-0 rounded-[50px] top-1/2 translate-y-[-50%] w-[161px]" data-name="Button">
      <div className="box-border content-stretch flex h-[44px] items-center justify-center overflow-clip pb-[10px] pl-[18px] pr-[20px] pt-[12px] relative w-[161px]">
        <p className="font-['PP_Editorial_New:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c1c1c] text-[14px] text-nowrap whitespace-pre">Let’s Connect</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#0cf25d] border-solid inset-0 pointer-events-none rounded-[50px]" />
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

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[343px]">
      <p className="font-['Satoshi_Variable:Regular',_sans-serif] font-normal leading-[1.45] relative shrink-0 text-[14px] text-black w-full">First Name</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 343 2">
            <path d="M0 1H343" id="Vector 1" stroke="var(--stroke-0, #C9C9C9)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[343px]">
      <p className="font-['Satoshi_Variable:Regular',_sans-serif] font-normal leading-[1.45] relative shrink-0 text-[14px] text-black w-full">Last Name</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 343 2">
            <path d="M0 1H343" id="Vector 1" stroke="var(--stroke-0, #C9C9C9)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
      <Frame24 />
      <Frame25 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[343px]">
      <p className="font-['Satoshi_Variable:Regular',_sans-serif] font-normal leading-[1.45] relative shrink-0 text-[14px] text-black w-full">Phone Number</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 343 2">
            <path d="M0 1H343" id="Vector 1" stroke="var(--stroke-0, #C9C9C9)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[343px]">
      <p className="font-['Satoshi_Variable:Regular',_sans-serif] font-normal leading-[1.45] relative shrink-0 text-[14px] text-black w-full">Email</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 343 2">
            <path d="M0 1H343" id="Vector 1" stroke="var(--stroke-0, #C9C9C9)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
      <Frame30 />
      <Frame31 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[56px] items-start relative shrink-0 w-[343px]">
      <p className="font-['Satoshi_Variable:Regular',_sans-serif] font-normal leading-[1.45] relative shrink-0 text-[14px] text-black w-full">Message</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 343 2">
            <path d="M0 1H343" id="Vector 1" stroke="var(--stroke-0, #C9C9C9)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#0cf25d] box-border content-stretch flex h-[40px] items-center justify-center overflow-clip pb-[10px] pt-[14px] px-[20px] relative rounded-[42px] shrink-0 w-[273px]" data-name="Button">
      <p className="font-['PP_Editorial_New:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c1c1c] text-[14px] text-nowrap whitespace-pre">Let’s Connect</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[90px] items-end relative shrink-0 w-full">
      <Frame32 />
      <Button1 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[38px] items-start left-[504px] top-[286px] w-[706px]">
      <Frame26 />
      <Frame27 />
      <Frame28 />
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

function Frame21() {
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
    <div className="absolute bg-[#1c1c1c] bottom-0 h-[263px] left-0 overflow-clip w-[1280px]">
      <div className="absolute h-[401px] left-[-5px] opacity-[0.02] top-[-69px] w-[220px]" data-name="WHITE  1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgWhite1} />
      </div>
      <Icons />
      <div className="absolute bottom-[48px] flex flex-col font-['Satoshi_Variable:Medium',_sans-serif] font-medium justify-center leading-[0] text-[#363636] text-[12px] text-nowrap translate-y-[50%]" style={{ left: "calc(50% - 123px)" }}>
        <p className="leading-[1.3] whitespace-pre">© 2022 Bonnie Hong. All Rights Reserved.</p>
      </div>
      <Frame21 />
    </div>
  );
}

export default function Contact() {
  return (
    <div className="bg-white relative size-full" data-name="Contact">
      <Frame20 />
      <div className="absolute flex flex-col font-['Satoshi_Variable:Regular',_sans-serif] font-normal justify-center leading-[0] left-[76px] text-[#7d7d7d] text-[0px] text-nowrap top-[187px] translate-y-[-50%]">
        <p className="leading-[1.1] text-[29px] whitespace-pre">
          <span>{`Let’s `}</span>
          <span className="font-['PP_Editorial_New:Regular',_sans-serif] not-italic text-[#1c1c1c]">Connect</span>
          <span>
            {" "}
            <br aria-hidden="true" />
            {`& Chat`}
          </span>
        </p>
      </div>
      <p className="absolute font-['Satoshi_Variable:Regular',_sans-serif] font-normal leading-[1.45] left-[504px] text-[#1c1c1c] text-[12px] top-[159px] w-[562px]">Every great partnership starts with a conversation. Whether your brand needs revitalizing, a new dimension, or a fresh perspective—I’m here to listen, learn, and build together. Drop a message and let’s see how we can bring new energy to your next project.</p>
      <Frame29 />
      <Frame19 />
    </div>
  );
}