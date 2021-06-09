import React from 'react';
import { Story, Meta } from '@storybook/react';
import { UserLanding, UserLandingProps } from '../../../modules/user/pages/landing/user-landing';

export default {
  title: 'Modules/Users/LandingPage',
  component: UserLanding,
} as Meta;

const Template: Story<UserLandingProps> = (args) => <UserLanding {...args} />;

export const LandingPage = Template.bind({});
LandingPage.args = {
  loading: false,
};
