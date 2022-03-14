import React from 'react';
import { fireEvent, render, RenderAPI } from '@testing-library/react-native';

// Components
import { PackageCard } from 'components';

// Types
import { Package } from 'types';

describe('<PackageCard >', () => {
    const props: Package = {
        title: 'Test Package',
        description: 'Lorem Ipsum',
        previewImageFull: '',
        previewImageSmall: '',
    };

    let renderApi: RenderAPI;
    beforeEach(() => {
        renderApi = render(<PackageCard {...props} />);
    });

    // // Basic Render Testing
    it('should render without crashing', () => {
        expect(renderApi.container).toBeDefined();
    });

    // other tests to be done here, e.g. testing for onPress / Linking.openURL, image did render, etc.
});
