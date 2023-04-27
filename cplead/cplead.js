import { LightningElement, api } from 'lwc';

export default class Cplead extends LightningElement {
    @api name;
    @api company;
    @api status;
}