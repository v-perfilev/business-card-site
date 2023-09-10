import './card.scss';

import React from "react";
import {Box, Stack, Theme, Typography, useMediaQuery} from "@mui/material";
import {StaticImage} from "gatsby-plugin-image";

const Card: React.FC = () => {
    const isSmUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

    return (
        <Stack className="card__stack" direction={isSmUp ? 'row' : 'column'} spacing={4}>
            <Box className="card__image">
                <StaticImage src="../../../static/images/vp.jpg" alt="Vladimir Perfilev"/>
            </Box>
            <Stack direction="column" spacing={2}>
                <Typography variant="h3">
                    Vladimir Perfilev
                </Typography>
                <Typography variant="h6" textAlign="center">
                    Software Architect, <br/>
                    Staff Engineer, <br/>
                    Lead Full Stack Developer
                </Typography>
            </Stack>
        </Stack>
    );
};

export default Card;
