import ecommerce from '../assets/ecommerce.png'
import { useNavigate } from 'react-router-dom';
const About = () => {
    const navigate = useNavigate();
    const changePage = () => {
        navigate('/categories')
    }
    return (
        <section className="p-5 p-lg-0 pt-5 text-center text-sm-start" style={{marginTop: '50px'}}>
        <div className="container">
            <div className="d-lg-flex align-items-center justify-content-between">
                <div>
                    <h1 className="text-dark">Выберите категории и <span className="text-primary">
                    покупайте оптимальные продукты!
                    </span></h1>
                    <p className="lead my-4 text-dark">
                    Наша система анализирует более <span className="text-danger">100,000</span> продуктов из <span className="text-danger">Kaspi.kz и Sulpak.kz </span> 
                    и определяет наиболее оптимальную цену для покупки
                    </p>
                    <button className="btn btn-primary btn-lg" onClick={changePage}>Узнать среднюю цену</button>
                </div>
                <img className="img-fluid w-40 d-none d-sm-block" src={ecommerce} alt=""/>
            </div>
        </div>
    </section>
    )
}
export default About