import React from 'react';

export default function Footer() {
    const d = new Date();
    let hour = d.getFullYear();
    return (
        <>
            <footer>
                <p>&#169; {hour} #VANLIFE</p>
            </footer>
        </>
    )
}