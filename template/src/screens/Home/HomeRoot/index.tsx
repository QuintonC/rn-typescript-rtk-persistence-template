import React from 'react';
import {
    FlatList,
    Linking,
    Pressable,
    ScrollView,
    Text,
    View,
} from 'react-native';

// Packages
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

// Components
import { PackageCard } from 'components';

// Style
import style from './style';

// Constants
import { shark, white } from 'constants/colors';
import { bonusContent, packages } from 'constants/tech';

const HomeRoot = () => {
    const insets = useSafeAreaInsets();

    return (
        <ScrollView
            style={{ backgroundColor: white }}
            contentContainerStyle={[
                style.container,
                { paddingTop: insets.top, paddingBottom: insets.bottom },
            ]}
            showsVerticalScrollIndicator={false}>
            <View style={style.header}>
                <Text style={style.title}>Hey 👋</Text>
                <Pressable
                    onPress={() =>
                        Linking.openURL(
                            'https://github.com/QuintonC/rn-typescript-rtk-persistence-template',
                        )
                    }>
                    <FontAwesomeIcon icon={faGithub} size={28} color={shark} />
                </Pressable>
            </View>
            <Text style={style.content}>
                Thanks for downloading my template. If you enjoy this, consider
                starring it on Github.
            </Text>
            <Text style={style.content}>
                I've included a list of all of the packages available in this
                template below. You can tap on the cards and they will open a
                browser window with information regarding each package.
            </Text>

            <Text style={style.content}>Packages:</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={packages}
                contentContainerStyle={{
                    paddingHorizontal: 24,
                    marginTop: 8,
                }}
                renderItem={({ item }) => {
                    return <PackageCard {...item} />;
                }}
            />

            <Text style={style.content}>Other bonuses:</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={bonusContent}
                contentContainerStyle={{
                    paddingHorizontal: 24,
                    marginTop: 8,
                }}
                renderItem={({ item }) => {
                    return <PackageCard {...item} />;
                }}
            />
        </ScrollView>
    );
};
export default HomeRoot;
