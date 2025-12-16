import type { Meta, StoryObj } from '@storybook/vue3';
import PluginPage from '../pages/plugin.vue';

/**
 * 插件页面 Storybook 配置
 */
const meta: Meta<typeof PluginPage> = {
  title: 'Pages/Plugin',
  component: PluginPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PluginPage>;

/**
 * 默认视图
 */
export const Default: Story = {
  render: () => ({
    components: { PluginPage },
    template: '<PluginPage />',
  }),
};
