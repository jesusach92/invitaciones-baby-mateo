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
                <div className="hero-element-logos">
                    <img src="/assets/Hero/mafer.png" alt="" className="hero-logo" style={{ alignSelf: 'flex-end', }} />
                    <img src="/assets/Hero/envelope.png" style={{ alignSelf: 'center', width: '20rem' }} alt="" className="hero-logo" />
                </div>
                <div className="clickeable font-rage secondary-color" style={{ fontSize: '3rem' }}>¡Te invita!</div>


            </div>
        </div>
    );
}
