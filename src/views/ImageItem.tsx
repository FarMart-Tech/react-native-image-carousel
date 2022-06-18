import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { TOUCHABLE_ACTIVE_OPACITY } from "../constants";
import { itemStyles } from "../styles";
import { ImageItemProps } from "../types";

const ImageItem = (props: ImageItemProps) => {
    const imageStyles = React.useMemo(() => {
        const width = props.width ?? "100%";
        const height = props.height ?? "100%";
        return { width, height };
    }, [props.height, props.width]);

    const onPress = () => {
        props.onPress?.(props.id);
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={TOUCHABLE_ACTIVE_OPACITY}>
            <View style={[imageStyles, itemStyles.imgContainer]}>
                <Image
                    style={itemStyles.image}
                    source={props.source}
                    resizeMode={props.resizeMode} />
            </View>
        </TouchableOpacity>
    );
}

export default React.memo(ImageItem);