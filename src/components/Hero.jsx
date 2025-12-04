import '../styles/fonts.css';
import '../styles/styles.css'
import CountdownComponent from './common/CountdownComponent';

export default function Hero() {
  return (
    <section className='hero'>
      <div className="hero-element font-serif-regular font-sm tertiary-color" style={{ fontWeight: '200', }} contentEditable={false} autoCorrect='off'><img src="/assets/Hero/mi_cumple.png" alt="Mi cumple" className='hero-date' /></div>
      <div className='hero-container' >
        <div className="hero-element-title">
          <img src="/assets/Hero/axel.png" alt="" className='hero-image-title' />
          <img src="/assets/Hero/baby.png" alt="" className='hero-image-subtitle' />
        </div>
        <div className="hero-element-logos">
          <img src="/assets/Hero/cumpliendo.png" alt="" className="hero-logo" />
          <img src="/assets/Hero/age.png" alt="" className="hero-logo" style={{ width: '8rem' }} />
        </div>
        <div className="hero-element" style={{ alignItems: 'center', justifyContent: 'center' }}>
          <img src="/assets/Hero/fecha.png" alt="" className='hero-date' />
        </div>
        <div className="hero-element font-cooper primary-color font-md">
          FALTAN!!
          <br />
          <CountdownComponent targetDate={'2026-01-03T14:00:00'} />
        </div>
        <div className="hero-element font-cooper tertiary-color font-md">
          Te esperamos en
        </div>
        <div className='hero-element font-cooper tertiary-color font-xs' style={{ textAlign: 'center' }}>
          C. Tenango 12 Col. Fraccionamiento
          Hacienda las Torres 1
        </div>
        <div className="hero-element">
          <a href="https://maps.app.goo.gl/SN7Ydk5EQWV9XecV6"
            target="_blank" rel="noopener noreferrer"
          ><img src="/assets/Hero/ubicacion.png" alt="" className='hero-image-boton' /></a>
        </div>
        <div className="hero-element font-cooper  tertiary-color font-sm">¡Confirma tu asistencia!</div>
        <div className="hero-element">
          <a href="https://wa.link/s9zv6k"
            target="_blank" rel="noopener noreferrer"
          ><img src="/assets/Hero/confirmacion.png" alt="" className='hero-image-boton' /></a>
        </div>
        <img src="/assets/Hero/burbuja.png" alt="" className="image-decor bottom-left" />
        <img src="/assets/Hero/mimoso.png" alt="" className="image-decor center-right" />
        <img src="/assets/Hero/burbuja.png" alt="" className="image-decor top-center-decor-little" />
        <img src="/assets/Hero/burbuja.png" alt="" className="image-decor top-right-decor-little" />
        <img src="/assets/Hero/burbuja.png" alt="" className="image-decor top-left-decor" />
        <img src="/assets/Hero/burbuja.png" alt="" className="image-decor top-left-decor animate-fall-and-spin" />
        <img src="/assets/Hero/burbuja.png" alt="" className="image-decor top-right" />
        <img src="/assets/Hero/burbuja.png" alt="" className="image-decor top-right-decor animate-fall-and-spin" />
        <img src="/assets/Hero/burbuja.png" alt="" className="image-decor top-right-decor" />
        <img src="/assets/Hero/burbuja.png" alt="" className="image-decor center-left" />
        <img src="/assets/Hero/burbuja.png" alt="" className="image-decor bottom-right-1" />
        <img src="/assets/Hero/burbuja.png" alt="" className="image-decor bottom-right-2" />
        <img src="/assets/Hero/burbuja.png" alt="" className="image-decor top-left" />
      </div>
      <img src="/assets/Hero/polvos_2.png" alt="" className="image-decor top-center" />
      <img src="/assets/Hero/burbujas-mini.png" alt="" className="image-decor bottom-center" />
    </section>
  );
}
