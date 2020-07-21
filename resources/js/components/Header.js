import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Authentication from './auth/Authentication';
import Axios from "axios";

function Header() {
    const [authUser, setAuthUser] = useState({});
    const [channels, setChannels] = useState([]);

    useEffect(()=>{
        const token = localStorage.getItem('access_token');
        const headers = {Authorization: `Bearer ${token}`};
        Axios.get('/api/auth/user', { headers })
            .then(response=>{
                setAuthUser(response.data);
            }).catch(error=>{
                console.log(error);
        });
        Axios.get('/api/channels')
            .then(response=>{
                setChannels(response.data);
            }).catch(error=>{
            console.log(error);
        });
    }, [])
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <span className='h3'>LaraDev</span>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown">
                            <a
                                className="navbar-brand dropdown-toggle"
                                to="#"
                                id="threadsDropdown"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <span className='h5'>Threads</span>
                            </a>

                            <div
                                className="dropdown-menu"
                                aria-labelledby="threadsDropdown"
                            >
                                <Link className="dropdown-item" to="/threads">
                                    All Threads
                                </Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="navbar-brand dropdown-toggle"
                                to="#"
                                id="channelsDropdown"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <span className='h5'>Channels</span>
                            </a>

                            <div
                                className="dropdown-menu"
                                aria-labelledby="channelsDropdown"
                            >
                                {
                                    channels?.map(channel=>{
                                        return (
                                            <Link className="dropdown-item" key={channel.id} to={`/threads?channel=` + channel.slug}>
                                                {channel.name}
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </li>
                    </ul>
                    <ul className='navbar-nav ml-auto'>
                        <Authentication user={authUser}/>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default  Header;
