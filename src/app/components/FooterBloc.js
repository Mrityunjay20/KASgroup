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
    <div className="bg-blue-950">
      <div className="flex flex-col md:flex-row md:items-center -bottom-5 bg-blue-950">
        {/* Left Div (Text) */}
        <div className="md:w-1/2 px-4 my-12 py-8 md:py-0 ml-6">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Left Div Text</h2>
          <p className="text-white">Hello this is sample text.</p>
        </div>

        {/* Right Div (Image Link) */}
        <div className="md:w-1/4 ml-auto my-4">
          <Button color="success">Blue hello</Button>
        </div>
      </div>
      <Footer bgDark>
        <div className="w-full">
          <div className="flex w-1/2 mx-auto my-5 rounded-md flex-col md:flex-row md:items-center -bottom-5 bg-orange-400">
            {/* Left Div (Text) */}
            <div className="md:w-1/2 px-4 my-12 py-8 md:py-0 ml-6">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Left Div Text
              </h2>
              <p className="text-white">Hello this is sample text.</p>
            </div>

            {/* Right Div (Image Link) */}
            <div className="md:w-1/4 ml-auto my-4">
              <Button color="success">Blue hello</Button>
            </div>
          </div>

          <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4 rounded-none">
            <div>
              <Footer.Title title="Company" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">About</Footer.Link>
                <Footer.Link href="#">Careers</Footer.Link>
                <Footer.Link href="#">Brand Center</Footer.Link>
                <Footer.Link href="#">Blog</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="help center" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Discord Server</Footer.Link>
                <Footer.Link href="#">Twitter</Footer.Link>
                <Footer.Link href="#">Facebook</Footer.Link>
                <Footer.Link href="#">Contact Us</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Licensing</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="download" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">iOS</Footer.Link>
                <Footer.Link href="#">Android</Footer.Link>
                <Footer.Link href="#">Windows</Footer.Link>
                <Footer.Link href="#">MacOS</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
          <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="Flowbite™" year={2022} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="#" icon={BsFacebook} />
              <Footer.Icon href="#" icon={BsInstagram} />
              <Footer.Icon href="#" icon={BsTwitter} />
              <Footer.Icon href="#" icon={BsGithub} />
              <Footer.Icon href="#" icon={BsDribbble} />
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
}
