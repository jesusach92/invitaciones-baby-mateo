import { useEffect } from "react";


export default function EnvelopeOverlay({ onStartMusic, opened, setOpened }) {



    useEffect(() => {
        if (!opened) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [opened]);

    const handleOpen = () => {
        setOpened(true);
        onStartMusic();
    };

    return (
        <div
            className={`envelope-overlay ${opened ? "opened" : ""}`}
            onClick={handleOpen}
        >
            <div className="envelope-container">

            </div>

        </div>
    );
}
