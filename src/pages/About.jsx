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
                    <h1 className="text-dark">Choose categories and <span className="text-primary">
                     buy optimal products!
                    </span></h1>
                    <p className="lead my-4 text-dark">
                    Our system analyzes more than <span className="text-danger">100,000 </span> products from <span className="text-danger">Kaspi.kz and Sulpak.kz </span> 
                    and identifies the most optimal price to buy
                    </p>
                    <button className="btn btn-primary btn-lg" onClick={changePage}>Go for categories</button>
                </div>
                <img className="img-fluid w-40 d-none d-sm-block" src={ecommerce} alt=""/>
            </div>
        </div>
    </section>
    )
}
export default About