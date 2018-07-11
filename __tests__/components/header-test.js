import React from 'react';
import Header from '../../app/components/AppHeader/index';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const rendered = renderer.create(<Header />).toJSON();
    expect(rendered).toBeTruthy();
});
