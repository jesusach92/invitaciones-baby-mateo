import '../styles/fonts.css';
import '../styles/styles.css'
import CountdownComponent from './common/CountdownComponent';

export default function Hero() {
  return (
    <section className='hero'>
      <div className="hero-element font-serif-regular font-sm tertiary-color">
        <img src="/assets/Hero/party.png" alt="Mi cumple" className='hero-logo' style={{ width: '14rem' }} />
        <img src="/assets/Hero/mafer.png" alt="Mi cumple" className='hero-logo' />
      </div>
      <div className='hero-container' >
        <div className="hero-element-logos">
          <img src="/assets/Hero/cumpliendo.png" alt="" className="hero-logo" style={{ width: '14rem', paddingTop: '1rem' }} />
          <img src="/assets/Hero/age.png" alt="" className="hero-logo" style={{ width: '12rem' }} />
        </div>
        <div className="hero-element" style={{ alignItems: 'center', justifyContent: 'center' }}>
          <img src="/assets/Hero/date.png" alt="" className='hero-date' />
        </div>
        <div className="hero-element font-copper gradient-color texto-stroke font-lg countdown-position" style={{ textAlign: 'center' }}>
          FALTAN!!
          <br />
          <CountdownComponent targetDate={'2025-12-23T16:00:00'} />
        </div>
        <img src="/assets/Hero/chikids.png" alt="" className='hero-image-boton' />
        <div className="hero-element">
          <a href="https://maps.app.goo.gl/XnPqn9SVqU1eVm657"
            target="_blank" rel="noopener noreferrer"
          ><img src="/assets/Hero/ubicacion.png" alt="" className='hero-image-boton' /></a>
        </div>
        <div className="hero-element">
          <img src="/assets/Hero/no_faltes.png" alt="" className='hero-image-boton' />
          <a href="https://wa.link/6n6qlp"
            target="_blank" rel="noopener noreferrer"
          ><img src="/assets/Hero/confirmacion.png" alt="" className='hero-image-boton' /></a>
        </div>
      </div>

      <img src="/assets/Hero/guerreras.png" alt="" className="image-decor bottom-center" />
    </section>
  );
}
