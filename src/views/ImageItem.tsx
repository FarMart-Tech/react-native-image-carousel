import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
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
        <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
            <View style={[imageStyles, { borderRadius: 10,marginHorizontal:5 }]}>
                <Image
                    style={itemStyles.image}
                    source={props.source} />
            </View>
        </TouchableOpacity>
    );
}

export default React.memo(ImageItem);