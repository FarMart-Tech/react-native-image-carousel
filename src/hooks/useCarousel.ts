import React from "react";
import {
    FlatList, LayoutChangeEvent, LayoutRectangle,
    NativeScrollEvent, NativeSyntheticEvent
} from "react-native";
import { AUTOPLAY_DURATION_MS, CONTENT_VIEW_OFFSET, WIDTH_TO_MINUS } from "../constants";
import { CarouselProps } from "../types";
import StepDot from "../views/StepDot";

const useCarousel = (props: CarouselProps) => {
    const carouselLength = props.imagesData.length;
    const shouldAutoPlay = props.autoPlay ?? true // default to true.
    const autoplayInterval = props.autoPlayInterval ?? AUTOPLAY_DURATION_MS;

    const [parentLayout, setParentLayout] = React.useState<LayoutRectangle>();
    const flatlist = React.createRef<FlatList>();
    const stepdots = React.createRef<StepDot>();
    const _currentIndex = React.useRef(0);
    const _interval = React.useRef<any>();

    React.useEffect(() => {
        const hasLayout = parentLayout?.width && parentLayout.height;
        if (shouldAutoPlay && hasLayout)
            startAutoplay();
        return stopAutoPlay;
    }, [shouldAutoPlay, parentLayout]);

    const onParentLayoutChange = React.useCallback((e: LayoutChangeEvent) => {
        const currentLayout = e.nativeEvent.layout;
        const { height, width } = getParentSize();
        if (currentLayout.height !== height
            || currentLayout.width !== width) {
            setParentLayout(currentLayout);
        }
    }, []);

    const getCurrentIndex = () => _currentIndex.current ?? 0;
    const getParentSize = () => ({ width: parentLayout?.width, height: parentLayout?.height });

    const startAutoplay = () => {
        if (!_interval.current && shouldAutoPlay) {
            _interval.current = setInterval(() => {
                let index = getCurrentIndex();
                if (index === carouselLength - 1)
                    index = 0;
                else
                    index += 1;
                scrollToIndex(index);
            }, autoplayInterval);
        }
    }
    const stopAutoPlay = () => {
        if (_interval.current) {
            clearInterval(_interval.current);
            _interval.current = undefined;
        }
    }

    const onMomentumScrollBegin = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
        stopAutoPlay();
    }
    const onMomentumScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
        if (parentLayout?.width) {
            const itemWidth = parentLayout.width - WIDTH_TO_MINUS;
            const index = Math.round(e.nativeEvent.contentOffset.x / itemWidth);
            scrollToIndex(index);
            startAutoplay();
        }
    }

    const scrollToIndex = (index: number) => {
        _currentIndex.current = index;
        flatlist.current?.scrollToIndex({
            animated: true,
            index,
            viewOffset: CONTENT_VIEW_OFFSET
        });
        stepdots.current?.setCurrentIndex(index);
        props.onIndexChange?.(index);
    }

    return {
        onParentLayoutChange, parentLayout,
        flatlist, onMomentumScrollBegin,
        onMomentumScrollEnd, stepdots
    };
}

export default useCarousel;