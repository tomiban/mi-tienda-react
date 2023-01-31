import { FaGithub, FaLinkedin } from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="py-3">
        <div className="container-fluid">
          <div className="row d-flex align-items-center text-white">


            <div className="col-9 col-xl-11 d-flex flex-column justify-content-end align-items-center">
              <div className="d-flex align-items-center justify-content-center">
                <div className=" mx-2">
                  <a href="https://github.com/tomiban" target="_blank" className="text-white"><FaGithub size={25} /></a>
                </div>
                <div className="mx-2">
                  <a href="https://www.linkedin.com/in/tbanchio/" target="_blank" className="text-white"> <FaLinkedin size={25} /></a>
                </div>
              </div>

              <div className="mt-1">
                <p className="small text-center m-0">Proyecto final de React - Tomás Banchio (2023)</p>
              </div>
            </div>

            <div className="col-3 col-xl-1">
              <a href="https://plataforma.coderhouse.com/perfil-2021" target="_blank" className="text-star">
                <img src="https://www.coderhouse.com/imgs/ch.svg" alt="" className="img-fluid" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;


