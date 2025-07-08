import React from "react";
import footerLogo from "../../public/assets/images/footer-logo.svg";
import Image from "next/image";
function Footer(props) {
  return (
    <footer className='main-footer'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-4 col-md-4'>
            <div className='about-footer'>
              <div className='footer-logo'>
                <Image src={footerLogo} alt='footer Logo' />
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-8'>
            <div className='footer-contact-box'>
              <div className='footer-links'>
                <h3>Контакты</h3>
                <p>
                  <a href='tel:152885253'>+(00) - 152 885 253</a>
                </p>
                <p>
                  <a href='mailto:info@domainname.com'>info@domainname.com</a>
                </p>
              </div>

              <div className='footer-links'>
                <h3>Навигация</h3>
                <p>123 Lorem Street Suite 5B, Ips Park London, UK SW1A 1AA</p>
              </div>
            </div>
          </div>
        </div>

        <div className='col-lg-12'>
          <div className='footer-copyright-text'>
            <p>All rights reserved by ROX TechLead.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
