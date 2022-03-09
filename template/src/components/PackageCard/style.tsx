import { StyleSheet } from 'react-native';

// Style
import style from 'style';

// Constants
import { gray, mercury, shark, white } from 'constants/colors';

// Utility Functions
import { dimensions } from 'utils';

export default StyleSheet.create({
    container: {
        borderRadius: 16,
        marginBottom: 12,
        marginRight: 8,
        shadowColor: 'rgba(0,0,0,.1)',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowRadius: 4,
        shadowOpacity: 1,
    },
    image: {
        backgroundColor: mercury,
        width: dimensions().w - 64,
        height: 120,
        overflow: 'hidden',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
    information: {
        width: dimensions().w - 64,
        backgroundColor: white,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderBottomRightRadius: 16,
        borderBottomLeftRadius: 16,
    },
    title: {
        ...style.h2,
        color: shark,
    },
    description: {
        ...style.body,
        color: gray,
    },
});
