// Store
import reducer, {
    setObjectData,
    updateObjectValue,
    initialState,
    resetReducer,
} from 'slices/sampleSlice';

describe('Sample Slice Testing', () => {
    it('updateObjectValue should update the state object appropriately given an updated value', () => {
        expect(
            reducer(initialState, updateObjectValue({ value: 'testValue' })),
        ).toEqual({
            ...initialState,
            object: {
                ...initialState.object,
                value: 'testValue',
            },
        });
    });

    it('setObjectData should set the state object appropriately', () => {
        const updatedObject = {
            id: '1234',
            value: 'testValue',
            anotherValue: 'foo',
        };

        expect(reducer(initialState, setObjectData(updatedObject))).toEqual({
            ...initialState,
            object: updatedObject,
        });
    });

    it('reset reducer should reset the reducer to its initial state', () => {
        expect(reducer(initialState, resetReducer())).toEqual(initialState);
    });
});
