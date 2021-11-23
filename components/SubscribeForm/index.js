import React, { useState } from "react";
import { Wrapper } from "./styles";
import { supabase } from "../../services/supabaseClient";

export function SubscribeForm() {
    const [email, setEmail] = useState("");
    const [submit, setSubmit] = useState(false);
    const [error, setError] = useState(null);

    const handleEmailChange = (e) => {
        setEmail(e.target.value.trim());
        setError(null);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const isValid = validateEmail(email);
        if (isValid) {
            setError(null);
            setSubmit(true);
            uploadEmail();
        } else {
            setError("Please enter a valid email address");
        }
    };

    const uploadEmail = async () => {
        const { data, error } = await supabase
            .from("subscriptions")
            .insert([{ email: email }]);
    };

    const validateEmail = (currEmail) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return currEmail && re.test(currEmail);
    };
    return (
        <Wrapper className="footer-link">
            {submit === true ? (
                <li className="head">Thanks for subscribing</li>
            ) : (
                <>
                    <li className="head">Stay updated</li>
                    <p>
                        Whenever a new test comes, you’ll be the first to hear.
                    </p>
                    <input
                        label="Email"
                        onChange={(e) => handleEmailChange(e)}
                        type="email"
                        value={email}
                        placeholder="Enter your email address"
                        className="input-email"
                    />
                    {error && <li className="error">{error}</li>}
                    <button onClick={(event) => handleFormSubmit(event)}>
                        Subscribe
                    </button>
                </>
            )}
            <p>
                Or{" "}
                <a href="https://twitter.com/vedantlohbare" target="_blank">
                    follow me
                </a>{" "}
                on twitter for instant updates
            </p>
        </Wrapper>
    );
}
