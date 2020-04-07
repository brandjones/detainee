import React, { useState, useEffect } from "react";
import Header from "./Header";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import axios from "axios";

const ENVIRONMENT = process.env.NODE_ENV === "production" ? window.location.host : "http://localhost:3000";

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
            <div className="col s6 offset-s3">
                <input
                    value={firstName}
                    onChange={e => {
                        setFirstName(e.target.value);
                    }}
                    className="input-field"
                    placeholder="first name"
                />
            </div>
            <div className="col s6 offset-s3">
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
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, []);
    return (
        <div className="row">
            <div className="col s12">
                <div className="ad">
                    <ins
                        className="adsbygoogle"
                        style={{ display: "block" }}
                        data-ad-client="ca-pub-5898569749563519"
                        data-ad-slot="1187826533"
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
                        className="adsbygoogle"
                        style={{ display: "block" }}
                        data-ad-client="ca-pub-5898569749563519"
                        data-ad-slot="1187826533"
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
        <footer className="Footer">
            <div className="container">
                <div className="row">
                    <div className="col s6">
                        <h5 className="white-text">Footer Content</h5>
                    </div>
                    <div className="col s6">
                        <h5 className="white-text">Footer Content</h5>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function FBCommentPlugin(props) {
    return (
        <div
            className="fb-comments"
            data-colorscheme="dark"
            data-href={`${ENVIRONMENT}/search`}
            data-width=""
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
                                    <FBCommentPlugin />
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
