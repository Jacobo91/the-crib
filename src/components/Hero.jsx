import video from '../images/sunrise-timelapse.mp4';
import videoWebm from '../images/sunrise-timelapse.webm';
import videoOgg from '../images/sunrise-timelapse.ogg';
import logoLetters from '../images/logo-letters.png';

export function Hero(){
    return(
        <section className="hero">
            <video  autoPlay muted loop>
                <source src={video} type="video/mp4" />
                <source src={videoWebm} type="video/webm" />
                <source src={videoOgg} type="video/ogg" />
            </video>
            <img src={logoLetters} alt="" className='logo-letters'/>
        </section>
    )
}
