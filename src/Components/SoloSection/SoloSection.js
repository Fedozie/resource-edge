import './SoloSection.css';

const SoloSection = (props) => {
    return (
        <div className = "section">
            <div className = "section-main">
                <div className = "section-text">
                    <h1>{props.mainTitle}</h1>
                    <p>{props.mainText}</p>
                </div>
                <div className = "section-description">
                    <div>
                        <picture>
                            <source media="(max-width: 26.5625rem)" srcset={props.descriptionImgOne}/>
                            <img src={props.descriptionImageOne} alt={props.descriptionAltTextOne}/>
                        </picture>
                        
                        <h4>{props.descriptionTitleOne}</h4>
                        <p>{props.descriptionTextOne}</p>
                    </div>
                    <div>
                        <picture>
                            <source media="(max-width: 26.5625rem)" srcset={props.descriptionImgTwo}/>
                            <img src={props.descriptionImageTwo} alt={props.descriptionAltTextTwo}/>
                        </picture>
                        
                        <h4>{props.descriptionTitleTwo}</h4>
                        <p>{props.descriptionTextTwo}</p>
                    </div>
                </div>
            </div>
            <div className = "section-image">
                <picture>
                    <source srcset={props.mobileImg} media="(max-width: 26.5625rem)" />
                    <img src={props.image} alt={props.altText}/>
                </picture>
            </div>
        </div>
    );
}
 
export default SoloSection;