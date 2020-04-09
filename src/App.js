import React, { useState, useEffect } from "react";
import Header from "./Header";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import axios from "axios";

export const Disclaimer = () => {
    return (
        <div className="container">
            <p>
                The information on this web site is provided to assist users in obtaining information about county jail
                arrests. Any use of this data for any other purpose may be illegal. While the information on this
                website is believed by the website owner to be reliable, it is provided "as is" with no warranties or
                guarantees regarding its accuracy. An arrest or booking does not mean that the individual has been
                convicted or is guilty of the crime. You are advised to contact the appropriate governmental agency to
                ascertain and verify the information contained on this website. By using this web site, you agree to
                these terms of usage without warranty.
            </p>
            <section className="padding">
                <h3 className="title"> Information Sharing & Disclosures </h3> <br />
                We recommend that you guard your anonymity and sensitive information and we encourage users to think
                carefully about what information about themselves they disclose in their profile pages, should one be
                available. Jail Search cooperates with government and law enforcement officials and private parties to
                enforce and comply with the law. We will disclose any information about you to government or law
                enforcement officials or private parties as we, in our sole discretion, believe necessary or appropriate
                to respond to claims and legal process (including but not limited to subpoenas), to protect the property
                and rights of Jail Search or a third party, to protect the safety of the public or any person, or to
                prevent or stop any activity we may consider to be, or to pose a risk of being, illegal, unethical,
                inappropriate or legally actionable.
            </section>{" "}
            <br />
        </div>
    );
};

function SearchBox({ fetchInmate, route }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const inmate = {
        firstName,
        lastName,
        setFirstName,
        setLastName
    };
    return (
        <div className="row">
            <div className="col s8 offset-s2">
                <input
                    value={firstName}
                    onChange={e => {
                        setFirstName(e.target.value);
                    }}
                    className="input-field"
                    placeholder="first name"
                />
            </div>
            <div className="col s8 offset-s2">
                <input
                    onChange={e => setLastName(e.target.value)}
                    value={lastName}
                    className="input-field"
                    placeholder="last name"
                />
            </div>
            <div onClick={event => fetchInmate(event, inmate, route)} className="col s6 offset-s4">
                <Link to="#" className="btn input-field" placeholder=" name">
                    {" "}
                    Search Inmate
                </Link>
            </div>
        </div>
    );
}

export const InnocentDisclaimer = () => {
    return (
        <section className="container">
            "Individuals are innocent until proven guilty in a court of law. Data is believed to be reliable but is
            provided "as is". Contact the appropriate governmental agency to verify."
        </section>
    );
};

export const JailBaseIndentifier = () => {
    return (
        <div>
            <section className="container">
                <a href="https://www.jailbase.com"> Data provided by Jail Base.com </a>
            </section>{" "}
            <br />
        </div>
    );
};

export const PrivacyPolicy = () => {
    return (
        <div>
            <section className="container">
                Jail Search provides this Privacy Policy to inform you of our policies and procedures regarding the
                collection, use and disclosure of personal information we receive from users of Jail Search.com (this
                “Site”). This Privacy Policy applies only to information that is received from Jail Base.com. Our
                Privacy Policy may be updated from time to time, and we will notify you of any material changes by
                posting the new Privacy Policy on the site.
            </section>{" "}
            <br />
            <section className="container">
                <h3 className="title"> Information Collection</h3> <br />
                When you visit the Site, our servers automatically record information that your browser sends whenever
                you visit a website. This information may include, but is not limited to, your computer’s Internet
                Protocol address, browser type, the web page you were visiting before you came to our Site and
                information you search for on our Site. Like many websites, we also use “cookies” to collect
                information. A cookie is a small data file that we transfer to your computer’s hard disk for
                record-keeping purposes. We use “persistent cookies” to save your registration ID and login password for
                future logins to the Site; and we use “session ID cookies” to enable certain features of the Site, to
                better understand how you interact with the Site and to monitor aggregate usage and web traffic routing
                on the Site. You can instruct your browser, by changing its options, to stop accepting cookies or to
                prompt you before accepting a cookie from the websites you visit. If you do not accept cookies, however,
                you may not be able to use all portions of the Site or all functionality of our services.
            </section>
            <section className="container">
                <h3 className="title"> Use of Personal Information </h3> <br />
                Personal Information is used for the following purposes: (1) to provide and improve our Site, services,
                features and content, (2) to administer your membership (if offered) and your use of our Site, (3) to
                enable users to enjoy and easily navigate the Site, (4) to better understand your needs and interests,
                (5) to fulfill requests you may make, (6) to personalize your experience, (7) to provide or offer
                software updates and product announcements, and (8) to provide you with further information and offers
                from us or third parties that we believe you may find useful or interesting, including newsletters,
                marketing or promotional materials and other information on services and products offered by us or third
                parties. If you decide at any time that you no longer wish to receive such communications, please follow
                the unsubscribe instructions provided in any of the communications or update your “user preferences”
                information (if personal information is required). We use information we obtain by technical means (such
                as the automatic recording performed by our servers or through the use of cookies) for the above
                purposes and in order to monitor and analyze use of the Site and our services and for the Site’s
                technical administration, to increase our Site’s functionality and user-friendliness, to better tailor
                it to your needs, to generate and derive useful data and information concerning the interests,
                characteristics and website use behavior of our users, and to verify that visitors to the Site meet the
                criteria required to process their requests.
            </section>
            <section className="container">
                <h3 className="title"> Contacting Us </h3> <br />
                If you have any questions about this Privacy Policy, please contact us at info@jailsearch.org.
            </section>{" "}
            <br />
        </div>
    );
};

function SearchResults({ record, setRecord, route }) {
    useEffect(() => {
        if (localStorage.getItem("record")) {
            const storedRecord = JSON.parse(localStorage.getItem("record"));
            setRecord(storedRecord);
        } else {
            route.history.push("/");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (window.FB) {
            const FB = window.FB;
            FB.XFBML.parse();
        }
    });

    useEffect(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, []);
    return (
        <div className="row">
            <div className="col s12">
                <div className="ad">
                    <ins
                        class="adsbygoogle"
                        style={{ display: "block" }}
                        data-ad-client="ca-pub-5898569749563519"
                        data-ad-slot="8624602773"
                        data-ad-format="auto"
                        data-full-width-responsive="true"
                    />
                </div>
                <div className="search-result-content">
                    <div className="image-wrapper">
                        <img className="responsive-img" alt="prisoner" src={record.mugshot} />
                    </div>
                    <div className="image-wrapper">
                        <div>
                            {" "}
                            <span> Name: </span> {record.name}
                        </div>
                        <div>
                            {" "}
                            <span> Booked At:</span> {record.source}
                        </div>
                        <div>
                            {" "}
                            <span> Booked Date: </span> {record.book_date_formatted}
                        </div>
                        <div>
                            {" "}
                            <span> Charges: </span>{" "}
                            {record.charges &&
                                record.charges.map(charge => {
                                    return charge;
                                })}
                        </div>
                    </div>
                </div>
                <div className="ad">
                    <ins
                        class="adsbygoogle"
                        style={{ display: "block" }}
                        data-ad-client="ca-pub-5898569749563519"
                        data-ad-slot="8624602773"
                        data-ad-format="auto"
                        data-full-width-responsive="true"
                    />
                </div>
            </div>
        </div>
    );
}

function Title(props) {
    return (
        <div className="row">
            <div className="title col s12">
                <h3> {props.message} </h3>
                <p> Gadsden County Sheriff Office </p>
            </div>
        </div>
    );
}

function Footer(props) {
    return (
        <footer>
            <div className="row">
                <div className="col 6">
                    <Link to="/terms"> Terms </Link>
                </div>
                <div className=" col 6">
                    <Link to="/privacy"> Privacy </Link>
                </div>
            </div>
        </footer>
    );
}

function FBCommentPlugin({ route }) {
    return (
        <div
            className="fb-comments"
            data-colorscheme="dark"
            data-href={window.location.href}
            data-width="100"
            data-numposts="5"
            data-mobile={true}
            data-orderby="time"
        ></div>
    );
}
function App() {
    const [record, setRecord] = useState("");
    async function fetchInmate(event, inmate, route) {
        event.preventDefault();

        const { data } = await axios.post("/api", {
            firstName: inmate.firstName,
            lastName: inmate.lastName
        });

        console.log("data", data);

        if (data.message) {
            return alert(data.message);
        }

        if (data.record.length === 0) {
            alert("No record exists");
            inmate.setFirstName("");
            inmate.setLastName("");
            return;
        }

        const record = data.record[0];

        localStorage.setItem("record", JSON.stringify(record));

        setRecord(record);

        inmate.setFirstName("");
        inmate.setLastName("");

        route.history.push("/search");
    }
    return (
        <div className="App">
            <BrowserRouter>
                <Route
                    render={({ match, history, location }) => {
                        if (location.pathname === "/" && match.isExact) {
                            return (
                                <React.Fragment>
                                    <Header />
                                    <Title message="Inmate Search" />
                                    <SearchBox
                                        fetchInmate={fetchInmate}
                                        route={{
                                            match,
                                            history,
                                            location
                                        }}
                                    />
                                    <Footer />
                                </React.Fragment>
                            );
                        }

                        if (location.pathname === "/search") {
                            return (
                                <React.Fragment>
                                    <Header />
                                    <Title message="Search Results" />
                                    <SearchResults
                                        record={record}
                                        setRecord={setRecord}
                                        route={{
                                            match,
                                            history,
                                            location
                                        }}
                                    />
                                    <FBCommentPlugin
                                        route={{
                                            match,
                                            history,
                                            location
                                        }}
                                    />
                                    <InnocentDisclaimer />
                                    <JailBaseIndentifier />
                                    <Footer />
                                </React.Fragment>
                            );
                        }

                        if (location.pathname === "/privacy") {
                            return (
                                <React.Fragment>
                                    <Header />
                                    <Title message="Privacy Policy" />
                                    <PrivacyPolicy />
                                    <Footer />
                                </React.Fragment>
                            );
                        }

                        if (location.pathname === "/terms") {
                            return (
                                <React.Fragment>
                                    <Header />
                                    <Title message="Terms and Conditions" />
                                    <Disclaimer />
                                    <Footer />
                                </React.Fragment>
                            );
                        }
                    }}
                />
            </BrowserRouter>
        </div>
    );
}

export default App;
