import './HumanResources.css';
import HumanResourcesTab from './HumanResourcesTab';
import employeeDirectoryImage from '../Assets/employee-directory.svg';
import employeeManagement from '../Assets/employee-management.svg';
import performanceManagement from '../Assets/performance-management.svg';
import paidTimeOff from '../Assets/paid-time-off.svg';

const HumanResources = () => {
    const properties = [
        {
            image: employeeManagement,
            altText: 'Logo of Employment Management',
            title: 'Employment Management', 
            description: 'From Hiring & Onboarding to Retiring, the Resource Edge Employee Management module eliminate all the complexities & paperwork involved in managing our team.'
        },
        {
            image: performanceManagement,
            altText: 'Logo of Performance Management',
            title: 'Performance Management',
            description: 'Manage and track employee performance with our easy-to-use tools for goal-setting, performance agreements and performance reviews.'
        },
        {
            image: paidTimeOff,
            altText: 'Logo of Paid time off',
            title: 'Paid time off',
            description: 'Employees can request for paid time off, vacations, sick leaves or educational leaves and get approvals within Resource Edge. HR managers can equally ensure compliance.'
        }
    ]

    return (
        <div className="human-resources">
            <div className="human-resources-text">
                <h1>Human Resources</h1>
                <p>
                    Onboard new employees, manage the employee lifecycle and measure employee performance.
                </p>
            </div>
            <div className="human-resources-details">
                <HumanResourcesTab
                    image = {properties[0].image}
                    altText = {properties[0].altText}
                    title = {properties[0].title}
                    description = {properties[0].description}
                />
                <HumanResourcesTab
                    image = {properties[1].image}
                    altText = {properties[1].altText}
                    title = {properties[1].title}
                    description = {properties[1].description}
                />
                <HumanResourcesTab
                    image = {properties[2].image}
                    altText = {properties[2].altText}
                    title = {properties[2].title}
                    description = {properties[2].description}
                />
            </div>
            <div className="human-resources-image">
                <img src={employeeDirectoryImage} alt="Image of Employee Directory"/>
            </div>
        </div>
    );
}
 
export default HumanResources;