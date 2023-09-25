import { getUppercaseMessage } from '@/utils.js';

export function render(context) {
    console.log(context);
    return getUppercaseMessage('Hello, entry server!');
};
