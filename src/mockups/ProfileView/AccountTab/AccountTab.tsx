import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import React from 'react';
import styles from './AccountTab.module.scss';
import { FIELD_DATA } from './data/fields-data';

const AccountTab: React.FC = () => {

  const theme = useTheme();
  return (
    <div className={`${styles.AccountTab}`}>
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        {FIELD_DATA.map((field, index) => (
          <Box m={0.5} display="flex" className={`${styles.fieldCard}`} key={index}>
            <Box flexGrow={1}>
              <header className={`${styles.fieldHeader}`}>
                <Typography>{field.fieldName}</Typography>
              </header>
              <div>
                <Typography variant="subtitle1">{field.fieldValue}</Typography>
              </div>
            </Box>
            {!field.disabled && (
              <Box style={{ position: 'relative' }}>
                <IconButton color="primary" className={`${styles.fieldEdit}`}>
                  <FontAwesomeIcon icon={faPencilAlt} style={{ color: theme.palette.text.primary }} />
                </IconButton>
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </div>
  );
}

export default AccountTab;
