import { partnersLogo } from '../utils/constants'


const OurPartners = () => {
    return (
        <div className='p-20 space-y-8 w-full overflow-hidden'>
            <h1 className='text-4xl text-secondary text-center font-extrabold font-montserrat w-full break-words'>Our Partners & Supporters</h1>
            <div className="w-full inline-flex flex-nowrap"
                x-data="{}"
                x-init="$nextTick(() => {
                  let ul = $refs.logos;
                  ul.insertAdjacentHTML('afterend', ul.outerHTML);
                  ul.nextSibling.setAttribute('aria-hidden', 'true');
              })">
                <ul x-ref="logos" className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll"                >
                    {partnersLogo.map((logo, idx) =>
                        <li key={idx} className='w-40 h-40'>
                            <img src={logo} alt="logo" className='w-full h-full' />
                        </li>)}
                </ul>
            </div>
        </div>
    )
}

export default OurPartners