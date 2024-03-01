"use client";

import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { Button } from "flowbite-react";

export default function FooterBlock() {
  return (
    <div className="bg-[#012D61]">
      <div className="flex flex-col md:flex-row md:items-center -bottom-5 bg-[#012D61]">
        {/* Left Div (Text) */}
        <div className="md:w-1/2 px-4 my-12 py-8 md:py-0 ml-6">
          <p className="text-white">Our vision is to consistently offer the highest standards of quality scientific services through the perfect amalgamation of insights and evidence.</p>
        </div>

        {/* Right Div (Image Link) */}
        <div className="md:w-1/4 ml-auto my-4">
          <Button color="success">Join Us</Button>
        </div>
      </div>
      <Footer className="bg-[#040b47]">
        <div className="w-full">
          <div className="flex w-1/2 mx-auto my-5 rounded-md flex-col md:flex-row md:items-center -bottom-5 bg-orange-400">
            {/* Left Div (Text) */}
            <div className="md:w-1/2 px-4 my-12 py-8 md:py-0 ml-6">
              
              <p className="text-white">We make it easy for patients around the world to get care from Mayo Clinic.</p>
            </div>

            {/* Right Div (Image Link) */}
            <div className="md:w-1/4 ml-auto my-4">
              <Button color="white" className=" border-2 bg-transparent border-white hover:border-1 hover:border-black duration-300 hover:bg-white hover:text-black">Contact us</Button>
            </div>
          </div>

          <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4 rounded-none">
            <div>
              <Footer.Title className="text-white"  title="Company" />
              <Footer.LinkGroup className="text-white"  col>
                <Footer.Link href="#">About</Footer.Link>
                <Footer.Link href="#">Careers</Footer.Link>
                <Footer.Link href="#">Brand Center</Footer.Link>
                <Footer.Link href="#">Blog</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title className="text-white"  title="help center" />
              <Footer.LinkGroup className="text-white"  col>
                <Footer.Link href="#">Discord Server</Footer.Link>
                <Footer.Link href="#">Twitter</Footer.Link>
                <Footer.Link href="#">Facebook</Footer.Link>
                <Footer.Link href="#">Contact Us</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title className="text-white"  title="legal" />
              <Footer.LinkGroup col>
                <Footer.Link className="text-white"   href="#">Privacy Policy</Footer.Link>
                <Footer.Link className="text-white"  href="#">Licensing</Footer.Link>
                <Footer.Link className="text-white"  href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title className="text-white"  title="download" />
              <Footer.LinkGroup col>
                <Footer.Link className="text-white"  href="#">iOS</Footer.Link>
                <Footer.Link className="text-white"  href="#">Android</Footer.Link>
                <Footer.Link className="text-white"  href="#">Windows</Footer.Link>
                <Footer.Link className="text-white"  href="#">MacOS</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
          <div className="w-full bg-black px-4 py-6 sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright className="text-white" href="#" by="Iniseria" year={2024} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon className="text-white" href="#" icon={BsFacebook} />
              <Footer.Icon className="text-white"  href="#" icon={BsInstagram} />
              <Footer.Icon className="text-white"  href="#" icon={BsTwitter} />
              <Footer.Icon className="text-white"  href="#" icon={BsGithub} />
              <Footer.Icon className="text-white"  href="#" icon={BsDribbble} />
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
}
