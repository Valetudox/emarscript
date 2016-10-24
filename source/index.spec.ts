import { expect } from 'chai';
import { compile } from './';

describe('EmarScript', () => {

  describe('#compile', () => {

    it('should replace the given variables in the given template', () => {
      const context = {
        names: {
          firstName: 'Darth',
          lastName: 'Vader'
        }
      };
      const template = '<span>Hello {{ names.firstName }} <b>{{ names.lastName }}</b> </span>';
      expect(compile(template, context)).to.eql('<span>Hello Darth <b>Vader</b> </span>');
    });

  });

});