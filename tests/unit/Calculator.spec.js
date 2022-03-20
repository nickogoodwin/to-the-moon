import { shallowMount } from '@vue/test-utils';
import Calculator from '../../src/components/calculator/Calculator.vue'

describe('Calculator.vue', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(Calculator);
    });
    it('should render the correct contents', () => {
        let wrapper = shallowMount(Calculator);
        expect(wrapper.find('#money-input')).toBeDefined();
        expect(wrapper.find('#time-input')).toBeDefined();
        expect(wrapper.find('#time-input').element.placeholder).toBe('# of years')
    })

    describe('user populates input fields', () => {
        let moneyInput;
        let timeInput;
        beforeEach(() => {
            moneyInput = wrapper.find('#money-input');
            moneyInput.element.value = 200;

            timeInput = wrapper.find('#time-input');
            timeInput.element.value = 5;
        });
        it('should update data props', () => {
            expect(wrapper.vm.v_money.price).toBeDefined();
            expect(wrapper.vm.years).toBeDefined();
        })
    })
})