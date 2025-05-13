'use client';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import IconButton from '@mui/material/IconButton';
import { FileTextIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';

interface HeroProps {
  cvUrl: string;
}

export default function Hero({ cvUrl }: HeroProps) {
  return (
    <section id="hero" className="flex flex-col">
      <div>
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">Hey, I&apos;m Raymond 👋</h1>
        <h3 className="text-xl md:text-3xl mb-2">Build. Learn. Innovate.</h3>
        <div className="flex flex-col md:flex-row md:gap-10">
          <h4 className="text-sm md:text-base font-semibold mb-4">📍 Auckland, New Zealand</h4>
          <h4 className="text-sm md:text-base font-semibold">📚 CS @ University of Auckland</h4>
        </div>
      </div>

      <div className="flex w-1/2 md:w-1/6 justify-between">
        <IconButton aria-label="GitHub.com" onClick={() => window.open('https://github.com/raymondyangdev')}>
          <GitHubIcon className="icon" />
        </IconButton>

        <IconButton
          aria-label="LinkedIn.com"
          onClick={() => window.open('https://www.linkedin.com/in/raymondyangdev/')}>
          <LinkedInIcon className="icon" />
        </IconButton>

        <IconButton href="mailto:raymondyangnz1+contact@gmail.com">
          <EmailIcon className="icon" />
        </IconButton>
      </div>

      <div>
        <Button className="w-32 md:w-36 mt-2 md:mt-6 cursor-pointer" onClick={() => window.open(cvUrl, '_blank')}>
          <FileTextIcon className="mr-2 h-4 w-4" />
          Resume
        </Button>
      </div>
    </section>
  );
}
