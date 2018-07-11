import React from 'react';
import Form from '../../app/components/form/index';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const rendered = renderer.create(<Form />).toJSON();
    expect(rendered).toBeTruthy();
});
