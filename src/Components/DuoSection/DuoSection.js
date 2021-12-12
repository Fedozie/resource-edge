import React from 'react';
import './DuoSection.css';
import SoloSection from '../SoloSection/SoloSection';
import Sponsors from '../Sponsors/Sponsors'
import travelLogisticsImage from '../Assets/travel-logistics.svg';
import assetManagementImage from '../Assets/asset-management.svg';
import travelLogisticsSectionImage from '../Assets/travel-logistics-image.svg';
import reVouchers from '../Assets/re-vouchers.svg';
import payroll from '../Assets/payroll.svg';
import financeSectionImage from '../Assets/finance-section-image.svg';
import AdminLogisticsImg from '../Assets/Admin-Logistics.svg';
import financeMobileImg from '../Assets/finance.svg';
import voucherMobile from '../Assets/voucherMobile.svg';
import payrollMobile from '../Assets/payrollMobile.svg';
import briefcaseMobile from '../Assets/briefcaseMobile.svg';
import travelMobile from '../Assets/travelMobile.svg';


const DuoSection = () => {
    const properties = [
        {
            mainTitle: 'Admin & Logistics',
            mainText: 'Manage and track company assets as well as logistics for travelling employees',
            descriptionImageOne: travelLogisticsImage,
            descriptionAltTextOne: 'Logo for Travel and Logistics',
            descriptionTitleOne: 'Travel & Logistics',
            descriptionTextOne: 'Make travel requests, get approvals, and have access to travel information.',
            descriptionImageTwo: assetManagementImage,
            descriptionAltTextTwo: 'Logo for Asset Management',
            descriptionTitleTwo: 'Asset Management',
            descriptionTextTwo: 'Manage the acquisition, assignment, and disposition of assets seamlessly.',
            image: travelLogisticsSectionImage,
            altText: 'Admin & Logistics Section Image',
            mobileImg: AdminLogisticsImg,
            descritptionImgOne: briefcaseMobile,
            descriptionImgTwo: travelMobile
        },
        {
            mainTitle: 'Finance',
            mainText: 'Generate invoices, track expenditure, and manage complex payrolls for multiple teams and companies',
            descriptionImageOne: reVouchers,
            descriptionAltTextOne: 'Logo for Vouchers',
            descriptionTitleOne: 'RE Vouchers',
            descriptionTextOne: 'Track and manage expenditure for multiple teams across your organisation using Resource Edge Vouchers',
            descriptionImageTwo: payroll,
            descriptionAltTextTwo: 'Logo for Payroll',
            descriptionTitleTwo: 'Payroll',
            descriptionTextTwo: 'Our easy to use systems takes away the pain of managing complex payrolls for organisations of all sizes.',
            image: financeSectionImage,
            altText: 'Finance Section Image',
            mobileImg: financeMobileImg,
            descritptionImgOne: voucherMobile,
            descriptionImgTwo: payrollMobile
        }
    ];

    return (
        <div className = "main-section">
            <SoloSection
                mainTitle = {properties[0].mainTitle}
                mainText = {properties[0].mainText}
                descriptionImageOne = {properties[0].descriptionImageOne}
                descriptionAltTextOne = {properties[0].descriptionAltTextOne}
                descriptionTitleOne = {properties[0].descriptionTitleOne}
                descriptionTextOne = {properties[0].descriptionTextOne}
                descriptionImageTwo = {properties[0].descriptionImageTwo}
                descriptionAltTextTwo = {properties[0].descriptionAltTextTwo}
                descriptionTitleTwo = {properties[0].descriptionTitleTwo}
                descriptionTextTwo = {properties[0].descriptionTextTwo}
                image = {properties[0].image}
                altText = {properties[0].altText}
                mobileImg = {properties[0].mobileImg}
            />
            <SoloSection
                mainTitle = {properties[1].mainTitle}
                mainText = {properties[1].mainText}
                descriptionImageOne = {properties[1].descriptionImageOne}
                descriptionAltTextOne = {properties[1].descriptionAltTextOne}
                descriptionTitleOne = {properties[1].descriptionTitleOne}
                descriptionTextOne = {properties[1].descriptionTextOne}
                descriptionImageTwo = {properties[1].descriptionImageTwo}
                descriptionAltTextTwo = {properties[1].descriptionAltTextTwo}
                descriptionTitleTwo = {properties[1].descriptionTitleTwo}
                descriptionTextTwo = {properties[1].descriptionTextTwo}
                image = {properties[1].image}
                altText = {properties[1].altText}
                mobileImg = {properties[1].mobileImg}
            />
            <Sponsors/>
        </div>
    );
}
 
export default DuoSection;