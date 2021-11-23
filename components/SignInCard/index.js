import React from "react";
import { UserContext } from "../../context/UserProvider";
import { useRouter } from "next/router";
import Image from "next/image";

import { supabase } from "../../services/supabaseClient";
import signIn from "../../services/signIn";

import GoogleIcon from "../../public/google.png";
import { Wrapper } from "./styles";

export function SignInCard() {
    return (
        <Wrapper>
            <h1>Sign in to your profile</h1>
            <button onClick={() => signIn(supabase)}>
                <Image src={GoogleIcon} alt="google" width={30} height={30} />
                Sign in
            </button>
        </Wrapper>
    );
}
