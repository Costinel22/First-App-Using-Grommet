import React, { useState } from 'react';
import { Box, Button, Form, FormField, Grommet, Heading } from 'grommet';

const theme = {
  global: {
    colors: {
      brand: '#228BE6',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

const SignIn = () => {
  const [value, setValue] = useState({});

  return (
    <Grommet theme={theme}>
      <Box align="center" pad="large">
        <Heading level="3" margin="none">Sign In</Heading>
        <Form
          value={value}
          onChange={nextValue => setValue(nextValue)}
          onSubmit={({ value }) => console.log('Submit: ', value)}
        >
          <FormField name="email" label="Email" required />
          <FormField name="password" label="Password" type="password" required />
          <Box direction="row" justify="between" margin={{ top: 'medium' }}>
            <Button type="submit" primary label="Sign In" />
          </Box>
        </Form>
      </Box>
    </Grommet>
  );
};

export default SignIn;