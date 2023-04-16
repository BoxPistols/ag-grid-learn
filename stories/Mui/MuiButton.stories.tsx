// Storybook / Button
// import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./MuiButton";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
};

// helper for TypeScript
const createStory = (args: Partial<React.ComponentProps<typeof Button>>) => ({
  args,
});

export default { component: Button, meta };
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: "Button",
  },
};

// default
export const Basic = createStory({ label: "Primary / Default" });

// color
export const Success = createStory({ label: "Success", color: "success" });

export const Error = createStory({ label: "Delete", color: "error" });

// size
export const Small = createStory({ label: "Small", size: "small" });

export const Default = createStory({ label: "Default = Medium" });

export const Large = createStory({ label: "Large", size: "large" });

export const FullWidth = createStory({ label: "FullWidth", fullWidth: true });

// variant
export const Outlined = createStory({ label: "Outlined", variant: "outlined" });

export const Text = createStory({ label: "Text", variant: "text" });

// custom with sx @info: https://mui.com/system/getting-started/the-sx-prop/
export const SxStyling = createStory({
  label: "Custom design with sx",
  variant: "outlined",
  fullWidth: true,
  // example custom design with sx (inline css)
  sx: {
    minWidth: 120,
    maxWidth: 320,
    color: "dimgray",
    borderColor: "dimgray",
    borderRadius: "3em",
    "&:hover": {
      borderColor: "darkgray",
      background: "lightgray",
    },
  },
});
