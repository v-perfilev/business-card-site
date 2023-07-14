import '../../styles.scss';
import './layout.scss';

import React, {ReactNode} from 'react';
import {Stack, ThemeProvider} from '@mui/material';
import {theme} from "../../shared/theme";

type LayoutProps = {
    children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <main>
                <Stack className="layout__stack" direction="column" spacing={10}>
                    {children}
                </Stack>
            </main>
        </ThemeProvider>
    );
};

export default Layout;
