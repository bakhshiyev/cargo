import Card from "../ui/Card";
import Button from '../ui/Button';

const Contact = () => {
    return (
        <Card>
            <h2 className="text-center font-semibold">Contact</h2>
            <div className="flex">
                <div className="basis-1/2">
                    <form>
                        <div>
                            <label htmlFor="contactEmail">Your Email</label>
                            <input required type='email' id='contactEmail' />
                        </div>
                        <div>
                            <label htmlFor="contact-phone">Your Phone Number</label>
                            <input type='tel' id='contact-phone' />
                        </div>
                        <div>
                            <label htmlFor="message">Your Message</label>
                            <textarea id='message' />
                        </div>
                        <Button>send</Button>
                    </form>
                </div>
                <div className="basis-1/2">
                    <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                        <a href="https://www.gps.ie/wearable-gps/">adventure gps</a>
                    </iframe>
                </div>
            </div>
        </Card>
    );
};

export default Contact;