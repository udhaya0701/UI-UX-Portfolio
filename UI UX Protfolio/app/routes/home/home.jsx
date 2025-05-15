import gamestackTexture2Large from '~/assets/budget.png';
import gamestackTexture2Placeholder from '~/assets/budget.png';
import gamestackTexture2 from '~/assets/budget.png';
import gamestackTextureLarge from '~/assets/gplogin.png';
import gamestackTexturePlaceholder from '~/assets/gplogin.png';
import gamestackTexture from '~/assets/gplogin.png';
import sliceTextureLarge from '~/assets/aucm.png';
import sliceTexturePlaceholder from '~/assets/aucm.png';
import sliceTexture from '~/assets/aucm.png';
import sprTextureLarge from '~/assets/open.jpg';
import sprTexturePlaceholder from '~/assets/open.jpg';
import sprTexture from '~/assets/open.jpg';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';
import speedTexture2Large from '~/assets/manual2.png';
import speedTexture2Placeholder from '~/assets/manual2.png';
import speedTexture2 from '~/assets/manual2.png';
import speedtackTextureLarge from '~/assets/spm.png';
import speedtackTexturePlaceholder from '~/assets/spm.png';
import speedtackTexture from '~/assets/spm.png';


// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Designer',
    description: `Design portfolio of ${config.name} — a product designer working on web & mobile apps with a focus on motion, experience design, and accessibility.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour=useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFour, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="voyager"
        description="Voyager is a tourism website designed with both desktop and mobile layouts, following a minimalistic design approach."
        buttonText="View project"
        buttonLink="/projects/smart-sparrow"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: `${sprTexture} 1280w, ${sprTextureLarge} 2560w`,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Google pay redesign"
        description="After increased usage of UPI payment apps, people have been spending money lavishly and subsequently suffering economically. Therefore,
         they need to monitor their expenses and income. For this purpose, I have redesigned the 'Google Pay' app with some new features."
        buttonText="View behance" 
        buttonLink="https://www.behance.net/gallery/191672933/Google-pay-Redesign"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: `${gamestackTexture} 375w, ${gamestackTextureLarge} 750w`,
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: `${gamestackTexture2} 375w, ${gamestackTexture2Large} 750w`,
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Merchandise - Car Bidding Dashboard"
        description="Merchandise is car bidding management dashboard in our case study serves as a centralized tool, providing real-time insights into bid activities. It streamlines the bidding process, offering a visual overview of bids, statuses, and performance metrics. This empowers users to make informed decisions, optimize strategies, and enhance overall efficiency in managing bids."
        buttonText="View project"
        buttonLink="/projects/slice"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Speedy - EV Charging Station UI UX Case study"
        description="The Speedy EV charging UI/UX case study is based on understanding the needs of users and charging station staff. It has been designed for three different platforms: a mobile application, a web application, and a car infotainment system application.
         By adding new features, it aims to attract users and remain competitive in the EV charging industry."
        buttonText="View behance" 
        buttonLink="https://www.behance.net/gallery/203123541/Speedy-EV-Charging-Station-UI-UX-Case-study"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: `${speedtackTexture} 375w, ${speedtackTextureLarge} 750w`,
              placeholder: speedtackTexturePlaceholder,
            },
            {
              srcSet: `${speedTexture2} 375w, ${speedTexture2Large} 750w`,
              placeholder: speedTexture2Placeholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
