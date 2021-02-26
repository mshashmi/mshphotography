import * as React from 'react';
import '../css/index.css';
import linkedin from '../images/linkedin.svg';
import twitter from '../images/twitter.svg';
import instagram from '../images/instagram.svg';
import facebook from '../images/facebook.svg';

interface Props {
}

interface State {
    feedback: string;
    name: string;
    mobile: string;
    email_from: string;
    isValid: boolean;
}

declare const window: any;

const isValidName = (str: string) => {    return !/[~`!\*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(str);}
const isValidEmail = (str: string) => {    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(str);}

export default class Contact extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = { feedback: '', name: '', mobile: '', email_from: "", isValid: false };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: any) {
        if (event.target.name == "message") {
            this.setState({ feedback: event.target.value })
        }
        if (event.target.name == "from_name") {
            this.setState({ name: event.target.value })
        }
        if (event.target.name == "mobile_number") {
            this.setState({ mobile: event.target.value })
        }
        if (event.target.name == "email_from") {
            this.setState({ email_from: event.target.value })
        }
        this.handleValidation();
    }

    handleBlur = () => {
        this.handleValidation();
    }

    handleValidation = () => {
        let formIsValid = true;
        if (this.state && !this.state.name) {
            formIsValid = false;
        }
        if (this.state && !this.state.feedback) {
            formIsValid = false;
        }
        if (this.state && !this.state.mobile) {
            formIsValid = false;
        }
        if (this.state && !isValidEmail(this.state.email_from)) {
            formIsValid = false;
        }
        this.setState({ isValid: formIsValid });
    }

    handleSubmit(event: any) {
        const templateId = 'template_7hkz1gl';

        this.sendFeedback(templateId,
            {
                message: this.state.feedback,
                from_name: this.state.name,
                reply_to: this.state.email_from,
                to_name: "Sajid",
                mobile: this.state.mobile
            })
    }

    sendFeedback(templateId: any, variables: any) {
        window.emailjs.send(
            'service_i324sec', templateId,
            variables
        ).then((res: any) => {
            console.log('Email successfully sent!')
        })
            .catch((err: any) => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }

    render() {
        return (
            <div className="App-contact">
                <form className="mailing">
                    <h5>Mail Me</h5>
                    <div className="text-box">
                        <div className="left">
                            <label>Name</label>
                        </div>
                        <div className="right">
                            <input
                                name="from_name"
                                type="text"
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                placeholder="Name"
                                required
                                value={this.state.name}
                                style={{ width: '100%', height: '15px' }}
                            />
                        </div>
                    </div>
                    <div className="text-box">
                        <div className="left">
                            <label>Mobile Number</label>
                        </div>
                        <div className="right">
                            <input
                                name="mobile_number"
                                type="number"
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                placeholder="Mobile Number"
                                value={this.state.mobile}
                                style={{ width: '100%', height: '15px' }}
                            />
                        </div>
                    </div>
                    <div className="text-box">
                        <div className="left">
                            <label>Email</label>
                        </div>
                        <div className="right">
                            <input
                                name="email_from"
                                type="text"
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                placeholder="Email"
                                value={this.state.email_from}
                                style={{ width: '100%', height: '15px' }}
                            />
                        </div>
                    </div>
                    <div className="text-box">
                        <div className="left">
                            <label>Message</label>
                        </div>
                        <div className="right">
                            <textarea
                                id="message"
                                name="message"
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                placeholder="Write your message here"
                                required
                                value={this.state.feedback}
                                style={{ width: '100%', height: '100px' }}
                            />
                        </div>
                    </div>
                    <div className="text-box button">
                        <button type="button" disabled={this.state && !this.state.isValid} className="btn btn--submit" onClick={this.handleSubmit} >Send Mail</button>
                    </div>
                </form>
                <div className="connect">
                    <h5>Connect with me</h5>
                    <div className="social-logo">
                        <a className="individual" href="https://www.linkedin.com/in/sajid-hashmi/" target="_blank" rel="noopener noreferrer">
                            <img width="5%" src={linkedin} alt="Linkedin" />
                        </a>
                        <a className="individual" href="https://twitter.com/hashmisajid/" target="_blank" rel="noopener noreferrer">
                            <img width="5%" src={twitter} alt="Twitter" />
                        </a>
                        <a className="individual" href="https://www.instagram.com/shashmi1996/" target="_blank" rel="noopener noreferrer">
                            <img width="5%" src={instagram} alt="Instagram" />
                        </a>
                        <a className="individual" href="https://www.facebook.com/shashmi1996/" target="_blank" rel="noopener noreferrer">
                            <img width="5%" src={facebook} alt="Facebook" />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}