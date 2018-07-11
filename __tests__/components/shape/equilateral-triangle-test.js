import React from 'react';
import EquilateralTriangle from '../../../app/components/shape/equilateral-triangle/index';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const rendered = renderer.create(<EquilateralTriangle  properties={{length : 100}}/>).toJSON();
    expect(rendered).toBeTruthy();
});
