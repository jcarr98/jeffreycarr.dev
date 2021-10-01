import React from 'react';
import { useHistory } from 'react-router';

import { Anchor, Avatar, Box, Button, Paragraph, Text } from 'grommet';
import { Github, Linkedin } from 'grommet-icons';

import AppBar from '../../../globals/components/AppBar';
import profile from '../assets/profile.jpg';

function Main() {
    const history = useHistory();

    return(
        <Box align="center" animation="fadeIn" responsive>
            <AppBar />

            {/* Intro text (animate some day?) */}
            <Box pad="medium" margin="medium">
                <Text size="5xl" style={{fontFamily: "Lobster"}}>Hello, my name is Jeffrey Carr</Text>
            </Box>

            {/*** Image and social links ***/}
            <Avatar 
                src={profile}
                size="5xl"
            />

            <Box direction="row" gap="small" pad="small">
                <Anchor 
                    href="https://github.com/jcarr98" 
                    target="_blank" 
                    a11yTitle="Link to my Github profile" 
                >
                    <Github size="large" />
                </Anchor>
                <Anchor 
                    href="https://www.linkedin.com/in/jeffrey-carr/" 
                    target="_blank" 
                    a11yTitle="Link to my LinkedIn profile"
                >
                    <Linkedin size="large" />
                </Anchor>
                
            </Box>

            {/* Navigation section */}
            <Box width="full" direction="row" align="center">
                <Box pad="small" align="end" fill>
                    <Button 
                        onClick={() => {history.push('/resume')}}
                        primary
                        color="main"
                        label="Resume"
                        tip="Check out my resume!"
                        a11yTitle="Link to resume overview page"
                    />
                </Box>
                <Box pad="small" align="start" fill>
                    <Button
                        onClick={() => {history.push('/projects')}}
                        primary
                        color="main"
                        label="Projects"
                        tip="Check out my projects!"
                        a11yTitle="Link to projects overview page"
                    />
                </Box>
            </Box>

            {/* About me section */}
            <Box align="center" pad="large">
                <Box pad="small">
                    <Paragraph fill margin="small">
                        I am currently a Scientist within the Naval Information Warfare Center Atlantic. I started
                        this position August 2nd, 2021, and it is my first full time job out of college. I received
                        a Bachelor of Scientist in Computer Science from the University of Massachusetts Amherst in May 2021.
                        Want to know more about my professional career? Connect with me 
                        on <Anchor href="https://www.linkedin.com/in/jeffrey-carr/" target="_blank" color="main">LinkedIn</Anchor>!
                    </Paragraph>
                    <Paragraph fill margin="small">
                        I've been interested in computers since middle school when I started playing video games and thought it was
                        amazing what you could do with a computer. Freshman year of high school, I started a programming
                        club as a place where students could collaborate and learn about programming. In college, I started
                        a video game development club to help other students help each other learn the in's and out's of
                        video game development. The club grew up to over 50 members.
                    </Paragraph>
                    <Paragraph fill margin="small">
                        In my free time, I like to play around with programming projects trying to learn new skills. I also enjoy playing
                        sports with my friends. If I'm feeling especially active that day, I might enjoy going outside on a hike. A couple summers
                        ago I spent a lot of time with my mom driving from Massachusetts to California and back. We even make a
                        small <Anchor href="https://jeffjeanusa.blogspot.com/" target="_blank" color="main">blog</Anchor> about it!
                    </Paragraph>
                </Box>
            </Box>
        </Box>
    );
}

export default Main;