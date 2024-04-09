import React from 'react';
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import {blue} from "@mui/material/colors";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import ListItemText from "@mui/material/ListItemText";
import {CopyToClipboard} from "react-copy-to-clipboard/src";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import TokenIcon from '@mui/icons-material/Token';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const ListItemProfile = ({type, body, setBodyCopy}) => {
    return (
        <ListItemButton sx={{
            alignItems: 'normal'
        }}>
            <ListItemAvatar sx={{
                '.css-1wlk0hk-MuiAvatar-root': {
                    cursor: 'pointer'
                }
            }}>
                <Avatar>
                    {
                        type === 'email' ? <ContactMailIcon/> :
                            type === 'token' ? <TokenIcon/> : <AdminPanelSettingsIcon/>

                    }
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                sx={{
                    display: 'inline-block',
                    wordBreak: 'break-word',
                    margin: '0 10px'
                }}
                primary={
                    type !== 'name' ?
                        body.length > 200 ? body.substring(0, 200) + '...' :
                            body : `${body}`
                }
            />
            {type !== 'name' ?
                <CopyToClipboard text={body}
                                 onCopy={() => setBodyCopy(true)}>
                    <LibraryAddCheckIcon/>
                </CopyToClipboard> : ''
            }

        </ListItemButton>
    );
};

export default ListItemProfile;
