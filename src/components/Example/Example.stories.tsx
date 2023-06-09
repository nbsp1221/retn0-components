import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Example } from './Example';

export default {
  title: 'Example',
  component: Example,
  argTypes: {},
} as ComponentMeta<typeof Example>;

const Template: ComponentStory<typeof Example> = (args) => <Example {...args} />;

export const Default = Template.bind({});
