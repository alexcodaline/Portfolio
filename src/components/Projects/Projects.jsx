import React, { useEffect, useState } from 'react'
import FullscreenImageModal from '././modalImage/FullscreenImageModal';
import { Element } from 'react-scroll';
import hydra from '../../assets/img/projects/hydra.png'
import dubai from '../../assets/img/projects/dubai.png'
import ice from '../../assets/img/projects/ice-cream.png'
import './Projects.scss'

const projects = [{ img: hydra, name: 'hydra', desc: 'Hydra VR', link: 'https://alexcodaline.github.io/Hydra-Landing-Page/', git: 'https://github.com/alexcodaline/Hydra-Landing-Page' },
{ img: dubai, name: 'dubai', desc: 'Dubai', link: 'https://dancing-llama-7f9394.netlify.app/', git: 'https://github.com/alexcodaline/DubaiRealty' },
{ img: ice, name: 'ice cream', desc: 'Ice cream', link: 'https://lustrous-chimera-f79a37.netlify.app/', git: 'https://github.com/alexcodaline/Rainbow-IceCream-Landing-Page' }
]
export default function Projects() {
    useEffect(() => {
        const projectsTechElements = document.querySelectorAll('.projects');

        const handleScroll = () => {
            projectsTechElements.forEach((element) => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (elementTop < windowHeight * 0.8) {
                    element.classList.add('active');
                } else {
                    element.classList.remove('active');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const [fullscreenImageUrl, setFullscreenImageUrl] = useState(null);

    const handleImageClick = (imageUrl) => {
        setFullscreenImageUrl(imageUrl);
    };

    const handleCloseModal = () => {
        setFullscreenImageUrl(null);
    };

    const handleDemoButtonClick = (link) => {
        window.open(link, '_blank');
    };


    return (
        <section className='projects'>
            <Element name="projects" className="element">
                <div className='projects-content'>
                    <div className='project-title'>
                        <h3>PORTFOLIO</h3>
                        <h2>LATEST PROJECTS</h2>
                    </div>
                    <div className='projects-container'>
                        {projects.map((project) => (
                            <div key={project.name}
                                className='projects-item'
                            >
                                <img src={project.img} alt={projects.name} onClick={() => handleImageClick(project.img)} />
                                <span>{project.desc}</span>
                                <div className='btn'>
                                    <button onClick={() => handleDemoButtonClick(project.link)}>View Demo</button>
                                    <button onClick={() => handleDemoButtonClick(project.git)}>GIT</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {fullscreenImageUrl && (
                    <FullscreenImageModal imageUrl={fullscreenImageUrl} onClose={handleCloseModal} />
                )}
            </Element>
        </section>
    )
}
