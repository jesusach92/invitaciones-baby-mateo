import CountdownComponent from './common/CountdownComponent';

export default function Hero() {
  return (
    <section className='hero'>
      <div className='hero-container'>
        <img src="/assets/Hero/background.png" alt="" className='hero-background' />
        <a className='button-location' href='https://maps.app.goo.gl/6c5Fy6Qi4hyqAenq8?g_st=aw' target="_blank" rel="noopener noreferrer">
          <img src="/assets/Hero/button.png" alt="" className='button-image' />
        </a>
        <div className="countdown-component">
          <CountdownComponent targetDate={'2026-02-28T18:00:00'}></CountdownComponent>
        </div>
      </div>
    </section>
  );
}
