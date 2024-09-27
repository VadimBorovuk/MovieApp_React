import React, {FC} from 'react';
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import {settings} from "../../assets/data/Navbar";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import DialogInfoUser from './DialogInfoUser'
import Avatar from "@mui/material/Avatar";
import {LangI118Type} from "./Pages";
import {useAppDispatch} from "../../redux/store";
import {removeUser} from "../../redux/userInfo/slice";


const ProfileDown: FC<{ t: LangI118Type }> = ({t}) => {
  const currentAvatar = localStorage.getItem('currentAvatar') || ''
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const dispatch = useAppDispatch()

  const goPathNavigate = (item: string) => {
    if (item === 'logout') {

      dispatch(removeUser())

    } else {
      handleClickOpen()
    }
    handleCloseUserMenu()
  }

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event: any) => {
    setAnchorElUser(event.currentTarget);
  };


  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
      <div>
        <Tooltip title={t('t.open.settings')}>
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
            t={t}
            open={open}
            onClose={() => setOpen(false)}
        />
      </div>
  );
};

export default ProfileDown;
