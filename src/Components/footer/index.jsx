export const Footer = () => {
    return (
        <footer className="w-full md:absolute bg-stone-100 text-stone-900 flex flex-col justify-between text-sm items-start bottom-0">
            <div className="w-full flex flex-col items-center justify-between p-10">
                <p className="text-center"> <span className="text-blue-600 font-bold">DEV Community</span> — A constructive and inclusive social network for software developers. With you every step of your journey.</p>
                <ul className="text-center flex flex-row gap-4 text-blue-600">
                    <li>Home</li>
                    <li>Podcasts</li>
                    <li>Tags</li>
                    <li>Videos</li>
                    <li>Dev Help</li>
                </ul>
                <ul className="text-center flex flex-row gap-4 text-blue-600">
                    <li>Code of Conduct</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Use</li>
                </ul>
                <p className="text-center">Built on Forem — the open source software that powers DEV and other inclusive communities.</p>
                <p className="text-center">Made with love and Ruby on Rails. DEV Community © 2016 - 2024.</p>
            </div>
            

            <p class="footer w-full text-center bg-cyan-950 text-white p-1">
            Designed and developed by Juan de Dios Albores Hernández™ nombres......
            </p>

        </footer>
    )
}
