import React from 'react';
import { Nav, Tab } from 'react-bootstrap';
import featuredImage from '../../../assets/images/feature.png';
import CategoryItemMob from '../../../Components/CategoryItem/CategoryItemMob';
import CategoriesItem from './CategoriesItem';
import './MainCategoriesMob.scss';

const MainCategoriesMob = () => (
    <div className="mainCategoriesMob  d-md-none">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <div className="row">
                <div className="col-3">
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="first">
                                <div className="mobCategoryItem">
                                    <div>
                                        <img src={featuredImage} alt="" />
                                        <span>Featured</span>
                                    </div>
                                </div>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">
                                <div className="mobCategoryItem">
                                    <div>
                                        <img src={featuredImage} alt="" />
                                        <span>Toy Hobbies and Robots</span>
                                    </div>
                                </div>
                            </Nav.Link>
                            <Nav.Link eventKey="third">
                                <div className="mobCategoryItem">
                                    <div>
                                        <img src={featuredImage} alt="" />
                                        <span>Tools and Industrial, Scientists</span>
                                    </div>
                                </div>
                            </Nav.Link>
                            <Nav.Link eventKey="four">
                                <div className="mobCategoryItem">
                                    <div>
                                        <img src={featuredImage} alt="" />
                                        <span>Tools and Industrial, Scientists</span>
                                    </div>
                                </div>
                            </Nav.Link>
                            <Nav.Link eventKey="five">
                                <div className="mobCategoryItem">
                                    <div>
                                        <img src={featuredImage} alt="" />
                                        <span>Tools and Industrial, Scientists</span>
                                    </div>
                                </div>
                            </Nav.Link>
                            <Nav.Link eventKey="six">
                                <div className="mobCategoryItem">
                                    <div>
                                        <img src={featuredImage} alt="" />
                                        <span>Tools and Industrial, Scientists</span>
                                    </div>
                                </div>
                            </Nav.Link>
                            <Nav.Link eventKey="seven">
                                <div className="mobCategoryItem">
                                    <div>
                                        <img src={featuredImage} alt="" />
                                        <span>Tools and Industrial, Scientists</span>
                                    </div>
                                </div>
                            </Nav.Link>
                            <Nav.Link eventKey="eight">
                                <div className="mobCategoryItem">
                                    <div>
                                        <img src={featuredImage} alt="" />
                                        <span>Tools and Industrial, Scientists</span>
                                    </div>
                                </div>
                            </Nav.Link>
                            <Nav.Link eventKey="nine">
                                <div className="mobCategoryItem">
                                    <div>
                                        <img src={featuredImage} alt="" />
                                        <span>Testing</span>
                                    </div>
                                </div>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
                <div className="col-9">
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <div className="row pt-2 py-3 g-2 me-1">
                                <div className="col-4">
                                    <CategoryItemMob />
                                </div>
                                <div className="col-4">
                                    <CategoryItemMob />
                                </div>
                                <div className="col-4">
                                    <CategoryItemMob />
                                </div>
                                <div className="col-4">
                                    <CategoryItemMob />
                                </div>
                                <div className="col-4">
                                    <CategoryItemMob />
                                </div>
                                <div className="col-4">
                                    <CategoryItemMob />
                                </div>
                                <div className="col-4">
                                    <CategoryItemMob />
                                </div>
                                <div className="col-4">
                                    <CategoryItemMob />
                                </div>
                                <div className="col-4">
                                    <CategoryItemMob />
                                </div>
                                <div className="col-4">
                                    <CategoryItemMob />
                                </div>
                                <div className="col-4">
                                    <CategoryItemMob />
                                </div>
                                <div className="col-4">
                                    <CategoryItemMob />
                                </div>
                                <div className="col-4">
                                    <CategoryItemMob />
                                </div>
                                <div className="col-4">
                                    <CategoryItemMob />
                                </div>
                                <div className="col-4">
                                    <CategoryItemMob />
                                </div>
                                <div className="col-4">
                                    <CategoryItemMob />
                                </div>
                                <div className="col-4">
                                    <CategoryItemMob />
                                </div>
                                <div className="col-4">
                                    <CategoryItemMob />
                                </div>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <div className="mobCategoriesList">
                                <CategoriesItem />
                                <CategoriesItem />
                                <CategoriesItem />
                                <CategoriesItem />
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
                                consectetur odit porro. Saepe eius, ut ducimus accusantium iusto
                                veritatis iure, exercitationem illum ipsum, tenetur voluptatum? Unde
                                ullam magnam voluptas voluptate!{' '}
                            </p>
                        </Tab.Pane>
                    </Tab.Content>
                </div>
            </div>
        </Tab.Container>
    </div>
);

export default MainCategoriesMob;
