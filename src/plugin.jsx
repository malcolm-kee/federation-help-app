import { definePlugin } from '@mkeeorg/federation-ui';
import Help from './help';

export default definePlugin({
  fillItems: [
    {
      slotId: 'careerPrelist',
      component: Help,
    },
  ],
});
