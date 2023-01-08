import React from "react";
import { ComponentStory,  ComponentMeta } from "@storybook/react";
import DragonTiling from "./DragonTiling";

export default {
    title: "DragonTiling",
    component: DragonTiling,
} as ComponentMeta<typeof DragonTiling>;

const Template: ComponentStory<typeof DragonTiling> = (args) => <DragonTiling {...args} />;

export const Primary = Template.bind({});

Primary.args = {};