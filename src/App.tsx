import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store'; 
import Portfolio from './components/Portfolio';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';
import { getProjectById } from './data/projects';
import { NavigationMenu, ThemeToggle } from './components/ui/navigation-menu';


export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentProjectId, setCurrentProjectId] = useState<string | null>(null);
  const themeMode = useSelector((state: RootState) => state.theme.mode);

    useEffect(() => {
  document.body.classList.toggle("dark", themeMode === "dark");
}, [themeMode]);

  const handleNavigate = (page: string, projectId?: string) => {
    setCurrentPage(page);
    if (projectId) setCurrentProjectId(projectId);
    else setCurrentProjectId(null);
    if (page === 'home') {
      setTimeout(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, 100);
    } else {
      // For other pages, scroll to top immediately
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  let pageContent;
  if (currentPage === 'about') {
    pageContent = <About onNavigate={handleNavigate} />;
  } else if (currentPage === 'work') {
    pageContent = <Work onNavigate={handleNavigate} />;
  } else if (currentPage === 'contact') {
    pageContent = <Contact onNavigate={handleNavigate} />;
  } else if (currentPage === 'project' && currentProjectId) {
    const project = getProjectById(currentProjectId);
    if (project) {
      pageContent = <ProjectDetail project={project} onNavigate={handleNavigate} />;
    } else {
      pageContent = <Work onNavigate={handleNavigate} />;
    }
  } else {
    pageContent = <Portfolio onNavigate={handleNavigate} />;
  }

return (
  <>
    <ThemeToggle />
    <NavigationMenu />
    {pageContent}
  </>
);

}