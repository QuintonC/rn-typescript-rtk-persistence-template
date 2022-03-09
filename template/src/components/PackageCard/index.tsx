import React from 'react';
import { Linking, Pressable, Text, View } from 'react-native';

// Packages
import ProgressiveImage from 'rn-progressive-image';

// Style
import style from './style';

// Types
import { Package } from 'types';

const PackageCard = ({
    title,
    description,
    repositoryUrl,
    previewImageSmall,
    previewImageFull,
}: Package) => {
    return (
        <View style={style.container}>
            <Pressable
                style={style.container}
                onPress={() =>
                    repositoryUrl !== '' && Linking.openURL(repositoryUrl)
                }>
                <ProgressiveImage
                    small_source={{ uri: previewImageSmall }}
                    large_source={{ uri: previewImageFull }}
                    style={style.image}
                />

                <View style={style.information}>
                    <Text style={style.title}>{title}</Text>

                    <Text style={style.description}>{description}</Text>
                </View>
            </Pressable>
        </View>
    );
};
export default PackageCard;
