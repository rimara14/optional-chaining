import { optionalChaining } from './optional-chaining';

import * as mocha from 'mocha';
import * as chai from 'chai';

const expect = chai.expect;
describe('Optional Chaining', () => {

  it('should not throw error and return undefined when accessing child property with null/undefined parent' , () => {
    let customer1 = { info: null };
    expect(optionalChaining(customer1, 'info.address.city')).to.be.undefined;

    let customer2 = { info: { address: undefined } };
    expect(optionalChaining(customer2, 'info.address.city')).to.be.undefined;
  });


  it('should return its original value parent property has not null/undefined' , () => {
    let customer = {
      info: {
          name: 'John Doe',
          address: {
              country: 'Indonesia',
              province: 'DKI Jakarta',
              city: 'Jakarta'
          }
      }
    };

    expect(optionalChaining(customer, 'info.address.city')).to.equal('Jakarta');
  });

});