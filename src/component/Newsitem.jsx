import { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let { title, desc, imgUrl, newsUrl } = this.props;
        return (
            <div>
                <section>
                    <div className="container px-5 py-10 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            <div className="p-4 h-[30rem] ">
                                <div className="h-full shadow-xl rounded-lg overflow-auto">
                                    <img className="h-52 lg:h-56 w-full object-cover object-center" src={imgUrl ? imgUrl : 'https://www.coindesk.com/resizer/HJt5rqS8vQ8-a2C4rtCEWIkyQfQ=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/LMUNLBXPLRGXZAUVA3VP2BR24A.png'} alt="blog" />
                                    <div className="p-6">
                                        <h1 className="title-font text-2xl font-bold text-black mb-3">{title ? title.slice(0, 45) : ''}</h1>
                                        <p className="leading-relaxed mb-3">{desc ? desc.slice(0, 58) : ''}</p>
                                        <div className="flex items-center flex-wrap ">
                                            <a href={newsUrl} target='_blank' className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer">Learn More
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                            <span className="text-pink-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
                                                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                </svg>1.2K
                                            </span>
                                            <span className="text-pink-500 inline-flex items-center leading-none text-sm">
                                                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                </svg>6
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Newsitem