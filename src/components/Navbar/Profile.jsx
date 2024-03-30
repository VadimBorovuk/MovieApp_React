import React from 'react';
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Menu from "@mui/material/Menu";
import {settings} from "../../assets/data/Navbar";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {removeUser} from "../../store/slices/userSlice";
import DialogInfoUser from './DialogInfoUser'
import Avatar from "@mui/material/Avatar";


const ProfileDown = () => {
    const currentAvatar = localStorage.getItem('currentAvatar')
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
    };

    const {t, i18n} = useTranslation();

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const goPathNavigate = (item) => {
        if (item === 'logout') {

            dispatch(removeUser())

        } else {
            handleClickOpen()
            // navigate('/')
        }
        handleCloseUserMenu()
    }

    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };


    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    return (
        <div>
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{p: 0, color: '#fff'}}>
                    <Avatar alt="Remy Sharp"
                            src={currentAvatar}/>
                </IconButton>
            </Tooltip>


            <Menu
                sx={{mt: '45px'}}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                {settings.map((item) => (
                    <MenuItem key={item.path} onClick={() => goPathNavigate(item.path)}>
                        <Typography textAlign="center"> {t(`t.settings.${item.name}`)}</Typography>
                    </MenuItem>
                ))}
            </Menu>

            <DialogInfoUser
                open={open}
                onClose={handleClose}
            />
        </div>
    );
};

export default ProfileDown;
