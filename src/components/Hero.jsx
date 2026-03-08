import CountdownComponent from './common/CountdownComponent';

export default function Hero() {
  const confirmationMessage = "¡Hola! Quiero confirmar mi asistencia al Baby de Mateo.";
  return (
    <section className='hero'>
      <div className='hero-container'>
        <img src="/assets/Hero/background.png" alt="" className='hero-background' />
        <a className='button-location' href='https://maps.app.goo.gl/qotuajgazozZbqpa8?g_st=aw' target="_blank" rel="noopener noreferrer">
          <img src="/assets/Hero/button.png" alt="" className='button-image' />
        </a>
        <div className="countdown-component">
          <img src="/assets/Hero/faltan.png" alt="" className='faltan-image' />
          <CountdownComponent targetDate={'2026-04-18T15:00:00'}></CountdownComponent>
        </div>
        <a href="https://maps.app.goo.gl/8doXxEDBpC87xMAb6" target="_blank" rel="noopener noreferrer">
          <img src="/assets/Hero/location.png" alt="" className="button-location" />
        </a>
        <a href={`https://api.whatsapp.com/send?phone=5215527043238&text=${encodeURIComponent(confirmationMessage)}`} target="_blank" rel="noopener noreferrer">
          <img src="/assets/Hero/confirmation.png" alt="" className="button-confirmation" />
        </a>
      </div>
    </section>
  );
}
