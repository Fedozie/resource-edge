import './SoloSection.css'

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
                        <img src={props.descriptionImageOne} alt={props.descriptionAltTextOne}/>
                        <h4>{props.descriptionTitleOne}</h4>
                        <p>{props.descriptionTextOne}</p>
                    </div>
                    <div>
                        <img src={props.descriptionImageTwo} alt={props.descriptionAltTextTwo}/>
                        <h4>{props.descriptionTitleTwo}</h4>
                        <p>{props.descriptionTextTwo}</p>
                    </div>
                </div>
            </div>
            <div className = "section-image">
                <img src={props.image} alt={props.altText}/>
            </div>
        </div>
    );
}
 
export default SoloSection;