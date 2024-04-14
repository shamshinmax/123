import 'bootstrap/dist/css/bootstrap.min.css';
import 'globals.css';

export const metadata = {
    title: 'Next.js 13 - User Registration and Login Example'
}

export default Layout;

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <p>//navbar//</p>
                <p>-----</p>
                {children}
                <p>-----</p>
                {/* credits */}
                <p>//Footer//</p>

            </body>
        </html>
    );
}
