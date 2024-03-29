import React from 'react'
import { BsTwitter, BsInstagram, BsLinkedin, BsGithub} from 'react-icons/bs';

const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
                <a href="https://github.com/iamalhera">
                    <BsGithub />
                </a>
            </div>
            <div>
                <a href="https://linkedin.com/in/gentleshah/">
                    <BsLinkedin />
                </a>
            </div>
            <div>
                <a href="https://twitter.com/alhera_ahmad">
                    <BsTwitter />
                </a>
            </div>
            {/* <div>
                <a href="https://www.instagram.com/alhera_ahmad/">
                    <BsInstagram />
                </a>
            </div> */}

        </div>
    )
}

export default SocialMedia