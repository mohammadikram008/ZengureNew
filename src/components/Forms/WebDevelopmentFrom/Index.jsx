import React, { Fragment, useState, useEffect } from 'react'
import { Row, Col, Input } from 'reactstrap'
import { Link } from 'react-router-dom'
import './WebForm.css'
import bg_img from '../../assets/images/image36.png'
import logo from '../../assets/images/logo.png'
import {
    addTask,
    getTasks,
    addGraphic,
    updateTask,
    deleteTask,
} from "../../services/TaskServices";
const Index = () => {
    const counters = [
        { percentage: 90, color: '#ff6347', text: "Speed" }, // Red color
        { percentage: 80, color: '#00cc99', text: "Achieved" }, // Green color
        { percentage: 100, color: '#3498db', text: "Resposive" } // Blue color
    ];

    const [formData, setFormData] = useState({

        brandname: '',
        websitetype: '',
        refrance: '',
        Branddescription: '',
        numberofpages: '',
        servicefeature1: '',
        servicefeature2: '',
        servicefeature3: '',
        Dycompanybriefly: '',
        WebsitesUnderDomain: '',
        domianname: '',

        additionalreq: ''
    });
    const [hasDomain, setHasDomain] = useState(false);
    const [needHosting, setNeedHosting] = useState(false);
    const [needLogo, setNeedLogo] = useState(false);
    const [needContent, setNeedContent] = useState(false);
    const [needImages, setNeedImages] = useState(false);
    // Handle radio button group changes
    const handleDomainChange = (event) => {
        setHasDomain(event.target.value === 'yes');
    };

    const handleHostingChange = (event) => {
        setNeedHosting(event.target.value === 'yes');
    };
    const handleLogoChange = (event) => {
        setNeedLogo(event.target.value === 'yes');
    };
    const handleContentChange = (event) => {
        setNeedContent(event.target.value === 'yes');
    };
    const handleImageChange = (event) => {
        setNeedImages(event.target.value === 'yes');
    };
    const [tasks, setTasks] = useState([]);

    const handleOptionChange = (event) => {
        const { value } = event.target;
        setHasDomain(value === 'yes');
    };

    // Handle form input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const originalTasks = tasks;
        console.log("domain", hasDomain)
        console.log("hashosting", needHosting)
        console.log("image", needImages)
        console.log("logo", needLogo)
        try {
            const { data } = await addTask({

                brandname: formData.brandname,
                websitetype: formData.websitetype,
                refrance: formData.refrance,
                Branddescription: formData.Branddescription,
                numberofpages: formData.numberofpages,
                servicefeature1: formData.servicefeature1,
                servicefeature2: formData.servicefeature2,
                servicefeature3: formData.servicefeature3,
                Dycompanybriefly: formData.Dycompanybriefly,
                WebsitesUnderDomain: formData.WebsitesUnderDomain,
                domianname: formData.domianname,

                additionalreq: formData.additionalreq,
                hasDomain: hasDomain,
                needHosting: needHosting,
                needLogo: needLogo,
                needContent: needContent,
                needImages: needImages,
        }, "tasks");

            if (data) {
                const tasks = originalTasks;
                tasks.push(data);
                alert("your data is submited you will be inform with in 24 hr thanks!")

            } else {
                alert("Error occure")

            }

        } catch (error) {
            console.log(error);
 
            
        }


        console.log(formData);
    };

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        const updatedServices = checked
            ? [...formData.services, name]
            : formData.services.filter((service) => service !== name);
        setFormData({
            ...formData,
            services: updatedServices,
        });
    };
    const divStyle = {
        backgroundColor: '#FFA500', // Set the background color
        backgroundImage: 'url(`${bg_image}`)', // Set the background image
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    return (
        <Fragment>
            <div className='web-from-bg'>
                <Row className='m-0'>
                    <Col md='6'>
                        <div className='main-webform-div '>
                            <div className=''>
                        <form className="contact-form2 " onSubmit={handleSubmit}>
                        <h1 className="form-title">  Web Design Form </h1>
                            <h3>Tell us what you want.</h3>

                            <div className='divider' ></div>
                            <div className='form-div'>
                                <label htmlFor="name" >Website Type</label>
                                <input
                                    type="text"
                                    placeholder='WebSite here...'
                                    id="websitetype"
                                    name="websitetype"
                                    className="rectangle-2"
                                    value={formData.websitetype}
                                    onChange={handleInputChange}

                                />
                            </div>


                            <div className='form-div'>
                                <label htmlFor="email">Reference</label>
                                <input
                                    type="text"
                                    placeholder='Referance Link here..'
                                    id="refrance"
                                    className="rectangle-2"
                                    name="refrance"
                                    value={formData.refrance}
                                    onChange={handleInputChange}

                                />
                            </div>
                            <h3 className="heading">Give us a gist of your brand!</h3>
                            <div className='divider' ></div>
                            <div className='form-div'>
                                <label htmlFor="domain">Brand Name</label>
                                <input
                                    type="text"
                                    id="brandname"
                                    className="rectangle-2"
                                    placeholder='Brand Name here..'
                                    name="brandname"
                                    value={formData.brandname}
                                    onChange={handleInputChange}

                                />
                            </div>
                            <div className='form-div'>
                                <label htmlFor="question">Brand Description</label>

                                <input
                                    type="text"
                                    id="Branddescription"
                                    name="Branddescription"
                                    className="rectangle-2"
                                    value={formData.Branddescription}
                                    placeholder='Brand Description'
                                    onChange={handleInputChange}

                                />
                            </div>
                            <div className='form-div'>
                                <label htmlFor="question">Numbers  of pages</label>

                                <input
                                    type="text"
                                    id="numberofpages"
                                    name="numberofpages"
                                    className="rectangle-2"
                                    value={formData.numberofpages}
                                    placeholder='e.g 2,3'
                                    onChange={handleInputChange}

                                />
                            </div>

                            <span htmlFor="question"> Add 3 main services/features your company provides</span>
<div className='feature-div'>


                            <input
                                type="text"
                                id="servicefeature1"
                                name="servicefeature1"
                                className=" feature-input"
                                value={formData.servicefeature1}
                                placeholder='Service/feature 1'
                                onChange={handleInputChange}

                            />
                            <input
                                type="text"
                                id="servicefeature2"
                                name="servicefeature2"
                                className="feature-input"
                                value={formData.servicefeature2}
                                placeholder='Service/feature 2'
                                onChange={handleInputChange}

                            />
                            <input
                                type="text"
                                id="servicefeature3"
                                name="servicefeature3"
                                className=" feature-input"
                                value={formData.servicefeature3}
                                placeholder='Service/feature 3'
                                onChange={handleInputChange}

                            />
</div>
                            <div className='form-div '>

                                <label htmlFor="question ">Describe your company briefly</label>
                                <textarea
                                    id="Dycompanybriefly"
                                    className="rectangle-2"
                                    name="Dycompanybriefly"
                                    value={formData.Dycompanybriefly}
                                    onChange={handleInputChange}
                                    placeholder='Describe your company briefly'

                                ></textarea>
                            </div>
                            <div className=''>
                                <div className='domian-div'>
                                    <h3>1) Do you have a Domain?</h3>
                                    <label className='radio-btn'>
                                        <input
                                            type="radio"
                                            name="domain"
                                            value="yes"
                                            checked={hasDomain}
                                            onChange={handleDomainChange}
                                        />
                                        Yes
                                    </label>
                                    <label className='radio-btn'>
                                        <input
                                            type="radio"
                                            name="domain"
                                            value="no"
                                            checked={!hasDomain}
                                            onChange={handleDomainChange}
                                        />
                                        No
                                    </label>
                                </div>
                                <h3>if yes,</h3>


                                <div className='form-div '>
                                    <label htmlFor="contactNumber">Domian Name:</label>
                                    <input
                                        type="tel"
                                        id="domianname"
                                        name="domianname"
                                        placeholder='Domain name..'
                                        className="rectangle-2"
                                        value={formData.domianname}
                                        onChange={handleInputChange}

                                    />
                                </div>
                                <div className='form-div'>
                                    <label htmlFor="contactNumber">Websites Under Domain:</label>
                                    <input
                                        type="tel"
                                        id="WebsitesUnderDomain"
                                        name="WebsitesUnderDomain"
                                        className="rectangle-2"
                                        placeholder='Websites Under Domain'
                                        value={formData.WebsitesUnderDomain}
                                        onChange={handleInputChange}

                                    />
                                </div>
                                <div>
                                    <h3>2) Do you have a hosting service?</h3>
                                    <label className='radio-btn'>
                                        <input
                                            type="radio"
                                            name="hostservice"
                                            value="yes"
                                            checked={needHosting}
                                            onChange={handleHostingChange}
                                        />
                                        Yes
                                    </label>
                                    <label className='radio-btn'>
                                        <input
                                            type="radio"
                                            name="hostservice"
                                            value="no"
                                            checked={!needHosting}
                                            onChange={handleHostingChange}
                                        />
                                        No
                                    </label>
                                </div>
                                <div>
                                    <h3>3) Do you need a logo to represent your brand?</h3>
                                    <label className='radio-btn'>
                                        <input
                                            type="radio"
                                            name="representyourbrand"
                                            value="yes"
                                            checked={needLogo}
                                            onChange={handleLogoChange}
                                        />
                                        Yes
                                    </label>
                                    <label className='radio-btn'>
                                        <input
                                            type="radio"
                                            name="representyourbrand"
                                            value="no"
                                            checked={!needLogo}
                                            onChange={handleLogoChange}
                                        />
                                        No
                                    </label>
                                </div>
                                <div>
                                    <h3>4) Do you need content for your website?</h3>
                                    <label className='radio-btn'>
                                        <input
                                            type="radio"
                                            name="contentwesite"
                                            value="yes"
                                            checked={needContent}
                                            onChange={handleContentChange}
                                        />
                                        Yes
                                    </label>
                                    <label className='radio-btn'>
                                        <input
                                            type="radio"
                                            name="contentwesite"
                                            value="no"
                                            checked={!needContent}
                                            onChange={handleContentChange}
                                        />
                                        No
                                    </label>
                                </div>
                                <div>
                                    <h3>5) Will you be providing product images and descriptions for your website?</h3>
                                    <label className='radio-btn'>
                                        <input
                                            type="radio"
                                            name="webimge"
                                            value="yes"
                                            checked={needImages}
                                            onChange={handleImageChange}
                                        />
                                        Yes
                                    </label>
                                    <label className='radio-btn'>
                                        <input
                                            type="radio"
                                            name="webimge"
                                            value="no"
                                            checked={!needImages}
                                            onChange={handleImageChange}
                                        />
                                        No
                                    </label>
                                </div>
                                <div>
                                    <h3>6) If you have any additional requirements for the website (color scheme, animations, etc.), Please let us know below.</h3>
                                    <textarea
                                        id="additionalreq"
                                        name="additionalreq"
                                        className="rectangle-2"
                                        value={formData.additionalreq}
                                        onChange={handleInputChange}

                                    ></textarea>
                                </div>
                            </div>
                            <div className='divider' ></div>
                            <h2 className="heading"> Thank you for sharing your preferences.</h2>
                            <p>We will meet your expectations.</p>

                            <button type="submit" className='button'>Submit</button>
                        </form>
                        </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Fragment>
    )
}

export default Index