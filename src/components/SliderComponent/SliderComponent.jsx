import Carousel from 'react-bootstrap/Carousel';
import style from './Slider.module.css'

function Slider() {
    return (
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <div className={style.gg}>
                    <img
                        className="d-block w-100 "
                        src="https://dms-online.ru/images/site_images/0/5b719a6d0a141..jpg"
                        alt="First slide"
                    />
                </div>
                <Carousel.Caption>
                    <div className={style.gp}>
                        <h5>Пианино</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className={style.gg}>
                    <img
                        className="d-block w-100"
                        src="https://militarka.com/files/products/40163.450x450w.jpg"
                        alt="Second slide"
                    />
                </div>
                <Carousel.Caption>
                    <div className={style.gp}>
                        <h5>Пианино</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>

                <div className={style.gg}>
                    <img
                        className="d-block w-100"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaI-k_I1eiG17nIaO4iU7NNM4HTzU1fM6n-w&s"
                        alt="Third slide"
                    />
                </div>
                <Carousel.Caption>
                    <div className={style.gp}>
                        <h5>Виолончель</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;