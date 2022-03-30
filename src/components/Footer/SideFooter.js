import  './SideFooter.css'
import logo from '../../assests/logo.png'
import styled from 'styled-components';

import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

//simple styled component
const Copyright = styled.span `
    color: #696969;
    font-size: 11px;
    font-family: Arial, Helvetica, sans-serif;
    padding-bottom: 10px;
    font-weight: lighter;
    word-spacing: -1px;
`;

//prop based adaptation styled components 
const Ul= styled.ul`
    display: inline-flex;
    list-style-type: none;
    font-weight: ${props => props.subLinks ? 'bold' : '500'};
    font-size: ${props => props.subLinks ? '14px' : '12px'};
    margin-top: ${props => props.subLinks ? '11px' : '15px'};
    gap: ${props => props.subLinks ? '19px' : '30px'};
    color: ${props => props.subLinks ? 'black' : '#7F7F7F'};
`;

//extending styles using  "as" polymorphic prop and pseuwdoselectors
const Icon = styled.a`
    padding-top: 13px;
    margin-bottom: 9px;
    color: black;
    text-decoration: none;

    &:hover{
    color: grey;
    }
`;

const SiteFooter = () => {

    return (
        <div className='footer'>
            <a href="http://localhost:3000/">
                <img alt="site-logo" src={logo} width="135px" />
            </a>
            <Ul subLinks>
                <li>About</li>
                <li>Press</li>
                <li>Blog</li>
                <li>Jobs</li>
                <li>Advertisers</li>
                <li>Publishers</li>
                <li>Developers</li>
                <li>Help Center</li>
            </Ul>
            <hr />
            <Ul >
                <li>Privacy and Cookie Policy</li>
                <li>Terms</li>
                <li>Legal notices</li>
                <li>Family filter:<span style={{color: 'black',fontWeight: 'bolder'}}> On</span></li>
                <li>All videos</li>
                <li>Location: <span style={{color: 'black',fontWeight: 'bolder'}}> United States</span></li>
            </Ul>
            <div className='subfooter'>
                <div className='socials'>
                    <Icon as="a" href='https://www.facebook.com/Dailymotion'><AiFillFacebook size={20}/></Icon>
                    <Icon as="a" href='https://twitter.com/Dailymotion'><AiOutlineTwitter size={20}/></Icon>
                    <Icon as="a" href='https://www.instagram.com/accounts/login/?next=/dailymotion/'><AiOutlineInstagram size={20}/></Icon>
                </div>
                    <Copyright>© 2005 - 2022 Dailymotion - designed with ♥ in Paris, FR</Copyright>
            </div>
        </div>
    )
}

export default SiteFooter;