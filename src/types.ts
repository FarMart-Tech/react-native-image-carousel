import { ImageResizeMode, ImageSourcePropType, StyleProp, ViewStyle } from "react-native";

export type ImageData = { data: ImageSourcePropType, id: string | number };

export interface ImageItemProps {
    //data: ImageData,
    id: string | number,
    source: ImageSourcePropType,
    width?: number,
    height?: number,
    resizeMode?: ImageResizeMode,
    onPress?: (id: string | number) => void
}

export interface CarouselProps {
    imagesData: ImageData[],
    style?: StyleProp<ViewStyle>,
    /**
     * default: ``true``
     */
    autoPlay?: boolean,
    /**
     * default: ``3500`` millis
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
}

export interface StepDotsProps {
    style?: StyleProp<ViewStyle>,
    activeDotColor?: string,
    inActiveDotColor?: string,
    count: number
}

export interface StepDotsState {
    currentIndex: number
}