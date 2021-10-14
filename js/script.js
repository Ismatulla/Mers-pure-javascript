import tabs   from './modules/tabs';
import modal  from './modules/modal';
import data   from './modules/data';
import form   from './modules/form';
import slider from './modules/slider';
import loader from './modules/loader';
import accordion from './modules/accordion';
import classes from './modules/classes'
import {openModal} from './modules/modal';
window.addEventListener("DOMContentLoaded", () => {
const modalTimer = setTimeout(()=>openModal('.modal',modalTimer), 50000);    
tabs();
modal('[data-modal]', '.modal',modalTimer);
data();
form(modalTimer);
slider();
loader();
accordion();
classes();
});


