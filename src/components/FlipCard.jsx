import { useState } from "react";

function FlipCard() {
    const [isFlipped, setIsFlipped] = useState(false);

    const flip = () => {
        setIsFlipped((oldValue) => {
            return !oldValue;
        });
    };
    const cardClassNames = [
        "absolute",
        "inset-0",
        "h-full",
        "w-full",
        "rounded-xl",
        "px-12",
        "text-slate-200",
        "[backface-visibility:hidden]",
        "text-center",
    ];

    const rotateY180 = " [transform:rotateY(180deg)]";

    const frontClasses = ["bg-gray-700", ...cardClassNames].join(" ");
    const backClasses = [rotateY180, "bg-gray-800", ...cardClassNames].join(
        " "
    );

    const containerRotation = isFlipped ? " [transform:rotateY(180deg)]" : "";

    return (
        <div className="group h-96 w-96 [perspective:1000px]">
            <div
                className={
                    "relative h-full w-full rounded-xl shadow-xl transition-all duration-1000 [transform-style:preserve-3d]" +
                    containerRotation
                }
            >
                <div id="front" className={frontClasses}>
                    <div className="flex min-h-full flex-col items-center justify-center">
                        <h1>Front</h1>

                        <p>
                            <button onClick={flip}>Flip</button>
                        </p>
                    </div>
                </div>
                <div id="back" className={backClasses}>
                    <div className="flex min-h-full flex-col items-center justify-center">
                        <h1>Back</h1>
                        <p>
                            <button onClick={flip}>Flip</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FlipCard;
