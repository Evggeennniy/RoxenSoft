import React from "react";
import logo from "../../public/assets/footer-logo.svg";
import tgIcon from "../../public/assets/hugeicons_telegram.svg";
import whatsAppIcon from "../../public/assets/whatsApp.svg";
import gmailIcon from "../../public/assets/gmail.com.svg";
import instaIcon from "../../public/assets/insta.svg";
import Image from "next/image";
function Footer(props) {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-12">
            <div className="about-footer">
              <div className="footer-logo mb-3">
                <Image src={logo} alt="Footer Logo" />
              </div>

              <div className="d-flex justify-content-center gap-2 mb-3">
                <a
                  href="https://wa.me/380732001611"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-default btn-default__social"
                >
                  <Image width={20} src={whatsAppIcon} alt="WhatsApp" />
                </a>
                <a
                  href="https://t.me/roxensoft_ua"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-default btn-default__social"
                >
                  <Image width={20} src={tgIcon} alt="Telegram" />
                </a>
                <a
                  href="mailto:rox.techlead@gmail.com"
                  className="btn-default btn-default__social"
                >
                  <Image width={20} src={gmailIcon} alt="Gmail" />
                </a>
                <a href="#" className="btn-default btn-default__social">
                  <Image width={20} src={instaIcon} alt="Instagram" />
                </a>
              </div>

              <div className="footer-copyright-text">
                <p>All rights reserved by ROX TechLead.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
