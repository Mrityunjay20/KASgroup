'use client';

import Link from 'next/link';
import { Navbar } from 'flowbite-react';


export default function NavbarComponent() {
  return (<>
    
    <Navbar fluid rounded className='sticky'>
      <Navbar.Brand as={Link} href="/">
        <img src="/logo.jpeg" width={200} height={300} className="mr-3 object-cover mx-auto my-3 h-20 sm:h-9 filter" alt="KAS Logo" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link as={Link} className="text-base"  href="/" active>Home</Navbar.Link>
        <Navbar.Link as={Link} className="text-base"  href="#">About Us</Navbar.Link>
        <Navbar.Link as={Link} className="text-base"  href="#">Publications</Navbar.Link>
        <Navbar.Link as={Link} className="text-base"  href="#">Events</Navbar.Link>
        <Navbar.Link as={Link} className="text-base"  href="#">Services</Navbar.Link>
        <Navbar.Link as={Link} className="text-base"  href="#">Careers</Navbar.Link>
        <Navbar.Link as={Link} className="text-base"  href="Contactus">Contact Us</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </>
  );
}
