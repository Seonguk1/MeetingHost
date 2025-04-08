import { useEffect, useRef } from "react";
import useRouletteStore from "../stores/useRouletteStore";
import topicsList from "../constants/topicsList";

const useRoulettePicker = () => {
    const { rouletteRef, itemHeight, isPressed, setSelectedItem, setResultItem } = useRouletteStore();
    const intervalRef = useRef(null);
    const currentIndex = useRef(0);
    const itemList = topicsList;

    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const spin = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            rouletteRef.current.scrollToIndex({
                index: currentIndex.current,
                animated: true,
            });
            currentIndex.current += 1;
            console.log(currentIndex.current)
        }, 100);
    };
    
    const easeOutScroll = async () => {
        clearInterval(intervalRef.current);
        for (let i = 10; i <= 22; i++) {
            const easingDelay = i * i;
            await delay(easingDelay);
            rouletteRef.current.scrollToIndex({
                index: currentIndex.current,
                animated: true,
            });
            currentIndex.current += 1;
        }

        const result = itemList[(currentIndex.current + 1) % itemList?.length];
        console.log(`🎯 최종 인덱스: ${currentIndex.current}, 결과: ${result}`);
        setResultItem(result);
    };

    useEffect(() => {
        if (!itemList?.length || !itemHeight) return;

        if (isPressed) {
            easeOutScroll();
        } else {
            spin();
        }

        return () => clearInterval(intervalRef.current);
    }, [isPressed]);

    const handleScrollEnd = (event) => {
        if (!itemList?.length || !itemHeight) return;

        const offsetY = event.nativeEvent.contentOffset.y;
        const index = Math.round(offsetY / itemHeight);
        const item = itemList[(index + 2) % itemList?.length];
        setSelectedItem(item);
    };

    return { handleScrollEnd};
};

export default useRoulettePicker;
