import { StyleSheet } from "react-native";
import { DOT_CONTAINER_COLOR, DOT_SIZE_HEIGHT,DOT_SIZE_WIDTH } from "./constants";

export const carouselStyles = StyleSheet.create({
    main: {
        width: "100%",
        height: "100%",
    },
    flatlist: {
        width: "100%"
    },
    contentContainer: {
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        resizeMode: "stretch",
        borderRadius: 8
    }
});

export const itemStyles = StyleSheet.create({
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "stretch",
        borderRadius: 8
    },
    imgContainer: {
        borderRadius: 10,
        marginHorizontal: 5
    }
});

export const stepDotsStyles = StyleSheet.create({
    main: {
        position: "absolute",
        backgroundColor: DOT_CONTAINER_COLOR,
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "space-between",
        bottom: 5,
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderRadius: 8
    },
    dot: {
        width: DOT_SIZE_WIDTH,
        height: DOT_SIZE_HEIGHT,
        borderRadius: 5,
        marginHorizontal: 4
    }
});