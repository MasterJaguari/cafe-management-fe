import { shallowMount } from '@vue/test-utils';
import Racun from '@/components/racun/Racun.vue'

test('placanje racuna', async () => {
    const wrapper = shallowMount(Racun);
    const btn = wrapper.find('button');
    const span = wrapper.find('span');

    await btn.trigger('click');
    expect(span.text()).toContain('0');
});
