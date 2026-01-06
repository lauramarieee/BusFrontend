import React, { useState } from 'react';
import aauLogo from '../aaulogo.png';
import { 
  TextField, 
  Typography, 
  InputAdornment, 
  IconButton, 
  Box, 
  Paper, 
  Link 
} from '@mui/material';
import { 
  Person as PersonIcon, 
  Lock as LockIcon, 
  Email as EmailIcon,
  Visibility, 
  VisibilityOff,
  Menu as MenuIcon,
  Translate as TranslateIcon,
  ArrowForward as ArrowForwardIcon
} from '@mui/icons-material';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const brandBlue = '#2154be';

  const fieldStyle = {
    '& .MuiOutlinedInput-root': {
      borderRadius: '50px',
      backgroundColor: '#f5f5f5',
      height: '50px',
      '& fieldset': { borderColor: '#e0e0e0' },
    },
    marginBottom: 2
  };

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#ffffff', // Full screen white top
      overflowX: 'hidden'
    }}>
      
      {/* TOP SECTION */}
      <Box sx={{ flex: '0 1 45vh', p: 2, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <IconButton><MenuIcon sx={{ color: brandBlue }} /></IconButton>
          <IconButton><TranslateIcon sx={{ color: brandBlue }} /></IconButton>
        </Box>
        
        <Box sx={{ textAlign: 'center', mt: 'auto', mb: 10 }}>
          {/* Note: Place aaulogo.png in your /public folder */}
          <img src={aauLogo} alt="AAU Logo" style={{ height: '100px' }} />
          <Typography variant="h6" sx={{ color: brandBlue, fontWeight: 'bold', mt: 1 }}>
            Al-Ahliyya Amman University
          </Typography>
        </Box>
      </Box>

      {/* BOTTOM BLUE SECTION */}
      <Box sx={{ 
        flex: '1', 
        backgroundColor: brandBlue, 
        position: 'relative', 
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'flex-start'
      }}>
        
        {/* REGISTRATION CARD (Stays fixed size) */}
        <Paper elevation={3} sx={{ 
          width: '90%', 
          maxWidth: '400px', 
          p: 4, 
          borderRadius: '25px', 
          position: 'absolute',
          top: '-85px', // Adjust this to move the box up or down
          textAlign: 'center',
          backgroundColor: '#ffffff'
        }}>
          <Typography variant="h5" sx={{ color: brandBlue, fontWeight: 'bold', mb: 3 }}>
            Register
          </Typography>

          <TextField
            fullWidth
            placeholder="Username"
            sx={fieldStyle}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon sx={{ color: brandBlue }} />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            fullWidth
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            sx={fieldStyle}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon sx={{ color: brandBlue }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <VisibilityOff /> : <Visibility sx={{ color: brandBlue }} />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <TextField
            fullWidth
            placeholder="University Email"
            sx={fieldStyle}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon sx={{ color: brandBlue }} />
                </InputAdornment>
              ),
            }}
          />

          <Box sx={{ textAlign: 'right', mb: 2 }}>
            <Link href="#" sx={{ fontSize: '0.8rem', color: brandBlue, textDecoration: 'none', fontWeight: 600 }}>
              Already Have An Account? Login
            </Link>
          </Box>

          <IconButton 
            sx={{ 
              position: 'absolute', 
              bottom: '-35px', 
              left: '50%', 
              transform: 'translateX(-50%)',
              backgroundColor: 'white',
              border: `4px solid ${brandBlue}`,
              width: '70px',
              height: '70px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              '&:hover': { backgroundColor: '#f9f9f9' }
            }}
          >
            <ArrowForwardIcon sx={{ color: brandBlue, fontSize: '32px' }} />
          </IconButton>
        </Paper>
      </Box>
    </Box>
  );
};

export default Register;