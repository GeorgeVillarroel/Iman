import React from 'react';
import { ROUTES } from '@navigation/routes/routes';
import LandingBackground from '@global/assets/img/LandingBackground.jpg';
import image from '@global/assets/img/image.png';
import video from '@global/assets/video/updatedhero-mobile-final.mp4';
import { useNavigate } from 'react-router-dom';

type Props = {};

const LandingPage = (props: Props) => {
    const navigate = useNavigate();

    return (
        <div className="landing-page min-h-screen w-full shrink-0 flex flex-col">
            <div className="navbar bg-black py-4 flex flex-row justify-between items-center w-full text-start text-white ">
                <div className="flex gap-8 items-center w-full ">
                    <div className="logo grow-0 px-4 ">Trello</div>
                    <div className=" md:flex flex-row gap-6 grow hidden  ">
                        <div className="div ">features</div>
                        <div className="div ">solutions</div>
                        <div className="div ">plans</div>
                        <div className="div ">pricing</div>
                        <div className="div ">resources</div>
                    </div>
                    <div className="div gap-4 px-4 grow justify-end hidden md:flex  ">
                        <button>Log in</button>
                        <button>Get Trello for free</button>
                    </div>
                </div>
            </div>
            <main className="content bg-[#f3f3f5] flex-1 h-full flex justify-center items-end font-play ">
                <div className="w-full flex flex-col md:flex-row max-w-7xl px-6 pt-20 text-black items-center">
                    <div className=" self-start px-4 pb-20 gap-6 flex flex-col justify-between font-extrabold flex-1 ">
                        <div className="text-6xl ">
                            Capture, organize, and tacle your to-dos from
                            anywhere.
                        </div>
                        <div className="div text-2xl -mt-4 ">
                            Escape the clutter and chaos-unleash your
                            productivity with Trello.
                        </div>
                        <div className="div">
                            [Email ] Sign up - it's free!{' '}
                        </div>
                        <div className="-mt-4 ">
                            By entering my email, i acknowledge the Attlasian
                            Privacy Policy
                        </div>
                        <div className="div">Watch video</div>
                    </div>
                    <div className=" flex-1 flex items-end ">
                        <video src={video} autoPlay loop></video>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default LandingPage;
