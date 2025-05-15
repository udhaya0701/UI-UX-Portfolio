import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import world from '~/assets/world.gif';
import figa from '~/assets/figa.png';
import html from '~/assets/html.png';
import CSS from '~/assets/CSS.png';
import Javascript from '~/assets/Javascript.png';
import chat from '~/assets/chat.png';
import love from '~/assets/love.png';
import deep from '~/assets/deep.png';
import ue from '~/assets/ue.png';
import cl from '~/assets/cl.png';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './uses.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Uses',
    description: 'A list of hardware and software I use to do my thing',
  });
};

export const Uses = () => {
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={world}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="What I am?"
          description="As a UI/UX Designer, I create responsive designs for web and mobile, based on user research and defined user flows. I design wireframes, prototypes, and high-fidelity UIs while collaborating with developers and stakeholders. I use design systems, AI tools, and plugins to streamline workflow and ensure consistency.
           My process includes usability testing and continuous improvements for a better user experience."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Design</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                  Figma is my go-to design tool for UI/UX design, and I use FigJam for creating user flows and storyboards. 
                  I also use various plugins to speed up my workflow and enhance the overall design quality.
                  </ListItem>
                  <ListItem>
                  I have strong knowledge of using AI tools to enhance designs and speed up the workflow. Instead of relying solely on plugins,
                   I use AI tools to generate impressive illustrations and images that elevate the overall design.
                  </ListItem>
                  <ListItem>
                  I have strong knowledge in designing multiple layouts for mobile, desktop, and tablet devices.
                   I’ve worked on websites, applications, and web applications, ensuring responsive and adaptive designs across all screen sizes.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>What I’m Learning Next</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                  Using my UI/UX skills, I'm taking steps toward designing for AR and VR. 
                  I'm also exploring the tools I need to learn beyond Figma to support this transition.
                  </ListItem>
                  <ListItem>
                  I'm focused on learning Unreal Engine and C++ programming, which are used to create 3D elements and environments.
                   This helps me elevate my design skills to the next level.
                  </ListItem>
                  <ListItem>
                  With my UI/UX skills, I can easily adapt to AR and VR design.
                   Especially through strong UX practices, I can create interfaces that align with what users truly need and expect.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>Knowledge</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>UI UX Design Tool </TableHeadCell>
                    <TableCell>  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={figa} alt="figma" style={{ width: '30px', marginRight: '8px' }} />
                    <span>Figma</span>
                    </div>
                  </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Programming languages</TableHeadCell>
                    <TableCell>  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={html} alt="html" style={{ width: '30px', marginRight: '8px' }} />
                    <span>HTML ,</span>
                    <img src={CSS} alt="CSS" style={{ width: '30px', marginRight: '8px' }} />
                    <span>CSS,</span>
                    <img src={Javascript} alt="Javascript" style={{ width: '30px', marginRight: '8px' }} />
                    <span>Javascript</span>
                    </div>
                  </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>AI Tool</TableHeadCell>
                    <TableCell><div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={chat} alt="Chat" style={{ width: '30px', marginRight: '8px' }} />
                    <span>Chatgpt,</span>
                    <img src={love} alt="love" style={{ width: '30px', marginRight: '8px' }} />
                    <span>Loveable,</span>
                    <img src={deep} alt="Deep ai" style={{ width: '30px', marginRight: '8px' }} />
                    <span>DeepAI,</span>
                    </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Learning</TableHeadCell>
                    <TableCell><div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={ue} alt="unreal" style={{ width: '30px', marginRight: '8px' }} />
                    <span>Unreal engine,</span>
                    <img src={cl} alt="C++" style={{ width: '30px', marginRight: '8px' }} />
                    <span>C++</span>
                    </div></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
