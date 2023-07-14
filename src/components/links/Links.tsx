import './links.scss';

import React from "react";
import {Box, Stack, Typography} from "@mui/material";
import {StaticImage} from "gatsby-plugin-image";

const LInks: React.FC = () => {

    return (
        <Stack className="links__stack" direction="column" spacing={3}>

            <a href="/files/CV-Vladimir-Perfilev-2023.pdf" target="_blank">
                <Stack direction="row" spacing={2}>
                    <Box className="links__image">
                        <StaticImage src="../../../static/images/cv.png" alt="LinkedIn"/>
                    </Box>
                    <Typography variant="h6">
                        Download my CV
                    </Typography>
                </Stack>
            </a>

            <a href="https://www.linkedin.com/in/v-perfilev/" target="_blank">
                <Stack direction="row" spacing={2}>
                    <Box className="links__image">
                        <StaticImage src="../../../static/images/linkedin.png" alt="LinkedIn"/>
                    </Box>
                    <Typography variant="h6">
                        Look at my profile on LinkedIn
                    </Typography>
                </Stack>
            </a>

        </Stack>
    );
};

export default LInks;
