import { Button, Carousel } from 'flowbite-react';
import BottomComponent from './components/BottomComponent';
import CarouselComponent from './components/CarouselComponent';
import Datablocks from './components/DataBlocks';
import LeftDatablocks from './components/LeftDataBlocks';
import Gallery from './components/Gallery';
import FooterBlock from './components/FooterBloc';

export default function Page({params}) {
  return (
  <div className=' h-screen' >
    <CarouselComponent/>
    <BottomComponent/>
    <Datablocks/>
    <LeftDatablocks/>
    <Gallery/>
    <FooterBlock/>
  </div>)
}
