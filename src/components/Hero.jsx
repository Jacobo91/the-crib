import video from '../images/sunrise-timelapse.mp4';
import logoLetters from '../images/logo-letters.png';

export function Hero(){
    return(
        <section className="hero">
            <video  muted loop>
                <source src={video} type="video/mp4" />
            </video>
            <img src={logoLetters} alt="" className='logo-letters'/>
        </section>
    )
}
