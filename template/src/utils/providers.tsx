import React, { ReactElement, ReactNode } from 'react';

// Packages
import { Provider } from 'react-redux';
import { render, RenderOptions } from '@testing-library/react-native';

// Store
import store from 'store/configureStore';

const AllProviders = ({ children }: { children?: ReactNode }) => {
    return <Provider store={store}>{children}</Provider>;
};

const customRender = (ui: ReactElement, options?: RenderOptions) =>
    render(ui, { wrapper: AllProviders, ...options });

export default customRender;
