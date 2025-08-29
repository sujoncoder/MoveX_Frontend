import Lottie from "lottie-react";
import Anumate from "../../assets/animations/Food Courier.json";


const ParcelAnimate = () => {
    return (
        <div className="w-full h-full flex items-center justify-end">
            <div className="w-full max-w-xl">
                <Lottie animationData={Anumate} loop={true} className="w-full h-full" />
            </div>
        </div>
    );
};

export default ParcelAnimate;