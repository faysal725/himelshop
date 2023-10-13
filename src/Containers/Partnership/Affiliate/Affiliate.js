import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    // eslint-disable-next-line prettier/prettier
    AccordionItemPanel
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import './Affiliate.scss';

const Affiliate = () => {
    const items = [
        {
            id: 1,
            header: 'How does the Affiliate Program work?',
            content:
                'You can share coupons, banners, and items on banggood with your audience through referral links and earn reward after a successful purchase.',
        },
        {
            id: 2,
            header: 'How can I earn in this program?',
            content:
                "You don't need to own a big website or a fancy Youtube channel. It's enough to register with the required information, and we will get back to you within 3-5 days.",
        },
        {
            id: 3,
            header: "What's new affiliate privilege?",
            content:
                'st, click on here Then,submit the information and you ready to join. Finally, your account would be approved.',
        },
        {
            id: 4,
            header: 'If I qualify for this program?',
            content:
                "You don't need to own a big website or a fancy Youtube channel.It's enough to register with the required information, and we will get back to you within 3-5 days.",
        },
    ];
    return (
        <div className="affiliate-wrapper">
            <div className="affiliate-banner">
                <div className="container pt-5">
                    <p className="banner-title">
                        Carve up
                        <span> $40000 </span>
                    </p>
                    <p className="banner-title">
                        Earn Up to
                        <span> $60000 </span>
                        cash
                    </p>

                    <p className="banner-text">11.11 Sale & Black Friday Sale Bonus Tips</p>
                    <div className="affiliate-time">
                        <div className="ends-in">Ends in</div>
                        <div className="time-count"> 1 </div> D
                        <div className="time-count"> 10 </div> :
                        <div className="time-count"> 12 </div> :
                        <div className="time-count"> 41 </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5 pb-5">
                <h4 className="about-title pt-4 mb-5">How does it work ?</h4>
                <div className="row">
                    <div className="col-md-4">
                        <div className="affiliate-box">
                            <div className="affiliate-icon icon-1" />
                            <div className="content">
                                <h4>Join</h4>
                                <p className="speech">
                                    It's 100% free to join. Click <span> join now </span> below and
                                    start monetizing your traffic.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="affiliate-box">
                            <div className="affiliate-icon icon-2" />
                            <div className="content">
                                <h4>Advertise</h4>
                                <p className="speech">
                                    Easily promote an offer or product{' '}
                                    <span>Share Customized links with your audience</span> .
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="affiliate-box">
                            <div className="affiliate-icon icon-3" />
                            <div className="content">
                                <h4>Earn</h4>
                                <p className="speech">
                                    Earn up to <span>25%</span> commission for specific catagories
                                    after a successful purchase; Refer more, Earn more.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container pb-5">
                <h4 className="about-title pt-4 mb-5 text-small ">
                    Learn More About Banggood Affiliate
                </h4>
                <div className="row g-2 g-sm-0">
                    <div className="col-md-7">
                        <Accordion allowZeroExpanded>
                            {items.map((item) => (
                                <AccordionItem key={item.uuid}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>{item.header}</AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>{item.content}</AccordionItemPanel>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                    <div className="col-md-5">
                        <iframe
                            width="100%"
                            height="102%"
                            src="https://www.youtube.com/embed/WHcwJF35Y14"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen=""
                        />
                    </div>
                </div>
            </div>

            <div className="py-5 py" style={{ background: '#f8f8f8' }}>
                <div className="container py-5">
                    <div className="text-center">
                        <h2 style={{ fontWeight: 'bold' }}>Become An Affiliate</h2>
                        <h6 className="py-2">
                            Get up to <span className="highlight">25% Commission</span> now
                        </h6>
                        <button type="button" className="custom-button px-4 py-2 d-inline-block">
                            Join Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Affiliate;
