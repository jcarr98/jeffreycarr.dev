import React from 'react';

import { Box, Button, Heading, List, Paragraph, Text } from 'grommet';

import AppBar from '../../../globals/components/AppBar';
import Back from '../../../globals/components/Back';
import resume from '../assets/Jeffrey\ Carr\ Resume.pdf';

function Resume() {
    return(
        <Box align="center" responsive>
            <AppBar />

            {/* Home link */}
            <Back link="http://localhost:3000/" label="Back to Home" />

            <Heading>Resume Overview</Heading>
            {/* Education */}
            <Box align="center" pad="small">
                <Text size="large" weight="bold">Education</Text>
                <Paragraph fill margin="small">
                    Bachelor of Science from University of Massachusetts Amherst
                </Paragraph>
            </Box>

            {/* Certifications */}
            <Box align="center" pad="small">
                <Text size="large" weight="bold">Certifications</Text>
                <Paragraph fill margin="small">
                    Security+ Certification from CompTIA
                </Paragraph>
            </Box>

            {/* Skills */}
            <Box align="center" pad="small">
                <Text size="large" weight="bold" margin="small">Skills</Text>
                <Box direction="row">
                    <Box align="center" width="medium">
                        <Text weight="bold">Languages</Text>
                        <List 
                            data={["Java", "C", "C++", "Python", "React", "Angular", "mySQL"]}
                        />
                    </Box>
                    <Box align="center" width="medium">
                        <Text weight="bold">Technology</Text>
                        <List 
                            data={["Terminal", "Arduino", "FireEye", "Symantec Bluecoat", "ThreatGrid", "Linux", "Basic Cryptography"]}
                        />
                    </Box>
                </Box>
            </Box>

            {/* Experience */}
            <Box align="center" pad="medium">
                <Text size="large" weight="bold" margin="small">Experience</Text>
                <List 
                    primaryKey="company"
                    secondaryKey="position"
                    data={[
                        {company: "Naval Information Warfare Center Atlantic", position: "Scientist"},
                        {company: "Liberty Mutual", position: "Global Cybersecurity Solutions Intern"},
                        {company: "Liberty Mutual", position: "Information Security Analyst"},
                        {company: "University of Massachusetts Amherst", position: "Residential Service Desk Student Supervisor"}
                    ]}
                />
            </Box>

            <Box pad="large" style={{ position: "absolute", bottom: "0", right: "0" }}>
                <Button primary color="main" href={resume} target="_blank" label="Full Resume" />
            </Box>
        </Box>
    )
}

export default Resume;