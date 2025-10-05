import { useState } from 'react';
import svgPaths from "../imports/svg-os7w96ehf4";
import imgBlack1 from "figma:asset/d64ee2a4591ab68413984ab0f9e4bdec2d6e4946.png";
import imgWhite1 from "figma:asset/68d6c98d0221ade2803b08fc1d7f23ad71e5d7ba.png";

interface ContactProps {
  onNavigate: (page: string, projectId?: string) => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  message: string;
}

function Button({ onClick, children, variant = "default" }: { onClick?: () => void; children: React.ReactNode; variant?: "default" | "primary" }) {
  const baseClasses = "h-11 relative rounded-[50px] shrink-0 cursor-pointer transition-all hover:scale-105 text-sm";
  const variantClasses = variant === "primary" 
    ? "bg-[#0cf25d] flex items-center justify-center px-5 py-3 w-auto min-w-[140px] sm:min-w-[161px]"
    : "min-w-[100px] sm:min-w-[129px]";
    
  return (
    <div className={`${baseClasses} ${variantClasses}`} onClick={onClick}>
      <>
        <div className="flex h-11 items-center justify-center px-4 py-3 relative w-full">
          <div className="font-['PP_Editorial_New:Regular',_sans-serif] leading-5 not-italic relative shrink-0 text-[#1c1c1c] text-sm text-nowrap font-[PP_Editorial_New]">
            {children}
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#0cf25d] border-solid inset-0 pointer-events-none rounded-[50px]" />
      </>
    </div>
  );
}

function FormField({ 
  label, 
  value, 
  onChange, 
  placeholder = "",
  type = "text",
  isTextarea = false 
}: { 
  label: string; 
  value: string; 
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  isTextarea?: boolean;
}) {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start relative shrink-0 w-full">
      <p className="font-['Satoshi_Variable:Regular',_sans-serif] font-normal leading-[1.45] relative shrink-0 text-[14px] text-black w-full font-[Satoshi_Variable]">
        {label}
      </p>
      {isTextarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent border-none outline-none resize-none min-h-[80px] font-['Satoshi_Variable:Regular',_sans-serif] font-normal text-[14px] text-black font-[Satoshi_Variable] placeholder:text-gray-400"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent border-none outline-none font-['Satoshi_Variable:Regular',_sans-serif] font-normal text-[14px] text-black font-[Satoshi_Variable] placeholder:text-gray-400"
        />
      )}
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 343 2">
            <path d="M0 1H343" stroke="#C9C9C9" />
          </svg>
        </div>
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

export default function Contact({ onNavigate }: ContactProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // In a real application, you would send this data to your backend
      console.log('Form submitted:', formData);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert('Thank you for your message! I\'ll get back to you soon.');
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        message: ''
      });
    } catch (error) {
      alert('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleConnectClick = () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      alert('Please fill in all required fields (First Name, Last Name, Email, and Message).');
      return;
    }
    handleSubmit();
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
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
              <Button variant="secondary" onClick={handleConnectClick}>Contact</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16 sm:pt-20 lg:pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="py-16 sm:py-20 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              {/* Left Column - Title */}
              <div>
                <div className="font-['Satoshi_Variable:Regular',_sans-serif] font-normal text-[#7d7d7d] leading-[1.1]">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-[Satoshi_Variable]">
                    <span>Let's </span>
                    <span className="font-['PP_Editorial_New:Regular',_sans-serif] not-italic text-[#1c1c1c] font-[PP_Editorial_New]">Connect</span>
                    <span> & Chat</span>
                  </h1>
                </div>
              </div>
              
              {/* Right Column - Description */}
              <div>
                <p className="font-['Satoshi_Variable:Regular',_sans-serif] font-normal leading-[1.45] text-[#1c1c1c] text-xs sm:text-sm font-[Satoshi_Variable]">
                  Every great partnership starts with a conversation. Whether your brand needs revitalizing, a new dimension, or a fresh perspective—I'm here to listen, learn, and build together. Drop a message and let's see how we can bring new energy to your next project.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left Column - Empty to match header layout */}
            <div></div>
            
            {/* Right Column - Form aligned with paragraph */}
            <div>
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                {/* Name Fields Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                  <FormField
                    label="First Name"
                    value={formData.firstName}
                    onChange={(value) => handleInputChange('firstName', value)}
                    placeholder="Enter your first name"
                  />
                  <FormField
                    label="Last Name"
                    value={formData.lastName}
                    onChange={(value) => handleInputChange('lastName', value)}
                    placeholder="Enter your last name"
                  />
                </div>

                {/* Contact Fields Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                  <FormField
                    label="Phone Number"
                    value={formData.phoneNumber}
                    onChange={(value) => handleInputChange('phoneNumber', value)}
                    placeholder="Enter your phone number"
                    type="tel"
                  />
                  <FormField
                    label="Email"
                    value={formData.email}
                    onChange={(value) => handleInputChange('email', value)}
                    placeholder="Enter your email address"
                    type="email"
                  />
                </div>

                {/* Message Field */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-end">
                  <FormField
                    label="Message"
                    value={formData.message}
                    onChange={(value) => handleInputChange('message', value)}
                    placeholder="Tell me about your project..."
                    isTextarea={true}
                  />
                  
                  {/* Submit Button */}
                  <div className="flex justify-start md:justify-end">
                    <button
                      type="button"
                      onClick={handleConnectClick}
                      disabled={isSubmitting}
                      className="bg-[#0cf25d] box-border content-stretch flex h-[40px] items-center justify-center overflow-clip pb-[10px] pt-[14px] px-[20px] relative rounded-[42px] shrink-0 w-full max-w-[273px] cursor-pointer transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <p className="font-['PP_Editorial_New:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c1c1c] text-[14px] text-nowrap whitespace-pre font-[PP_Editorial_New]">
                        {isSubmitting ? 'Sending...' : 'Let\'s Connect'}
                      </p>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

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