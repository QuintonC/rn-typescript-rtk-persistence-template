import 'react-redux';

// Our Root State
import { RootState } from 'store/configureStore';

declare module 'react-redux' {
  interface DefaultRootState extends RootState {}
}
