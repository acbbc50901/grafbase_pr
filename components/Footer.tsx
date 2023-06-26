
import Image from 'next/image'
import { footerLinks } from '@/constants'
import Link from 'next/link'

interface Props {
  title: string,
  link: string[],
}

const FooterCol:React.FC<Props> = ({title, link}) => (
  <div className='footer_column'>
    <h4 className=' font-semibold'>{title}</h4>
    <ul className=' flex flex-col gap-2 font-normal'>
      {
        link.map((item) => <Link href='/' key={item}>{item}</Link>)
      }
    </ul>
  </div>
)


const Footer = () => {
  return (
    <footer className=' flexStart footer'>
      <div className=' flex flex-col gap-12 w-full'>
        <div className='flex items-start flex-col'>
          <Image src='/logo-purple.svg' alt='' width={115} height={38}/>
          <p className='text-start text-sm font-normal mt-5 max-w-xs'>
            123
          </p>
        </div>
        <div className=' flex flex-wrap gap-12'>
          {
            footerLinks.map((item) => <FooterCol title={item.title} link={item.links}/>)
          }
          <div className='flex-1 flex flex-col gap-4'></div>
        </div>
      </div>
      <div className=' flexBetween footer_copyright'>
          <p>@ 2023 flex. All rights reserved</p>
          <p className=' text-gray '> <span className=' text-black font-semibold'>12, 00</span>1235</p>
      </div>
    </footer>
  )
}

export default Footer