/* eslint-disable no-underscore-dangle */
import { Link } from 'react-router-dom';
import './Categories.scss';

const Categories = ({ categories }) => (
    <ul className="categoryContainer">
        {categories && categories.map((category) => (
            <li className="categoryItem" key={category._id}>
                <Link to="/category" className="categoryLinkItem">
                    {category.name}
                </Link>
                {category.children.length > 0 && (
                    <div className="subCategoryContainer">
                        {category.children.map((subCategory) => (
                            <div className="cate-column" key={subCategory._id}>
                                <dl>
                                    <dt>
                                        <Link to="/"> {subCategory.name}</Link>
                                    </dt>
                                    {subCategory.children.map((childCategory) => (
                                        <dd key={childCategory._id}>
                                            <Link to="/"> {childCategory.name} </Link>
                                        </dd>
                                    ))}
                                </dl>
                            </div>
                        ))}
                    </div>
                )}
            </li>
        ))}
    </ul>
);

export default Categories;
