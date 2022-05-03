import './App.css';
import NavBar from './components/header';
import Lectures from './components/lectures/Lectures';
import Main from './components/main';
import Reviews from './components/reviews/Reviews';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import useResponsive from './components/useResponsive';

function App() {

  const isDesktop = useResponsive('up', 'md')

  const handleWhatsapp = () => {
    window.open('https://api.whatsapp.com/send?phone=972508224457', '_blank')
  }
  const handleEmail = () => {
    window.open('mailto:iris@yalaw.co.il ');
  }
  const handleAddress = () => {
    window.open('https://www.google.com/maps/search/?api=1&query=31.92258545992807,34.99101200512621', '_blank')
  }
  const handleCall = () => {
    window.open("window.open('tel:972508224457')");
  }

  const actions = [
    { icon: <WhatsAppIcon />, name: 'ווטצאפ', handler: handleWhatsapp },
    { icon: <MailOutlineIcon />, name: 'אימייל', handler: handleEmail },
    { icon: <LocationOnIcon />, name: 'כתובת', handler: handleAddress },
    { icon: <LocalPhoneIcon />, name: 'להתקשר', handler: handleCall },
  ];


  return (
    <div className="App" style={{ position: 'relative' }}>
      <NavBar />
      <Main />
      <Lectures />
      <Reviews />

      <Box sx={{ height: 520, transform: 'translateZ(0px)', flexGrow: 1, position: 'fixed', right: isDesktop ? 150 : 10, bottom: isDesktop ? 50 : 10, zIndex: 1000 }}>
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{ position: 'absolute', bottom: 16, right: 16 }}
          direction="up"
          icon={<SpeedDialIcon color='primary' sx={{ width: '200px !important' }} />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              sx={{ width: '60px', height: '60px' }}
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={action.handler}
            />
          ))}
        </SpeedDial>
      </Box>
    </div>
  );
}

export default App;
