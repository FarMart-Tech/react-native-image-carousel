import React from "react";
import { FlatList, View } from "react-native";
import { SCROLL_EVENT_THROTTLE, WIDTH_TO_MINUS } from "../constants";
import ImageItem from "./ImageItem";
import { carouselStyles } from "../styles";
import { CarouselProps, ImageData } from "../types";
import useCarousel from "../hooks/useCarousel";
import StepDot from "./StepDot";

const Carousel = (props: CarouselProps) => {
    const {
        onParentLayoutChange,
        parentLayout,
        flatlist,
        onMomentumScrollBegin,
        onMomentumScrollEnd,
        stepdots
    } = useCarousel(props);

    const renderItem = React.useCallback(({ item }: { item: ImageData }) => {
        const width = parentLayout?.width ? parentLayout.width - WIDTH_TO_MINUS : 0;
        const height = parentLayout?.height ?? 0;
        return (
            <ImageItem
                source={item.data}
                id={item.id}
                onPress={props.onImagePress}
                width={width}
                height={height}
                resizeMode={props.resizeMode ?? "stretch"} />
        );
    }, [parentLayout]);

    const keyExtractor = React.useCallback((item: ImageData) => `${item.id}`, []);

    return (
        <View
            style={[carouselStyles.main, props.style]}
            onLayout={onParentLayoutChange}>
            <FlatList
                ref={flatlist}
                style={carouselStyles.flatlist}
                contentContainerStyle={carouselStyles.contentContainer}
                data={props.imagesData}
                horizontal
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={SCROLL_EVENT_THROTTLE}
                snapToAlignment="center"
                initialNumToRender={2}
                windowSize={4}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                onScrollBeginDrag={onMomentumScrollBegin}
                onMomentumScrollEnd={onMomentumScrollEnd} />
            {props.enableStepDots
                &&
                <StepDot
                    ref={stepdots}
                    count={props.imagesData.length}
                    activeDotColor={props.activeDotColor}
                    inActiveDotColor={props.inActiveDotColor} />}
        </View>
    );
}

export default React.memo(Carousel);