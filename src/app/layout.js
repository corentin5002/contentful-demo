import {SpeedInsights} from "@vercel/speed-insights/next";

export default function RootLayout({children, params}) {
    return (
        <>
            {children}
        </>
    );
}