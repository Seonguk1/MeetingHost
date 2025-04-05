import { useEffect } from "react";
import useUserStore from "../stores/useUserStore";

const useRoulettePicker = ()=>{
    const {rouletteRef} = useUserStore();

    let currentIndex = 200;
    useEffect(()=>{
        setInterval(()=>{
            rouletteRef.current.scrollToIndex({
                index: currentIndex,
                animated: true,
            });
            currentIndex+=1;
        }, 100)
    }, [])

    const spin = () => {
            let delay = 50;
            const steps = 30;
            const val = 1;
            let currentIndex = centerIndex;
            let count = 0;
            
            const spinStep = (step) => {
                if (step > steps) return;
        
                rouletteRef.current.scrollToIndex({
                    index: currentIndex + step * val,
                    animated: true,
                });
        
                console.log(`delay: ${delay}ms`);
        
                // 다음 회전 예약 (느려지게)
                setTimeout(() => {
                    delay += 15; // 점점 느려지게!
                    spinStep(step + 1);
                }, delay);
            };
            spinStep(0);
        };
}

export default useRoulettePicker;