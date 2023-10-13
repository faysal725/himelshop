import { FiChevronRight } from 'react-icons/fi';
import { TiFlash } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import image1 from '../../assets/images/flash/1.jpg';
import image2 from '../../assets/images/flash/2.jpg';
import image3 from '../../assets/images/flash/3.jpg';
import image4 from '../../assets/images/flash/4.jpg';
import image5 from '../../assets/images/flash/5.jpg';
import image6 from '../../assets/images/flash/6.jpg';
import FlashItem from '../../Components/FlashItem/FlashItem';
import { useSizeContext } from '../../contexts/SizeContextProvider';
import './Flash.scss';

const Flash = () => {
    const { size } = useSizeContext();
    const flash = [
        {
            id: 1,
            sale: 45,
            name: 'Baby Bounoer With Toy For 5m 2y kids ...',
            price: 1660,
            previousPrice: 1820,
            solid: 120,
            image: image1,
        },
        {
            id: 2,
            sale: 13,
            name: 'Baby Bounoer With Toy For 5m 2y kids ...',
            price: 1660,
            previousPrice: 1820,
            solid: 120,
            image: image2,
        },
        {
            id: 3,
            sale: 33,
            name: 'Baby Bounoer With Toy For 5m 2y kids ...',
            price: 1160,
            previousPrice: 1320,
            solid: 120,
            image: image3,
        },
        {
            id: 4,
            sale: 33,
            name: 'Baby Bounoer With Toy For 5m 2y kids ...',
            price: 1160,
            previousPrice: 1320,
            solid: 120,
            image: image4,
        },
        {
            id: 5,
            sale: 33,
            name: 'Baby Bounoer With Toy For 5m 2y kids ...',
            price: 1160,
            previousPrice: 1320,
            solid: 120,
            image: image5,
        },
        {
            id: 6,
            sale: 33,
            name: 'Baby Bounoer With Toy For 5m 2y kids ...',
            price: 1160,
            previousPrice: 1320,
            solid: 120,
            image: image6,
        },
    ];
    return (
        <div className="container d-none d-md-block">
            <div className="flashWrapper">
                <div className="flash">
                    <div className="flashSale">
                        <TiFlash className="flashIcon" />
                        <h5>Flash Sales</h5>
                        <div className="flashTitleTime">
                            <div className="flashTitleTimeItem"> 1 </div>:
                            <div className="flashTitleTimeItem"> 20 </div>:
                            <div className="flashTitleTimeItem"> 00 </div>:
                            <div className="flashTitleTimeItem"> 31 </div>
                        </div>
                    </div>
                    <Link to="/" className="flashSeeMore">
                        <span>See More</span>
                        <FiChevronRight className="flashSeeMoreIcon" />
                    </Link>
                </div>
                <div className="row g-3">
                    {flash.slice(0, size).map((product) => (
                        <div className="col-md-3 col-lg-2 col-xl-2" key={product.id}>
                            <FlashItem product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Flash;
