import React from 'react';
import { Header as GrommetHeader, Heading } from 'grommet';

const Header = () => (
    <GrommetHeader background="brand">
        <Header background="brand">
            <Button icon={<Icons.Home />} hoverIndicator />
            <Menu label="account" items={[{ label: 'logout' }]} />
            <Heading level="3">My App</Heading>
        </Header>
    </GrommetHeader>
);

export default Header;