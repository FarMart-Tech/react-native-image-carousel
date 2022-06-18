# react native image carousel

#### How to install

``npm install rn-image-carousel``

or

``yarn add rn-image-carousel``


![Slider Video Demo](demo/demo.webp)

#### Uses

````tsx
import React from "react";
import { View, StyleSheet } from "react-native";
import { Carousel } from "rn-image-carousel";

const imagesData = [
    {data: { uri: "https://www.randomimages/file.jpg" }, id: "img-1"}
    {data: { uri: "https://www.randomimages/file.jpg" }, id: "img-2"},
    {data: { uri: "https://www.randomimages/file.jpg" }, id: "img-3"},
    {data: require("../assets/images/logo.png"), id: "img-4"},
];

const App = () => {

    const onImagePress = (id: string | number) => {
        console.info(`image pressed: ${id}`);
    }

    return (
        <View style={styles.main}>
            <Carousel
                style={styles.carousel}
                imagesData={imagesData}
                onImagePress={onImagePress}/>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        width: "100%",
        flex:1,
        backgroundColor: "#fff",
        padding: 8
    },
    carousel: {
        width: "100%",
        height: 200
    }
});

export default App;
````

## NOTE: Carousel style's ``height`` is mandatory.

## Props

````ts
imagesData: ImageData[],
style?: StyleProp<ViewStyle>,
/**
 * default: ``true``
 */
autoPlay?: boolean,
/**
 * default: ``3000`` millis
 */
autoPlayInterval?: number,
activeDotColor?: string,
inActiveDotColor?: string,
/**
 * default: ``false``
 */
enableStepDots?: boolean,
/**
 * default: ``stretch``
 */
resizeMode?: ImageResizeMode,
onIndexChange?: (index: number) => void,
onImagePress?: (id: string | number) => void
````

### ImageData

````ts
{ data: ImageSourcePropType, id: string | number }
````