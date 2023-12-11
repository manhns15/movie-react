import { Link, Outlet, useLocation } from "react-router-dom"

const Layout = () => {
    const location = useLocation();
    return (
        <>
            <div className="mv__left">
                <div className="mv__left--content">
                    <div className="mv__left--header">
                        <div className="mv__left--logo">
                            <img alt="logo" src="images/Logo.png" />
                        </div>
                    </div>
                    <div className="mv__left--nav">
                        <div className="mv__left--menu">
                            <p>Menu</p>
                            <ul>
                                <li>
                                    <Link to={`/`} className={location.pathname === '/' ? 'active-link' : ''} ><i className="bi bi-house"></i> Home</Link>
                                </li>
                                <li>
                                    <Link to={`/movies`} className={location.pathname === '/movies' ? 'active-link' : ''}><i className="bi bi-award"></i> Movies</Link>

                                </li>
                                <li>
                                    <Link to={`/series`} className={location.pathname === '/series' ? 'active-link' : ''}><i className="bi bi-display"></i> Series</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="mv__left--library">
                            <p>Library</p>
                            <ul>
                                <li><a href=""><i className="bi bi-clock"></i> Recent</a></li>
                                <li>
                                    <a href=""><i className="bi bi-download"></i> Downloaded</a>

                                </li>
                                <li><a href=""><i className="bi bi-heart"></i> Playlists</a></li>

                            </ul>
                        </div>
                        <div className="mv__left--general">
                            <p>General</p>
                            <ul>
                                <li><a href=""></a><i className="bi bi-gear"></i> Settings</li>
                                <li><a href=""></a><i className="bi bi-door-open"></i> Log out</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            <div className="mv__right">
                <Outlet />
            </div>
        </>
    )
}
export default Layout