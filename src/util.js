import  format from 'date-fns/format';
import addSeconds from 'date-fns/addSeconds'; // tree-shaking

export const update = () => {
    return format(new Date(), 'hh:mm:ss');
}

export const add = (a, b) => {
    return a + b;
}