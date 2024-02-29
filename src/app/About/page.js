import { Button } from 'flowbite-react';

export default function Page({params}) {
  return (
  <>
  <div>My Post: {params.slug}</div>
    <Button>Careers page</Button>
  </>)
}