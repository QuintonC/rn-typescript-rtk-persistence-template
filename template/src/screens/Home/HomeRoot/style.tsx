import { StyleSheet } from 'react-native';

// Style
import style from 'style';

// Constants
import { gray, shark, white } from 'constants/colors';

export default StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: white,
    },
    header: {
        marginTop: 32,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
    },
    title: {
        ...style.h1,
        color: shark,
    },
    content: {
        ...style.body,
        color: gray,
        marginTop: 16,
        paddingHorizontal: 24,
    },
    flatlistTitle: {
        ...style.body,
        color: gray,
        paddingHorizontal: 24,
    },
});
