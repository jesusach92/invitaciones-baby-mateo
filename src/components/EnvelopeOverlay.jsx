import { useEffect } from "react";
import "../styles/styles.css";

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
                <div className="hero-element-logos">
                    <img src="/assets/Hero/axel.png" alt="" className="hero-logo" style={{ alignSelf: 'flex-end', }} />
                    <div className="font-cooper secondary-color font-xl">&</div>
                    <img src="/assets/Hero/burbujas-mini.png" style={{ alignSelf: 'center', width: '20rem' }} alt="" className="hero-logo" />
                </div>
                <div className="clickeable font-cooper secondary-color" style={{ fontSize: '2rem' }}>¡Te invitan!</div>


            </div>
        </div>
    );
}
