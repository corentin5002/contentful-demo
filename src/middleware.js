import {i18nRouter} from 'next-i18n-router';
import i18nConfig from '@/i18nConfig';
import {NextResponse} from "next/server";
import {notFound} from "next/navigation";


export function middleware(request) {
    const response = request.nextUrl.pathname.includes('/defaults')

    if (response) {
        const notFoundUrl = request.nextUrl.clone();
        notFoundUrl.pathname = '/not-found';
        return NextResponse.redirect(notFoundUrl);
    }

    return i18nRouter(request, i18nConfig);
}

// matcher will send into the middleware only the requests that match the regex
export const config = {
    matcher: ['/((?!api|static|.*\\..*|_next).*)']
    // matcher: ['/(defaults|fr|en-US)/:path*']

};
