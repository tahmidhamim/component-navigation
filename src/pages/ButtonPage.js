import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from "../components/Button";

function ButtonPage() {
    const handleClick = () => {
        console.log('Click!!');
    };

    const handleMouseEnter = () => {
        console.log('Enter!!');
    };

    const handleMouseLeave = () => {
        console.log('Leave!!');
    };

    return (
        <div>
            <div>
                <Button success rounded outline className='mb-5' onClick={handleClick}>
                    <GoBell className='mr-1' />
                    Click me!!
                </Button>
            </div>
            <div>
                <Button danger outline onMouseEnter={handleMouseEnter}>
                    <GoCloudDownload />
                    Buy Now!
                </Button>
            </div>
            <div>
                <Button warning onMouseLeave={handleMouseLeave}>
                    <GoDatabase />
                    See Deal!
                </Button>
            </div>
            <div>
                <Button secondary outline>
                    Hide Ads!
                </Button>
            </div>
            <div>
                <Button primary rounded>
                    Something!
                </Button>
            </div>
        </div>
    );
}

export default ButtonPage;